import {
  $NlNode,
  $UnknownNode,
  AnalyzerContext,
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
  putStatementNode2,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, Nothing, nothing} from '#common';
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

    // statementIndent = getStatementIndent(nodes, hiddenNodes) ?? statementIndent;

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

// function findStatementNode(
//   statements: ArrayData<StatementNode2>,
//   position: TextPosition,
// ): StatementNode2 | Nothing {
//   if (statements.isEmpty()) {
//     return nothing;
//   }

//   for (const statement of statements) {
//     if (statement.range.contains(position)) {
//       return statement;
//     }

//     const foundInBody = this.findStatementNode(statement.body, position);

//     if (foundInBody) {
//       return foundInBody;
//     }
//   }

//   return nothing;
// }

// function findNodeInChildren(children: ArrayData<Node2>, position: TextPosition): Node2 | Nothing {
//   const child = children.count() === 1 ? children.at(0) : children.first((x) => x.range.contains(position));

//   if (!child) {
//     return nothing;
//   }

//   if (!is(child, $SyntaxNode)) {
//     return child;
//   }

//   return this.findNodeInChildren(child.children, position);
// }

// function findNodeAtPosition(position: TextPosition): Node2 | Nothing {
//   const statement = this.findStatementNode(this.statements, position);

//   if (!statement) {
//     return nothing;
//   }

//   return this.findNodeInChildren(statement.children, position);
// }

// function findParentNodeFromPosition(
//   predicate: (node: Node2) => Boolean2,
//   position: TextPosition,
// ): Node2 | Nothing {
//   let node = this.findNodeAtPosition(position);

//   if (!node) {
//     return nothing;
//   }

//   while (!predicate(node)) {
//     node = node.parent;

//     if (!node) {
//       return nothing;
//     }
//   }

//   return node;
// }

// function getStatementIndent(nodes: ArrayData<Node2>, hiddenNodes: ArrayData<Node2>): TextRange | Nothing {
//   if (!nodes.isEmpty() || hiddenNodes.isEmpty()) {
//     return nothing;
//   }

//   const lastNlIndex = hiddenNodes.lastIndex((x) => is(x, $NlNode)) ?? -1;

//   if (lastNlIndex >= 0) {
//     const whiteSpaceNode = hiddenNodes.at(lastNlIndex + 1);

//     if (is(whiteSpaceNode, $WhitespaceNode)) {
//       return whiteSpaceNode.range.clone();
//     }

//     return rangeFromPosition(hiddenNodes.at2(lastNlIndex).range.stop);
//   }

//   if (is(hiddenNodes.at(0), $WhitespaceNode)) {
//     return hiddenNodes.at2(0).range.clone();
//   }

//   return nothing;
// }

// export function syntaxFromResource(resource: TextResource): SyntaxAnalyzer {
//   const lexicalAnalyzer = newLexicalAnalyzer(resource);
//   const syntaxAnalyzer = newSyntaxAnalyzer(lexicalAnalyzer);

//   // todo fill semantic before return
//   return syntaxAnalyzer;
// }

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
