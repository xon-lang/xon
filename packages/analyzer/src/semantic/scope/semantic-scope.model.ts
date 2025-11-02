import {$AnalyzerType, DeclarationSemantic} from '#analyzer';
import {ArrayData, Boolean2, Brand, Dictionary, Integer, Model, Nothing, Text} from '#core';

export type SemanticScope = Model &
  Brand<'Analyzer.SemanticScope'> & {
    parent?: SemanticScope | Nothing;
    isTypeScope?: Boolean2 | Nothing;
    _declarations?: Dictionary<Text, ArrayData<DeclarationSemantic>> | Nothing;

    add(declaration: DeclarationSemantic): void;
    has(name: Text): Boolean2;
    get(name: Text): ArrayData<DeclarationSemantic> | Nothing;
    all(): ArrayData<DeclarationSemantic> | Nothing;
    count(): Integer;
  };

export const $SemanticScope = () => $AnalyzerType<SemanticScope>('SemanticScope');
