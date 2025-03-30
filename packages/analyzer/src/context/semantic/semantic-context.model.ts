import {$AnalyzerType, NominalTypeDeclarationSemantic, SemanticScope} from '#analyzer';
import {Boolean2, Text, TextRange, TextReference} from '#common';
import {Brand, Model} from '#typing';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    // todo use 'uri' type
    sourceLocation: Text;
    scope: SemanticScope;

    literal: {
      stringDeclaration: NominalTypeDeclarationSemantic;
    };

    pushScope(isType?: Boolean2): void;
    popScope(): void;
    getReference(range: TextRange): TextReference;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
