import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {$Node, Node, is} from '../../../../node';
import {ArrayNode} from '../../../../syntax/group/group-node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, integerTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is<ArrayNode>(node, $Node.ARRAY)) {
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
  const items = node.items.map((x) => typeSemanticParse(context, x.value));
  const semantic = integerTypeSemantic(reference, declaration, items);

  return semantic;
}
