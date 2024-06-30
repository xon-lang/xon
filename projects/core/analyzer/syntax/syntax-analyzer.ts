import {Array2, Boolean2, Nothing, nothing} from '../../../lib/types';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {DIAGNOSTIC_MESSAGE} from '../../diagnostic/analyzer-diagnostic-message';
import {FormatterManager, createFormatterManager} from '../../formatter/formatter-manager';
import {zeroPosition} from '../../util/resource/text/text-position';
import {TextRange, cloneRange, rangeFromPosition} from '../../util/resource/text/text-range';
import {TextResource} from '../../util/resource/text/text-resource';
import {codeLexicalAnalyzer} from '../lexical/code-lexical-analyzer';
import {LexicalAnalyzer} from '../lexical/lexical-analyzer';
import {DocumentationOpenNode} from '../lexical/node/documentation-open/documentation-open-node';
import {NlNode} from '../lexical/node/nl/nl-node';
import {OpenNode} from '../lexical/node/open/open-node';
import {UnknownNode} from '../lexical/node/unknown/unknown-node';
import {WhitespaceNode} from '../lexical/node/whitespace/whitespace-node';
import {$Node, Node, is, isHiddenNode} from '../node';
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
};

export function createSyntaxAnalyzer(
  lexicalAnalyzer: LexicalAnalyzer,
  config?: SyntaxAnalyzerConfig | Nothing,
): SyntaxAnalyzer {
  const analyzerConfig = config ?? DEFAULT_SYNTAX_ANALYZER_CONFIG;
  const diagnosticManager = createDiagnosticManager(lexicalAnalyzer.resource);
  const formatterManager = createFormatterManager(lexicalAnalyzer.resource, analyzerConfig.formatting);

  const analyzer: SyntaxAnalyzer = {
    config: analyzerConfig,
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

        if (is<UnknownNode>(node, $Node.UNKNOWN)) {
          this.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.unknownSymbol());
        }

        if (is<OpenNode>(node, $Node.OPEN)) {
          node = groupNodeParse(this, node);
          lexicalAnalyzer.position = node.range.stop;
        }

        if (is<DocumentationOpenNode>(node, $Node.DOCUMENTATION_OPEN)) {
          node = documentationNodeParse(this, node);
          lexicalAnalyzer.position = node.range.stop;
        }

        if (breakOnNodeFn && breakOnNodeFn(node)) {
          breakNode = node;

          break;
        }

        if (nodes.length === 0) {
          if (is<WhitespaceNode>(node, $Node.WHITESPACE)) {
          }
        }

        if (isHiddenNode(node)) {
          if (is<NlNode>(node, $Node.NL)) {
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

  const lastNlIndex = hiddenNodes.lastIndex((x) => is<NlNode>(x, $Node.NL));

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = hiddenNodes[lastNlIndex + 1];

    if (is<WhitespaceNode>(whiteSpaceNode, $Node.WHITESPACE)) {
      return cloneRange(whiteSpaceNode.range);
    }

    return rangeFromPosition(hiddenNodes[lastNlIndex].range.stop);
  }

  if (is<WhitespaceNode>(hiddenNodes[0], $Node.WHITESPACE)) {
    return cloneRange(hiddenNodes[0].range);
  }

  return nothing;
}

export function syntaxFromResource(resource: TextResource): SyntaxAnalyzer {
  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer);

  return syntaxAnalyzer;
}
