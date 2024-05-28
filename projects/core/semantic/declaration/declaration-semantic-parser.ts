import {SyntaxResult} from '../../../core/parser/syntax-context';
import {Array2, Nothing, nothing} from '../../../lib/types';
import {$Node, is} from '../../parser/node/node';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {SemanticContext} from '../semantic-context';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationDeepParse} from './declaration-semantic-deep-parser';
import {declarationShallowParse} from './declaration-semantic-shallow-parser';

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

    declarationDeepParse(context, node);
    declarationDeepParse(context, node);
  }

  return declarations;
}
