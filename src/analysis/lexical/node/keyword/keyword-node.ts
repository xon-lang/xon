import { NodeType, Token } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface KeywordNode extends Token {
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
