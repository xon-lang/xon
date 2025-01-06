import {
  $LexicalNode,
  $NlNode,
  $WhitespaceNode,
  FormatterItem,
  LexicalNode,
  NL,
  NlNode,
  Node,
  StatementNode,
} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  Nothing,
  Text,
  TextResource,
  newArrayData,
  newText,
  rangeFromNodes,
  rangeFromPosition,
} from '#common';
import {is} from '#typing';

export type FormatterManager = {
  resource: TextResource;
  items: ArrayData<FormatterItem>;

  addItem(formatter: FormatterItem): void;
  getFormattedText(): Text;
  formatChildNode(node: Node, keepSingleSpace: Boolean2): void;
  formatRemainingHiddenNodes(
    statements: ArrayData<StatementNode>,
    lastStatement: StatementNode | Nothing,
    hiddenNodes: ArrayData<Node>,
  ): void;
  formatHiddenNodes(hiddenNodes: ArrayData<Node>, isNoFirstChildNode: Boolean2): Text;
  formatNlNode(node: NlNode | Nothing): Text;
  isSameContent(hiddenNodes: ArrayData<Node>, text: Text): Boolean2;
};

const INSERT_FINAL_NEWLINE = true;
const MAX_NEW_LINES = 2;

export function newFormatterManager(resource: TextResource): FormatterManager {
  return {
    resource,
    items: newArrayData(),

    addItem(formatter: FormatterItem): void {
      this.items.addLastItem(formatter);
    },

    getFormattedText(): Text {
      let index = 0;
      let formattedText = newText();
      const formatters = this.items.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        formattedText.addLastItems(this.resource.data.slice(index, range.start.index)).addLastItems(text);
        index = range.stop.index;
      }

      formattedText.addLastItems(this.resource.data.slice(index, this.resource.data.count()));

      return formattedText;
    },

    formatChildNode(node: Node, keepSingleSpace: Boolean2): void {
      if (!node.hiddenNodes || node.hiddenNodes.isEmpty()) {
        if (keepSingleSpace) {
          this.addItem({
            range: rangeFromPosition(node.reference.range.start),
            text: newText(' '),
          });
        }

        return;
      }

      const firstHiddenNode = node.hiddenNodes.first();

      if (node.hiddenNodes.count() === 1 && is(firstHiddenNode, $WhitespaceNode)) {
        const whitespace = firstHiddenNode;

        if (!keepSingleSpace) {
          this.addItem({
            range: whitespace.reference.range.clone(),
            text: newText(),
          });

          return;
        }

        if (whitespace.text.equals(' ')) {
          return;
        }

        this.addItem({
          range: whitespace.reference.range.clone(),
          text: newText(' '),
        });

        return;
      }

      const text = this.formatHiddenNodes(node.hiddenNodes, true);

      if (this.isSameContent(node.hiddenNodes, text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(node.hiddenNodes),
        text,
      });
    },

    formatRemainingHiddenNodes(
      statements: ArrayData<StatementNode>,
      lastStatement: StatementNode | Nothing,
      hiddenNodes: ArrayData<Node>,
    ): void {
      if (hiddenNodes.isEmpty()) {
        if (!lastStatement || !INSERT_FINAL_NEWLINE) {
          return;
        }

        this.addItem({
          range: rangeFromPosition(lastStatement.reference.range.stop),
          text: NL,
        });

        return;
      }

      let text = this.formatHiddenNodes(hiddenNodes, false).trimEnd();

      if (statements.isEmpty()) {
        text = text.trimStart();
      }

      if (!statements.isEmpty() || text.count() > 0) {
        if (INSERT_FINAL_NEWLINE) {
          text.addLastItems(NL);
        }

        if (!NL.equals(text.at2(0))) {
          text = newText(' ').addLastItems(text);
        }
      }

      if (this.isSameContent(hiddenNodes, text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(hiddenNodes),
        text,
      });
    },

    formatHiddenNodes(hiddenNodes: ArrayData<Node>, isNoFirstChildNode: Boolean2): Text {
      const splittedByNl = hiddenNodes
        .filter((x): x is LexicalNode => is(x, $LexicalNode) && !is(x, $WhitespaceNode))
        .splitBy<NlNode>((x) => is(x, $NlNode));

      const formatSplittedByNl = splittedByNl.map((x) => {
        const formattedSplitter = newText(this.formatNlNode(x.splitter));
        const formattedItems = newText(
          x.items.map((z) => z.text),
          newText(' '),
        );

        return formattedSplitter.addLastItems(formattedItems);
      });

      const text = newText(formatSplittedByNl);

      if (text.count() > 0 && isNoFirstChildNode) {
        return newText(` ${text.toNativeString()} `);
      }

      return text;
    },

    formatNlNode(node: NlNode | Nothing): Text {
      if (!node) {
        return newText();
      }

      const nlCount = node.reference.range.stop.line - node.reference.range.start.line;

      return NL.repeat(Math.min(nlCount, MAX_NEW_LINES));
    },

    isSameContent(hiddenNodes: ArrayData<Node>, text: Text): Boolean2 {
      if (hiddenNodes.isEmpty()) {
        return text.isEmpty();
      }

      const startIndex = hiddenNodes.first()!.reference.range.start.index;
      const stopIndex = hiddenNodes.last()!.reference.range.stop.index;

      return resource.data.slice(startIndex, stopIndex).equals(text);
    },
  };
}
