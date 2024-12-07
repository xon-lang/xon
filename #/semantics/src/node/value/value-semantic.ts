import {Semantic, TypeSemantic} from '#semantics';
import {$} from '#typing';

export type ValueSemantic<T extends $ = $, TYPE extends TypeSemantic = TypeSemantic> = Semantic<T> & {
  type: TYPE;
};
