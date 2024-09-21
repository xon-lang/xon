import {Semantic, TypeSemantic} from '#core';
import {$} from '#typing';

export interface ValueSemantic<T extends $ = $, TYPE extends TypeSemantic = TypeSemantic>
  extends Semantic<T> {
  type: TYPE;
}
