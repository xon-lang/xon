import {Boolean2, Nothing, String2} from '../../lib/core';
import {CONSTANT_MODIFIER, MODEL_MODIFIER} from '../../parser/syntax-config';

export interface DeclarationRestrictions {
  canBeType: Boolean2;
  hasValue: Boolean2;
  hasAttributes: Boolean2;
}

export const modelRestrictions: DeclarationRestrictions = {
  canBeType: true,
  hasValue: false,
  hasAttributes: true,
};

export const constantRestrictions: DeclarationRestrictions = {
  canBeType: false,
  hasValue: true,
  hasAttributes: false,
};

export function getDeclarationRestrictionsByModifier(modifier: String2 | Nothing): DeclarationRestrictions | Nothing {
  if (modifier === MODEL_MODIFIER) {
    return modelRestrictions;
  }

  if (modifier === CONSTANT_MODIFIER) {
    return constantRestrictions;
  }
}
