import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {TypeSemantic} from '../type-semantic';
import {idTypeSemantic} from './id-type-semantic';

export function idTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): TypeSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const name = node.text.toString();
  const declaration = analyzer.declarationManager.find($.TypeDeclarationSemantic, name, nothing, nothing);

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotResolveType());
  } else if (is(declaration, $.ValueDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotBeUsedAsAType());
  }

  return idTypeSemantic(analyzer, node, name, declaration);
}
