import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {Node} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, integerTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is(node, $.BracketGroupNode)) {
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
  const items = node.items.map((x) => typeSemanticParse(analyzer, x.value));
  const semantic = integerTypeSemantic(reference, declaration, items);

  return semantic;
}
