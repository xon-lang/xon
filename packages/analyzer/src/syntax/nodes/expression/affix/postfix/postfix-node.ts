import {
  $AffixNode,
  $AnalyzerType,
  AffixNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  OperatorNode,
  SemanticContext,
} from '#analyzer';
import {$Type, Brand} from '#typing';

export type PostfixNode = AffixNode &
  Brand<'Analyzer.PostfixNode'> & {
    value: Node;
  };

export const $PostfixNode = () => $AnalyzerType<PostfixNode>('PostfixNode', $AffixNode());

export function postfixNode($: $Type, value: Node, operator: OperatorNode): PostfixNode {
  return newSyntaxNode({
    $,
    value,
    operator,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}

// function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
