import {Array2, Nothing, String2} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {Semantic} from '../semantic';
import {ValueDeclarationSemantic} from './value/value-declaration-semantic';

export interface DeclarationSemantic extends Semantic {
  usages: Array2<SourceReference>;
  modifier: String2 | Nothing;
  name: String2;
  generics: Array2<ValueDeclarationSemantic | Nothing> | Nothing;
}
