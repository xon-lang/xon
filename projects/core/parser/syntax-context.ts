import {FormatterManager, createFormatterManager} from '../formatter/formatter-manager';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {Array2, Integer, Nothing, nothing} from '../lib/core';
import {TextPosition, textPosition} from '../util/resource/text/text-position';
import {TextRange, textRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {Node} from './node/node';
import {StatementNode} from './node/statement/statement-node';
import {TokenNode} from './node/token/token-node';
import {NL} from './parser-config';

type ContextAttributes = 'resource' | 'statements' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};

export interface SyntaxContext {
  resource: TextResource;
  position: TextPosition;
  hiddenNodesBuffer: Array2<TokenNode>;
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Array2<Node>;
  previousStatement: StatementNode | Nothing;
  statements: Array2<StatementNode>;
  issueManager: IssueManager;
  formatterManager: FormatterManager;

  getRange: (length: Integer) => TextRange;
  getSymbolRange: () => TextRange;
  getRangeWithNL: (length: Integer) => TextRange;
}

export function syntaxContext(resource: TextResource, position: TextPosition): SyntaxContext {
  return {
    resource,
    position,
    hiddenNodesBuffer: [],
    parentStatement: nothing,
    nodes: [],
    previousStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: createIssueManager(resource),
    formatterManager: createFormatterManager(resource),

    getRange(length: Integer): TextRange {
      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + length, this.position.line, this.position.column + length),
      );
    },

    getSymbolRange(): TextRange {
      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + 1, this.position.line, this.position.column + 1),
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
  };
}
