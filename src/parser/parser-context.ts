import { Issue, createSyntacticErrorIssue, formatIssue } from '../issue/issue';
import { IssueMessage } from '../issue/issue-message';
import { Integer } from '../lib/core';
import { Node } from '../parser/node/node';
import { RootNode, rootNode } from '../parser/node/root/root-node';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { ParserConfig } from './parser-config';

export interface ParserContext {
  source: Source;
  position: SourcePosition;
  hidden: Node[];
  issues: Issue[];
  breakNode: Node | null;
  parentStatement: Node;
  nodes: Node[];
  lastStatement: Node | null;
  root: RootNode;
  config: ParserConfig;
  getRange: (length: Integer) => SourceRange;
  addErrorIssue: (node: Node, message: IssueMessage) => Issue;
}

export function parserContext(source: Source, position: SourcePosition, config: ParserConfig): ParserContext {
  return {
    source,
    position,
    hidden: [],
    issues: [],
    parentStatement: rootNode(),
    nodes: [],
    lastStatement: null,
    breakNode: null,
    root: rootNode(),
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
