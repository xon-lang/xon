import {
  $NlNode,
  $UnknownNode,
  AnalyzerContext,
  newStatementNode,
  Node2,
  NodeParserFunction,
  parseCharacterNode,
  parseCommentNode,
  parseDocumentationNode,
  parseIdNode,
  parseJoiningNode,
  parseNlNode,
  parseNumberNode,
  parseOperatorNode,
  parseStringNode,
  parseUnknownNode,
  parseWhitespaceNode,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, Nothing, nothing, TextPosition} from '#common';
import {is} from '#typing';

function nodeParsers(): ArrayData<NodeParserFunction> {
  return newArrayData([
    parseWhitespaceNode,
    parseNlNode,
    parseStringNode,
    parseCharacterNode,
    parseNumberNode,
    parseOperatorNode,
    parseIdNode,
    parseDocumentationNode,
    parseCommentNode,
    parseJoiningNode,
    parseUnknownNode,
  ]);
}

export function parseStatementsUntil(
  context: AnalyzerContext,
  predicate?: ((node: Node2) => Boolean2) | Nothing,
): {
  statements: ArrayData<StatementNode2>;
  breakNode?: Node2 | Nothing;
  hiddenNodes: ArrayData<Node2>;
} {
  let hiddenNodes = newArrayData<Node2>();
  let lastStatement: StatementNode2 | Nothing = nothing;
  let statements = newArrayData<StatementNode2>();
  let breakNode: Node2 | Nothing = nothing;
  let nodes = newArrayData<Node2>();

  const handleStatement = () => {
    if (nodes.isEmpty()) {
      return;
    }

    lastStatement = putStatementNode2(nodes, lastStatement);

    if (!lastStatement.parent) {
      statements.addLastItem(lastStatement);
    }

    nodes = newArrayData();
  };

  const iterator = nodeIterator(context, nodeParsers());

  for (const iterableNode of iterator) {
    let node: Node2 = iterableNode;

    if (is(node, $UnknownNode)) {
      // this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unknownSymbol());
    }

    // todo order above is important so fix it. Should we join all open nodes ???
    // if (is(node, $GroupOpenNode)) {
    //   node = groupNodeParse(this, node);
    // }

    if (predicate && predicate(node)) {
      breakNode = node;

      break;
    }

    if (node.isHidden) {
      if (is(node, $NlNode)) {
        handleStatement();
      }

      hiddenNodes.addLastItem(node);

      continue;
    }

    node.hiddenNodes = hiddenNodes;
    hiddenNodes = newArrayData();
    nodes.addLastItem(node);
  }

  handleStatement();

  // this.formatterManager.formatRemainingHiddenNodes(statements, lastStatement, hiddenNodes);

  return {
    statements,
    breakNode,
    hiddenNodes,
  };
}

function nodeIterator(
  context: AnalyzerContext,
  parsers: ArrayData<NodeParserFunction>,
): IterableIterator<Node2> {
  return {
    next(): IteratorResult<Node2> {
      const node = parsers.findMap((parse) => parse(context));

      if (!node) {
        return {
          done: true,
          value: nothing,
        };
      }

      return {
        done: false,
        value: node,
      };
    },

    [Symbol.iterator](): IterableIterator<Node2> {
      return this;
    },
  };
}

function putStatementNode2(nodes: ArrayData<Node2>, lastStatement: StatementNode2 | Nothing): StatementNode2 {
  const firstNode = nodes.first()!;
  const parentStatement = getParentStatement(lastStatement, firstNode.range.start);
  // const isFirstStatement = statements.isEmpty();
  const statement = newStatementNode(parentStatement, firstNode, nodes.slice(1));

  if (parentStatement) {
    parentStatement.body ??= newArrayData();
    parentStatement.body.addLastItem(statement);
  }

  return statement;
}

function getParentStatement(
  lastStatement: StatementNode2 | Nothing,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!lastStatement) {
    return nothing;
  }

  if (indentPosition.column > lastStatement.value.range.start.column) {
    return lastStatement;
  }

  return findParentStatementWithLessIndent(lastStatement, indentPosition);
}

function findParentStatementWithLessIndent(
  statement: StatementNode2,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!statement.parent) {
    return nothing;
  }

  if (statement.parent.value.range.start.column < indentPosition.column) {
    return statement.parent;
  }

  return findParentStatementWithLessIndent(statement.parent, indentPosition);
}
