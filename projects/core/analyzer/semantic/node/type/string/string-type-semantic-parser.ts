import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {StringNode} from '../../../../syntax/node/string/string-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  return stringTypeSemanticParse(analyzer, node);
}

export function stringTypeSemanticParse(analyzer: SemanticAnalyzer, node: StringNode): StringTypeSemantic {
  const declaration = analyzer.declarationManager.single(
    $.NominalTypeDeclarationSemantic,
    analyzer.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.stringTypeName),
    );
  }

  const reference = analyzer.reference(node);
  const semantic = stringTypeSemantic(reference, declaration, node.value);

  return semantic;
}
