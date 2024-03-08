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
  return shallowDeclarationParsers.findMap((x) => x(context, node));
}

export function declarationDeepSemanticParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id.semantic) {
    return nothing;
  }

  return deepDeclarationParsers.findMap((x) => x(context, node));
}
