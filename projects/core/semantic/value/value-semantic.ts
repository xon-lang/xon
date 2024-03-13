import {Nothing} from '../../lib/core';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;
}
