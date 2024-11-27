import {Semantic, TypeSemantic} from '#core';
import {$} from '#typing';

export type ValueSemantic<T extends $ = $, TYPE extends TypeSemantic = TypeSemantic> = Semantic<T> & {
  type: TYPE;
};
