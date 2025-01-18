import {
  $SyntaxNode2,
  analyzerPackageType,
  IdNode,
  newSyntaxNode,
  Node2,
  OperatorNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type MemberNode = SyntaxNode2 &
  Brand<'Analyzer.MemberNode'> & {
    instance: Node2;
    operator: OperatorNode;
    id?: IdNode | Nothing;
  };

export const $MemberNode = analyzerPackageType<MemberNode>('MemberNode', $SyntaxNode2);

export function memberNode(instance: Node2, operator: OperatorNode, id?: IdNode | Nothing): MemberNode {
  return newSyntaxNode({$: $MemberNode, instance, operator, id});

  // validate(analyzer, node);
  // format(analyzer, node);

  // return node;
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
