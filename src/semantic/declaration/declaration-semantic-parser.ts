import { Nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { modelDeepParse, modelShallowParse } from '../model/model-semantic-parser';
import { SemanticContext } from '../semantic-context';
import { DeclarationSemantic } from './declaration-semantic';

type ShallowDeclarationParseFn = (context: SemanticContext, node: DeclarationNode) => DeclarationSemantic | Nothing;
type DeepDeclarationParseFn = (context: SemanticContext, node: DeclarationNode) => void;

const shallowDeclarationParsers: ShallowDeclarationParseFn[] = [modelShallowParse];
const deepDeclarationParsers: DeepDeclarationParseFn[] = [modelDeepParse];

export function declarationsParse(
  context: SemanticContext,
  nodes: DeclarationNode[],
): (DeclarationSemantic | Nothing)[] {
  const declarations: (DeclarationSemantic | Nothing)[] = [];

  for (const declaration of nodes) {
    for (const shallowParse of shallowDeclarationParsers) {
      declarations.push(shallowParse(context, declaration));
    }
  }

  for (const declaration of nodes) {
    for (const deepParse of deepDeclarationParsers) {
      deepParse(context, declaration);
    }
  }

  return declarations;
}
