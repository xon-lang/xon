import { Nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { SemanticContext } from '../semantic-context';
import { constantDeepParse, constantShallowParse } from './constant/constant-semantic-parser';
import { DeclarationSemantic } from './declaration-semantic';
import { modelDeepParse, modelShallowParse } from './model/model-semantic-parser';

type ShallowDeclarationParseFn = (context: SemanticContext, node: DeclarationNode) => DeclarationSemantic | Nothing;
type DeepDeclarationParseFn = (context: SemanticContext, node: DeclarationNode) => void;

const shallowDeclarationParsers: ShallowDeclarationParseFn[] = [modelShallowParse, constantShallowParse];
const deepDeclarationParsers: DeepDeclarationParseFn[] = [modelDeepParse, constantDeepParse];

export function declarationsParse(context: SemanticContext, nodes: DeclarationNode[]): DeclarationSemantic[] {
  const declarations: DeclarationSemantic[] = [];

  for (const node of nodes) {
    for (const shallowParse of shallowDeclarationParsers) {
      const declaration = shallowParse(context, node);

      if (declaration) {
        declarations.push(declaration);
      }
    }
  }

  for (const declaration of nodes) {
    for (const deepParse of deepDeclarationParsers) {
      deepParse(context, declaration);
    }
  }

  return declarations;
}
