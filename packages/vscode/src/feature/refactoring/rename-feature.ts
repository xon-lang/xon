import {
  $DeclarationSemantic,
  $DocumentationIdSemantic,
  $IdNode,
  $IdTypeSemantic,
  $ValueSemantic,
  DeclarationSemantic,
  Semantic,
} from '#analyzer';
import {Nothing, Text, TextReference, newText, nothing} from '#common';
import {is} from '#typing';
import {LANGUAGE_NAME, convertRange, convertVscodePosition, getDocumentSemantic} from '#vscode';
import {
  CancellationToken,
  ExtensionContext,
  OutputChannel,
  Position,
  ProviderResult,
  Range,
  RenameProvider,
  TextDocument,
  Uri,
  WorkspaceEdit,
  languages,
} from 'vscode';

export function configureRenameFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerRenameProvider(LANGUAGE_NAME, new LanguageRenameProvider(channel)),
  );
}

class LanguageRenameProvider implements RenameProvider {
  constructor(private channel: OutputChannel) {}

  provideRenameEdits(
    document: TextDocument,
    position: Position,
    newName: string,
    token: CancellationToken,
  ): ProviderResult<WorkspaceEdit> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNodeAtPosition(convertVscodePosition(document, position));

    if (!is(node, $IdNode) || !node.semantic) {
      return nothing;
    }

    const declaration = getDeclaration(node.semantic);

    if (!declaration) {
      return nothing;
    }

    return renameDeclarationAndUsages(declaration, declaration.name, newText(newName));
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: string}> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNodeAtPosition(convertVscodePosition(document, position));

    if (!is(node, $IdNode)) {
      throw new Error('You cannot rename this element');
    }

    return convertRange(node.reference.range);
  }
}

function getDeclaration(semantic: Semantic): DeclarationSemantic | Nothing {
  if (is(semantic, $DeclarationSemantic)) {
    return semantic;
  }

  if (is(semantic, $DocumentationIdSemantic)) {
    return semantic.declaration;
  }

  if (is(semantic, $IdTypeSemantic)) {
    return semantic.declaration;
  }

  if (is(semantic, $ValueSemantic) && is(semantic.type, $IdTypeSemantic)) {
    return semantic.type.declaration;
  }
}

function renameDeclarationAndUsages(
  declaration: DeclarationSemantic,
  oldName: Text,
  newName: Text,
): WorkspaceEdit | Nothing {
  if (declaration.usages.isEmpty()) {
    return nothing;
  }

  const workspace = new WorkspaceEdit();

  for (const reference of declaration.usages) {
    renameWithWorkspace(workspace, reference, oldName, newName);
  }

  return workspace;
}

function renameWithWorkspace(
  workspace: WorkspaceEdit,
  reference: TextReference,
  oldName: Text,
  newName: Text,
): void {
  if (!reference.resource.location || !reference.rangeText().equals(oldName)) {
    return;
  }

  const uri = Uri.parse(reference.resource.location.toNativeString());
  const range = convertRange(reference.range);

  workspace.replace(uri, range, newName.toNativeString());
}
