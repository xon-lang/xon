import {Nothing} from '../../../lib/types';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic<T extends $Semantic = $Semantic, U extends TypeSemantic = TypeSemantic>
  extends Semantic<T> {
  type: U | Nothing;
}
