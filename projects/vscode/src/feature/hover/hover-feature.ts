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
import {hasSemantic} from '../../../../core/analyzer/node';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {$Semantic, SemanticNode, semanticIs} from '../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {IntegerTypeSemantic} from '../../../../core/analyzer/semantic/node/type/integer/integer-type-semantic';
import {StringTypeSemantic} from '../../../../core/analyzer/semantic/node/type/string/string-type-semantic';
import {TypeSemantic, isTypeSemantic} from '../../../../core/analyzer/semantic/node/type/type-semantic';
import {ValueSemantic} from '../../../../core/analyzer/semantic/node/value/value-semantic';
import {Nothing, String2, nothing} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeByPositionInSyntax, getDocumentSemantic} from '../../util';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)),
  );
}

class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const syntax = getDocumentSemantic(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, position);

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

function getSemanticHoverText(semantic: SemanticNode): MarkdownString | Nothing {
  if (isTypeSemantic(semantic)) {
    return getTypeMarkdown(semantic);
  }

  if (semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) && semantic.type) {
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
  if (semanticIs<IdTypeSemantic>(type, $Semantic.ID_TYPE)) {
    return declarationToText(type.declaration);
  }

  if (semanticIs<StringTypeSemantic>(type, $Semantic.STRING_TYPE)) {
    const declaration = declarationToText(type.declaration);

    return `${declaration}("${type.value}")`;
  }

  if (semanticIs<IntegerTypeSemantic>(type, $Semantic.INTEGER_TYPE)) {
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
