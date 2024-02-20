import { String2 } from '../../lib/core';
import { Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface DeclarationSemantic extends Semantic {
  usages: UsageSemantic[];
  name: String2;
}
