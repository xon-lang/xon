import {$AnalyzerType, NominalTypeDeclarationSemantic, SemanticScope} from '#analyzer';
import {Boolean2} from '#common';
import {Brand, Model} from '#typing';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    scope: SemanticScope;

    literal: {
      stringDeclaration: NominalTypeDeclarationSemantic;
    };

    pushScope(isType?: Boolean2): void;
    popScope(): void;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
