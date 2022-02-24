import { ParserRuleContext } from 'antlr4ts';
import { Metadata } from '../metadata/metadata';
import { Tree } from '../tree/tree';

export class Node {
  context: ParserRuleContext;
  tree: Tree;
  metadata: Metadata;
}
