import {AnalyzerFormatter} from '#analyzer';
import {ArrayData} from '#common';
import {convertRange, getDocumentSemantic, LANGUAGE_NAME} from '#vscode';
import {
  CancellationToken,
  DocumentFormattingEditProvider,
  DocumentRangeFormattingEditProvider,
  ExtensionContext,
  FormattingOptions,
  languages,
  OutputChannel,
  ProviderResult,
  Range,
  TextDocument,
  TextEdit,
} from 'vscode';

export function configureFormattingFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerDocumentFormattingEditProvider(
      LANGUAGE_NAME,
      new LanguageDocumentFormattingEditProvider(channel),
    ),
  );

  context.subscriptions.push(
    languages.registerDocumentRangeFormattingEditProvider(
      LANGUAGE_NAME,
      new LanguageDocumentRangeFormattingEditProvider(channel),
    ),
  );
}

export class LanguageDocumentFormattingEditProvider implements DocumentFormattingEditProvider {
  constructor(private channel: OutputChannel) {}

  provideDocumentFormattingEdits(
    document: TextDocument,
    options: FormattingOptions,
    token: CancellationToken,
  ): ProviderResult<TextEdit[]> {
    const formatters = getDocumentFormatters(document, this.channel);

    return formatters.toNativeArray();
  }
}

export class LanguageDocumentRangeFormattingEditProvider implements DocumentRangeFormattingEditProvider {
  constructor(private channel: OutputChannel) {}

  provideDocumentRangeFormattingEdits(
    document: TextDocument,
    range: Range,
    options: FormattingOptions,
    token: CancellationToken,
  ): ProviderResult<TextEdit[]> {
    const formatters = getDocumentFormatters(document, this.channel).filter((x) => range.contains(x.range));

    return formatters.toNativeArray();
  }

  provideDocumentRangesFormattingEdits?(
    document: TextDocument,
    ranges: Range[],
    options: FormattingOptions,
    token: CancellationToken,
  ): ProviderResult<TextEdit[]> {
    const formatters = getDocumentFormatters(document, this.channel).filter((x) =>
      ranges.some((z) => z.contains(x.range)),
    );

    return formatters.toNativeArray();
  }

  provideDocumentFormattingEdits(document: TextDocument): ProviderResult<TextEdit[]> {
    const semantic = getDocumentSemantic(document, this.channel);
    const edits = semantic.syntaxAnalyzer.formatterManager.items.map(convertFormatter);

    return edits.toNativeArray();
  }
}

function getDocumentFormatters(document: TextDocument, channel: OutputChannel): ArrayData<TextEdit> {
  const semantic = getDocumentSemantic(document, channel);

  return semantic.syntaxAnalyzer.formatterManager.items.map(convertFormatter);
}

function convertFormatter(formatter: AnalyzerFormatter): TextEdit {
  return TextEdit.replace(convertRange(formatter.range), formatter.text.toNativeString());
}
