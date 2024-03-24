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
import {Nothing, nothing, String2} from '../../../../core/lib/core';
import {ImportSemantic} from '../../../../core/semantic/import/import-semantic';
import {$Semantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {IntegerTypeSemantic} from '../../../../core/semantic/type/integer/integer-type-semantic';
import {StringTypeSemantic} from '../../../../core/semantic/type/string/string-type-semantic';
import {ValueSemantic} from '../../../../core/semantic/value/value-semantic';
import {SourceRange, zeroRange} from '../../../../core/source/source-range';
import {ResourceReference} from '../../../../core/util/resource/resource-reference';
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

    if (semanticIs<ImportSemantic>(node.semantic, $Semantic.IMPORT)) {
      return navigateToLocation(node.semantic.resource.location);
    }

    if (semanticIs<DeclarationTypeSemantic>(node.semantic, $Semantic.DECLARATION_TYPE)) {
      return navigateToReference(node.semantic.declaration.reference);
    }

    if (semanticIs<ValueSemantic>(node.semantic, $Semantic.VALUE)) {
      if (semanticIs<DeclarationTypeSemantic>(node.semantic.type, $Semantic.DECLARATION_TYPE)) {
        return navigateToReference(node.semantic.type.declaration.reference);
      }

      if (semanticIs<IntegerTypeSemantic>(node.semantic.type, $Semantic.INTEGER_TYPE)) {
        return navigateToReference(node.semantic.type.declaration.reference);
      }

      if (semanticIs<StringTypeSemantic>(node.semantic.type, $Semantic.STRING_TYPE)) {
        return navigateToReference(node.semantic.type.declaration.reference);
      }

      return nothing;
    }

    return nothing;
  }
}

function navigateToReference(reference: ResourceReference): ProviderResult<Definition> {
  return navigateToLocation(reference.location, reference.range);
}

function navigateToLocation(location: String2, sourceRange: SourceRange | Nothing): ProviderResult<Definition> {
  const uri = Uri.parse(location);
  const range = sourceRange ? convertRange(sourceRange) : convertRange(zeroRange());

  return new Location(uri, range);
}
