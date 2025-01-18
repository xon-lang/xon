import {CharNode} from '#analyzer';
import {ArrayData, Integer, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newAnalyzerDiagnosticMessage,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseCharNode(this: CharNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.contentNode) {
    diagnostics.addLastItem(charHasNoContent(this.openNode.range));
  } else if (this.contentNode.text.count() > 1) {
    diagnostics.addLastItem(
      characterContainsManyElements(this.openNode.range, this.contentNode.text.count()),
    );
  }

  if (!this.closeNode) {
    diagnostics.addLastItem(theCharacterDoesNotHaveAClosingQuote(this.openNode.range));
  }

  return diagnostics;
}

function charHasNoContent(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(newText(`Character has no content`), newText(`Should be only character`)),
  );
}

function characterContainsManyElements(range: TextRange, charactersCount: Integer): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(
      newText(`Character contains ${charactersCount} elements`),
      newText(`Should be only character`),
    ),
  );
}

function theCharacterDoesNotHaveAClosingQuote(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(
      newText(`Character does not have a closing quote`),
      newText(`Expect close token`),
    ),
  );
}
