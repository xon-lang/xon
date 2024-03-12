import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing, nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {DeclarationTypeSemantic} from '../type/declaration/declaration-type-semantic';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {DeclarationSemantic, declarationSemantic} from './declaration-semantic';

export function declarationsParse(
  context: SemanticContext,
  nodes: (DeclarationNode | Nothing)[],
): (DeclarationSemantic | Nothing)[] {
  const typeDeclarations = nodes.map((x) => (x ? declarationShallowParse(context, x) : nothing));

  for (const node of nodes) {
    if (node) {
      declarationDeepParse(context, node);
    }
  }

  return typeDeclarations;
}

export function declarationShallowParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const reference = context.createReference(node.id);
  const modifier = node.modifier?.text;
  const name = node.id.text;

  const declaration = declarationSemantic(reference, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function declarationDeepParse(context: SemanticContext, node: DeclarationNode): DeclarationSemantic | Nothing {
  // todo remove it if it alway will be type declaration
  if (!semanticIs<DeclarationSemantic>(node.id.semantic, $Semantic.DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    node.id.semantic.generics = declarationsParse(childContext, node.generics);
  }

  if (node.type) {
    const type = typeSemanticParse(childContext, node.type);

    if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.ID_TYPE)) {
      node.id.semantic.type = type;
    } else {
      context.issueManager.addError(node.type, ISSUE_MESSAGE.notImplemented());
    }
  }

  if (node.attributes.length > 0) {
    const declarations = declarationsParse(childContext, node.attributes);
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
