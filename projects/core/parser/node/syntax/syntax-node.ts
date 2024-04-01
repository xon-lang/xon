import {Array2, Integer, Nothing, String2, nothing} from '../../../lib/core';
import {rangeFromNodes} from '../../../util/resource/text/text-resource-range';
import {
  COMMA,
  COMPLEMENT,
  CONTROL_KEYWORDS,
  DIVIDE,
  EQUALS,
  GREAT,
  GREAT_EQUALS,
  INTERSECTION,
  LESS,
  LESS_EQUALS,
  MEMBER,
  META_MEMBER,
  MINUS,
  MOD,
  MODIFIER_KEYWORDS,
  MULTIPLY,
  NOT,
  NOT_EQUALS,
  OPERATOR_KEYWORDS,
  OPTIONAL,
  PLUS,
  PROMISE,
  RANGE,
  REST,
  SQUARE,
  UNION,
} from '../../parser-config';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {importSyntaxParse} from './import/import-node';
import {infixSyntaxParse} from './infix/infix-node';
import {invokeSyntaxParse} from './invoke/invoke-node';
import {memberSyntaxParse} from './member/member-node';
import {postfixSyntaxParse} from './postfix/postfix-node';
import {prefixSyntaxParse} from './prefix/prefix-node';
import {rangeSyntaxParse} from './range/range-node';

export interface SyntaxNode extends Node {
  children: Array2<Node>;

  addChild(node: Node): Nothing;
}

type SyntaxChild = Node | Array2<Node | Nothing> | Nothing;

export function syntaxNode<T extends Record<String2, SyntaxChild>, V extends $Node>(
  $: V,
  nodes: T,
): SyntaxNode & {$: typeof $} & T {
  const children = Object.values(nodes).flatMap(flatExistingNodes);
  const last = children.last()!;
  const range = rangeFromNodes(children);

  const node = {
    $,
    range,
    children: children,
    hiddenNodes: last.hiddenNodes,

    addChild(node: Node): Nothing {
      const last = this.children.last()!;
      last.hiddenNodes = this.hiddenNodes;
      this.hiddenNodes = node.hiddenNodes;
      node.hiddenNodes = [];

      this.range.stop = node.range.stop;
      this.children.push(node);
    },

    ...nodes,
  };

  last.hiddenNodes = [];
  children.forEach((x) => (x.parent = node));

  return node;
}

function flatExistingNodes(nodes: SyntaxChild): Array2<Node> {
  if (!nodes) {
    return [];
  }

  if (Array.isArray(nodes)) {
    return nodes.filter((x): x is Node => !!x);
  }

  return [nodes];
}

export type SyntaxParseResult = {spliceIndex: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (context: SyntaxContext, startIndex: Integer) => SyntaxParseResult;

const syntaxParsers: Array2<SyntaxParseFn> = [
  importSyntaxParse,
  memberSyntaxParse([MEMBER, META_MEMBER]),
  invokeSyntaxParse([]),
  prefixSyntaxParse([REST, PLUS, MINUS, NOT]),
  postfixSyntaxParse([OPTIONAL, PROMISE]),
  infixSyntaxParse([SQUARE]),
  infixSyntaxParse([MULTIPLY, DIVIDE, MOD]),
  infixSyntaxParse([PLUS, MINUS]),
  rangeSyntaxParse([RANGE]),
  infixSyntaxParse([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT]),
  infixSyntaxParse([EQUALS, NOT_EQUALS]),
  infixSyntaxParse(OPERATOR_KEYWORDS),
  infixSyntaxParse([INTERSECTION]),
  infixSyntaxParse([UNION, COMPLEMENT]),
  prefixSyntaxParse(MODIFIER_KEYWORDS, false),
  prefixSyntaxParse(CONTROL_KEYWORDS, false),
  infixSyntaxParse([COMMA]),
];

export function syntaxParse(context: SyntaxContext): Nothing {
  for (const parse of syntaxParsers) {
    let result: SyntaxParseResult = nothing;
    let startIndex = 0;

    while ((result = parse(context, startIndex))) {
      startIndex = result.spliceIndex + result.node.children.length -1;
      context.nodes.splice(result.spliceIndex, result.node.children.length, result.node);
    }
  }
}
