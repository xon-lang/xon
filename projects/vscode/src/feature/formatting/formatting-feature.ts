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

import {LANGUAGE_NAME} from '../../config';
import {convertFormatter, getDocumentSyntax} from '../../util';

export function configureFormatterFeature(context: ExtensionContext, channel: OutputChannel) {
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
    return getDocumentFormatters(document);
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
    const formatters = getDocumentFormatters(document).filter((x) => range.contains(x.range));

    return formatters;
  }

  provideDocumentRangesFormattingEdits?(
    document: TextDocument,
    ranges: Range[],
    options: FormattingOptions,
    token: CancellationToken,
  ): ProviderResult<TextEdit[]> {
    const formatters = getDocumentFormatters(document).filter((x) => ranges.some((z) => z.contains(x.range)));

    return formatters;
  }

  provideDocumentFormattingEdits(document: TextDocument): ProviderResult<TextEdit[]> {
    const syntax = getDocumentSyntax(document);
    const edits = syntax.formatterManager.formatters.map(convertFormatter);

    return edits;
  }
}

function getDocumentFormatters(document: TextDocument): TextEdit[] {
  const syntax = getDocumentSyntax(document);
  const edits = syntax.formatterManager.formatters.map(convertFormatter);

  return edits;
}
