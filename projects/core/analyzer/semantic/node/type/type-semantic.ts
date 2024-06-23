import {Array2, Boolean2, String2} from '../../../../../lib/types';
import {SemanticNode} from '../semantic-node';

export interface TypeSemantic extends SemanticNode {
  attributes(): Record<String2, Array2<TypeSemantic>>;
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}

export function isTypeSemantic(semantic: SemanticNode): semantic is TypeSemantic {
  return semantic.$.endsWith('_TYPE');
}
