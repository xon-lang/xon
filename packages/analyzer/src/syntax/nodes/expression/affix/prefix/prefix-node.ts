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

export type PrefixNode = AffixNode &
  Brand<'Analyzer.PrefixNode'> & {
    expression: Node;
  };

export const $PrefixNode = () => $AnalyzerType<PrefixNode>('PrefixNode', $AffixNode());

export function newPrefixNode($: $Type, operator: OperatorNode, expression: Node): PrefixNode {
  return newSyntaxNode({
    $,
    operator,
    expression,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
