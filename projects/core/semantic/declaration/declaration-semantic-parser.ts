import {Nothing, String2, nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {CONST_MODIFIER, TYPE_MODIFIERS} from '../../parser/parser-config';
import {SyntaxResult} from '../../parser/syntax-result';
import {SourceReference} from '../../source/source-reference';
import {SemanticContext} from '../semantic-context';
import {constDeclarationSemantic} from './const/const-declaration-semantic';
import {constDeclarationDeepParse} from './const/const-declaration-semantic-parser';
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
  nodes: (DeclarationNode | Nothing)[],
): (DeclarationSemantic | Nothing)[] {
  const declarations = nodes.map((x) => (x ? declarationShallowParse(context, x) : nothing));

  for (const node of nodes) {
    if (!node) {
      continue;
    }

    typeDeclarationDeepParse(context, node);
    constDeclarationDeepParse(context, node);
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
): (reference: SourceReference, modifier: String2 | Nothing, name: String2) => DeclarationSemantic {
  if (node.modifier) {
    if (TYPE_MODIFIERS.includes(node.modifier.text)) {
      return typeDeclarationSemantic;
    }
    if (node.modifier.text === CONST_MODIFIER) {
      return constDeclarationSemantic;
    }
  }

  return valueDeclarationSemantic;
}
