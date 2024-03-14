import {join} from 'path';
import {Nothing, String2} from '../lib/core';

export interface SemanticConfig {
  coreDir: String2;
}

const DEFAULT_CORE_PATH = join(__dirname, '../lib/@xon/core/test.xon');

export function createSemanticConfig(params: Partial<SemanticConfig> | Nothing): SemanticConfig {
  return {
    coreDir: params?.coreDir ?? DEFAULT_CORE_PATH,
  };
}
