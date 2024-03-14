import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing, nothing} from '../../lib/core';
import {Node} from '../../parser/node/node';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {rangeFromNodes} from '../../source/source-range';
import {$Semantic, semanticIs} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {valueSemanticParse} from '../value/value-semantic-parser';
import {DeclarationSemantic, declarationSemantic} from './declaration-semantic';

export function declarationsParse(
  context: SemanticContext,
  nodes: DeclarationNode[],
): (DeclarationSemantic | Nothing)[] {
  const typeDeclarations = nodes.map((x) => declarationShallowParse(context, x));

  for (const node of nodes) {
    declarationDeepParse(context, node);
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
  const semantic = node.id.semantic;

  // todo remove it if it alway will be type declaration
  if (!semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    genericsParse(childContext, semantic, node.generics);
  }

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
  declaration: DeclarationSemantic,
  nodes: (DeclarationNode | Nothing)[],
): Nothing {
  declaration.generics = declarationsParse(
    context,
    nodes.filter((x): x is DeclarationNode => !!x),
  );
}

function typeParse(context: SemanticContext, declaration: DeclarationSemantic, node: Node): Nothing {
  const type = typeSemanticParse(context, node);

  if (type) {
    declaration.type = type;
  } else {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotResolveType());
  }
}

function valueParse(context: SemanticContext, declaration: DeclarationSemantic, node: Node): Nothing {
  if (declaration.restrictions?.hasValue === false) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.noValueAllowed());

    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node);

  if (!declaration.type) {
    if (value?.type) {
      declaration.type = value.type;
    }
  } else if (!value?.type || !value.type.is(declaration.type)) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.wrongType());
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: DeclarationSemantic,
  nodes: DeclarationNode[],
): Nothing {
  if (declaration.restrictions?.hasAttributes === false) {
    const range = rangeFromNodes(nodes.map((x) => x.id));
    context.issueManager.addError(range, ISSUE_MESSAGE.noAttributesAllowed());

    return;
  }

  const declarations = declarationsParse(context, nodes);
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

  declaration.attributes = attributes;
}
