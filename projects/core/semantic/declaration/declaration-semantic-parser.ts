import {Array2, Nothing, String2, nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/declaration/declaration-node';
import {TYPE_MODIFIERS} from '../../parser/parser-config';
import {SyntaxResult} from '../../parser/syntax-result';
import {TextResourceReference} from '../../util/resource/resource-reference';
import {SemanticContext} from '../semantic-context';
import {DeclarationSemantic} from './declaration-semantic';
import {typeDeclarationSemantic} from './type/type-declaration-semantic';
import {typeDeclarationDeepParse} from './type/type-declaration-semantic-parser';
import {valueDeclarationSemantic} from './value/value-declaration-semantic';
import {valueDeclarationDeepParse} from './value/value-declaration-semantic-parser';

export function syntaxDeclarationsParse(context: SemanticContext, syntax: SyntaxResult): Nothing {
  const nodes = syntax.statements.filterMap((x) => x.declaration);
  declarationsParse(context, nodes);
}

export function declarationsParse(
  context: SemanticContext,
  nodes: Array2<DeclarationNode | Nothing>,
): Array2<DeclarationSemantic | Nothing> {
  const declarations = nodes.map((x) => (x ? declarationShallowParse(context, x) : nothing));

  for (const node of nodes) {
    if (!node) {
      continue;
    }

    typeDeclarationDeepParse(context, node);
    valueDeclarationDeepParse(context, node);
  }

  return declarations;
}

export function declarationShallowParse(context: SemanticContext, node: DeclarationNode): DeclarationSemantic {
  const reference = context.createReference(node.id);
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const createDeclaration = getDeclarationFn(node);
  const declaration: DeclarationSemantic = createDeclaration(reference, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

function getDeclarationFn(
  node: DeclarationNode,
): (reference: TextResourceReference, modifier: String2 | Nothing, name: String2) => DeclarationSemantic {
  if (node.modifier) {
    if (TYPE_MODIFIERS.includes(node.modifier.text)) {
      return typeDeclarationSemantic;
    }
  }

  return valueDeclarationSemantic;
}
