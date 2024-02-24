import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { $Node, Node } from '../node';
import { CommentLineNode } from './comment/comment-line-node';
import { JoiningNode } from './joining/joining-node';
import { WhitespaceNode } from './whitespace/whitespace-node';

export type HiddenNode = WhitespaceNode | JoiningNode | CommentLineNode;

export interface TokenNode extends Node {
  text: String2;
  hiddenNodes: HiddenNode[];
}

export function token<T extends $Node>($: T, range: SourceRange, text: String2): TokenNode & { $: T } {
  return {
    $,
    range,
    text,
    hiddenNodes: [],
  };
}
