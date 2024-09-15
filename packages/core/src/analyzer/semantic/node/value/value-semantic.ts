import {$} from '../../../../$';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic<T extends $ = $, TYPE extends TypeSemantic = TypeSemantic>
  extends Semantic<T> {
  type: TYPE;
}
