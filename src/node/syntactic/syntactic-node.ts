import { Integer } from '~/lib/core';
import { Node } from '../node';

export interface SyntacticNode extends Node {
  start: Integer;
  stop: Integer;
}
