import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {declarationsParse} from '../declaration-semantic-parser';
import {ValueDeclarationSemantic} from '../value/value-declaration-semantic';
import {TypeDeclarationSemantic} from './type-declaration-semantic';

export function typeDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): TypeDeclarationSemantic | Nothing {
  const semantic = node.id.semantic;

  if (!semanticIs<TypeDeclarationSemantic>(semantic, $Semantic.TYPE_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  genericsParse(childContext, semantic, node);
  //   parametersParse(childContext, semantic, node);
  typeParse(childContext, semantic, node);
  valueParse(childContext, semantic, node);
  attributesParse(childContext, semantic, node);

  return semantic;
}

function genericsParse(context: SemanticContext, declaration: TypeDeclarationSemantic, node: DeclarationNode): Nothing {
  // todo remove this hack 'as ValueDeclarationSemantic[]'
  if (!node.generics) {
    return;
  }

  declaration.generics = declarationsParse(context, node.generics) as ValueDeclarationSemantic[];
}

function typeParse(context: SemanticContext, declaration: TypeDeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.type) {
    return;
  }

  const type = typeSemanticParse(context, node.type);

  if (type) {
    declaration.baseType = type;

    return;
  }

  context.issueManager.addError(node.type.range, ISSUE_MESSAGE.cannotResolveType());

  return nothing;
}

function valueParse(context: SemanticContext, declaration: TypeDeclarationSemantic, node: DeclarationNode): Nothing {
  if (node.value) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.noValueAllowed());
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: TypeDeclarationSemantic,
  node: DeclarationNode,
): Nothing {
  if (node.attributes.length === 0) {
    return;
  }

  const declarations = declarationsParse(context, node.attributes);
  const attributes: TypeDeclarationSemantic['attributes'] = {};

  for (const declaration of declarations) {
    // todo fix hack with semantic type checking
    if (!declaration || !semanticIs<ValueDeclarationSemantic>(declaration, $Semantic.VALUE_DECLARATION)) {
      continue;
    }

    // todo replace with attributes manager
    if (!attributes[declaration.name]) {
      attributes[declaration.name] = [];
    }

    attributes[declaration.name].push(declaration);
  }

  declaration.attributes = attributes;
}
