import {Boolean2, String2} from '../../lib/core';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  attributes(): Record<String2, TypeSemantic[]>;
  eq(semantic: TypeSemantic): Boolean2;
  is(semantic: TypeSemantic): Boolean2;
}

// todo remove this hack
export function isTypeSemantic(semantic: Semantic): semantic is TypeSemantic {
  return semantic.$.endsWith('_TYPE');
}
