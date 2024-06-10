import {Nothing, nothing} from '../../../../lib/types';
import {$Node, Node, is} from '../../../analyzer/node/node';
import {MemberNode} from '../../../analyzer/node/syntax/member/member-node';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../../type/type-semantic';
import {valueSemanticParse} from '../value-semantic-parser';
import {MemberValueSemantic, memberValueSemantic} from './member-value-semantic';

export function memberValueSemanticTryParse(
  context: SemanticContext,
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
        context.issueManager.addError(node.id.range, ISSUE_MESSAGE.notImplemented());
      } else {
        memberType = attributes.first();
      }
    }
  }

  return memberValueSemantic(context.createReference(node), memberType);
}
