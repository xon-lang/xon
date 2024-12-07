import {Model_V2} from '#common';
import {semanticsPackageType} from '#semantics';

export type Semantics = Model_V2;

export const $Semantics = semanticsPackageType<Semantics>('Semantics');
