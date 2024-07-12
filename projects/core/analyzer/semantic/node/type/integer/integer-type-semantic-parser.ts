import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is(node, $.IntegerNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    DeclarationKind.TYPE,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = analyzer.createReference(node);
  const semantic = integerTypeSemantic(reference, declaration, node.value);

  return semantic;
}
