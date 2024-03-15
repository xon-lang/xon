import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {valueDeclarationsParse} from '../value/value-declaration-semantic-parser';
import {TypeDeclarationSemantic, typeDeclarationSemantic} from './type-declaration-semantic';

export function typeDeclarationsParse(
  context: SemanticContext,
  nodes: DeclarationNode[],
): (TypeDeclarationSemantic | Nothing)[] {
  const typeDeclarations = nodes.map((x) => typeDeclarationShallowParse(context, x));

  for (const node of nodes) {
    typeDeclarationDeepParse(context, node);
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
  const semantic = node.id.semantic;

  // todo remove it if it alway will be type declaration
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
  declaration.generics = valueDeclarationsParse(
    context,
    nodes.filter((x): x is DeclarationNode => !!x),
  );
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
  const declarations = valueDeclarationsParse(context, nodes);
  const attributes: TypeDeclarationSemantic['attributes'] = {};

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

  declaration.attributes = attributes;
}
