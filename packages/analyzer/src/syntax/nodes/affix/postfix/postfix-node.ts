import {$AffixNode, $AnalyzerType, AffixNode, newSyntaxNode, Node, OperatorNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type PostfixNode = AffixNode &
  Brand<'Analyzer.PostfixNode'> & {
    valueNode: Node;
  };

export const $PostfixNode = () => $AnalyzerType<PostfixNode>('PostfixNode', $AffixNode());

export function postfixNode($: $Type, valueNode: Node, operatorNode: OperatorNode): PostfixNode {
  return newSyntaxNode({$, canBeExpression: true, valueNode, operatorNode});
}

// function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
