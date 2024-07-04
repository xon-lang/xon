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

import {$Node, is} from '../../../../core/$';
import {IdNode} from '../../../../core/analyzer/lexical/node/id/id-node';
import {
  DeclarationSemantic,
  isTypeDeclarationSemantic,
} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {DocumentationIdSemantic} from '../../../../core/analyzer/semantic/node/documentation/documentation-id-semantic';
import {SemanticNode} from '../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {ValueSemantic} from '../../../../core/analyzer/semantic/node/value/value-semantic';
import {TextResourceRange} from '../../../../core/util/resource/text/text-resource-range';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, convertVscodePosition, getDocumentSemantic} from '../../util';

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

    if (!is<IdNode>(node, $Node.IdNode) || !node.semantic) {
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

    if (!is<IdNode>(node, $Node.IdNode)) {
      throw new Error('You cannot rename this element');
    }

    return convertRange(node.range);
  }
}

function getDeclaration(semantic: SemanticNode): DeclarationSemantic | Nothing {
  if (is<DeclarationSemantic>(semantic, $Node.DeclarationSemantic)) {
    return semantic;
  }

  if (isTypeDeclarationSemantic(semantic)) {
    return semantic;
  }

  if (is<DocumentationIdSemantic>(semantic, $Node.DocumentationIdSemantic)) {
    return semantic.declaration;
  }

  if (is<IdTypeSemantic>(semantic, $Node.IdType)) {
    return semantic.declaration;
  }

  if (is<ValueSemantic>(semantic, $Node.ValueSemantic) && is<IdTypeSemantic>(semantic.type, $Node.IdType)) {
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
  if (!reference.resource.location || reference.getText() !== oldName) {
    return;
  }

  const uri = Uri.parse(reference.resource.location);
  const range = convertRange(reference.range);

  workspace.replace(uri, range, newName);
}
