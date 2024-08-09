import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {IdTypeSemantic, idTypeSemantic} from './id-type-semantic';

export function idTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdTypeSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const name = node.text.toString();
  const declaration = analyzer.declarationManager.single($.TypeDeclarationSemantic, name, nothing, nothing);

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotResolveType());
  }

  if (is(declaration, $.ValueDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotBeUsedAsAType());
  }

  const reference = analyzer.reference(node);

  return idTypeSemantic(reference, name, declaration);
}
