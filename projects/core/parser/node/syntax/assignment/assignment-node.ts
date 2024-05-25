import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type AssignmentNode = SyntaxNode<$Node.ASSIGNMENT> & {
  id: IdNode;
  assign: PrefixNode;
};

export function assignmentNode(context: SyntaxContext, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode($Node.ASSIGNMENT, {id, assign});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: AssignmentNode): Nothing {
  formatChildNode(context, node.assign, true);
}
