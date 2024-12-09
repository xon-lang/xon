import {Boolean2, Integer, Nothing, Text, TextPosition, TextReference, TextResource} from '#common';
import {LexicalNode} from '#core';

export type LexicalNodeParseFn = (analyzer: LexicalAnalyzer) => LexicalNode | Nothing;

export type LexicalAnalyzer = {
  parsers: LexicalNodeParseFn[];
  resource: TextResource;
  position: TextPosition;
  previousNode?: LexicalNode | Nothing;
  previousNonHiddenNode?: LexicalNode | Nothing;

  iterator(): IterableIterator<LexicalNode>;
  getResourceRange(text: Text): TextReference;
  getResourceRangeWithNL(text: Text): TextReference;
  checkTextAtIndex(text: Text, index?: Integer | Nothing): Boolean2;
};
