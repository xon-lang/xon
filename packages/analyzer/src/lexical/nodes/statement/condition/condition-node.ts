import {
  $SyntaxNode2,
  analyzerPackageType,
  ControlKeywordNode,
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
    ifOperatorNode: ControlKeywordNode;
    ifExpressionNode?: Node2 | Nothing;
    ifBody?: ArrayData<StatementNode2> | Nothing;
    elseOperatorNode?: ControlKeywordNode | Nothing;
    elseBody?: ArrayData<StatementNode2> | Nothing;
  };

export const $ConditionNode = analyzerPackageType<ConditionNode>('ConditionNode', $SyntaxNode2);

export function conditionNode(
  ifOperatorNode: ControlKeywordNode,
  ifExpressionNode?: Node2 | Nothing,
  ifBody?: ArrayData<StatementNode2> | Nothing,
  elseOperatorNode?: ControlKeywordNode | Nothing,
  elseBody?: ArrayData<StatementNode2> | Nothing,
): ConditionNode {
  return newSyntaxNode({
    $: $ConditionNode,
    ifOperatorNode,
    ifExpressionNode,
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
