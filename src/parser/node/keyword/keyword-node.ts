import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface KeywordNode extends TokenNode {
  $: NodeType.KEYWORD;
}

export function keywordNode(range: SourceRange, text: String2): KeywordNode {
  return {
    $: NodeType.KEYWORD,
    range,
    text,
  };
}
