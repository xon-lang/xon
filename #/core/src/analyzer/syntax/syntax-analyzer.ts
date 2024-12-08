import {
  $Type,
  Boolean2,
  is_v2,
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
  AnalyzerDiagnosticManager,
  charNodeParse,
  codeLexicalParsers,
  createDiagnosticManager,
  createFormatterManager,
  createLexicalAnalyzer,
  DEFAULT_SYNTAX_ANALYZER_CONFIG,
  documentationNodeParse,
  FormatterManager,
  groupNodeParse,
  integerNodeParse,
  LexicalAnalyzer,
  Node,
  putStatementNode,
  StatementNode,
  stringNodeParse,
  SyntaxAnalyzerConfig,
} from '#core';

export type SyntaxAnalyzer = {
  lexicalAnalyzer: LexicalAnalyzer;
  resource: TextResource;
  diagnosticManager: AnalyzerDiagnosticManager;
  formatterManager: FormatterManager;
  config: SyntaxAnalyzerConfig;
  statements: StatementNode[];
  hiddenNodes: Node[];

  parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
    statements: StatementNode[];
    breakNode?: Node | Nothing;
    hiddenNodes: Node[];
  };

  findStatementNode(
    statements: StatementNode[],
    positionOrRange: TextPosition | TextRange,
  ): StatementNode | Nothing;

  findNodeInChildren(children: Node[], positionOrRange: TextPosition | TextRange): Node | Nothing;
  // todo create overload
  findNode(positionOrRange: TextPosition | TextRange): Node | Nothing;
  // todo create overload
  findClosestNode(positionOrRange: TextPosition | TextRange, $: $Type): Node | Nothing;
};

export function createSyntaxAnalyzer(
  lexicalAnalyzer: LexicalAnalyzer,
  analyzerConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const config = {...DEFAULT_SYNTAX_ANALYZER_CONFIG(), ...analyzerConfig};
  const diagnosticManager = createDiagnosticManager(lexicalAnalyzer.resource);
  const formatterManager = createFormatterManager(lexicalAnalyzer.resource, config.formatting);

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

        if (is_v2(node, $UnknownNode)) {
          this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unknownSymbol());
        }

        if (is_v2(node, $IntegerContentNode)) {
          node = integerNodeParse(this, node);
        }

        if (is_v2(node, $StringOpenNode)) {
          node = stringNodeParse(this, node);
        }

        if (is_v2(node, $CharOpenNode)) {
          node = charNodeParse(this, node);
        }

        if (is_v2(node, $DocumentationOpenNode)) {
          node = documentationNodeParse(this, node);
        }

        // todo order above is important so fix it. Should we join all open nodes ???
        if (is_v2(node, $OpenNode)) {
          node = groupNodeParse(this, node);
        }

        if (breakOnNodeFn && breakOnNodeFn(node)) {
          breakNode = node;

          break;
        }

        if (nodes.length === 0) {
          if (is_v2(node, $WhitespaceNode)) {
          }
        }

        if (node.isHidden) {
          if (is_v2(node, $NlNode)) {
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

      this.formatterManager.formatRemainingHiddenNodes(statements, lastStatement, hiddenNodes);

      return {
        statements,
        breakNode,
        hiddenNodes,
      };
    },

    findStatementNode(
      statements: StatementNode[],
      positionOrRange: TextPosition | TextRange,
    ): StatementNode | Nothing {
      if (statements.length === 0) {
        return nothing;
      }

      for (const statement of statements) {
        if (statement.reference.range.contains(positionOrRange)) {
          return statement;
        }

        const foundInBody = this.findStatementNode(statement.body, positionOrRange);

        if (foundInBody) {
          return foundInBody;
        }
      }

      return nothing;
    },

    findNodeInChildren(children: Node[], positionOrRange: TextPosition | TextRange): Node | Nothing {
      const child =
        children.length === 1
          ? children[0]
          : children.find((x) => x.reference.range.contains(positionOrRange));

      if (!child) {
        return nothing;
      }

      if (!is_v2(child, $SyntaxNode)) {
        return child;
      }

      return this.findNodeInChildren(child.children, positionOrRange);
    },

    findNode(positionOrRange: TextPosition | TextRange): Node | Nothing {
      const statement = this.findStatementNode(this.statements, positionOrRange);

      if (!statement) {
        return nothing;
      }

      return this.findNodeInChildren(statement.children, positionOrRange);
    },

    findClosestNode(positionOrRange: TextPosition | TextRange, $: $Type): Node | Nothing {
      let node = this.findNode(positionOrRange);

      if (!node) {
        return nothing;
      }

      while (!is_v2(node, $)) {
        node = (node as unknown as Node).parent;

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

  const lastNlIndex = hiddenNodes.lastIndex((x) => is_v2(x, $NlNode));

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = hiddenNodes[lastNlIndex + 1];

    if (is_v2(whiteSpaceNode, $WhitespaceNode)) {
      return whiteSpaceNode.reference.range.clone();
    }

    return rangeFromPosition(hiddenNodes[lastNlIndex].reference.range.stop);
  }

  if (is_v2(hiddenNodes[0], $WhitespaceNode)) {
    return hiddenNodes[0].reference.range.clone();
  }

  return nothing;
}

export function syntaxFromResource(
  resource: TextResource,
  syntaxConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const lexicalAnalyzer = createLexicalAnalyzer(resource);
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer, syntaxConfig);

  // todo fill semantic before return
  return syntaxAnalyzer;
}
