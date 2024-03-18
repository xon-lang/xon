import {Nothing, String2} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {Semantic} from '../semantic';
import {ValueDeclarationSemantic} from './var/var-declaration-semantic';

export interface DeclarationSemantic extends Semantic {
  usages: SourceReference[];
  modifier: String2 | Nothing;
  name: String2;
  generics: (ValueDeclarationSemantic | Nothing)[] | Nothing;
}
