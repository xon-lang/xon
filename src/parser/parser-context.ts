import { Issue } from '~/issue/issue';
import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { RootNode, rootNode } from '~/parser/node/root/root-node';
import { Source } from '~/source/source';

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
  };
}
