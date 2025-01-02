import {Text, TextReference, newArrayData, newText, nothing} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticTag,
  createDiagnostic,
} from '#diagnostic';

export function predefinedDiagnostics(reference: TextReference) {
  return {
    notImplemented: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText('Error not implemented'),
        expect: newText('Create a valid error message'),
      }),

    unknownSymbol: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText('Unknown symbol'),
        expect: nothing,
      }),

    unexpectedExpression: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText('Unexpected expression'),
        expect: nothing,
      }),

    // todo should we use 'TextData' instead of 'String' for parameters ???
    expectCloseToken: (open: Text): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Token '${open}' has no close pair`),
        expect: nothing,
      }),

    // Semantic
    declarationNotFound: (name: Text): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Declaration '${name}' not found`),
        expect: nothing,
      }),

    tooManyDeclarationsFoundWithName: (name: Text): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Too many declarations found with '${name}'`),
        expect: nothing,
      }),

    shouldBeSingleItem: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Should be single item`),
        expect: nothing,
      }),

    shouldBeInteger: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Should be integer`),
        expect: nothing,
      }),

    shouldBeMemberName: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Should be member name`),
        expect: nothing,
      }),

    wrongType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Wrong type`),
        expect: nothing,
      }),

    cannotResolveType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Cannot resolve type`),
        expect: nothing,
      }),

    noTypeRequiredForConst: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`No type required for const`),
        expect: nothing,
      }),

    cannotBeUsedAsAType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Cannot be used as a type`),
        expect: nothing,
      }),

    noValueAllowed: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`No value allowed`),
        expect: nothing,
      }),

    noAttributesAllowed: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`No attributes allowed`),
        expect: nothing,
      }),

    cannotEvaluate: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Cannot evaluate`),
        expect: nothing,
      }),

    cannotFindResource: (path: Text): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Cannot find resource '${[path]}'`),
        expect: nothing,
      }),

    importValueShouldBeString: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Import value should be string`),
        expect: nothing,
      }),

    shouldBeDeclarationStatement: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Should be declaration statement`),
        expect: nothing,
      }),

    shouldNotBeBody: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Should not be body`),
        expect: nothing,
      }),

    documentationLabelAlreadyExists: (name: Text): AnalyzerDiagnostic =>
      createDiagnostic(
        reference,
        AnalyzerDiagnosticSeverity.WARNING,
        {
          actual: newText(`Documentation label '${name}' already exists`),
          expect: nothing,
        },
        nothing,
        newArrayData([AnalyzerDiagnosticTag.UNNECESSARY]),
      ),

    declarationAlreadyExists: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Declaration already exists`),
        expect: nothing,
      }),

    // translator
    cannotTranslate: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: newText(`Cannot translate`),
        expect: nothing,
      }),
  };
}
