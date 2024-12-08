import {Model} from '#common';
import {semanticsPackageType} from '#semantics';

export type Semantics = Model;

export const $Semantics = semanticsPackageType<Semantics>('Semantics');
