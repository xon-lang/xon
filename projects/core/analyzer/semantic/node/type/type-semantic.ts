import {Boolean2, Nothing} from '../../../../../lib/types';
import {DeclarationManager} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../declaration/type/type-declaration-semantic';
import {ValueDeclarationSemantic} from '../declaration/value/value-declaration-semantic';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationManager<ValueDeclarationSemantic>;
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
