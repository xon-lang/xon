import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { genericsParse } from '../generic/generic-semantic-parser';
import { $Semantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { parseUsageSemantic } from '../usage/usage-semantic-parser';
import { ModelSemantic, modelShallowSemantic } from './model-semantic';

export function modelsParse(context: SemanticContext, declarations: DeclarationNode[]): (ModelSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => modelShallowParse(context, x));

  for (const declaration of declarations) {
    modelDeepParse(context, declaration);
  }

  return semanticDeclarations;
}

function modelShallowParse(context: SemanticContext, node: DeclarationNode): ModelSemantic | Nothing {
  if (node.modifier?.text === MODEL_MODIFIER && node.id) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = modelShallowSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

function modelDeepParse(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ModelSemantic>(node.semantic, $Semantic.MODEL)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      const genericDeclarations = node.generics.items.filter((x): x is DeclarationNode => !!x);
      node.semantic.generics = genericsParse(childContext, genericDeclarations);
    }

    if (node.type?.value) {
      node.semantic.base = parseUsageSemantic(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
