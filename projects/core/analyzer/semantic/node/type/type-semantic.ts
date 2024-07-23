import {Boolean2} from '../../../../../lib/types';
import {DeclarationManager} from '../../declaration-manager';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  // todo use another manager. AttributeManager ??? or add generic to DeclarationManager<ValueDeclarationSemantic>
  attributes(): DeclarationManager;
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}
