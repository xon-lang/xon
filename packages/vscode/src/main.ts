import {
  configureCompletionFeature,
  configureDefinitionFeature,
  configureDiagnosticFeature,
  configureHighlightingFeature,
  configureTranslatorFeature,
  LANGUAGE_NAME,
} from '#vscode';
import {ExtensionContext, window} from 'vscode';

export function activate(context: ExtensionContext) {
  const channel = window.createOutputChannel(LANGUAGE_NAME.toUpperCase());
  channel.appendLine('Initialized');
  // channel.show();

  configureDiagnosticFeature(context, channel);
  // configureFormattingFeature(context, channel);
  configureHighlightingFeature(context, channel);
  // configureHoverFeature(context, channel);
  configureDefinitionFeature(context, channel);
  configureCompletionFeature(context, channel);
  // configureRenameFeature(context, channel);
  // configureMoveToNewFileFeature(context, channel);
  // configureSignatureFeature(context, channel);

  configureTranslatorFeature(context, channel);

  // todo registerTypeDefinitionProvider
  // todo registerImplementationProvider
  // todo registerReferenceProvider
  // todo registerDocumentSymbolProvider
  // todo registerCodeLensProvider
  // todo registerDocumentLinkProvider ???
  // todo registerColorProvider ???
  // todo registerOnTypeFormattingEditProvider ???
  // todo registerFoldingRangeProvider ???
}
