import { ExprContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { Node } from '../node';

export abstract class ExpressionNode implements Node {
  sourceReference: SourceReference;
  abstract ctx: ExprContext;
  abstract metadata: ExpressionMetadata;
}
