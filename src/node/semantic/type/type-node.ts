import { IntegerNode } from '~/node/lexical/integer/integer-node';
import { StringNode } from '~/node/lexical/string/string-node';
import { NodeType, is } from '~/node/node';
import { SemanticNode } from '~/node/semantic/semantic-node';
import { parseGroupTypeNode } from '~/node/semantic/type/group/group-type-node';
import { parseIntegerTypeNode } from '~/node/semantic/type/integer/integer-type-node';
import {
  INTERSECTION_SPLITTER,
  parseIntersectionTypeNode,
} from '~/node/semantic/type/intersection/intersection-type-node';
import { parseStringTypeNode } from '~/node/semantic/type/string/string-type-node';
import { UNION_SPLITTER, parseUnionTypeNode } from '~/node/semantic/type/union/union-type-node';
import { GroupNode } from '~/node/syntactic/group/group-node';
import { InfixNode } from '~/node/syntactic/infix/infix-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { LexicalNode } from '../../lexical/lexical-node';

export interface TypeNode extends SemanticNode {
  node: LexicalNode | SyntacticNode | null;
}

export function parseTypeNode(node: LexicalNode | SemanticNode): TypeNode | null {
  if (is<GroupNode>(node, NodeType.GROUP)) {
    return parseGroupTypeNode(node);
  }

  if (is<StringNode>(node, NodeType.STRING)) {
    return parseStringTypeNode(node);
  }

  if (is<IntegerNode>(node, NodeType.INTEGER)) {
    return parseIntegerTypeNode(node);
  }

  if (is<InfixNode>(node, NodeType.INFIX)) {
    return parseInfixType(node);
  }

  return null;
}

function parseInfixType(node: InfixNode): TypeNode | null {
  if (node.operator.text === UNION_SPLITTER) {
    return parseUnionTypeNode(node);
  }

  if (node.operator.text === INTERSECTION_SPLITTER) {
    return parseIntersectionTypeNode(node);
  }

  return null;
}
