import {FormatterManager, createFormatterManager} from '../formatter/formatter-manager';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {Array2, Boolean2, Integer, Nothing, nothing} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourcePosition, textResourcePosition} from '../util/resource/text/text-resource-position';
import {TextResourceRange, textResourceRange} from '../util/resource/text/text-resource-range';
import {Node} from './node/node';
import {StatementNode} from './node/syntax/statement/statement-node';
import {OperatorNode} from './node/token/operator/operator-node';
import {TokenNode} from './node/token/token-node';
import {NL} from './parser-config';

export interface SyntaxContext {
  resource: TextResource;
  position: TextResourcePosition;
  hiddenNodes: Array2<TokenNode>;
  operators: Array2<OperatorNode>;
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Array2<Node>;
  previousStatement: StatementNode | Nothing;
  statements: Array2<StatementNode>;
  issueManager: IssueManager;
  formatterManager: FormatterManager;

  getRange: (length: Integer, canContainNewLines: Boolean2) => TextResourceRange;
}

export function syntaxContext(resource: TextResource, position: TextResourcePosition): SyntaxContext {
  return {
    resource,
    position,
    operators: [],
    hiddenNodes: [],
    parentStatement: nothing,
    nodes: [],
    previousStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: createIssueManager(resource),
    formatterManager: createFormatterManager(resource),

    getRange(length: Integer, canContainNewLines: Boolean2): TextResourceRange {
      const {index, line, column} = this.position;

      if (canContainNewLines) {
        let nlCount = line;
        let columnIndent = column;

        for (let i = index; i < index + length; i++) {
          const char = this.resource.data[i];

          if (char === NL) {
            nlCount += 1;
            columnIndent = 0;

            continue;
          }

          columnIndent += 1;
        }

        const start = textResourcePosition(index, line, column);
        const stop = textResourcePosition(index + length, nlCount, columnIndent);

        return textResourceRange(start, stop);
      }

      const stopIndex = index + length;
      const stopColumn = column + length;
      const start = textResourcePosition(index, line, column);
      const stop = textResourcePosition(stopIndex, line, stopColumn);

      return textResourceRange(start, stop);
    },
  };
}
