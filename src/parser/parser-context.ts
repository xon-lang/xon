import { IssueMessage } from 'src/issue/issue-message';
import { Issue, createErrorIssue } from '../issue/issue';
import { Integer } from '../lib/core';
import { Node } from '../parser/node/node';
import { RootNode, rootNode } from '../parser/node/root/root-node';
import { Source } from '../source/source';
import { sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';

export interface ParserContext {
  source: Source;
  index: Integer;
  line: Integer;
  column: Integer;
  hidden: Node[];
  issues: Issue[];
  breakNode: Node | null;
  parent: Node;
  nodes: Node[];
  lastStatement: Node | null;
  root: RootNode;
  getRange: (length: Integer) => SourceRange;
  addErrorIssue: (node: Node, message: IssueMessage) => Issue;
}

export function parserContext(source: Source, index: Integer): ParserContext {
  return {
    source,
    index,
    line: 0,
    column: 0,
    hidden: [],
    issues: [],
    parent: rootNode(),
    nodes: [],
    lastStatement: null,
    breakNode: null,
    root: rootNode(),
    getRange(length: Integer): SourceRange {
      const start = sourcePosition(this.index, this.line, this.column);

      const stopIndex = this.index + length - 1;
      const stopColumn = this.column + length - 1;
      const stop = sourcePosition(stopIndex, this.line, stopColumn);

      return sourceRange(start, stop);
    },
    addErrorIssue(node: Node, message: IssueMessage): Issue {
      const issue = createErrorIssue(node, message);
      this.issues.push(issue);

      return issue;
    },
  };
}
