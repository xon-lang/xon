import {Nothing, Text, TextRange} from '#common';
import {diagnosticPackageType} from '#diagnostic';
import {Brand, Model} from '#typing';

export type AnalyzerDiagnosticMessage = Model &
  Brand<'Diagnostic.AnalyzerDiagnosticMessage'> & {
    actual: Text;
    expect?: Text | Nothing;
  };

const $AnalyzerDiagnosticMessage = diagnosticPackageType('AnalyzerDiagnosticMessage');

export function newAnalyzerDiagnosticMessage(
  actual: Text,
  expect?: Text | Nothing,
): AnalyzerDiagnosticMessage {
  return {
    $: $AnalyzerDiagnosticMessage,
    actual,
    expect,
  };
}

// todo remove all predefinedDiagnostics
export function predefinedDiagnostics(range: TextRange) {
  return {
    // notImplemented: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText('Error not implemented'),
    //     expect: newText('Create a valid error message'),
    //   }),
    // unknownSymbol: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText('Unknown symbol'),
    //     expect: nothing,
    //   }),
    // unexpectedExpression: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText('Unexpected expression'),
    //     expect: nothing,
    //   }),
    // // todo should we use 'TextData' instead of 'String' for parameters ???
    // expectCloseToken: (open: Text): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Token '${open}' has no close pair`),
    //     expect: nothing,
    //   }),
    // // Semantic
    // declarationNotFound: (name: Text): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Declaration '${name}' not found`),
    //     expect: nothing,
    //   }),
    // tooManyDeclarationsFoundWithName: (name: Text): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Too many declarations found with '${name}'`),
    //     expect: nothing,
    //   }),
    // shouldBeSingleItem: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Should be single item`),
    //     expect: nothing,
    //   }),
    // shouldBeInteger: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Should be integer`),
    //     expect: nothing,
    //   }),
    // shouldBeMemberName: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Should be member name`),
    //     expect: nothing,
    //   }),
    // wrongType: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Wrong type`),
    //     expect: nothing,
    //   }),
    // cannotResolveType: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Cannot resolve type`),
    //     expect: nothing,
    //   }),
    // noTypeRequiredForConst: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`No type required for const`),
    //     expect: nothing,
    //   }),
    // cannotBeUsedAsAType: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Cannot be used as a type`),
    //     expect: nothing,
    //   }),
    // noValueAllowed: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`No value allowed`),
    //     expect: nothing,
    //   }),
    // noAttributesAllowed: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`No attributes allowed`),
    //     expect: nothing,
    //   }),
    // cannotEvaluate: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Cannot evaluate`),
    //     expect: nothing,
    //   }),
    // cannotFindResource: (path: Text): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Cannot find resource '${[path]}'`),
    //     expect: nothing,
    //   }),
    // importValueShouldBeString: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Import value should be string`),
    //     expect: nothing,
    //   }),
    // shouldBeDeclarationStatement: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Should be declaration statement`),
    //     expect: nothing,
    //   }),
    // shouldNotBeBody: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Should not be body`),
    //     expect: nothing,
    //   }),
    // documentationLabelAlreadyExists: (name: Text): AnalyzerDiagnostic =>
    //   newDiagnostic(
    //     range,
    //     AnalyzerDiagnosticSeverity.WARNING,
    //     {
    //       actual: newText(`Documentation label '${name}' already exists`),
    //       expect: nothing,
    //     },
    //     nothing,
    //     newArrayData([AnalyzerDiagnosticTag.UNNECESSARY]),
    //   ),
    // declarationAlreadyExists: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Declaration already exists`),
    //     expect: nothing,
    //   }),
    // // translator
    // cannotTranslate: (): AnalyzerDiagnostic =>
    //   newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
    //     actual: newText(`Cannot translate`),
    //     expect: nothing,
    //   }),
  };
}
