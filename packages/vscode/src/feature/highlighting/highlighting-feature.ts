import {LANGUAGE_NAME, newTextDocumentAnalyzer, xonToVsCodeRange} from '#vscode';
import {
  CancellationToken,
  DocumentSemanticTokensProvider,
  ExtensionContext,
  languages,
  OutputChannel,
  ProviderResult,
  SemanticTokens,
  SemanticTokensBuilder,
  SemanticTokensLegend,
  TextDocument,
} from 'vscode';

export function configureHighlightingFeature(context: ExtensionContext, channel: OutputChannel) {
  const selector = {language: LANGUAGE_NAME, scheme: 'file'};
  const tokenTypes = ['type'];
  const tokenModifiers = ['declaration'];
  const legend = new SemanticTokensLegend(tokenTypes, tokenModifiers);

  context.subscriptions.push(
    languages.registerDocumentSemanticTokensProvider(
      selector,
      new DocumentSemanticTokens(legend, channel),
      legend,
    ),
  );
}

class DocumentSemanticTokens implements DocumentSemanticTokensProvider {
  constructor(private legend: SemanticTokensLegend, private channel: OutputChannel) {}

  provideDocumentSemanticTokens(
    document: TextDocument,
    cancellationToken: CancellationToken,
  ): ProviderResult<SemanticTokens> {
    const {highlights} = newTextDocumentAnalyzer(document, this.channel);
    const tokensBuilder = new SemanticTokensBuilder(this.legend);

    for (const {range, type} of highlights) {
      this.channel.appendLine(`Highlighting: ${type}}`);
      tokensBuilder.push(xonToVsCodeRange(range), type.toString());
    }

    return tokensBuilder.build();
  }
}
