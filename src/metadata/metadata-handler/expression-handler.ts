import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { MetadataHandler } from './metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  constructor(public definitions: Map<string, DefinitionMetadata>) {
    super();
  }

  handle(tree: ExpressionTree) {
    if (tree instanceof IdExpressionTree)
    else throw new Error('Wrong expression tree');
  }
}
