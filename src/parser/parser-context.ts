import { Issue } from '~/issue/issue';
import { Integer, String2 } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { RootNode, rootNode } from '~/parser/node/root/root-node';

export interface ParserContext {
  text: String2;
  index: Integer;
  line: Integer;
  column: Integer;
  hidden: Node[];
  issues: Issue[];
  breakNode: Node | null;
  lastStatementNodes: Node[];
  lastStatementNode: Node | null;
  root: RootNode;
}

export function parserContext(text: String2, index: Integer): ParserContext {
  return {
    text,
    index,
    line: 0,
    column: 0,
    hidden: [],
    issues: [],
    lastStatementNodes: [],
    lastStatementNode: null,
    breakNode: null,
    root: rootNode(),
  };
}
