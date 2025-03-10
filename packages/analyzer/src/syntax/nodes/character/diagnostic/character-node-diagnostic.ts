import {CharacterNode, DiagnosticContext} from '#analyzer';
import {TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseCharacterNode(this: CharacterNode, context: DiagnosticContext): void {
  if (!this.content || this.content.text.count() > 1) {
    context.add(expectOnlyCharacter(this.open.range));
  }

  if (!this.close) {
    context.add(expectCloseToken(this.open.range));
  }
}

function expectOnlyCharacter(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Only character expect`),
  );
}

function expectCloseToken(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Close token expect`),
  );
}
