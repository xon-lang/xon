import {Array2, Nothing} from '../../../../../../lib/types';
import {DeclarationSemantic} from '../declaration-semantic';

export type TypeDeclarationSemantic = DeclarationSemantic & {
  generics?: Array2<DeclarationSemantic | Nothing> | Nothing;
};
