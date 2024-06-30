import {IdNode} from '../../../lexical/node/id/id-node';
import {$Node} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type AssignmentNode = SyntaxNode<$Node.ASSIGNMENT> & {
  id: IdNode;
  assign: PrefixNode;
};

export function assignmentNode(analyzer: SyntaxAnalyzer, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode($Node.ASSIGNMENT, {id, assign});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignmentNode): void {
  analyzer.formatterManager.formatChildNode(node.assign, true);
}
