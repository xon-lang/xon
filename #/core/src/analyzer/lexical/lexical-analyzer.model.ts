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
import {corePackageType, LexicalNode} from '#core';

export type LexicalNodeParseFn = (analyzer: LexicalAnalyzer) => LexicalNode | Nothing;

export type LexicalAnalyzer = {
  parsers: ArrayData<FunctionData<LexicalNodeParseFn>>;
  resource: TextResource;
  position: TextPosition;
  previousNode?: LexicalNode | Nothing;
  previousNonHiddenNode?: LexicalNode | Nothing;

  iterator(): IterableIterator<LexicalNode>;
  textReference(text: Text): TextReference;
  textReferenceWithNewLine(text: Text): TextReference;
  hasTextAtIndex(text: Text, index?: Integer | Nothing): Boolean2;
};

export const $LexicalAnalyzer = corePackageType('LexicalAnalyzer' /* $Analyzer */);
