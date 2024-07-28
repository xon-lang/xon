import {$, is} from '../../../../$';
import {Array2, nothing} from '../../../../../lib/types';
import {ItemNode} from '../../../syntax/group/item-node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationDeepParse} from './declaration-semantic-deep-parser';
import {declarationShallowParse} from './declaration-semantic-shallow-parser';
import {unknownDeclarationSemantic} from './unknown/unknown-declaration-semantic';

export function syntaxDeclarationsParse(analyzer: SemanticAnalyzer): void {
  const declarationNodes = analyzer.statements.filterMap((x) =>
    is(x.value, $.DeclarationNode) ? x.value : nothing,
  );

  declarationsParse(analyzer, declarationNodes);
}

export function declarationsParse(
  analyzer: SemanticAnalyzer,
  nodes: Array2<DeclarationNode | ItemNode>,
): Array2<DeclarationSemantic> {
  // todo use push pop always here
  // analyzer.pushDeclarationScope();

  const declarations = nodes.map((x) => {
    const node = is(x, $.DeclarationNode) ? x : x.value;

    if (is(node, $.DeclarationNode)) {
      return declarationShallowParse(analyzer, node);
    }

    return unknownDeclarationSemantic(analyzer.createReference(x));
  });

  for (const node of nodes) {
    if (is(node, $.DeclarationNode)) {
      declarationDeepParse(analyzer, node);
    }
  }

  // analyzer.popDeclarationScope();

  return declarations;
}
