import {$, is} from '../../../$';
import {MODEL} from '../../../analyzer/lexical/lexical-analyzer-config';
import {DeclarationNode} from '../../../analyzer/syntax/node/declaration/declaration-node';
import {isTypeDeclarationNode} from '../../../analyzer/syntax/node/declaration/declaration-node-parse';
import {createTypeTypescriptElement, TypeTypescriptElement} from '../element/type/type-typescript-element';

export function declarationTypescriptTransform(node: DeclarationNode): TypeTypescriptElement {
  const semantic = node.id.semantic;

  if (!isTypeDeclarationNode(node) || !is(semantic, $.DeclarationSemantic)) {
    throw new Error('Not implemented');
  }

  // todo use ModelDeclarationSemantic instead of ???
  if (semantic.modifier === MODEL) {
    return createTypeTypescriptElement({
      isExport: true,
      name: semantic.name,
      value: '{}',
    });
  }

  throw new Error('Not implemented');
}
