import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {MemberNode} from '../../../parser/node/syntax/member/member-node';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../../type/type-semantic';
import {valueSemanticParse} from '../value-semantic-parser';

export function memberValueTypeTryParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  if (is<MemberNode>(node, $Node.MEMBER)) {
    const instanceSemantic = valueSemanticParse(context, node.instance);

    if (instanceSemantic && node.id) {
      const attributes = instanceSemantic.type?.attributes()[node.id.text];

      if (attributes) {
        if (attributes.length > 1) {
          context.issueManager.addError(node.id.range, ISSUE_MESSAGE.notImplemented());

          return nothing;
        }

        return attributes.first();
      }
    }
  }

  return nothing;
}
