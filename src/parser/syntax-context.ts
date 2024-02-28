import { IssueType } from '../issue/issue';
import { IssueManager, createIssueManager } from '../issue/issue-manager';
import { Integer, Nothing, nothing } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { Node } from './node/node';
import { StatementNode } from './node/syntax/statement/statement-node';
import { TokenNode } from './node/token/token-node';
import { UnknownNode } from './node/token/unknown/unknown-node';
import { Formatter } from './util/formatter';

export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hiddenNodes: TokenNode[];
  unknownNodes: UnknownNode[];
  formatters: Formatter[];
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  lastNode: Node | Nothing;
  nodes: Node[];
  previousStatement: StatementNode | Nothing;
  statements: StatementNode[];
  issueManager: IssueManager;

  getRange: (length: Integer) => SourceRange;
}

export function syntaxContext(source: Source, position: SourcePosition): SyntaxContext {
  return {
    source,
    position,
    hiddenNodes: [],
    unknownNodes: [],
    formatters: [],
    parentStatement: nothing,
    lastNode: nothing,
    nodes: [],
    previousStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: createIssueManager(source, IssueType.SYNTACTIC),

    getRange(length: Integer): SourceRange {
      const { index, line, column } = this.position;

      const stopIndex = index + length;
      const stopColumn = column + length;
      const stop = sourcePosition(stopIndex, line, stopColumn);
      const start = sourcePosition(index, line, column);

      return sourceRange(start, stop);
    },
  };
}
