import {Array2, Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {Semantic} from '../semantic';

export type DeclarationSemantic = Semantic & {
  documentation?: String2 | Nothing;
  usages: Array2<TextResourceRange>;
  modifier?: String2 | Nothing;
  name: String2;

  eq(other: DeclarationSemantic): Boolean2;
};
