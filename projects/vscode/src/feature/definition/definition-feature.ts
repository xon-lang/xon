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
import {$, hasSemantic, is} from '../../../../core/$';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {DocumentationIdSemantic} from '../../../../core/analyzer/semantic/node/documentation/documentation-id-semantic';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {IntegerTypeSemantic} from '../../../../core/analyzer/semantic/node/type/integer/integer-type-semantic';
import {StringTypeSemantic} from '../../../../core/analyzer/semantic/node/type/string/string-type-semantic';
import {ImportValueSemantic} from '../../../../core/analyzer/semantic/node/value/import/import-value-semantic';
import {ValueSemantic} from '../../../../core/analyzer/semantic/node/value/value-semantic';
import {TextRange, zeroRange} from '../../../../core/util/resource/text/text-range';
import {TextResourceRange} from '../../../../core/util/resource/text/text-resource-range';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition, getDocumentSemantic} from '../../util';

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
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (!hasSemantic(node)) {
      return nothing;
    }

    if (is<ImportValueSemantic>(node.semantic, $.ImportValueSemantic)) {
      if (node.semantic.resource?.location) {
        return navigateToLocation(node.range, node.semantic.resource.location);
      }

      return nothing;
    }

    if (is<DeclarationSemantic>(node.semantic, $.DeclarationSemantic)) {
      return navigateToUsages(node.range, node.semantic);
    }

    if (is<IdTypeSemantic>(node.semantic, $.IdTypeSemantic)) {
      return navigateToReference(node.range, node.semantic.declaration.reference);
    }

    if (is<DocumentationIdSemantic>(node.semantic, $.DocumentationIdSemantic)) {
      return navigateToReference(node.range, node.semantic.declaration.reference);
    }

    if (is<ValueSemantic>(node.semantic, $.ValueSemantic)) {
      if (is<IdTypeSemantic>(node.semantic.type, $.IdTypeSemantic)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      if (is<IntegerTypeSemantic>(node.semantic.type, $.IntegerTypeSemantic)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      if (is<StringTypeSemantic>(node.semantic.type, $.StringTypeSemantic)) {
        return navigateToReference(node.range, node.semantic.type.declaration.reference);
      }

      return nothing;
    }

    return nothing;
  }
}

function navigateToUsages(
  originalRange: TextRange,
  declaration: DeclarationSemantic,
): ProviderResult<LocationLink[]> {
  const links: LocationLink[] = [];

  for (const usage of declaration.usages) {
    if (!usage.resource.location) {
      continue;
    }

    const uri = Uri.parse(usage.resource.location);
    const range = convertRange(usage.range);

    const link: LocationLink = {
      targetUri: uri,
      targetRange: range,
      originSelectionRange: convertRange(originalRange),
    };

    links.push(link);
  }

  return links;
}

function navigateToReference(
  originalRange: TextRange,
  reference: TextResourceRange,
): ProviderResult<LocationLink[]> {
  if (!reference.resource.location) {
    return nothing;
  }

  return navigateToLocation(originalRange, reference.resource.location, reference.range);
}

function navigateToLocation(
  originalRange: TextRange,
  location: String2,
  sourceRange?: TextRange | Nothing,
): ProviderResult<LocationLink[]> {
  const uri = Uri.parse(location);
  const range = sourceRange ? convertRange(sourceRange) : convertRange(zeroRange());

  return [
    {
      targetUri: uri,
      targetRange: range,
      originSelectionRange: convertRange(originalRange),
    },
  ];
}
