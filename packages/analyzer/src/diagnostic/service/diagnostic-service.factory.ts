import {$AnalyzerDiagnostic, $DiagnosticService, AnalyzerDiagnostic, DiagnosticService} from '#analyzer';
import {newArrayData} from '#core';

export function newDiagnosticService(): DiagnosticService {
  return {
    $: $DiagnosticService(),
    items: newArrayData($AnalyzerDiagnostic()),

    add(diagnostic: AnalyzerDiagnostic): void {
      this.items.addLastItem(diagnostic);
    },
  };
}
