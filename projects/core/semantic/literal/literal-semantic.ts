import {Boolean2, Something} from '../../lib/core';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {Semantic} from '../semantic';

export interface LiteralSemantic extends Semantic {
  declaration: DeclarationSemantic;
  value: Something;

  eq(semantic: LiteralSemantic): Boolean2;
}
