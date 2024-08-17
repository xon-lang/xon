import {
  CancellationToken,
  ExtensionContext,
  Hover,
  HoverProvider,
  MarkdownString,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  languages,
} from 'vscode';
import {$, hasSemantic, is} from '../../../../core/$';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {Semantic} from '../../../../core/analyzer/semantic/node/semantic';
import {Nothing, String2, nothing} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition} from '../../util/convert';
import {getDocumentSemantic} from '../../util/util';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)),
  );
}

class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const semantic = getDocumentSemantic(document, this.channel);

    const node = semantic.syntaxAnalyzer.findClosestNode(
      convertVscodePosition(document, position),
      $.ExpressionNode,
    );

    if (!hasSemantic(node)) {
      return nothing;
    }

    const markdown = getTypeMarkdown(node.semantic);

    if (!markdown) {
      return nothing;
    }

    const range = convertRange(node.reference);

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

function semanticToText(semantic: Semantic | Nothing): String2 | Nothing {
  if (!semantic) {
    return '';
  }

  if (is(semantic, $.DeclarationSemantic)) {
    return declarationToText(semantic);
  }

  if (is(semantic, $.ValueSemantic)) {
    return semanticToText(semantic.type);
  }

  if (is(semantic, $.IdTypeSemantic)) {
    return declarationToText(semantic.declaration);
  }

  if (is(semantic, $.CharTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return `${declaration}('${semantic.value}')`;
  }

  if (is(semantic, $.StringTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return `${declaration}("${semantic.value}")`;
  }

  if (is(semantic, $.IntegerTypeSemantic)) {
    const declaration = declarationToText(semantic.declaration);

    return `${declaration}(${semantic.value})`;
  }

  return '';
}

function declarationToText(declaration: DeclarationSemantic | Nothing) {
  if (!declaration) {
    return '';
  }

  const modifier = declaration.modifier ? declaration.modifier + ' ' : '';

  return `${modifier}${declaration.name}`;
}

function markdownCode(text: String2): MarkdownString {
  const markdown = new MarkdownString();
  markdown.appendCodeblock(text, LANGUAGE_NAME);

  return markdown;
}
