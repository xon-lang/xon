import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseMemberNode,
  IdNode,
  newSyntaxNode,
  Node,
  OperatorNode,
  semantifyMemberNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type MemberNode = SyntaxNode &
  Brand<'Analyzer.MemberNode'> & {
    instance: Node;
    operator: OperatorNode;
    id?: IdNode | Nothing;
  };

export const $MemberNode = () => $AnalyzerType<MemberNode>('MemberNode', $SyntaxNode());

export function newMemberNode(instance: Node, operator: OperatorNode, id?: IdNode | Nothing): MemberNode {
  return newSyntaxNode({
    $: $MemberNode(),
    canBeExpression: true,
    instance,
    operator,
    id,

    semantify: semantifyMemberNode,
    diagnose: diagnoseMemberNode,
  });
}

// function validate(analyzer: SyntaxAnalyzer, node: MemberNode): void {
//   if (!node.id) {
//     analyzer.diagnosticManager.addPredefinedDiagnostic(node.operator.reference, (x) =>
//       x.shouldBeMemberName(),
//     );
//   }
// }

// function format(analyzer: SyntaxAnalyzer, node: MemberNode): void {
//   analyzer.formatterManager.formatChildNode(node.operator, false);

//   if (node.id) {
//     analyzer.formatterManager.formatChildNode(node.id, false);
//   }
// }
