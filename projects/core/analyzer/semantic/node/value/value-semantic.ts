import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {SemanticNode} from '../semantic-node';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic<T extends $ = $, U extends TypeSemantic = TypeSemantic>
  extends SemanticNode<T> {
  type: U | Nothing;
}
