import { StringNode } from '~/node/lexical/string/string-node';
import { NodeType, is } from '~/node/node';
import { SemanticNode } from '~/node/semantic/semantic-node';
import { stringTypeNode } from '~/node/semantic/type/string/string-type-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { LexicalNode } from '../../lexical/lexical-node';

export interface TypeNode extends SemanticNode {
  $: NodeType.TYPE;
  node: LexicalNode | SyntacticNode | null;
}

export function parseTypeNode(node: LexicalNode | SemanticNode): TypeNode | null {
  if (is<StringNode>(node, NodeType.STRING)) {
    return stringTypeNode(node.text.slice(1, -1), node);
  }

  

  return null;
}
