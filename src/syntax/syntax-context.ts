import { Issue, createSyntacticErrorIssue, formatIssue } from '../issue/issue';
import { IssueMessage } from '../issue/issue-message';
import { Integer, Nothing, nothing } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { Node } from './node/node';
import { StatementNode } from './node/statement/statement-node';
import { SyntaxConfig } from './syntax-config';

// todo perhaps should be new instance every time ???
export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hidden: Node[];
  issues: Issue[];
  breakNode: Node | null;
  parentStatement: StatementNode | Nothing;
  nodes: Node[];
  previousStatement: StatementNode | null;
  statements: StatementNode[];
  config: SyntaxConfig;
  getRange: (length: Integer) => SourceRange;
  addErrorIssue: (node: Node, message: IssueMessage) => Issue;
}

export function syntaxContext(source: Source, position: SourcePosition, config: SyntaxConfig): SyntaxContext {
  return {
    source,
    position,
    hidden: [],
    issues: [],
    parentStatement: nothing,
    nodes: [],
    previousStatement: null,
    breakNode: null,
    statements: [],
    config,
    getRange(length: Integer): SourceRange {
      const { index, line, column } = this.position;
      const start = sourcePosition(index, line, column);
      const stopIndex = index + length - 1;
      const stopColumn = column + length - 1;
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },
    addErrorIssue(node: Node, message: IssueMessage): Issue {
      const issue = createSyntacticErrorIssue(node, message);
      this.issues.push(issue);

      if (this.config.throwErrorIssue) {
        const formattedIssue = formatIssue(this, issue);
        throw new Error(formattedIssue);
      }

      return issue;
    },
  };
}
