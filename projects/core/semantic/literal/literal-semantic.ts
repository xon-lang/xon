import {Boolean2, Something} from '../../lib/core';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface LiteralSemantic extends Semantic {
  declaration: DeclarationSemantic;
  baseType: TypeSemantic;
  value: Something;

  eq(semantic: LiteralSemantic): Boolean2;
}
