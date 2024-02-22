import { Boolean2, String2 } from '../../../lib/core';
import { UsageSemantic } from '../usage-semantic';

export interface TypeSemantic extends UsageSemantic {
  attributes(): Record<String2, TypeSemantic[]>;
  eq(type: TypeSemantic): Boolean2;
  is(type: TypeSemantic): Boolean2;
}
