import {$AnalyzerType, NominalTypeDeclarationSemantic, SemanticScope} from '#analyzer';
import {Boolean2, TextRange, TextReference, Uri} from '#common';
import {Brand, Model} from '#typing';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    uri: Uri;
    scope: SemanticScope;

    literal: {
      stringDeclaration: NominalTypeDeclarationSemantic;
    };

    pushScope(isType?: Boolean2): void;
    popScope(): void;
    getReference(range: TextRange): TextReference;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
