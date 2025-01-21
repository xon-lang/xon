import {
  $SyntaxNode2,
  analyzerPackageType,
  ControlOperatorNode,
  diagnoseConditionNode,
  newSyntaxNode,
  Node2,
  StatementNode2,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type ConditionNode = SyntaxNode2 &
  Brand<'Analyzer.ConditionNode'> & {
    ifOperatorNode: ControlOperatorNode;
    conditionNode?: Node2 | Nothing;
    ifBody?: ArrayData<StatementNode2> | Nothing;
    elseOperatorNode?: ControlOperatorNode | Nothing;
    elseBody?: ArrayData<StatementNode2> | Nothing;
  };

export const $ConditionNode = analyzerPackageType<ConditionNode>('ConditionNode', $SyntaxNode2);

export function conditionNode(
  ifOperatorNode: ControlOperatorNode,
  conditionNode?: Node2 | Nothing,
  ifBody?: ArrayData<StatementNode2> | Nothing,
  elseOperatorNode?: ControlOperatorNode | Nothing,
  elseBody?: ArrayData<StatementNode2> | Nothing,
): ConditionNode {
  return newSyntaxNode({
    $: $ConditionNode,
    ifOperatorNode,
    conditionNode,
    ifBody,
    elseOperatorNode,
    elseBody,

    diagnose: diagnoseConditionNode,
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
