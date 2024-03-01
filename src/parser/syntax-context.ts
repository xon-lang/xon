import {Formatter} from '../formatter/formatter';
import {IssueType} from '../issue/issue';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {Boolean2, Integer, Nothing, String2, nothing} from '../lib/core';
import {Source} from '../source/source';
import {SourcePosition, sourcePosition} from '../source/source-position';
import {SourceRange, sourceRange} from '../source/source-range';
import {Node} from './node/node';
import {StatementNode} from './node/syntax/statement/statement-node';
import {TokenNode} from './node/token/token-node';
import {NL} from './syntax-config';

export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hiddenNodes: TokenNode[];
  formatters: Formatter[];
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Node[];
  previousStatement: StatementNode | Nothing;
  statements: StatementNode[];
  issueManager: IssueManager;

  getRange: (length: Integer, canContainNewLines: Boolean2) => SourceRange;
  getFormattedText(): String2;
}

export function syntaxContext(source: Source, position: SourcePosition): SyntaxContext {
  return {
    source,
    position,
    hiddenNodes: [],
    formatters: [],
    parentStatement: nothing,
    nodes: [],
    previousStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: createIssueManager(source, IssueType.SYNTACTIC),

    getRange(length: Integer, canContainNewLines: Boolean2): SourceRange {
      const {index, line, column} = this.position;

      if (canContainNewLines) {
        let nlCount = line;
        let columnIndent = column;

        for (let i = index; i < index + length; i++) {
          const char = this.source.text[i];

          if (char === NL) {
            nlCount += 1;
            columnIndent = 0;

            continue;
          }

          columnIndent += 1;
        }

        const start = sourcePosition(index, line, column);
        const stop = sourcePosition(index + length, nlCount, columnIndent);

        return sourceRange(start, stop);
      }

      const stopIndex = index + length;
      const stopColumn = column + length;
      const start = sourcePosition(index, line, column);
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },

    getFormattedText(): String2 {
      let index = 0;
      let formattedText = '';
      // todo remove it and add formatters in order
      const formatters = this.formatters.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        formattedText += this.source.text.slice(index, range.start.index) + text;
        index = range.stop.index;
      }

      formattedText += this.source.text.slice(index, this.source.text.length);

      return formattedText;
    },
  };
}
