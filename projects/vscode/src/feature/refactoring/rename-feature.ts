import {
  CancellationToken,
  ExtensionContext,
  languages,
  OutputChannel,
  Position,
  ProviderResult,
  Range,
  RenameProvider,
  TextDocument,
  Uri,
  WorkspaceEdit,
} from 'vscode';

import {$, is} from '../../../../core/$';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {Semantic} from '../../../../core/analyzer/semantic/node/semantic';
import {TextResourceRange} from '../../../../core/util/resource/text/text-resource-range';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition} from '../../util/convert';
import {getDocumentSemantic} from '../../util/util';

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
    newName: String2,
    token: CancellationToken,
  ): ProviderResult<WorkspaceEdit> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (!is(node, $.IdNode) || !node.semantic) {
      return nothing;
    }

    const declaration = getDeclaration(node.semantic);

    if (!declaration) {
      return nothing;
    }

    return renameDeclarationAndUsages(declaration, declaration.name, newName);
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: String2}> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (!is(node, $.IdNode)) {
      throw new Error('You cannot rename this element');
    }

    return convertRange(node.reference);
  }
}

function getDeclaration(semantic: Semantic): DeclarationSemantic | Nothing {
  if (is(semantic, $.DeclarationSemantic)) {
    return semantic;
  }

  if (is(semantic, $.DocumentationIdSemantic)) {
    return semantic.declaration;
  }

  if (is(semantic, $.IdTypeSemantic)) {
    return semantic.declaration;
  }

  if (is(semantic, $.ValueSemantic) && is(semantic.type, $.IdTypeSemantic)) {
    return semantic.type.declaration;
  }
}

function renameDeclarationAndUsages(
  declaration: DeclarationSemantic,
  oldName: String2,
  newName: String2,
): WorkspaceEdit | Nothing {
  if (declaration.usages.length === 0) {
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
  reference: TextResourceRange,
  oldName: String2,
  newName: String2,
): void {
  if (!reference.resource.location || !reference.text().equals(oldName)) {
    return;
  }

  const uri = Uri.parse(reference.resource.location);
  const range = convertRange(reference.range);

  workspace.replace(uri, range, newName);
}
