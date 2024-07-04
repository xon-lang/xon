import {$, is} from '../../../../$';
import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationDeepParse} from './declaration-semantic-deep-parser';
import {declarationShallowParse} from './declaration-semantic-shallow-parser';

export function syntaxDeclarationsParse(analyzer: SemanticAnalyzer): void {
  const declarationNodes = analyzer.statements.filterMap((x) =>
    is(x.value, $.DeclarationNode) ? x.value : nothing,
  );

  declarationsParse(analyzer, declarationNodes);
}

export function declarationsParse(
  analyzer: SemanticAnalyzer,
  declarationNodes: Array2<DeclarationNode | Nothing>,
): Array2<DeclarationSemantic | Nothing> {
  const declarations = declarationNodes.map((x) => (x ? declarationShallowParse(analyzer, x) : nothing));

  for (const node of declarationNodes) {
    if (!node) {
      continue;
    }

    declarationDeepParse(analyzer, node);
  }

  return declarations;
}
