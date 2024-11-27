import {newTextData, String2, TextData} from '#common';

export type SemanticAnalyzerConfig = {
  defaultImports: String2[];
  literalTypeNames: {
    unknownTypeName: TextData;
    anythingTypeName: TextData;
    somethingTypeName: TextData;
    nothingTypeName: TextData;
    integerTypeName: TextData;
    charTypeName: TextData;
    stringTypeName: TextData;
    rangeTypeName: TextData;
    arrayTypeName: TextData;
    functionTypeName: TextData;
  };
};

export const DEFAULT_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  defaultImports: [],
  literalTypeNames: {
    unknownTypeName: newTextData('Unknown'),
    anythingTypeName: newTextData('Anything'),
    somethingTypeName: newTextData('Something'),
    nothingTypeName: newTextData('Nothing'),
    integerTypeName: newTextData('Integer'),
    charTypeName: newTextData('Char'),
    stringTypeName: newTextData('String'),
    rangeTypeName: newTextData('Range'),
    arrayTypeName: newTextData('Array'),
    functionTypeName: newTextData('Function'),
  },
};

export const TEST_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  ...DEFAULT_SEMANTIC_CONFIG,
  defaultImports: ['xon/core'],
};
