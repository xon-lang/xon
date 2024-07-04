import {$, is, isHiddenNode} from '../../$';
import {Array2, Boolean2, Nothing, nothing} from '../../../lib/types';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {DIAGNOSTIC_MESSAGE} from '../../diagnostic/analyzer-diagnostic-message';
import {FormatterManager, createFormatterManager} from '../../formatter/formatter-manager';
import {TextPosition, zeroPosition} from '../../util/resource/text/text-position';
import {TextRange, cloneRange, rangeFromPosition} from '../../util/resource/text/text-range';
import {TextResource} from '../../util/resource/text/text-resource';
import {codeLexicalAnalyzer} from '../lexical/code-lexical-analyzer';
import {LexicalAnalyzer} from '../lexical/lexical-analyzer';
import {Node} from '../node';
import {documentationNodeParse} from './documentation/documentation-node-parse';
import {groupNodeParse} from './group/group-node-parse';
import {putStatementNode} from './put-statement-node';
import {StatementNode} from './statement/statement-node';
import {DEFAULT_SYNTAX_ANALYZER_CONFIG, SyntaxAnalyzerConfig} from './syntax-analyzer-config';

export type SyntaxAnalyzer = {
  lexicalAnalyzer: LexicalAnalyzer;
  resource: TextResource;
  diagnosticManager: AnalyzerDiagnosticManager;
  formatterManager: FormatterManager;
  config: SyntaxAnalyzerConfig;
  statements: StatementNode[];
  hiddenNodes: Array2<Node>;

  parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
    statements: StatementNode[];
    breakNode?: Node | Nothing;
    hiddenNodes: Array2<Node>;
  };

  findStatementNode(
    statements: Array2<StatementNode>,
    positionOrRange: TextPosition | TextRange,
  ): StatementNode | Nothing;

  findNodeInChildren(children: Array2<Node>, positionOrRange: TextPosition | TextRange): Node | Nothing;

  findNode(positionOrRange: TextPosition | TextRange): Node | Nothing;
};

export function createSyntaxAnalyzer(
  lexicalAnalyzer: LexicalAnalyzer,
  analyzerConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const config = {...DEFAULT_SYNTAX_ANALYZER_CONFIG, ...analyzerConfig};
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
      hiddenNodes: Array2<Node>;
    } {
      let hiddenNodes: Array2<Node> = [];
      let lastStatement: StatementNode | Nothing = nothing;
      let statements: Array2<StatementNode> = [];
      let statementIndent: TextRange = rangeFromPosition(lexicalAnalyzer.position);
      let breakNode: Node | Nothing = nothing;
      let nodes: Array2<Node> = [];

      const handleStatement = () => {
        if (nodes.length === 0) {
          return;
        }

        lastStatement = putStatementNode(this, nodes, statements, lastStatement, statementIndent);
        nodes = [];
      };

      for (const iterableNode of lexicalAnalyzer) {
        let node: Node = iterableNode;

        if (is(node, $.UnknownNode)) {
          this.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.unknownSymbol());
        }

        if (is(node, $.OpenNode)) {
          node = groupNodeParse(this, node);
          lexicalAnalyzer.position = node.range.stop;
        }

        if (is(node, $.DocumentationOpenNode)) {
          node = documentationNodeParse(this, node);
          lexicalAnalyzer.position = node.range.stop;
        }

        if (breakOnNodeFn && breakOnNodeFn(node)) {
          breakNode = node;

          break;
        }

        if (nodes.length === 0) {
          if (is(node, $.WhitespaceNode)) {
          }
        }

        if (isHiddenNode(node)) {
          if (is(node, $.NlNode)) {
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
      statements: Array2<StatementNode>,
      positionOrRange: TextPosition | TextRange,
    ): StatementNode | Nothing {
      if (statements.length === 0) {
        return nothing;
      }

      for (const statement of statements) {
        if (statement.range.contains(positionOrRange)) {
          return statement;
        }

        const foundInBody = this.findStatementNode(statement.body, positionOrRange);

        if (foundInBody) {
          return foundInBody;
        }
      }

      return nothing;
    },

    findNodeInChildren(children: Array2<Node>, positionOrRange: TextPosition | TextRange): Node | Nothing {
      const child = children.find((x) => x.range.contains(positionOrRange));

      if (!child) {
        return nothing;
      }

      if (!is(child, $.SyntaxNode)) {
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
  };

  const result = analyzer.parseStatements();
  analyzer.statements = result.statements;
  analyzer.hiddenNodes = result.hiddenNodes;

  return analyzer;
}

function getStatementIndent(nodes: Array2<Node>, hiddenNodes: Array2<Node>): TextRange | Nothing {
  if (nodes.length !== 0 || hiddenNodes.length === 0) {
    return nothing;
  }

  const lastNlIndex = hiddenNodes.lastIndex((x) => is(x, $.NlNode));

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = hiddenNodes[lastNlIndex + 1];

    if (is(whiteSpaceNode, $.WhitespaceNode)) {
      return cloneRange(whiteSpaceNode.range);
    }

    return rangeFromPosition(hiddenNodes[lastNlIndex].range.stop);
  }

  if (is(hiddenNodes[0], $.WhitespaceNode)) {
    return cloneRange(hiddenNodes[0].range);
  }

  return nothing;
}

export function syntaxFromResource(
  resource: TextResource,
  syntaxConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
): SyntaxAnalyzer {
  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer, syntaxConfig);

  return syntaxAnalyzer;
}
