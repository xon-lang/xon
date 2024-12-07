import {Model_V2} from '#common';
import {semanticsPackageType} from '#semantics';

// tod rename to semantics
export type Semantic = Model_V2;

export const $Semantics = semanticsPackageType<Semantic>('Semantics');
