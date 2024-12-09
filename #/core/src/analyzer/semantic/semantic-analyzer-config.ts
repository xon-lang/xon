import {Text, newTextData} from '#common';
import {String2} from '#typing';

export type SemanticAnalyzerConfig = {
  defaultImports: String2[];
  literalTypeNames: {
    unknownTypeName: Text;
    anythingTypeName: Text;
    somethingTypeName: Text;
    nothingTypeName: Text;
    integerTypeName: Text;
    charTypeName: Text;
    stringTypeName: Text;
    rangeTypeName: Text;
    arrayTypeName: Text;
    functionTypeName: Text;
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
