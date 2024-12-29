import {FormatterItem} from '#core';
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
    return getDocumentFormatters(document, this.channel);
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

    return formatters;
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

    return formatters;
  }

  provideDocumentFormattingEdits(document: TextDocument): ProviderResult<TextEdit[]> {
    const semantic = getDocumentSemantic(document, this.channel);
    const edits = semantic.syntaxAnalyzer.formatterManager.items.map(convertFormatter);

    return edits;
  }
}

function getDocumentFormatters(document: TextDocument, channel: OutputChannel): TextEdit[] {
  const semantic = getDocumentSemantic(document, channel);
  const edits = semantic.syntaxAnalyzer.formatterManager.items.map(convertFormatter);

  return edits;
}

function convertFormatter(formatter: FormatterItem): TextEdit {
  return TextEdit.replace(convertRange(formatter.range), formatter.text);
}
