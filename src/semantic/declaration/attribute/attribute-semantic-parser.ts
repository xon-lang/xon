import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$DeclarationNodeType, DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {genericsParse} from '../generic/generic-semantic-parser';
import {parametersParse} from '../parameter/parameter-semantic-parser';
import {AttributeSemantic, attributeSemantic} from './attribute-semantic';

export function attributeShallowParse(context: SemanticContext, node: DeclarationNode): AttributeSemantic | Nothing {
  if (node.$ !== $DeclarationNodeType.ATTRIBUTE) {
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
  if (!semanticIs<AttributeSemantic>(node.id.semantic, $Semantic.ATTRIBUTE)) {
    return nothing;
  }

  const declaration = node.id.semantic;

  const childContext = context.createChildContext();

  if (node.generics) {
    declaration.generics = genericsParse(childContext, node.generics);
  }

  if (node.parameters) {
    declaration.parameters = parametersParse(childContext, node.parameters);
  }

  if (node.type) {
    const type = typeSemanticParse(childContext, node.type);

    if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.DECLARATION_TYPE)) {
      declaration.type = type;
    } else {
      context.issueManager.addError(node.type, ISSUE_MESSAGE.notImplemented());
    }
  }

  // if (node.attributes.length > 0) {
  //   const declarations = declarationsSemanticParse(childContext, node.attributes);
  //   const attributes: ModelSemantic['attributes'] = {};

  //   for (const declaration of declarations) {
  //     if (!declaration) {
  //       continue;
  //     }

  //     if (!attributes[declaration.name]) {
  //       attributes[declaration.name] = [];
  //     }

  //     attributes[declaration.name].push(declaration);
  //   }

  //   declaration.attributes = attributes;
  // }

  return declaration;
}
