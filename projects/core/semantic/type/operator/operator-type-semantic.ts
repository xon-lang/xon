import {Boolean2} from '../../../lib/core';
import {$Semantic, Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../type-semantic';
import {IntersectionOperatorTypeSemantic} from './intersection/intersection-operator-type-semantic';
import {UnionOperatorTypeSemantic} from './union/union-operator-type-semantic';

export interface OperatorTypeSemantic extends TypeSemantic {
  left: TypeSemantic;
  right: TypeSemantic;
}

export function isInSet(type: TypeSemantic, operatorType: OperatorTypeSemantic): Boolean2 {
  if (semanticIs<UnionOperatorTypeSemantic>(type, $Semantic.UNION_OPERATOR_TYPE)) {
    return operatorType.left.is(type) || operatorType.right.is(type);
  }

  if (semanticIs<IntersectionOperatorTypeSemantic>(type, $Semantic.INTERSECTION_OPERATOR_TYPE)) {
    return operatorType.left.is(type) && operatorType.right.is(type);
  }

  return type.is(operatorType);
}

export function isOperatorTypeSemantic(semantic: Semantic): semantic is OperatorTypeSemantic {
  return semantic.$.endsWith('_OPERATOR_TYPE');
}
