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

import {Formatter} from '../../../../core/formatter/formatter';
import {Array2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, getDocumentSyntax} from '../../util';

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
  ): ProviderResult<Array2<TextEdit>> {
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
  ): ProviderResult<Array2<TextEdit>> {
    const formatters = getDocumentFormatters(document, this.channel).filter((x) => range.contains(x.range));

    return formatters;
  }

  provideDocumentRangesFormattingEdits?(
    document: TextDocument,
    ranges: Array2<Range>,
    options: FormattingOptions,
    token: CancellationToken,
  ): ProviderResult<Array2<TextEdit>> {
    const formatters = getDocumentFormatters(document, this.channel).filter((x) =>
      ranges.some((z) => z.contains(x.range)),
    );

    return formatters;
  }

  provideDocumentFormattingEdits(document: TextDocument): ProviderResult<Array2<TextEdit>> {
    const syntax = getDocumentSyntax(document, this.channel);
    const edits = syntax.formatterManager.formatters.map(convertFormatter);

    return edits;
  }
}

function getDocumentFormatters(document: TextDocument, channel: OutputChannel): Array2<TextEdit> {
  const syntax = getDocumentSyntax(document, channel);
  const edits = syntax.formatterManager.formatters.map(convertFormatter);

  return edits;
}

function convertFormatter(formatter: Formatter): TextEdit {
  return TextEdit.replace(convertRange(formatter.range), formatter.text);
}
