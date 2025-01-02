import {
  ArrayData,
  Boolean2,
  newArrayData,
  Nothing,
  nothing,
  rangeFromPosition,
  TextPosition,
  TextRange,
  TextResource,
} from '#common';
import {
  $CharOpenNode,
  $DocumentationOpenNode,
  $IntegerContentNode,
  $NlNode,
  $OpenNode,
  $StringOpenNode,
  $SyntaxNode,
  $UnknownNode,
  $WhitespaceNode,
  charNodeParse,
  codeLexicalParsers,
  DEFAULT_SYNTAX_ANALYZER_CONFIG,
  documentationNodeParse,
  groupNodeParse,
  integerNodeParse,
  LexicalAnalyzer,
  newFormatterManager,
  newLexicalAnalyzer,
  Node,
  putStatementNode,
  StatementNode,
  stringNodeParse,
  SyntaxAnalyzer,
  SyntaxAnalyzerConfig,
} from '#core';
import {createDiagnosticManager} from '#diagnostic';
import {is} from '#typing';

export function newSyntaxAnalyzer(
  lexicalAnalyzer: LexicalAnalyzer,
  analyzerConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const config = {...DEFAULT_SYNTAX_ANALYZER_CONFIG(), ...analyzerConfig};
  const diagnosticManager = createDiagnosticManager(lexicalAnalyzer.resource);
  const formatterManager = newFormatterManager(lexicalAnalyzer.resource, config.formatting);

  const analyzer: SyntaxAnalyzer = {
    config,
    resource: lexicalAnalyzer.resource,
    lexicalAnalyzer,
    diagnosticManager,
    formatterManager,
    statements: newArrayData(),
    hiddenNodes: newArrayData(),

    parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
      statements: ArrayData<StatementNode>;
      breakNode?: Node | Nothing;
      hiddenNodes: ArrayData<Node>;
    } {
      let hiddenNodes = newArrayData<Node>();
      let lastStatement: StatementNode | Nothing = nothing;
      let statements = newArrayData<StatementNode>();
      let statementIndent: TextRange = rangeFromPosition(lexicalAnalyzer.position);
      let breakNode: Node | Nothing = nothing;
      let nodes = newArrayData<Node>();

      const handleStatement = () => {
        if (nodes.isEmpty()) {
          return;
        }

        lastStatement = putStatementNode(this, nodes, statements, lastStatement, statementIndent);
        nodes = newArrayData();
      };

      const iterator = analyzer.lexicalAnalyzer.iterator(codeLexicalParsers());

      for (const iterableNode of iterator) {
        let node: Node = iterableNode;

        if (is(node, $UnknownNode)) {
          this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unknownSymbol());
        }

        if (is(node, $IntegerContentNode)) {
          node = integerNodeParse(this, node);
        }

        if (is(node, $StringOpenNode)) {
          node = stringNodeParse(this, node);
        }

        if (is(node, $CharOpenNode)) {
          node = charNodeParse(this, node);
        }

        if (is(node, $DocumentationOpenNode)) {
          node = documentationNodeParse(this, node);
        }

        // todo order above is important so fix it. Should we join all open nodes ???
        if (is(node, $OpenNode)) {
          node = groupNodeParse(this, node);
        }

        if (breakOnNodeFn && breakOnNodeFn(node)) {
          breakNode = node;

          break;
        }

        if (nodes.isEmpty()) {
          if (is(node, $WhitespaceNode)) {
          }
        }

        if (node.isHidden) {
          if (is(node, $NlNode)) {
            handleStatement();
          }

          hiddenNodes.addLastItem(node);

          continue;
        }

        statementIndent = getStatementIndent(nodes, hiddenNodes) ?? statementIndent;

        node.hiddenNodes = hiddenNodes;
        hiddenNodes = newArrayData();
        nodes.addLastItem(node);
      }

      handleStatement();

      this.formatterManager.formatRemainingHiddenNodes(statements, lastStatement, hiddenNodes);

      return {
        statements,
        breakNode,
        hiddenNodes,
      };
    },

    findStatementNode(statements: ArrayData<StatementNode>, position: TextPosition): StatementNode | Nothing {
      if (statements.isEmpty()) {
        return nothing;
      }

      for (const statement of statements) {
        if (statement.reference.range.contains(position)) {
          return statement;
        }

        const foundInBody = this.findStatementNode(statement.body, position);

        if (foundInBody) {
          return foundInBody;
        }
      }

      return nothing;
    },

    findNodeInChildren(children: ArrayData<Node>, position: TextPosition): Node | Nothing {
      const child =
        children.count() === 1 ? children.at(0) : children.first((x) => x.reference.range.contains(position));

      if (!child) {
        return nothing;
      }

      if (!is(child, $SyntaxNode)) {
        return child;
      }

      return this.findNodeInChildren(child.children, position);
    },

    findNodeAtPosition(position: TextPosition): Node | Nothing {
      const statement = this.findStatementNode(this.statements, position);

      if (!statement) {
        return nothing;
      }

      return this.findNodeInChildren(statement.children, position);
    },

    findParentNodeFromPosition(predicate: (node: Node) => Boolean2, position: TextPosition): Node | Nothing {
      let node = this.findNodeAtPosition(position);

      if (!node) {
        return nothing;
      }

      while (!predicate(node)) {
        node = node.parent;

        if (!node) {
          return nothing;
        }
      }

      return node;
    },
  };

  const result = analyzer.parseStatements();
  analyzer.statements = result.statements;
  analyzer.hiddenNodes = result.hiddenNodes;

  return analyzer;
}

function getStatementIndent(nodes: ArrayData<Node>, hiddenNodes: ArrayData<Node>): TextRange | Nothing {
  if (!nodes.isEmpty() || hiddenNodes.isEmpty()) {
    return nothing;
  }

  const lastNlIndex = hiddenNodes.lastIndex((x) => is(x, $NlNode)) ?? -1;

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = hiddenNodes.at(lastNlIndex + 1);

    if (is(whiteSpaceNode, $WhitespaceNode)) {
      return whiteSpaceNode.reference.range.clone();
    }

    return rangeFromPosition(hiddenNodes.at2(lastNlIndex).reference.range.stop);
  }

  if (is(hiddenNodes.at(0), $WhitespaceNode)) {
    return hiddenNodes.at2(0).reference.range.clone();
  }

  return nothing;
}

export function syntaxFromResource(
  resource: TextResource,
  syntaxConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const lexicalAnalyzer = newLexicalAnalyzer(resource);
  const syntaxAnalyzer = newSyntaxAnalyzer(lexicalAnalyzer, syntaxConfig);

  // todo fill semantic before return
  return syntaxAnalyzer;
}
