import {Nothing, nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {SemanticContext} from '../semantic-context';
import {constantDeepParse, constantShallowParse} from './constant/constant-semantic-parser';
import {DeclarationSemantic} from './declaration-semantic';
import {modelDeepParse, modelShallowParse} from './model/model-semantic-parser';

type DeclarationParseFn = (context: SemanticContext, node: DeclarationNode) => DeclarationSemantic | Nothing;

const shallowDeclarationParsers: DeclarationParseFn[] = [modelShallowParse, constantShallowParse];
const deepDeclarationParsers: DeclarationParseFn[] = [modelDeepParse, constantDeepParse];

export function declarationShallowSemanticParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  for (const shallowParse of shallowDeclarationParsers) {
    const declaration = shallowParse(context, node);

    if (declaration) {
      return declaration;
    }
  }

  return nothing;
}

export function declarationDeepSemanticParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id.semantic) {
    return nothing;
  }

  for (const deepParse of deepDeclarationParsers) {
    const declaration = deepParse(context, node);

    if (declaration) {
      return declaration;
    }
  }

  return nothing;
}
