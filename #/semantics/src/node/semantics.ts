import {semanticsPackageType} from '#semantics';
import {Model} from '#typing';

export type Semantics = Model;

export const $Semantics = semanticsPackageType<Semantics>('Semantics');
