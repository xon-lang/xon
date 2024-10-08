import {Boolean2, Nothing} from '../../../../../lib/types';
import {DeclarationManager} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../declaration/type/type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../declaration/value/attribute/attribute-value-declaration-semantic';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationManager<AttributeValueDeclarationSemantic>;

  // todo '(unknown is unknown === false)' ???
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
