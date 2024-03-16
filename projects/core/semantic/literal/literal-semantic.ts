import {Boolean2, Something} from '../../lib/core';
import {Semantic} from '../semantic';
import {DeclarationTypeSemantic} from '../type/declaration/declaration-type-semantic';

export interface LiteralSemantic extends Semantic {
  type: DeclarationTypeSemantic;
  value: Something;

  eq(semantic: LiteralSemantic): Boolean2;
}
