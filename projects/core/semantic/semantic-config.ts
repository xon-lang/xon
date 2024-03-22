import {String2} from '../lib/core';

export interface SemanticConfig {
  defaultImports: String2[];
  literalTypeNames: {
    integerTypeName: String2;
    stringTypeName: String2;
    rangeTypeName: String2;
    arrayTypeName: String2;
  };
}

export const DEFAULT_SEMANTIC_CONFIG: SemanticConfig = {
  defaultImports: [],
  literalTypeNames: {
    integerTypeName: 'Integer',
    stringTypeName: 'String',
    rangeTypeName: 'Range',
    arrayTypeName: 'Array',
  },
};

export const TEST_SEMANTIC_CONFIG: SemanticConfig = {
  ...DEFAULT_SEMANTIC_CONFIG,
  defaultImports: ['xon/core'],
};
