import { IssueType } from '../issue/issue';
import { IssueManager, createIssueManager } from '../issue/issue-manager';
import { Integer, Nothing, String2, nothing } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { Node } from './node/node';
import { StatementNode } from './node/syntax/statement/statement-node';
import { UnknownNode } from './node/token/unknown/unknown-node';

export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hiddenNodes: Node[];
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
      const start = sourcePosition(index, line, column);
      const stopIndex = index + length - 1;
      const stopColumn = column + length - 1;
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },
  };
}

export interface Formatter {
  range: SourceRange;
  text: String2;
}
