import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {Semantic} from '../semantic-node';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic<T extends $ = $, U extends TypeSemantic = TypeSemantic> extends Semantic<T> {
  type: U | Nothing;
}
