import {$, is} from '../$';
import {Array2, Boolean2, Nothing, String2} from '../../lib/types';
import {NL} from '../analyzer/lexical/lexical-analyzer-config';
import {LexicalNode} from '../analyzer/lexical/node/lexical-node';
import {NlNode} from '../analyzer/lexical/node/nl/nl-node';
import {Node} from '../analyzer/node';
import {StatementNode} from '../analyzer/syntax/statement/statement-node';
import {cloneRange, rangeFromNodes, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {FormatterConfig} from './formatter-config';
import {FormatterItem} from './formatter-item';

export type FormatterManager = {
  resource: TextResource;
  items: Array2<FormatterItem>;
  config: FormatterConfig;

  addItem(formatter: FormatterItem): void;
  getFormattedText(): String2;
  formatChildNode(node: Node, keepSingleSpace: Boolean2): void;
  formatStatementNode(statement: StatementNode, isFirstStatement: Boolean2): void;
  formatRemainingHiddenNodes(
    statements: Array2<StatementNode>,
    lastStatement: StatementNode | Nothing,
    hiddenNodes: Array2<Node>,
  ): void;
  formatHiddenNodes(hiddenNodes: Array2<Node>, isNoFirstChildNode: Boolean2): String2;
  formatNlNode(node: NlNode | Nothing): String2;
  isSameContent(hiddenNodes: Array2<Node>, text: String2): Boolean2;
};

export function createFormatterManager(resource: TextResource, config: FormatterConfig): FormatterManager {
  return {
    resource,
    config,
    items: [],

    addItem(formatter: FormatterItem): void {
      this.items.push(formatter);
    },

    getFormattedText(): String2 {
      let index = 0;
      let formattedText = '';
      const formatters = this.items.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        formattedText += this.resource.data.slice(index, range.start.index) + text;
        index = range.stop.index;
      }

      formattedText += this.resource.data.slice(index, this.resource.data.length);

      return formattedText;
    },

    formatChildNode(node: Node, keepSingleSpace: Boolean2): void {
      if (!node.hiddenNodes || node.hiddenNodes.length === 0) {
        if (keepSingleSpace) {
          this.addItem({
            range: rangeFromPosition(node.range.start),
            text: ' ',
          });
        }

        return;
      }

      if (node.hiddenNodes.length === 1 && is(node.hiddenNodes[0], $.WhitespaceNode)) {
        const whitespace = node.hiddenNodes[0];

        if (!keepSingleSpace) {
          this.addItem({
            range: cloneRange(whitespace.range),
            text: '',
          });

          return;
        }

        if (whitespace.text === ' ') {
          return;
        }

        this.addItem({
          range: cloneRange(whitespace.range),
          text: ' ',
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

    formatStatementNode(statement: StatementNode, isFirstStatement: Boolean2): void {
      if (!statement.hiddenNodes || statement.hiddenNodes.length === 0) {
        return;
      }

      const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is(x, $.NlNode));

      if (lastNlIndex >= 0) {
        const beforeNlHiddenNodes = statement.hiddenNodes.slice(0, lastNlIndex + 1);
        let text = this.formatHiddenNodes(beforeNlHiddenNodes, false);

        if (text.length > 0) {
          if (isFirstStatement) {
            text = text.trimStart();
          } else if (text[0] !== NL) {
            text = ' ' + text;
          }
        }

        if (!this.isSameContent(beforeNlHiddenNodes, text)) {
          this.addItem({
            range: rangeFromNodes(beforeNlHiddenNodes),
            text: text,
          });
        }
      }

      const indentText = ' '.repeat(this.config.indentSpaceLength * statement.indentLevel);
      const afterIndentHiddenNodes = statement.hiddenNodes.slice(lastNlIndex + 1);
      const nonWhitespaceNodes = afterIndentHiddenNodes.filter(
        (x): x is LexicalNode => is(x, $.LexicalNode) && !is(x, $.WhitespaceNode),
      );
      const text =
        indentText +
        nonWhitespaceNodes.map((x) => x.text).join(' ') +
        (nonWhitespaceNodes.length > 0 ? ' ' : '');

      if (this.isSameContent(afterIndentHiddenNodes, text)) {
        return;
      }

      this.addItem({
        range: rangeFromNodes(afterIndentHiddenNodes),
        text,
      });
    },

    formatRemainingHiddenNodes(
      statements: Array2<StatementNode>,
      lastStatement: StatementNode | Nothing,
      hiddenNodes: Array2<Node>,
    ): void {
      if (hiddenNodes.length === 0) {
        if (!lastStatement || !this.config.insertFinalNewline) {
          return;
        }

        this.addItem({
          range: rangeFromPosition(lastStatement.range.stop),
          text: NL,
        });

        return;
      }

      let text = this.formatHiddenNodes(hiddenNodes, false).trimEnd();

      if (statements.length === 0) {
        text = text.trimStart();
      }

      if (statements.length > 0 || text.length > 0) {
        if (this.config.insertFinalNewline) {
          text += NL;
        }

        if (text[0] !== NL) {
          text = ' ' + text;
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

    formatHiddenNodes(hiddenNodes: Array2<Node>, isNoFirstChildNode: Boolean2): String2 {
      const splittedByNl = hiddenNodes
        .filter((x): x is LexicalNode => is(x, $.LexicalNode) && !is(x, $.WhitespaceNode))
        .splitBy<NlNode>((x) => is(x, $.NlNode));

      const text = splittedByNl
        .map((x) => this.formatNlNode(x.splitter) + x.items.map((z) => z.text).join(' '))
        .join('');

      if (text.length > 0 && isNoFirstChildNode) {
        return ` ${text} `;
      }

      return text;
    },

    formatNlNode(node: NlNode | Nothing): String2 {
      if (!node) {
        return '';
      }

      const nlCount = node.range.stop.line - node.range.start.line;

      return NL.repeat(Math.min(nlCount, this.config.maxNewLines));
    },

    isSameContent(hiddenNodes: Array2<Node>, text: String2): Boolean2 {
      if (hiddenNodes.length === 0) {
        return text.length === 0;
      }

      const startIndex = hiddenNodes.first()!.range.start.index;
      const stopIndex = hiddenNodes.last()!.range.stop.index;

      return text === resource.data.slice(startIndex, stopIndex);
    },
  };
}
