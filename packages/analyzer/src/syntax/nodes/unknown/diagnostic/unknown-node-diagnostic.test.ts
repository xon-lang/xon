import {newAnalyzerContext, newCharacterStreamFromText, parseUnknownNode} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('Unknown character', () => {
  const text = newText('•');
  const diagnostics = unknownNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Unknown character');
});

function unknownNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseUnknownNode(context);

  return node!.diagnose!();
}
