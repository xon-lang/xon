import {Nothing} from '../../../../lib/types';
import {TextResourceRange} from '../../../util/resource/text/text-resource-range';

export interface SemanticNode<T extends $Semantic = $Semantic> {
  $: T;
  reference: TextResourceRange;
}

// todo move to Node
export enum $Semantic {
  DECLARATION = 'DECLARATION',

  TYPE = 'TYPE',
  ID_TYPE = 'DECLARATION_TYPE',
  INTEGER_TYPE = 'INTEGER_TYPE',
  STRING_TYPE = 'STRING_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  FUNCTION_TYPE = 'FUNCTION_TYPE',
  RANGE_TYPE = 'RANGE_SET_TYPE',
  INTERSECTION_TYPE = 'INTERSECTION_SET_TYPE',
  UNION_TYPE = 'UNION_SET_TYPE',
  COMPLEMENT_TYPE = 'COMPLEMENT_SET_TYPE',
  NOT_TYPE = 'NOT_SET_TYPE',

  VALUE = 'VALUE',
  ID_VALUE = 'ID_VALUE',
  INVOKE_VALUE = 'INVOKE_VALUE',
  INTEGER_VALUE = 'INTEGER_VALUE',
  STRING_VALUE = 'STRING_VALUE',
  MEMBER_VALUE = 'MEMBER_VALUE',
  IMPORT_VALUE = 'IMPORT_VALUE',
}

// use Node 'is' function
export function semanticIs<T extends SemanticNode = SemanticNode>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}
