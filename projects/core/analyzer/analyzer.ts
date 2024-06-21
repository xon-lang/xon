import {Boolean2, Integer, Nothing} from '../../lib/types';
import {FormatterManager} from '../formatter/formatter-manager';
import {IssueManager} from '../issue/issue-manager';
import {TextPosition} from '../util/resource/text/text-position';
import {TextResource} from '../util/resource/text/text-resource';
import {SyntaxContext} from './syntax-context';
import {SyntaxParserConfig} from './syntax-parser-config';
import {$Node, Node, is} from './syntax/node';
import {HiddenNode} from './syntax/token/token-node';
import {unknownNodeParse} from './syntax/token/unknown/unknown-node-parse';

export type NodeParseResult = Node | Nothing;
export type NodeParseFn = (context: AnalyzerContext, index: Integer) => NodeParseResult;

export interface Analyzer {
  context: AnalyzerContext;
  nodeParsers: NodeParseFn[];

  analyze(breakPredicate: ((node: Node) => Boolean2) | Nothing, index: Integer): AnalyzerResult;

  next(): Node;
}

export interface AnalyzerContext extends SyntaxContext {
  resource: TextResource;
  position: TextPosition;
  issueManager: IssueManager;
  hiddenNodes: HiddenNode[];
  formatterManager: FormatterManager;
  config: SyntaxParserConfig;
}

export interface AnalyzerResult {
  nodes: Node[];
  breakNode?: Node | Nothing;
}

export function createAnalyzer(context: AnalyzerContext): Analyzer {
  const analyzer: Analyzer = {
    context,
    nodeParsers: [],

    analyze(breakPredicate: ((node: Node) => Boolean2) | Nothing, index: Integer): AnalyzerResult {
      const nodes: Node[] = [];

      while (index < this.context.resource.data.length) {
        const node = this.next();

        if (breakPredicate && breakPredicate(node)) {
          return {
            nodes,
            breakNode: node,
          };
        }

        if (is<HiddenNode>(node, $Node.HIDDEN)) {
          context.hiddenNodes.push(node);

          continue;
        }

        node.hiddenNodes = context.hiddenNodes;
        context.hiddenNodes = [];
        nodes.push(node);
      }

      return {nodes};
    },

    next(): Node {
      const node =
        this.nodeParsers.findMap((parse) => parse(context, context.position.index)) ??
        unknownNodeParse(this.context, context.position.index);

      context.position = node.range.stop;

      return node;
    },
  };

  return analyzer;
}
