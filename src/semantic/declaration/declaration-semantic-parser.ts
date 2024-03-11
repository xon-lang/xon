import {Nothing, nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {DeclarationSemantic} from './declaration-semantic';
import {typeDeclarationDeepParse, typeDeclarationShallowParse} from './type/type-declaration-semantic-parser';
import {valueDeclarationDeepParse, valueDeclarationShallowParse} from './value/value-declaration-semantic-parser';

const TYPE_DECLARATION_MODIFIERS = ['model'];
const VALUE_DECLARATION_MODIFIERS = ['const', 'var'];

export function declarationsSemanticParse(
  context: SemanticContext,
  nodes: DeclarationNode[],
): (DeclarationSemantic | Nothing)[] {
  const declarations = nodes.map((x) => declarationShallowSemanticParse(context, x));

  nodes.forEach((x) => declarationDeepSemanticParse(context, x));

  return declarations;
}

export function declarationShallowSemanticParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const modifier = node.modifier?.text;

  if (!modifier) {
    return nothing;
  }

  if (TYPE_DECLARATION_MODIFIERS.includes(modifier)) {
    return typeDeclarationShallowParse(context, node);
  }

  if (VALUE_DECLARATION_MODIFIERS.includes(modifier)) {
    return valueDeclarationShallowParse(context, node);
  }

  return nothing;
}

export function declarationDeepSemanticParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const declaration = node.id.semantic;
  if (!declaration) {
    return nothing;
  }

  if (semanticIs(declaration, $Semantic.TYPE_DECLARATION)) {
    return typeDeclarationDeepParse(context, node);
  }

  if (semanticIs(declaration, $Semantic.VALUE_DECLARATION)) {
    return valueDeclarationDeepParse(context, node);
  }

  return nothing;
}
