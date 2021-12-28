import { ParserRuleContext } from 'antlr4ts';
import { Metadata } from '../metadata/metadata';
import { Tree } from '../tree/tree';
import { SourceReference } from '../util/source-reference';

export interface ExpressionNode {
  parserRuleContext: ParserRuleContext;
  sourceReference: SourceReference;
  formatter: Formatter;
  tree: Tree;
  metadata: Metadata;

  evaluate(): unknown;
}
