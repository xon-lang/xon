import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {StringNode} from '../../../../lexical/node/string/string-node';
import {$Node, Node, is} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is<StringNode>(node, $Node.STRING)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(
      node.range,
      DIAGNOSTIC_MESSAGE.declarationNotFound(context.config.literalTypeNames.stringTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = stringTypeSemantic(reference, declaration, node.value);

  return semantic;
}
