import {
  ArrayData,
  Boolean2,
  Nothing,
  String2,
  TextResource,
  newArrayData,
  newText,
  rangeFromNodes,
  rangeFromPosition,
} from '#common';
import {
  $LexicalNode,
  $NlNode,
  $WhitespaceNode,
  FormatterConfig,
  FormatterItem,
  LexicalNode,
  NL,
  NlNode,
  Node,
  StatementNode,
} from '#core';
import {is} from '#typing';

export type FormatterManager = {
  resource: TextResource;
  items: ArrayData<FormatterItem>;
  config: FormatterConfig;

  addItem(formatter: FormatterItem): void;
  getFormattedText(): String2;
  formatChildNode(node: Node, keepSingleSpace: Boolean2): void;
  formatStatementNode(statement: StatementNode, isFirstStatement: Boolean2): void;
  formatRemainingHiddenNodes(
    statements: ArrayData<StatementNode>,
    lastStatement: StatementNode | Nothing,
    hiddenNodes: ArrayData<Node>,
  ): void;
  formatHiddenNodes(hiddenNodes: ArrayData<Node>, isNoFirstChildNode: Boolean2): String2;
  formatNlNode(node: NlNode | Nothing): String2;
  isSameContent(hiddenNodes: ArrayData<Node>, text: String2): Boolean2;
};

export function newFormatterManager(resource: TextResource, config: FormatterConfig): FormatterManager {
  return {
    resource,
    config,
    items: newArrayData(),

    addItem(formatter: FormatterItem): void {
      this.items.addLastItem(formatter);
    },

    getFormattedText(): String2 {
      let index = 0;
      let formattedText = '';
      const formatters = this.items.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        formattedText += this.resource.data.slice(index, range.start.index).toNativeString() + text;
        index = range.stop.index;
      }

      formattedText += this.resource.data.slice(index, this.resource.data.length()).toNativeString();

      return formattedText;
    },

    formatChildNode(node: Node, keepSingleSpace: Boolean2): void {
      if (!node.hiddenNodes || node.hiddenNodes.length === 0) {
        if (keepSingleSpace) {
          this.addItem({
            range: rangeFromPosition(node.reference.range.start),
            text: ' ',
          });
        }

        return;
      }

      if (node.hiddenNodes.length === 1 && is(node.hiddenNodes[0], $WhitespaceNode)) {
        const whitespace = node.hiddenNodes[0];

        if (!keepSingleSpace) {
          this.addItem({
            range: whitespace.reference.range.clone(),
            text: '',
          });

          return;
        }

        if (whitespace.text.equals(' ')) {
          return;
        }

        this.addItem({
          range: whitespace.reference.range.clone(),
          text: ' ',
        });

        return;
      }

      const text = this.formatHiddenNodes(newArrayData(node.hiddenNodes), true);

      if (this.isSameContent(newArrayData(node.hiddenNodes), text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(node.hiddenNodes),
        text,
      });
    },

    formatStatementNode(statement: StatementNode, isFirstStatement: Boolean2): void {
      if (!statement.hiddenNodes || statement.hiddenNodes.length === 0) {
        return;
      }

      const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is(x, $NlNode));

      if (lastNlIndex >= 0) {
        const beforeNlHiddenNodes = statement.hiddenNodes.slice(0, lastNlIndex + 1);
        let text = this.formatHiddenNodes(newArrayData(beforeNlHiddenNodes), false);

        if (text.length > 0) {
          if (isFirstStatement) {
            text = text.trimStart();
          } else if (text[0] !== NL.toNativeString()) {
            text = ' ' + text;
          }
        }

        if (!this.isSameContent(newArrayData(beforeNlHiddenNodes), text)) {
          this.addItem({
            range: rangeFromNodes(beforeNlHiddenNodes),
            text,
          });
        }
      }

      const indentText = ' '.repeat(this.config.indentSpaceLength * statement.indentLevel);
      const afterIndentHiddenNodes = statement.hiddenNodes.slice(lastNlIndex + 1);
      const nonWhitespaceNodes = afterIndentHiddenNodes.filter(
        (x): x is LexicalNode => is(x, $LexicalNode) && !is(x, $WhitespaceNode),
      );
      const text =
        indentText +
        nonWhitespaceNodes.map((x) => x.text.toNativeString()).join(' ') +
        (nonWhitespaceNodes.length > 0 ? ' ' : '');

      if (this.isSameContent(newArrayData(afterIndentHiddenNodes), text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(afterIndentHiddenNodes),
        text,
      });
    },

    formatRemainingHiddenNodes(
      statements: ArrayData<StatementNode>,
      lastStatement: StatementNode | Nothing,
      hiddenNodes: ArrayData<Node>,
    ): void {
      if (hiddenNodes.isEmpty()) {
        if (!lastStatement || !this.config.insertFinalNewline) {
          return;
        }

        this.addItem({
          range: rangeFromPosition(lastStatement.reference.range.stop),
          text: NL.toNativeString(),
        });

        return;
      }

      let text = this.formatHiddenNodes(hiddenNodes, false).trimEnd();

      if (statements.isEmpty()) {
        text = text.trimStart();
      }

      if (!statements.isEmpty() || text.length > 0) {
        if (this.config.insertFinalNewline) {
          text += NL.toNativeString();
        }

        if (text[0] !== NL.toNativeString()) {
          text = ' ' + text;
        }
      }

      if (this.isSameContent(hiddenNodes, text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(hiddenNodes.toNativeArray()),
        text,
      });
    },

    formatHiddenNodes(hiddenNodes: ArrayData<Node>, isNoFirstChildNode: Boolean2): String2 {
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

      if (text.length() > 0 && isNoFirstChildNode) {
        return ` ${text.toNativeString()} `;
      }

      return text.toNativeString();
    },

    formatNlNode(node: NlNode | Nothing): String2 {
      if (!node) {
        return '';
      }

      const nlCount = node.reference.range.stop.line - node.reference.range.start.line;

      return NL.repeat(Math.min(nlCount, this.config.maxNewLines)).toNativeString();
    },

    isSameContent(hiddenNodes: ArrayData<Node>, text: String2): Boolean2 {
      if (hiddenNodes.isEmpty()) {
        return text.length === 0;
      }

      const startIndex = hiddenNodes.first()!.reference.range.start.index;
      const stopIndex = hiddenNodes.last()!.reference.range.stop.index;

      return resource.data.slice(startIndex, stopIndex).equals(text);
    },
  };
}
