import {Boolean2, Something} from '../../lib/core';
import {TypeDeclarationSemantic} from '../declaration/type/type-declaration-semantic';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface LiteralSemantic extends Semantic {
  declaration: TypeDeclarationSemantic;
  // todo remove and use getType from declaration
  baseType: TypeSemantic;
  value: Something;

  eq(semantic: LiteralSemantic): Boolean2;
}
