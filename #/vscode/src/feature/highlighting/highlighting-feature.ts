import {LANGUAGE_NAME} from '#vscode';
import {
  CancellationToken,
  DocumentSemanticTokensProvider,
  ExtensionContext,
  OutputChannel,
  ProviderResult,
  SemanticTokens,
  SemanticTokensBuilder,
  SemanticTokensLegend,
  TextDocument,
  languages,
} from 'vscode';

const selector = {language: LANGUAGE_NAME, scheme: 'file'};
const tokenTypes = ['keyword_modifier', 'keyword_control', 'keyword_operator'];
// const tokenModifiers = ["declaration", "documentation"];
const legend = new SemanticTokensLegend(tokenTypes, []);

export function configureHighlightingFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerDocumentSemanticTokensProvider(selector, new DocumentSemanticTokens(channel), legend),
  );
}

class DocumentSemanticTokens implements DocumentSemanticTokensProvider {
  constructor(private channel: OutputChannel) {}

  provideDocumentSemanticTokens(
    document: TextDocument,
    token: CancellationToken,
  ): ProviderResult<SemanticTokens> {
    // const syntax = getDocumentSyntax(document, this.channel);
    const tokensBuilder = new SemanticTokensBuilder(legend);

    // for (const operator of syntax.operators) {
    //   if (operator.keywordType) {
    //     const tokenType = getKeywordTokenType(operator.keywordType);
    //     tokensBuilder.push(convertRange(operator.range), tokenType);
    //   }
    // }

    return tokensBuilder.build();
  }
}

// function getKeywordTokenType(keywordType: KeywordType): (typeof tokenTypes)[Number2] {
//   switch (keywordType) {
//     case KeywordType.MODIFIER:
//       return 'keyword_modifier';
//     case KeywordType.CONTROL:
//       return 'keyword_control';
//     case KeywordType.OPERATOR:
//       return 'keyword_operator';
//   }
// }
