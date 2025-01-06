import {ArrayData, Text, newArrayData, newText} from '#common';

export type SemanticAnalyzerConfig = {
  defaultImports: ArrayData<Text>;
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
  defaultImports: newArrayData(),
  literalTypeNames: {
    unknownTypeName: newText('Unknown'),
    anythingTypeName: newText('Anything'),
    somethingTypeName: newText('Something'),
    nothingTypeName: newText('Nothing'),
    integerTypeName: newText('Integer'),
    charTypeName: newText('Char'),
    stringTypeName: newText('String'),
    rangeTypeName: newText('Range'),
    arrayTypeName: newText('Array'),
    functionTypeName: newText('Function'),
  },
};

export const TEST_SEMANTIC_CONFIG: SemanticAnalyzerConfig = {
  ...DEFAULT_SEMANTIC_CONFIG,
  defaultImports: newArrayData([newText('xon/core')]),
};
