import {Nothing, String2} from '../lib/core';
import {DEFAULT_CORE_PATH} from './core';

export interface SemanticConfig {
  coreDir: String2;
  literalTypes: {
    integer: String2;
    string: String2;
  };
}

export function createSemanticConfig(params: Partial<SemanticConfig> | Nothing): SemanticConfig {
  return {
    coreDir: params?.coreDir ?? DEFAULT_CORE_PATH,
    literalTypes: {
      integer: params?.literalTypes?.integer ?? 'Integer',
      string: params?.literalTypes?.string ?? 'String',
    },
  };
}
