import {DeclarationSemantic} from '@xon/core/src/analyzer/semantic/node/declaration/declaration-semantic';
import {TextRange, zeroRange} from '@xon/core/src/util/resource/text/text-range';
import {TextResourceRange} from '@xon/core/src/util/resource/text/text-resource-range';
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
import {$, hasSemantic, is} from '../../../../core/src/$';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition} from '../../util/convert';
import {getDocumentSemantic} from '../../util/util';

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

    if (is(node.semantic, $.ImportValueSemantic)) {
      if (node.semantic.resource?.location) {
        return navigateToLocation(node.reference.range, node.semantic.resource.location);
      }

      return nothing;
    }

    if (is(node.semantic, $.DeclarationSemantic)) {
      return navigateToUsages(node.reference.range, node.semantic);
    }

    if (is(node.semantic, $.IdTypeSemantic)) {
      if (!node.semantic.declaration) {
        return nothing;
      }

      return navigateToReference(node.reference.range, node.semantic.declaration.nodeLink.reference);
    }

    if (is(node.semantic, $.DocumentationIdSemantic)) {
      return navigateToReference(node.reference.range, node.semantic.declaration.nodeLink.reference);
    }

    if (is(node.semantic, $.ValueSemantic)) {
      const declaration = node.semantic.type?.declaration;

      if (!declaration) {
        return nothing;
      }

      return navigateToReference(node.reference.range, declaration.nodeLink.reference);
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
