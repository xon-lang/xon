import {Array2, Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {Semantic} from '../semantic';

export type DeclarationSemantic = Semantic & {
  documentation?: String2 | Nothing;
  usages: Array2<TextResourceRange>;
  modifier?: String2 | Nothing;
  name: String2;
  generics?: Array2<DeclarationSemantic> | Nothing;

  eq(other: DeclarationSemantic): Boolean2;
};
