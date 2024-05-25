import {SyntaxResult} from '../../../core/parser/syntax-context';
import {Array2, Nothing, String2, nothing} from '../../../lib/types';
import {$Node, is} from '../../parser/node/node';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {TYPE_MODIFIERS} from '../../parser/parser-config';
import {TextResourceReference} from '../../util/resource/resource-reference';
import {SemanticContext} from '../semantic-context';
import {DeclarationSemantic} from './declaration-semantic';
import {typeDeclarationSemantic} from './type/type-declaration-semantic';
import {typeDeclarationDeepParse} from './type/type-declaration-semantic-parser';
import {valueDeclarationSemantic} from './value/value-declaration-semantic';
import {valueDeclarationDeepParse} from './value/value-declaration-semantic-parser';

export function syntaxDeclarationsParse(context: SemanticContext, syntax: SyntaxResult): Nothing {
  const declarationNodes = syntax.statements.filterMap((x) =>
    is<DeclarationNode>(x.value, $Node.DECLARATION) ? x.value : nothing,
  );

  declarationsParse(context, declarationNodes);
}

export function declarationsParse(
  context: SemanticContext,
  declarationNodes: Array2<DeclarationNode | Nothing>,
): Array2<DeclarationSemantic | Nothing> {
  const declarations = declarationNodes.map((x) => (x ? declarationShallowParse(context, x) : nothing));

  for (const node of declarationNodes) {
    if (!node) {
      continue;
    }

    typeDeclarationDeepParse(context, node);
    valueDeclarationDeepParse(context, node);
  }

  return declarations;
}

export function declarationShallowParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id) {
    return nothing;
  }

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
