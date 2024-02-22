import { String2 } from '../../../lib/core';
import { UsageSemantic } from '../usage-semantic';

export interface TypeSemantic extends UsageSemantic {
  attributes(): Record<String2, TypeSemantic[]>;
}
