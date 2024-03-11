import {Nothing, String2} from '../../lib/core';
import {Semantic} from '../semantic';
import {DeclarationTypeSemantic} from '../type/declaration/declaration-type-semantic';
import {TypeDeclarationSemantic} from './type/type-declaration-semantic';

export interface DeclarationSemantic extends Semantic {
  usages: DeclarationTypeSemantic[];
  modifier: String2 | Nothing;
  name: String2;
  generics: (TypeDeclarationSemantic | Nothing)[] | Nothing;
  attributes: Record<String2, DeclarationSemantic[]>;
}
