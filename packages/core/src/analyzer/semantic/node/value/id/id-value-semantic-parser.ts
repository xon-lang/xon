import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {unknownTypeSemantic} from '../../type/unknown/unknown-type-semantic';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdValueSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.find(
    $.ValueDeclarationSemantic,
    node.text.toString(),
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.notImplemented());
  }

  const name = node.text.toString();
  const type = declaration?.type ?? unknownTypeSemantic(analyzer, node);

  return idValueSemantic(node, name, declaration, type);
}
