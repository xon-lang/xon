import {Boolean2, Nothing} from '../../../../../lib/types';
import {DeclarationManager} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../declaration/type/type-declaration-semantic';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  declaration?: TypeDeclarationSemantic | Nothing;

  // todo use another manager. AttributeManager ??? or add generic to DeclarationManager<ValueDeclarationSemantic>
  attributes(): DeclarationManager;
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
