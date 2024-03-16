import {Nothing, String2} from '../lib/core';
import {DEFAULT_CORE_PATH} from './core';

export interface SemanticConfig {
  corePath: String2;
  literalTypeNames: {
    integerTypeName: String2;
    stringTypeName: String2;
    rangeTypeName: String2;
  };
}

export function createSemanticConfig(params: Partial<SemanticConfig> | Nothing): SemanticConfig {
  return {
    corePath: params?.corePath ?? DEFAULT_CORE_PATH,
    literalTypeNames: {
      integerTypeName: params?.literalTypeNames?.integerTypeName ?? 'Integer',
      stringTypeName: params?.literalTypeNames?.stringTypeName ?? 'String',
      rangeTypeName: params?.literalTypeNames?.stringTypeName ?? 'Range',
    },
  };
}
