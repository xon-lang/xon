import {analyzerPackageType, LexicalNode} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  FunctionData,
  Integer,
  Nothing,
  Text,
  TextPosition,
  TextReference,
  TextResource,
} from '#common';

export type LexicalNodeParseFn = (analyzer: LexicalAnalyzer) => LexicalNode | Nothing;

export type LexicalAnalyzer = {
  resource: TextResource;
  position: TextPosition;
  previousNode?: LexicalNode | Nothing;
  previousNonHiddenNode?: LexicalNode | Nothing;

  iterator(parsers: ArrayData<FunctionData<LexicalNodeParseFn>>): IterableIterator<LexicalNode>;
  textReference(text: Text): TextReference;
  textReferenceWithNewLine(text: Text): TextReference;
  hasTextAtIndex(text: Text, index?: Integer | Nothing): Boolean2;
};

export const $LexicalAnalyzer = analyzerPackageType('LexicalAnalyzer' /* $Analyzer */);
