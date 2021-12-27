import { ParserRuleContext } from 'antlr4ts';
import { ExpressionMetadata } from '../metadata/expression/expression-metadata';
import { Tree } from '../tree/tree';
import { SourceReference } from '../tree/util/source-reference';

export interface ExpressionNode {
  context: ParserRuleContext;
  sourceReference: SourceReference;
  tree: Tree;
  metadata: ExpressionMetadata;

  format(): string;
  evaluate(): unknown;
}
