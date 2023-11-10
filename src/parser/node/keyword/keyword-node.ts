import { Integer, String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface KeywordNode extends TokenNode {
  $: NodeType.KEYWORD;
}

export function keywordNode(start: Integer, stop: Integer, text: String2): KeywordNode {
  return {
    $: NodeType.KEYWORD,
    start,
    stop,
    text,
  };
}
