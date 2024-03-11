import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {typeDeclarationsParse} from '../type/type-declaration-semantic-parser';
import {ValueDeclarationSemantic, valueDeclarationSemantic} from './value-declaration-semantic';

export function valueDeclarationsParse(
  context: SemanticContext,
  nodes: (DeclarationNode | Nothing)[],
): (ValueDeclarationSemantic | Nothing)[] {
  const typeDeclarations = nodes.map((x) => (x ? valueDeclarationShallowParse(context, x) : nothing));

  for (const node of nodes) {
    if (node) {
      valueDeclarationDeepParse(context, node);
    }
  }

  return typeDeclarations;
}

export function valueDeclarationShallowParse(
  context: SemanticContext,
  node: DeclarationNode,
): ValueDeclarationSemantic | Nothing {
  const modifier = node.modifier?.text;
  const reference = context.createReference(node.id);
  const name = node.id.text;

  const declaration = valueDeclarationSemantic(reference, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function valueDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): ValueDeclarationSemantic | Nothing {
  if (!semanticIs<ValueDeclarationSemantic>(node.id.semantic, $Semantic.VALUE_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    node.id.semantic.generics = typeDeclarationsParse(childContext, node.generics);
  }

  if (node.type) {
    const type = typeSemanticParse(childContext, node.type);

    if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.DECLARATION_TYPE)) {
      node.id.semantic.type = type;
    } else {
      context.issueManager.addError(node.type, ISSUE_MESSAGE.notImplemented());
    }
  }

  if (node.attributes.length > 0) {
    const declarations = valueDeclarationsParse(childContext, node.attributes);
    const attributes: ValueDeclarationSemantic['attributes'] = {};

    for (const declaration of declarations) {
      if (!declaration) {
        continue;
      }

      if (!attributes[declaration.name]) {
        attributes[declaration.name] = [];
      }

      attributes[declaration.name].push(declaration);
    }

    node.id.semantic.attributes = attributes;
  }

  return node.id.semantic;
}
