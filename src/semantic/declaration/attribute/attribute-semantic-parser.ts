import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {MODEL_MODIFIER} from '../../../parser/syntax-config';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {DeclarationTypeSemantic} from '../../usage/type/declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../usage/type/type-semantic-parser';
import {declarationsSemanticParse} from '../declaration-semantic-parser';
import {genericsParse} from '../generic/generic-semantic-parser';
import { AttributeSemantic, attributeSemantic } from './attribute-semantic';

export function attributeShallowParse(context: SemanticContext, node: DeclarationNode): AttributeSemantic | Nothing {
  if (node.modifier?.text !== MODEL_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const name = node.id.text;

  const declaration = attributeSemantic(reference, name);
  node.id.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

export function attributeDeepParse(context: SemanticContext, node: DeclarationNode): AttributeSemantic | Nothing {
  if (semanticIs<AttributeSemantic>(node.id.semantic, $Semantic.ATTRIBUTE)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      node.id.semantic.generics = genericsParse(childContext, node.generics);
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
      const declarations = declarationsSemanticParse(childContext, node.attributes);
      const attributes: ModelSemantic['attributes'] = {};

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

  return nothing;
}
