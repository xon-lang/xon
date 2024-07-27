import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdValueSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    $.DeclarationSemantic,
    node.text.toString(),
    nothing,
    nothing,
  );

  if (!declaration) {
    return nothing;
  }

  // todo review condition
  if (is(declaration, $.ValueDeclarationSemantic)) {
    return idValueSemantic(analyzer.createReference(node), declaration);
  }

  analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.notImplemented());

  return nothing;
}
