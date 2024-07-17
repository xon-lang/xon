import {$, is} from '../../../$';
import {MODEL} from '../../../analyzer/lexical/lexical-analyzer-config';
import {DeclarationNode} from '../../../analyzer/syntax/node/declaration/declaration-node';
import {isTypeDeclarationNode} from '../../../analyzer/syntax/node/declaration/declaration-node-parse';
import {
  createTypeTypescriptNode,
  TypeTypescriptNode,
} from '../node/declaration/type/type-declaration-typescript-node';

export function declarationTypescriptTransform(node: DeclarationNode): TypeTypescriptNode {
  const semantic = node.id.semantic;

  if (!isTypeDeclarationNode(node) || !is(semantic, $.DeclarationSemantic)) {
    throw new Error('Not implemented');
  }

  // todo use ModelDeclarationSemantic instead of ???
  if (semantic.modifier === MODEL) {
    return createTypeTypescriptNode({
      isExport: true,
      name: semantic.name,
      value: '{}',
    });
  }

  throw new Error('Not implemented');
}
