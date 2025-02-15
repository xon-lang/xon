import {$AnalyzerType, $DeclarationSemantic, DeclarationSemantic} from '#analyzer';
import {Brand} from '#typing';

export type ValueDeclarationSemantic = DeclarationSemantic & Brand<'Analyzer.ValueDeclarationSemantic'>;

export const $ValueDeclarationSemantic = () =>
  $AnalyzerType<ValueDeclarationSemantic>('ValueDeclarationSemantic', $DeclarationSemantic());
