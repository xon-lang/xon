import { Integer, String2 } from '~/lib/core';
import { NodeType, NonHiddenTokenNode } from '~/node/node';

export interface KeywordNode extends NonHiddenTokenNode {
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
