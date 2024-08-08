import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {IntegerNode} from '../../../../syntax/node/integer/integer-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is(node, $.IntegerNode)) {
    return nothing;
  }

  return integerTypeSemanticParse(analyzer, node);
}

export function integerTypeSemanticParse(analyzer: SemanticAnalyzer, node: IntegerNode): IntegerTypeSemantic {
  const declaration = analyzer.declarationManager.single(
    $.NominalTypeDeclarationSemantic,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.stringTypeName),
    );
  }

  const reference = analyzer.reference(node);
  const semantic = integerTypeSemantic(reference, declaration, node.value);

  return semantic;
}
