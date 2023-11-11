import { String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface KeywordNode extends TokenNode {
  $: NodeType.KEYWORD;
}

export function keywordNode(text: String2): Partial<KeywordNode> {
  return {
    $: NodeType.KEYWORD,
    text,
  };
}
