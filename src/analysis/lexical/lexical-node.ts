import { String2 } from '~/lib/core';
import { Token } from '../node';

export interface LexicalNode extends Token {
  text: String2;
}
