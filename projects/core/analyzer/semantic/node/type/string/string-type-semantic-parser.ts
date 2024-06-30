import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {StringNode} from '../../../../lexical/node/string/string-node';
import {$Node, Node, is} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is<StringNode>(node, $Node.STRING)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    DeclarationKind.TYPE,
    analyzer.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    analyzer.diagnosticManager.addError(
      node.range,
      DIAGNOSTIC_MESSAGE.declarationNotFound(analyzer.config.literalTypeNames.stringTypeName),
    );

    return nothing;
  }

  const reference = analyzer.createReference(node);
  const semantic = stringTypeSemantic(reference, declaration, node.value);

  return semantic;
}
