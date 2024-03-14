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
import {Nothing, String2, nothing} from '../../../../core/lib/core';
import {DeclarationSemantic} from '../../../../core/semantic/declaration/declaration-semantic';
import {LiteralSemantic} from '../../../../core/semantic/literal/literal-semantic';
import {StringLiteralSemantic} from '../../../../core/semantic/literal/string/string-literal-semantic';
import {$Semantic, Semantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {LiteralTypeSemantic} from '../../../../core/semantic/type/literal/literal-type-semantic';
import {TypeSemantic, isTypeSemantic} from '../../../../core/semantic/type/type-semantic';
import {ValueSemantic} from '../../../../core/semantic/value/value-semantic';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeBytPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)));
}

class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeBytPositionInSyntax(syntax, position);

    if (!node?.semantic) {
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
  if (semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION)) {
    return getDeclarationMarkdown(semantic);
  }

  if (isTypeSemantic(semantic)) {
    return getTypeMarkdown(semantic);
  }

  if (semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) && semantic.type) {
    return getTypeMarkdown(semantic.type);
  }

  return nothing;
}

function getDeclarationMarkdown(declaration: DeclarationSemantic): MarkdownString | Nothing {
  const modifier = declaration.modifier ? declaration.modifier + ' ' : '';
  const name = declaration.name;
  const type = declaration.type ? ': ' + typeToString(declaration.type) : '';
  const text = `${modifier}${name}${type}`;

  return markdownCode(text);
}

function getTypeMarkdown(type: TypeSemantic): MarkdownString | Nothing {
  if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.DECLARATION_TYPE)) {
    const modifier = type.declaration.modifier ? type.declaration.modifier + ' ' : '';
    const text = `${modifier}${type.declaration.name}`;

    return markdownCode(text);
  }

  if (semanticIs<LiteralTypeSemantic>(type, $Semantic.LITERAL_TYPE)) {
    const declaration = type.literal.declaration;
    const modifier = declaration.modifier ? declaration.modifier + ' ' : '';
    const value = literalToString(type.literal);
    const text = `${modifier}${declaration.name}(${value})`;

    return markdownCode(text);
  }

  return nothing;
}

function typeToString(type: TypeSemantic): String2 {
  if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.DECLARATION_TYPE)) {
    return `${type.declaration.name}`;
  }

  if (semanticIs<LiteralTypeSemantic>(type, $Semantic.LITERAL_TYPE)) {
    return literalToString(type.literal);
  }

  return '';
}

function literalToString(literal: LiteralSemantic): String2 {
  if (semanticIs<StringLiteralSemantic>(literal, $Semantic.STRING_LITERAL)) {
    return `"${literal.value}"`;
  }

  return `${literal.value}`;
}

function markdownCode(text: String2): MarkdownString {
  const markdown = new MarkdownString();
  markdown.appendCodeblock(text, LANGUAGE_NAME);

  return markdown;
}
