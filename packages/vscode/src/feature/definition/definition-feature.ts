import {
  $DeclarationSemantic,
  $DocumentationIdSemantic,
  $IdTypeSemantic,
  $ImportValueSemantic,
  $ValueSemantic,
  DeclarationSemantic,
} from '#analyzer';
import {
  ArrayData,
  Nothing,
  Text,
  TextRange,
  TextReference,
  newArrayData,
  newTextRange,
  nothing,
} from '#common';
import {is} from '#typing';
import {LANGUAGE_NAME, convertRange, convertVscodePosition, getDocumentSemantic} from '#vscode';
import {
  CancellationToken,
  DefinitionLink,
  DefinitionProvider,
  ExtensionContext,
  LocationLink,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  Uri,
  languages,
} from 'vscode';

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
    const node = semantic.syntaxAnalyzer.findNodeAtPosition(convertVscodePosition(document, position));

    if (!node?.semantic) {
      return nothing;
    }

    if (is(node.semantic, $ImportValueSemantic)) {
      if (node.semantic.resource?.location) {
        return navigateToLocation(node.range, node.semantic.resource.location)?.toNativeArray();
      }

      return nothing;
    }

    if (is(node.semantic, $DeclarationSemantic)) {
      return navigateToUsages(node.range, node.semantic).toNativeArray();
    }

    if (is(node.semantic, $IdTypeSemantic)) {
      if (!node.semantic.declaration) {
        return nothing;
      }

      return navigateToReference(node.range, node.semantic.declaration.nodeLink)?.toNativeArray();
    }

    if (is(node.semantic, $DocumentationIdSemantic)) {
      return navigateToReference(node.range, node.semantic.declaration.nodeLink)?.toNativeArray();
    }

    if (is(node.semantic, $ValueSemantic)) {
      const declaration = node.semantic.type?.declaration;

      if (!declaration) {
        return nothing;
      }

      return navigateToReference(node.range, declaration.nodeLink)?.toNativeArray();
    }

    return nothing;
  }
}

function navigateToUsages(
  originalRange: TextRange,
  declaration: DeclarationSemantic,
): ArrayData<LocationLink> {
  const links = newArrayData<LocationLink>();

  for (const usage of declaration.usages) {
    if (!usage.resource.location) {
      continue;
    }

    const uri = Uri.parse(usage.resource.location.toNativeString());
    const range = convertRange(usage.range);

    const link: LocationLink = {
      targetUri: uri,
      targetRange: range,
      originSelectionRange: convertRange(originalRange),
    };

    links.addLastItem(link);
  }

  return links;
}

function navigateToReference(
  originalRange: TextRange,
  reference: TextReference,
): ArrayData<LocationLink> | Nothing {
  if (!reference.resource.location) {
    return nothing;
  }

  return navigateToLocation(originalRange, reference.resource.location, reference.range);
}

function navigateToLocation(
  originalRange: TextRange,
  location: Text,
  sourceRange?: TextRange | Nothing,
): ArrayData<LocationLink> | Nothing {
  const targetUri = Uri.parse(location.toNativeString());
  const targetRange = sourceRange ? convertRange(sourceRange) : convertRange(newTextRange());
  const originSelectionRange = convertRange(originalRange);

  return newArrayData([
    {
      targetUri,
      targetRange,
      originSelectionRange,
    },
  ]);
}
