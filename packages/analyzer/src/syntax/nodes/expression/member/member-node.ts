import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  IdNode,
  newSyntaxNode,
  OperatorNode,
  semantifyMemberNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type MemberNode = ExpressionNode &
  Brand<'Analyzer.MemberNode'> & {
    target: ExpressionNode;
    operator: OperatorNode;
    id?: IdNode | Nothing;
  };

export const $MemberNode = () => $AnalyzerType<MemberNode>('MemberNode', $ExpressionNode());

export function newMemberNode(
  target: ExpressionNode,
  operator: OperatorNode,
  id?: IdNode | Nothing,
): MemberNode {
  return newSyntaxNode({
    $: $MemberNode(),
    target,
    operator,
    id,

    semantify: semantifyMemberNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
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
