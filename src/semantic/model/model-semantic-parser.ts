import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { genericsHandle } from '../generic/generic-semantic-parser';
import { $Semantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { parseValueSemantic } from '../value/value-semantic-parser';
import { ModelSemantic, modelShallowSemantic } from './model-semantic';

export function modelsHandle(context: SemanticContext, declarations: DeclarationNode[]): (ModelSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => modelShallowHandle(context, x));

  for (const declaration of declarations) {
    modelDeepHandle(context, declaration);
  }

  return semanticDeclarations;
}

export function modelShallowHandle(context: SemanticContext, node: DeclarationNode): ModelSemantic | Nothing {
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

export function modelDeepHandle(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ModelSemantic>(node.semantic, $Semantic.MODEL)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      const genericDeclarations = node.generics.items.filter((x): x is DeclarationNode => !!x);
      node.semantic.generics = genericsHandle(childContext, genericDeclarations);
    }

    if (node.type?.value) {
      node.semantic.base = parseValueSemantic(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
