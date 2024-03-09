import {String2} from '../../lib/core';
import {Semantic} from '../semantic';
import {DeclarationTypeSemantic} from '../type/declaration/declaration-type-semantic';

export interface DeclarationSemantic extends Semantic {
  usages: DeclarationTypeSemantic[];
  name: String2;
}
