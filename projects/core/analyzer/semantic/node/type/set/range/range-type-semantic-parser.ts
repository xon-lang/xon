import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {RANGE} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): RangeTypeSemantic | Nothing {
  if (!is(node, $.InfixNode) || !node.operator.text.equals(RANGE)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.find(
    $.TypeDeclarationSemantic,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !is(declaration, $.NominalTypeDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const from = typeSemanticParse(analyzer, node.left);
  const to = typeSemanticParse(analyzer, node.right);
  // todo add step
  const step = nothing;

  if (!from || !to) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.notImplemented());

    return nothing;
  }

  if (!is(from, $.IntegerTypeSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.left.reference, (x) => x.notImplemented());
  }

  if (!is(to, $.IntegerTypeSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.right.reference, (x) => x.notImplemented());
  }

  return rangeTypeSemantic(node, declaration, from, to, step);
}
