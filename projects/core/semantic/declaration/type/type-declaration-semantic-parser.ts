import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
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

  if (node.generics) {
    genericsParse(childContext, semantic, node.generics);
  }

  // if (node.parameters) {
  //   parametersParse(childContext, semantic, node.parameters);
  // }

  if (node.type) {
    typeParse(childContext, semantic, node.type);
  }

  if (node.value) {
    valueParse(childContext, semantic, node.value);
  }

  if (node.attributes.length > 0) {
    attributesParse(childContext, semantic, node.attributes);
  }

  return semantic;
}

function genericsParse(
  context: SemanticContext,
  declaration: TypeDeclarationSemantic,
  nodes: (DeclarationNode | Nothing)[],
): Nothing {
  // todo remove this hack 'as ValueDeclarationSemantic[]'
  declaration.generics = declarationsParse(context, nodes) as ValueDeclarationSemantic[];
}

function typeParse(context: SemanticContext, declaration: TypeDeclarationSemantic, node: Node): Nothing {
  const type = typeSemanticParse(context, node);

  if (type) {
    declaration.baseType = type;

    return;
  }

  context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotResolveType());

  return nothing;
}

function valueParse(context: SemanticContext, declaration: TypeDeclarationSemantic, node: Node): Nothing {
  context.issueManager.addError(node.range, ISSUE_MESSAGE.noValueAllowed());

  return;
}

function attributesParse(
  context: SemanticContext,
  declaration: TypeDeclarationSemantic,
  nodes: DeclarationNode[],
): Nothing {
  const declarations = declarationsParse(context, nodes);
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
