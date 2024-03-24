import {Boolean2} from '../../../lib/core';
import {$Semantic, Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../type-semantic';
import {ComplementOperatorTypeSemantic} from './complement/complement-operator-type-semantic';
import {IntersectionOperatorTypeSemantic} from './intersection/intersection-operator-type-semantic';
import {NotOperatorTypeSemantic} from './not/not-operator-type-semantic';
import {UnionOperatorTypeSemantic} from './union/union-operator-type-semantic';

export interface OperatorTypeSemantic extends TypeSemantic {}

export function isInSet(type: TypeSemantic, operatorType: OperatorTypeSemantic): Boolean2 {
  if (semanticIs<UnionOperatorTypeSemantic>(operatorType, $Semantic.UNION_OPERATOR_TYPE)) {
    return type.is(operatorType.left) || type.is(operatorType.right);
  }

  if (semanticIs<IntersectionOperatorTypeSemantic>(operatorType, $Semantic.INTERSECTION_OPERATOR_TYPE)) {
    return type.is(operatorType.left) && type.is(operatorType.right);
  }

  if (semanticIs<ComplementOperatorTypeSemantic>(operatorType, $Semantic.COMPLEMENT_OPERATOR_TYPE)) {
    return type.is(operatorType.left) && !type.is(operatorType.right);
  }

  if (semanticIs<NotOperatorTypeSemantic>(operatorType, $Semantic.NOT_OPERATOR_TYPE)) {
    return !type.is(operatorType.value);
  }

  return type.is(operatorType);
}

export function isSetOperatorTypeSemantic(semantic: Semantic): semantic is OperatorTypeSemantic {
  return semantic.$.endsWith('_OPERATOR_TYPE');
}
