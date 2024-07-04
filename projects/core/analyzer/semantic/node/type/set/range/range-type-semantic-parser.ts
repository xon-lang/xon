import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../../diagnostic/analyzer-diagnostic-message';
import {RANGE} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {DeclarationKind} from '../../../../declaration-manager';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../../declaration/declaration-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): RangeTypeSemantic | Nothing {
  if (!is(node, $.InfixNode) || node.operator.text !== RANGE) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    DeclarationKind.TYPE,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    analyzer.diagnosticManager.addError(
      node.range,
      DIAGNOSTIC_MESSAGE.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = analyzer.createReference(node);
  const from = typeSemanticParse(analyzer, node.left);
  const to = typeSemanticParse(analyzer, node.right);
  // todo add step
  const step = nothing;

  if (!from || !to) {
    analyzer.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.notImplemented());

    return nothing;
  }

  if (!is(from, $.IntegerTypeSemantic)) {
    analyzer.diagnosticManager.addError(node.left.range, DIAGNOSTIC_MESSAGE.notImplemented());
  }

  if (!is(to, $.IntegerTypeSemantic)) {
    analyzer.diagnosticManager.addError(node.right.range, DIAGNOSTIC_MESSAGE.notImplemented());
  }

  const semantic = rangeTypeSemantic(reference, declaration, from, to, step);

  return semantic;
}
