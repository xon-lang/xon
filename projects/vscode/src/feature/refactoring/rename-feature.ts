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

import {Nothing, nothing, String2} from '../../../../core/lib/core';
import {$Node, is} from '../../../../core/parser/node/node';
import {IdNode} from '../../../../core/parser/node/token/id/id-node';
import {DeclarationSemantic} from '../../../../core/semantic/declaration/declaration-semantic';
import {$Semantic, parseSemantic, semanticIs} from '../../../../core/semantic/semantic';
import {SourceReference} from '../../../../core/source/source-reference';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeBytPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureRefactoringFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerRenameProvider(LANGUAGE_NAME, new LanguageRenameProvider(channel)));
}

class LanguageRenameProvider implements RenameProvider {
  constructor(channel: OutputChannel) {}

  provideRenameEdits(
    document: TextDocument,
    position: Position,
    newName: String2,
    token: CancellationToken,
  ): ProviderResult<WorkspaceEdit> {
    const syntax = getDocumentSyntax(document);
    parseSemantic(syntax);

    const node = findNodeBytPositionInSyntax(syntax, position);

    if (!is<IdNode>(node, $Node.ID) || !node.semantic) {
      return nothing;
    }

    if (semanticIs<DeclarationSemantic>(node.semantic, $Semantic.DECLARATION)) {
      const workspace = new WorkspaceEdit();
      renameWithWorkspace(workspace, node.semantic.reference, newName);

      for (const usage of node.semantic.usages) {
        renameWithWorkspace(workspace, usage.reference, newName);
      }

      return workspace;
    }

    return nothing;
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: String2}> {
    const syntax = getDocumentSyntax(document);
    parseSemantic(syntax);

    const node = findNodeBytPositionInSyntax(syntax, position);

    if (!is<IdNode>(node, $Node.ID)) {
      throw new Error('You cannot rename thi element');
    }

    return convertRange(node.range);
  }
}

function renameWithWorkspace(workspace: WorkspaceEdit, reference: SourceReference, newName: String2): Nothing {
  if (reference.source.location) {
    const uri = Uri.parse(reference.source.location);
    const range = convertRange(reference.range);

    workspace.replace(uri, range, newName);
  }
}
