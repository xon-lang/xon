import {String2, nothing} from '../../lib/types';
import {TextResourceRange} from '../util/resource/text/text-resource-range';
import {AnalyzerDiagnostic, createDiagnostic} from './analyzer-diagnostic';
import {AnalyzerDiagnosticSeverity} from './analyzer-diagnostic-severity';
import {AnalyzerDiagnosticTag} from './analyzer-diagnostic-tag';

export function predefinedDiagnostics(reference: TextResourceRange) {
  return {
    notImplemented: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: 'Error not implemented',
        expect: 'Create a valid error message',
      }),

    unknownSymbol: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: 'Unknown symbol',
        expect: nothing,
      }),

    unexpectedExpression: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: 'Unexpected expression',
        expect: nothing,
      }),

    // todo should we use 'TextData' instead of 'String' for parameters ???
    expectCloseToken: (open: String2): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Token '${open}' has no close pair`,
        expect: nothing,
      }),

    // Semantic
    declarationNotFound: (name: String2): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Declaration '${name}' not found`,
        expect: nothing,
      }),

    tooManyDeclarationsFoundWithName: (name: String2): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Too many declarations found with '${name}'`,
        expect: nothing,
      }),

    shouldBeSingleItem: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Should be single item`,
        expect: nothing,
      }),

    shouldBeInteger: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Should be integer`,
        expect: nothing,
      }),

    shouldBeMemberName: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Should be member name`,
        expect: nothing,
      }),

    wrongType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Wrong type`,
        expect: nothing,
      }),

    cannotResolveType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Cannot resolve type`,
        expect: nothing,
      }),

    noTypeRequiredForConst: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `No type required for const`,
        expect: nothing,
      }),

    cannotBeUsedAsAType: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Cannot be used as a type`,
        expect: nothing,
      }),

    noValueAllowed: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `No value allowed`,
        expect: nothing,
      }),

    noAttributesAllowed: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `No attributes allowed`,
        expect: nothing,
      }),

    cannotEvaluate: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Cannot evaluate`,
        expect: nothing,
      }),

    cannotFindResource: (path: String2): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Cannot find resource '${[path]}'`,
        expect: nothing,
      }),

    importValueShouldBeString: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Import value should be string`,
        expect: nothing,
      }),

    shouldBeDeclarationStatement: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Should be declaration statement`,
        expect: nothing,
      }),

    shouldNotBeBody: (): AnalyzerDiagnostic =>
      createDiagnostic(reference, AnalyzerDiagnosticSeverity.ERROR, {
        actual: `Should not be body`,
        expect: nothing,
      }),

    documentationLabelAlreadyExists: (name: String2): AnalyzerDiagnostic =>
      createDiagnostic(
        reference,
        AnalyzerDiagnosticSeverity.WARNING,
        {
          actual: `Documentation label '${name}' already exists`,
          expect: nothing,
        },
        nothing,
        [AnalyzerDiagnosticTag.UNNECESSARY],
      ),
  };
}
