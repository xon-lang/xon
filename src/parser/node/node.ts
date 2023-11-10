import { Integer } from '~/lib/core';
import { NodeType } from './node-type';
import { TokenNode } from './token-node';

export interface Node {
  readonly $: NodeType;
  start: Integer;
  stop: Integer;
  hidden: TokenNode[];
}
