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
import {Semantic} from '../../../../core/analyzer/semantic/node/semantic-node';
import {TypeSemantic} from '../../../../core/analyzer/semantic/node/type/type-semantic';
import {Nothing, String2, nothing} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition, getDocumentSemantic} from '../../util';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)),
  );
}

class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (!hasSemantic(node)) {
      return nothing;
    }

    const markdown = getSemanticHoverText(node.semantic);

    if (!markdown) {
      return nothing;
    }

    const range = convertRange(node.range);

    return new Hover(markdown, range);
  }
}

function getSemanticHoverText(semantic: Semantic): MarkdownString | Nothing {
  if (is(semantic, $.TypeSemantic)) {
    return getTypeMarkdown(semantic);
  }

  if (is(semantic, $.ValueSemantic) && semantic.type) {
    return getTypeMarkdown(semantic.type);
  }

  return nothing;
}

function getTypeMarkdown(type: TypeSemantic): MarkdownString | Nothing {
  const text = typeToText(type);

  if (!text) {
    return nothing;
  }

  return markdownCode(text);
}

function typeToText(type: TypeSemantic): String2 | Nothing {
  if (is(type, $.IdTypeSemantic)) {
    return declarationToText(type.declaration);
  }

  if (is(type, $.StringTypeSemantic)) {
    const declaration = declarationToText(type.declaration);

    return `${declaration}("${type.value}")`;
  }

  if (is(type, $.IntegerTypeSemantic)) {
    const declaration = declarationToText(type.declaration);

    return `${declaration}(${type.value})`;
  }

  return '';
}

function declarationToText(declaration: DeclarationSemantic) {
  const modifier = declaration.modifier ? declaration.modifier + ' ' : '';

  return `${modifier}${declaration.name}`;
}

function markdownCode(text: String2): MarkdownString {
  const markdown = new MarkdownString();
  markdown.appendCodeblock(text, LANGUAGE_NAME);

  return markdown;
}
