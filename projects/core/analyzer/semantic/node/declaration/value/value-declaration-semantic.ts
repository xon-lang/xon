import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export type ValueDeclarationSemantic = DeclarationSemantic & {
  type: TypeSemantic;
};
