import {Boolean2} from '../../../../../../lib/types';
import {$Semantic, SemanticNode, semanticIs} from '../../semantic-node';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {TypeSemantic} from '../type-semantic';
import {ComplementTypeSemantic} from './complement/complement-type-semantic';
import {IntersectionTypeSemantic} from './intersection/intersection-type-semantic';
import {NotTypeSemantic} from './not/not-type-semantic';
import {RangeTypeSemantic} from './range/range-type-semantic';
import {UnionTypeSemantic} from './union/union-type-semantic';

export function isInSet(type: TypeSemantic, setType: TypeSemantic): Boolean2 {
  if (semanticIs<IntersectionTypeSemantic>(setType, $Semantic.INTERSECTION_TYPE)) {
    return type.is(setType.left) && type.is(setType.right);
  }

  if (semanticIs<UnionTypeSemantic>(setType, $Semantic.UNION_TYPE)) {
    return type.is(setType.left) || type.is(setType.right);
  }

  if (semanticIs<ComplementTypeSemantic>(setType, $Semantic.COMPLEMENT_TYPE)) {
    return type.is(setType.left) && !type.is(setType.right);
  }

  if (semanticIs<NotTypeSemantic>(setType, $Semantic.NOT_TYPE)) {
    return !type.is(setType.value);
  }

  if (semanticIs<RangeTypeSemantic>(setType, $Semantic.RANGE_TYPE)) {
    if (
      semanticIs<IntegerTypeSemantic>(type, $Semantic.INTEGER_TYPE) &&
      semanticIs<IntegerTypeSemantic>(setType.from, $Semantic.INTEGER_TYPE) &&
      semanticIs<IntegerTypeSemantic>(setType.to, $Semantic.INTEGER_TYPE)
    ) {
      return type.value >= setType.from.value && type.value <= setType.to.value;
    }

    return false;
  }

  return type.is(setType);
}

export function isSetOperatorTypeSemantic(semantic: SemanticNode): Boolean2 {
  return semantic.$.endsWith('_SET_TYPE');
}
