import {CharacterNode} from '#analyzer';
import {ArrayData, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseCharacterNode(this: CharacterNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.contentNode || this.contentNode.text.count() > 1) {
    diagnostics.addLastItem(expectOnlyCharacter(this.openNode.range));
  }

  if (!this.closeNode) {
    diagnostics.addLastItem(expectCloseToken(this.openNode.range));
  }

  return diagnostics;
}

function expectOnlyCharacter(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Expect only character`),
  );
}

function expectCloseToken(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Expect close token`),
  );
}
