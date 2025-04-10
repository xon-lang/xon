import {$ImportSemantic, $ImportStatementNode, $StringNode, StringNode} from '#analyzer';
import {
  ArrayData,
  Nothing,
  TextRange,
  TextReference,
  Uri,
  newArrayData,
  newTextRange,
  nothing,
} from '#common';
import {is} from '#typing';
import {LANGUAGE_NAME, newTextDocumentAnalyzer, vsCodeToXonPosition, xonToVsCodeRange} from '#vscode';
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
  Uri as VsCodeUri,
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
    const analyzer = newTextDocumentAnalyzer(document, this.channel);
    const xonPosition = vsCodeToXonPosition(document, position);

    const node = analyzer.findClosestNode(
      (node): node is StringNode => is(node, $StringNode()) && is(node.parent, $ImportStatementNode()),
      xonPosition,
    );

    if (node && is(node.semantic, $ImportSemantic())) {
      return navigateToLocation(node.range, node.semantic.uri, newTextRange())?.toNativeArray();
    }

    // if (is(node.semantic, $DeclarationSemantic())) {
    //   return navigateToUsages(node.range, node.semantic).toNativeArray();
    // }

    // if (is(node.semantic, $IdTypeSemantic())) {
    //   if (!node.semantic.declaration) {
    //     return nothing;
    //   }

    //   return navigateToReference(node.range, node.semantic.declaration.reference)?.toNativeArray();
    // }

    // if (is(node.semantic, $DocumentationIdSemantic())) {
    //   return navigateToReference(node.range, node.semantic.declaration.nodeLink)?.toNativeArray();
    // }

    // if (is(node.semantic, $ValueSemantic())) {
    //   const declaration = node.semantic.type?.declaration;

    //   if (!declaration) {
    //     return nothing;
    //   }

    //   return navigateToReference(node.range, declaration.nodeLink)?.toNativeArray();
    // }

    return nothing;
  }
}

// function navigateToUsages(
//   originalRange: TextRange,
//   declaration: DeclarationSemantic,
// ): ArrayData<LocationLink> {
//   const links = newArrayData<LocationLink>();

//   for (const usage of declaration.usages) {
//     if (!usage.resource.location) {
//       continue;
//     }

//     const uri = Uri.parse(usage.resource.location.toNativeString());
//     const range = xonToVsCodeRange(usage.range);

//     const link: LocationLink = {
//       targetUri: uri,
//       targetRange: range,
//       originSelectionRange: xonToVsCodeRange(originalRange),
//     };

//     links.addLastItem(link);
//   }

//   return links;
// }

function navigateToReference(
  originalRange: TextRange,
  reference: TextReference,
): ArrayData<LocationLink> | Nothing {
  if (!reference.uri) {
    return nothing;
  }

  return navigateToLocation(originalRange, reference.uri, reference.range);
}

function navigateToLocation(
  originalRange: TextRange,
  uri: Uri,
  sourceRange: TextRange,
): ArrayData<LocationLink> | Nothing {
  const targetUri = VsCodeUri.parse(uri.value.toNativeString());
  const targetRange = xonToVsCodeRange(sourceRange);
  const originSelectionRange = xonToVsCodeRange(originalRange);

  return newArrayData([
    {
      targetUri,
      targetRange,
      originSelectionRange,
    },
  ]);
}
