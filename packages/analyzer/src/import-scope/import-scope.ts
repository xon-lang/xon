import {$AnalyzerType, DeclarationSemantic} from '#analyzer';
import {ArrayData, Dictionary, Nothing, Text} from '#common';
import {Brand, Model} from '#typing';

export type ImportScope = Model &
  Brand<'Diagnostic.ImportScope'> & {
    _declarations?: Dictionary<Text, ArrayData<DeclarationSemantic>> | Nothing;

    get(name: Text): DeclarationSemantic | Nothing;
  };

export const $ImportScope = () => $AnalyzerType('ImportScope');
