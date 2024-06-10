import {Array2, Integer, Nothing, nothing} from '../../lib/types';
import {FormatterManager, createFormatterManager} from '../formatter/formatter-manager';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {TextPosition, textPosition} from '../util/resource/text/text-position';
import {TextRange, textRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {NL} from './parser-config';
import {DEFAULT_SYNTAX_PARSER_CONFIG, SyntaxParserConfig} from './syntax-parser-config';
import {Node} from './syntax/node';
import {StatementNode} from './syntax/statement/statement-node';
import {TokenNode} from './syntax/token/token-node';

type ContextAttributes = 'resource' | 'statements' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};

export interface SyntaxContext {
  resource: TextResource;
  position: TextPosition;
  hiddenNodes: Array2<TokenNode>;
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Array2<Node>;
  lastStatement: StatementNode | Nothing;
  statements: Array2<StatementNode>;
  issueManager: IssueManager;
  formatterManager: FormatterManager;
  config: SyntaxParserConfig;

  getRange: (length: Integer) => TextRange;
  getRangeWithNL: (length: Integer) => TextRange;
  getSymbolRange: () => TextRange;
}

export function syntaxContext(
  resource: TextResource,
  position: TextPosition,
  issueManager: IssueManager | Nothing,
  formatterManager: FormatterManager | Nothing,
  config: SyntaxParserConfig | Nothing,
): SyntaxContext {
  return {
    resource,
    position,
    hiddenNodes: [],
    parentStatement: nothing,
    nodes: [],
    lastStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: issueManager ?? createIssueManager(resource),
    formatterManager: formatterManager ?? createFormatterManager(resource),
    config: config ?? DEFAULT_SYNTAX_PARSER_CONFIG,

    getRange(length: Integer): TextRange {
      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + length, this.position.line, this.position.column + length),
      );
    },

    getRangeWithNL(length: Integer): TextRange {
      let nlCount = this.position.line;
      let columnIndent = this.position.column;

      for (let i = this.position.index; i < this.position.index + length; i++) {
        const char = resource.data[i];

        if (char === NL) {
          nlCount += 1;
          columnIndent = 0;

          continue;
        }

        columnIndent += 1;
      }

      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + length, nlCount, columnIndent),
      );
    },

    getSymbolRange(): TextRange {
      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + 1, this.position.line, this.position.column + 1),
      );
    },
  };
}
