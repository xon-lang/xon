import {
  $AnalyzerType,
  $TypeStatementNode,
  AngleGroupNode,
  AssignValueNode,
  diagnoseStructuralTypeStatementNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeKeywordNode,
  TypeStatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type StructuralTypeStatementNode = TypeStatementNode &
  Brand<'Analyzer.StructuralTypeStatementNode'> & {
    id: IdNode;
    assign: AssignValueNode;
  };

export const $StructuralTypeStatementNode = () =>
  $AnalyzerType<StructuralTypeStatementNode>('StructuralTypeStatementNode', $TypeStatementNode());

export function newStructuralTypeStatementNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  id: Node,
  parameters: AngleGroupNode | Nothing,
  assign: AssignValueNode,
  errorNodes: ArrayData<Node> | Nothing,
): StructuralTypeStatementNode {
  return newSyntaxNode<StructuralTypeStatementNode>({
    $: $StructuralTypeStatementNode(),
    indent,
    keyword: keyword,
    id,
    parameters,
    assign,
    errorNodes,

    diagnose: diagnoseStructuralTypeStatementNode,
  });
}
