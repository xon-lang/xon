import {Boolean2, Nothing} from '../../../../../../lib/types';
import {DeclarationScope} from '../../declaration-scope';
import {TypeDeclarationSemantic} from '../declaration/type/type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../declaration/value/attribute/attribute-value-declaration-semantic';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantic>;

  // todo '(unknown is unknown === false)' ???
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
