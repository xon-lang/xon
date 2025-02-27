import {$AnalyzerType, NominalTypeDeclarationNode, NominalTypeDeclarationSemantic, SemanticScope, SemanticToken} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {Brand, Model} from '#typing';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    tokens: ArrayData<SemanticToken>;
    scope: SemanticScope;

    literal: {
      stringDeclaration: NominalTypeDeclarationSemantic
    }

    addToken(token: SemanticToken): void;
    pushScope(isType?: Boolean2): void;
    popScope(): void;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
