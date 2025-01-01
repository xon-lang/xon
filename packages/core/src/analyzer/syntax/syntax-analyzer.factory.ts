import {
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
  createDiagnosticManager,
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
    statements: [],
    hiddenNodes: [],

    parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
      statements: StatementNode[];
      breakNode?: Node | Nothing;
      hiddenNodes: Node[];
    } {
      let hiddenNodes: Node[] = [];
      let lastStatement: StatementNode | Nothing = nothing;
      let statements: StatementNode[] = [];
      let statementIndent: TextRange = rangeFromPosition(lexicalAnalyzer.position);
      let breakNode: Node | Nothing = nothing;
      let nodes: Node[] = [];

      const handleStatement = () => {
        if (nodes.length === 0) {
          return;
        }

        lastStatement = putStatementNode(this, nodes, statements, lastStatement, statementIndent);
        nodes = [];
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

        if (nodes.length === 0) {
          if (is(node, $WhitespaceNode)) {
          }
        }

        if (node.isHidden) {
          if (is(node, $NlNode)) {
            handleStatement();
          }

          hiddenNodes.push(node);

          continue;
        }

        statementIndent = getStatementIndent(nodes, hiddenNodes) ?? statementIndent;

        node.hiddenNodes = hiddenNodes;
        hiddenNodes = [];
        nodes.push(node);
      }

      handleStatement();

      this.formatterManager.formatRemainingHiddenNodes(
        newArrayData(statements),
        lastStatement,
        newArrayData(hiddenNodes),
      );

      return {
        statements,
        breakNode,
        hiddenNodes,
      };
    },

    findStatementNode(statements: StatementNode[], position: TextPosition): StatementNode | Nothing {
      if (statements.length === 0) {
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

    findNodeInChildren(children: Node[], position: TextPosition): Node | Nothing {
      const child =
        children.length === 1 ? children[0] : children.find((x) => x.reference.range.contains(position));

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

function getStatementIndent(nodes: Node[], hiddenNodes: Node[]): TextRange | Nothing {
  if (nodes.length !== 0 || hiddenNodes.length === 0) {
    return nothing;
  }

  const lastNlIndex = hiddenNodes.lastIndex((x) => is(x, $NlNode));

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = hiddenNodes[lastNlIndex + 1];

    if (is(whiteSpaceNode, $WhitespaceNode)) {
      return whiteSpaceNode.reference.range.clone();
    }

    return rangeFromPosition(hiddenNodes[lastNlIndex].reference.range.stop);
  }

  if (is(hiddenNodes[0], $WhitespaceNode)) {
    return hiddenNodes[0].reference.range.clone();
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
