import {
  CancellationToken,
  DefinitionLink,
  DefinitionProvider,
  ExtensionContext,
  languages,
  LocationLink,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  Uri,
} from 'vscode';
import {$Semantic, semanticIs} from '../../../../core/analyzer/semantic/semantic';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/type/id/id-type-semantic';
import {IntegerTypeSemantic} from '../../../../core/analyzer/semantic/type/integer/integer-type-semantic';
import {StringTypeSemantic} from '../../../../core/analyzer/semantic/type/string/string-type-semantic';
import {ImportValueSemantic} from '../../../../core/analyzer/semantic/value/import/import-value-semantic';
import {ValueSemantic} from '../../../../core/analyzer/semantic/value/value-semantic';
import {hasSemantic} from '../../../../core/analyzer/syntax/node';
import {TextResourceReference} from '../../../../core/util/resource/resource-reference';
import {TextRange, zeroRange} from '../../../../core/util/resource/text/text-range';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureDefinitionFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerDefinitionProvider(LANGUAGE_NAME, new LanguageDefinitionProvider(channel)),
  );
}

class LanguageDefinitionProvider implements DefinitionProvider {
  constructor(private channel: OutputChannel) {}

  provideDefinition(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<DefinitionLink[]> {
    const syntax = getDocumentSyntax(document, this.channel);

    const node = findNodeByPositionInSyntax(syntax, position);

    if (!hasSemantic(node)) {
      return nothing;
    }

    if (semanticIs<ImportValueSemantic>(node.semantic, $Semantic.IMPORT_VALUE)) {
      if (node.semantic.resource?.location) {
        return navigateToLocation(node.range, node.semantic.resource.location);
      }

      return nothing;
    }

    if (semanticIs<IdTypeSemantic>(node.semantic, $Semantic.ID_TYPE)) {
      return navigateToReference(node.range, node.semantic.declaration.reference);
    }

    if (semanticIs<ValueSemantic>(node.semantic, $Semantic.VALUE)) {
      if (semanticIs<IdTypeSemantic>(node.semantic.type, $Semantic.ID_TYPE)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      if (semanticIs<IntegerTypeSemantic>(node.semantic.type, $Semantic.INTEGER_TYPE)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      if (semanticIs<StringTypeSemantic>(node.semantic.type, $Semantic.STRING_TYPE)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      return nothing;
    }

    return nothing;
  }
}

function navigateToReference(
  highlightingRange: TextRange,
  reference: TextResourceReference,
): ProviderResult<LocationLink[]> {
  if (!reference.resource.location) {
    return nothing;
  }

  return navigateToLocation(highlightingRange, reference.resource.location, reference.range);
}

function navigateToLocation(
  highlightingRange: TextRange,
  location: String2,
  sourceRange: TextRange | Nothing,
): ProviderResult<LocationLink[]> {
  const uri = Uri.parse(location);
  const range = sourceRange ? convertRange(sourceRange) : convertRange(zeroRange());

  return [
    {
      targetUri: uri,
      targetRange: range,
      originSelectionRange: convertRange(highlightingRange),
    },
  ];
}
