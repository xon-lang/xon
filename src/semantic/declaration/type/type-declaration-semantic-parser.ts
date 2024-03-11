import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {DeclarationSemantic} from '../declaration-semantic';
import {valueDeclarationsParse} from '../value/value-declaration-semantic-parser';
import {TypeDeclarationSemantic, typeDeclarationSemantic} from './type-declaration-semantic';

export function typeDeclarationsParse(
  context: SemanticContext,
  nodes: (DeclarationNode | Nothing)[],
): (TypeDeclarationSemantic | Nothing)[] {
  const typeDeclarations = nodes.map((x) => (x ? typeDeclarationShallowParse(context, x) : nothing));

  for (const node of nodes) {
    if (node) {
      typeDeclarationDeepParse(context, node);
    }
  }

  return typeDeclarations;
}

export function typeDeclarationShallowParse(
  context: SemanticContext,
  node: DeclarationNode,
): TypeDeclarationSemantic | Nothing {
  const reference = context.createReference(node.id);
  const modifier = node.modifier?.text;
  const name = node.id.text;

  const declaration = typeDeclarationSemantic(reference, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function typeDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): TypeDeclarationSemantic | Nothing {
  // todo remove it if it alway will be type declaration
  if (!semanticIs<TypeDeclarationSemantic>(node.id.semantic, $Semantic.TYPE_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    node.id.semantic.generics = typeDeclarationsParse(childContext, node.generics);
  }

  if (node.type) {
    const baseType = typeSemanticParse(childContext, node.type);

    if (semanticIs<DeclarationTypeSemantic>(baseType, $Semantic.DECLARATION_TYPE)) {
      node.id.semantic.base = baseType;
    } else {
      context.issueManager.addError(node.type, ISSUE_MESSAGE.notImplemented());
    }
  }

  if (node.attributes.length > 0) {
    const declarations = valueDeclarationsParse(childContext, node.attributes);
    const attributes: DeclarationSemantic['attributes'] = {};

    for (const declaration of declarations) {
      if (!declaration) {
        continue;
      }

      // todo replace with attributes manager
      if (!attributes[declaration.name]) {
        attributes[declaration.name] = [];
      }

      attributes[declaration.name].push(declaration);
    }

    node.id.semantic.attributes = attributes;
  }

  return node.id.semantic;
}
