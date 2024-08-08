import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {unknownTypeFromNode} from '../../type/unknown/unknown-type-semantic';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdValueSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    $.ValueDeclarationSemantic,
    node.text.toString(),
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.notImplemented());
  }

  const name = node.text.toString();
  const type = declaration?.type ?? unknownTypeFromNode(analyzer, node);

  return idValueSemantic(analyzer.reference(node), name, declaration, type);
}
