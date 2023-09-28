import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/node/lexical-node';
import { NodeType } from '~/node/node';

export interface KeywordNode extends NonHiddenLexicalNode {
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
