import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {$Node, Node, is} from '../../../../node';
import {MemberNode} from '../../../../syntax/node/member/member-node';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {TypeSemantic} from '../../type/type-semantic';
import {valueSemanticParse} from '../value-semantic-parser';
import {MemberValueSemantic, memberValueSemantic} from './member-value-semantic';

export function memberValueSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): MemberValueSemantic | Nothing {
  if (!is<MemberNode>(node, $Node.MEMBER)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(context, node.instance);
  node.instance.semantic = instanceSemantic;

  let memberType: TypeSemantic | Nothing = nothing;

  if (instanceSemantic && node.id) {
    const attributes = instanceSemantic.type?.attributes()[node.id.text];

    if (attributes) {
      if (attributes.length > 1) {
        context.issueManager.addError(node.id.range, DIAGNOSTIC_MESSAGE.notImplemented());
      } else {
        memberType = attributes.first();
      }
    }
  }

  return memberValueSemantic(context.createReference(node), memberType);
}
