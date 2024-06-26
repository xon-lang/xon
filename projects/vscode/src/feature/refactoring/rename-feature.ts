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

import {IdNode} from '../../../../core/analyzer/lexical/node/id/id-node';
import {
  DeclarationSemantic,
  isTypeDeclarationSemantic,
} from '../../../../core/analyzer/semantic/declaration/declaration-semantic';
import {$Semantic, semanticIs, SemanticNode} from '../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/type/id/id-type-semantic';
import {ValueSemantic} from '../../../../core/analyzer/semantic/value/value-semantic';
import {$Node, is} from '../../../../core/analyzer/syntax/node';
import {TextResourceRange} from '../../../../core/util/resource/text/text-resource-range';
import {Nothing, nothing, String2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

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
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, position);

    if (!is<IdNode>(node, $Node.ID) || !node.semantic) {
      return nothing;
    }

    const declaration = getDeclaration(node.semantic);

    if (declaration) {
      const workspace = new WorkspaceEdit();
      const oldName = declaration.name;
      renameDeclarationAndUsages(workspace, declaration, oldName, newName);

      return workspace;
    }

    return nothing;
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: String2}> {
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, position);

    if (!is<IdNode>(node, $Node.ID)) {
      throw new Error('You cannot rename this element');
    }

    return convertRange(node.range);
  }
}

function getDeclaration(semantic: SemanticNode): DeclarationSemantic | Nothing {
  if (isTypeDeclarationSemantic(semantic)) {
    return semantic;
  }

  if (semanticIs<IdTypeSemantic>(semantic, $Semantic.ID_TYPE)) {
    return semantic.declaration;
  }

  if (
    semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) &&
    semanticIs<IdTypeSemantic>(semantic.type, $Semantic.ID_TYPE)
  ) {
    return semantic.type.declaration;
  }
}

function renameDeclarationAndUsages(
  workspace: WorkspaceEdit,
  declaration: DeclarationSemantic,
  oldName: String2,
  newName: String2,
): void {
  for (const reference of declaration.usages) {
    renameWithWorkspace(workspace, reference, oldName, newName);
  }
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
