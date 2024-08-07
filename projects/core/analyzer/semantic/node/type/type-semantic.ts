import {Array2, Boolean2, String2} from '../../../../../lib/types';
import {Semantic} from '../semantic-node';

export interface TypeSemantic extends Semantic {
  attributes(): Record<String2, Array2<TypeSemantic>>;
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
