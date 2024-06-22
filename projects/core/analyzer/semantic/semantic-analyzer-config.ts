import {Array2, String2} from '../../../lib/types';

export interface SemanticAnalyzerConfig {
  defaultImports: Array2<String2>;
  literalTypeNames: {
    integerTypeName: String2;
    stringTypeName: String2;
    rangeTypeName: String2;
    arrayTypeName: String2;
  };
}

export const DEFAULT_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  defaultImports: [],
  literalTypeNames: {
    integerTypeName: 'Integer',
    stringTypeName: 'String',
    rangeTypeName: 'Range',
    arrayTypeName: 'Array',
  },
};

export const TEST_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  ...DEFAULT_SEMANTIC_CONFIG,
  defaultImports: ['xon/core'],
};
