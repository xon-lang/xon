import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {IntegerNode} from '../../../../lexical/node/integer/integer-node';
import {$Node, Node, is} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is<IntegerNode>(node, $Node.INTEGER)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(
      node.range,
      DIAGNOSTIC_MESSAGE.declarationNotFound(context.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = integerTypeSemantic(reference, declaration, node.value);

  return semantic;
}
