import {Array2, Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export type DeclarationSemantic = Semantic & {
  documentation?: String2 | Nothing;
  usages: Array2<TextResourceRange>;
  modifier?: String2 | Nothing;
  name: String2;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};
