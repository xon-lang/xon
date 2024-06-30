import {Array2, Boolean2, Integer, Nothing} from '../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../diagnostic/analyzer-diagnostic-message';
import {TextRange, rangeFromNodes} from '../../../util/resource/text/text-range';
import {$Node, Node} from '../../node';
import {SyntaxNode} from '../node/syntax-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {statementNodeCollapse} from './statement-node-collapse';

export type StatementNode = SyntaxNode<$Node.STATEMENT> & {
  parent: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  children: Array2<Node>;
  value: Node;
  body: Array2<StatementNode>;
};

export function statementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  children: Array2<Node>,
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  const statement: StatementNode = {
    $: $Node.STATEMENT,
    range: rangeFromNodes(children),
    hiddenNodes: children[0].hiddenNodes,
    children,
    indent,
    indentLevel: (parentStatement?.indentLevel ?? -1) + 1,
    parent: parentStatement,
    value: children[0],
    body: [],
  };

  children[0].hiddenNodes = [];
  children.forEach((x) => (x.parent = statement));

  format(analyzer, statement, isFirstStatement);

  return statement;
}

export function format(analyzer: SyntaxAnalyzer, node: StatementNode, isFirstStatement: Boolean2): void {
  analyzer.formatterManager.formatStatementNode(node, isFirstStatement);
}

export function constructStatementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  nodes: Array2<Node>,
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  statementNodeCollapse(analyzer, parentStatement, nodes);

  nodes
    .slice(1)
    .forEach((node) =>
      analyzer.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.unexpectedExpression()),
    );

  return statementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);
}
