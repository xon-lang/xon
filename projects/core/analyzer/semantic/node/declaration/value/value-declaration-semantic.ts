import {Nothing} from '../../../../../../lib/types';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export type ValueDeclarationSemantic = DeclarationSemantic & {
  type?: TypeSemantic | Nothing;
};
