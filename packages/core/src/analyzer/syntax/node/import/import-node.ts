import {$} from '../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {StringNode} from '../string/string-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type ImportNode = SyntaxNode<$.ImportNode> &
  ExpressionNode & {
    operator: OperatorNode;
    value: StringNode | Nothing;
  };

export function importNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: StringNode | Nothing,
): ImportNode {
  const node = syntaxNode(analyzer, {$: $.ImportNode, operator, value});

  validate(analyzer, node);
  format(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (!node.value) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.importValueShouldBeString());
  }
}

function format(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}
