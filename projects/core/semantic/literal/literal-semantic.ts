import {Boolean2, Something} from '../../lib/core';
import {Semantic} from '../semantic';

export interface LiteralSemantic extends Semantic {
  value: Something;

  eq(semantic: LiteralSemantic): Boolean2;
}
