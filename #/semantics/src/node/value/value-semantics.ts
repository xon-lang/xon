import {Semantics, TypeSemantics} from '#semantics';
import {$} from '#typing';

export type ValueSemantic<T extends $ = $, TYPE extends TypeSemantics = TypeSemantics> = Semantics<T> & {
  type: TYPE;
};
