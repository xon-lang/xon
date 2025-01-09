import {
  $CharTypeSemantic,
  $DeclarationSemantic,
  $IdTypeSemantic,
  $IntegerTypeSemantic,
  $StringTypeSemantic,
  $ValueSemantic,
  DeclarationSemantic,
  Semantic,
} from '#analyzer';
import {newText, Nothing, nothing, Text} from '#common';
import {is} from '#typing';
import {convertRange, convertVscodePosition, getDocumentSemantic, LANGUAGE_NAME} from '#vscode';
import {
  CancellationToken,
  ExtensionContext,
  Hover,
  HoverProvider,
  languages,
  MarkdownString,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
} from 'vscode';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)),
  );
}

class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const semantic = getDocumentSemantic(document, this.channel);

    const node = semantic.syntaxAnalyzer.findParentNodeFromPosition(
      (x) => !!x.isExpression,
      convertVscodePosition(document, position),
    );

    if (!node?.semantic) {
      return nothing;
    }

    const markdown = getTypeMarkdown(node.semantic);

    if (!markdown) {
      return nothing;
    }

    const range = convertRange(node.range);

    return new Hover(markdown, range);
  }
}

function getTypeMarkdown(semantic: Semantic): MarkdownString | Nothing {
  const text = semanticToText(semantic);

  if (!text) {
    return nothing;
  }

  return markdownCode(text);
}

function semanticToText(semantic: Semantic | Nothing): Text | Nothing {
  if (!semantic) {
    return newText('');
  }

  if (is(semantic, $DeclarationSemantic)) {
    return declarationToText(semantic);
  }

  if (is(semantic, $ValueSemantic)) {
    return semanticToText(semantic.type);
  }

  if (is(semantic, $IdTypeSemantic)) {
    return declarationToText(semantic.declaration);
  }

  if (is(semantic, $CharTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return newText(`${declaration}('${semantic.value}')`);
  }

  if (is(semantic, $StringTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return newText(`${declaration}("${semantic.value}")`);
  }

  if (is(semantic, $IntegerTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return newText(`${declaration}(${semantic.value})`);
  }

  return newText();
}

function declarationToText(declaration: DeclarationSemantic | Nothing): Text {
  if (!declaration) {
    return newText();
  }

  const modifier = declaration.modifier ? declaration.modifier + ' ' : '';

  return newText(`${modifier}${declaration.name}`);
}

function markdownCode(text: Text): MarkdownString {
  const markdown = new MarkdownString();
  markdown.appendCodeblock(text.toNativeString(), LANGUAGE_NAME);

  return markdown;
}
