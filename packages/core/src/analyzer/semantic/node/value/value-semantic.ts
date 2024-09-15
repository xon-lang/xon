import {$, Semantic, TypeSemantic} from '#core';

export interface ValueSemantic<T extends $ = $, TYPE extends TypeSemantic = TypeSemantic>
  extends Semantic<T> {
  type: TYPE;
}
