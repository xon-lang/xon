import {String2} from '../../../../lib/src/types';

export interface SemanticAnalyzerConfig {
  defaultImports: String2[];
  literalTypeNames: {
    unknownTypeName: String2;
    anythingTypeName: String2;
    somethingTypeName: String2;
    nothingTypeName: String2;
    integerTypeName: String2;
    charTypeName: String2;
    stringTypeName: String2;
    rangeTypeName: String2;
    arrayTypeName: String2;
    functionTypeName: String2;
  };
}

export const DEFAULT_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  defaultImports: [],
  literalTypeNames: {
    unknownTypeName: 'Unknown',
    anythingTypeName: 'Anything',
    somethingTypeName: 'Something',
    nothingTypeName: 'Nothing',
    integerTypeName: 'Integer',
    charTypeName: 'Char',
    stringTypeName: 'String',
    rangeTypeName: 'Range',
    arrayTypeName: 'Array',
    functionTypeName: 'Function',
  },
};

export const TEST_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  ...DEFAULT_SEMANTIC_CONFIG,
  defaultImports: ['xon/core'],
};
