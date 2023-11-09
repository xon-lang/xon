import { Integer, String2 } from '~/lib/core';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface KeywordNode extends TokenNode {
  $: NodeType.KEYWORD;
}

export function keywordNode(start: Integer, stop: Integer, text: String2): KeywordNode {
  return {
    $: NodeType.KEYWORD,
    hidden: [],
    start,
    stop,
    text,
  };
}
