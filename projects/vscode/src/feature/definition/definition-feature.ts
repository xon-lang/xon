import {
  CancellationToken,
  Definition,
  DefinitionProvider,
  ExtensionContext,
  languages,
  Location,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  Uri,
} from 'vscode';
import {Nothing, nothing} from '../../../../core/lib/core';
import {DeclarationSemantic} from '../../../../core/semantic/declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {IntegerTypeSemantic} from '../../../../core/semantic/type/integer/integer-type-semantic';
import {StringTypeSemantic} from '../../../../core/semantic/type/string/string-type-semantic';
import {ValueSemantic} from '../../../../core/semantic/value/value-semantic';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureDefinitionFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerDefinitionProvider(LANGUAGE_NAME, new LanguageDefinitionProvider(channel)),
  );
}

class LanguageDefinitionProvider implements DefinitionProvider {
  constructor(private channel: OutputChannel) {}

  provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition> {
    const syntax = getDocumentSyntax(document, this.channel);

    const node = findNodeByPositionInSyntax(syntax, position);

    if (!node?.semantic) {
      return nothing;
    }

    if (semanticIs<DeclarationTypeSemantic>(node.semantic, $Semantic.DECLARATION_TYPE)) {
      return navigateToDeclaration(node.semantic.declaration);
    }

    if (semanticIs<ValueSemantic>(node.semantic, $Semantic.VALUE)) {
      if (semanticIs<DeclarationTypeSemantic>(node.semantic.type, $Semantic.DECLARATION_TYPE)) {
        return navigateToDeclaration(node.semantic.type.declaration);
      }

      if (semanticIs<IntegerTypeSemantic>(node.semantic.type, $Semantic.INTEGER_TYPE)) {
        return navigateToDeclaration(node.semantic.type.declaration);
      }

      if (semanticIs<StringTypeSemantic>(node.semantic.type, $Semantic.STRING_TYPE)) {
        return navigateToDeclaration(node.semantic.type.declaration);
      }

      return nothing;
    }

    return nothing;
  }
}

function navigateToDeclaration(declaration: DeclarationSemantic | Nothing): ProviderResult<Definition> {
  if (!declaration) {
    return nothing;
  }

  const {reference} = declaration;

  if (reference.source.location) {
    const uri = Uri.parse(reference.source.location);
    const range = convertRange(reference.range);

    return new Location(uri, range);
  }

  return nothing;
}
