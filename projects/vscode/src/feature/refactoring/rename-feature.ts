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
import {TypeDeclarationSemantic} from '../../../../core/semantic/declaration/type/type-declaration-semantic';
import {$Semantic, Semantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {ValueSemantic} from '../../../../core/semantic/value/value-semantic';
import {getRangeText} from '../../../../core/source/source';
import {SourceReference} from '../../../../core/source/source-reference';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureRefactoringFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerRenameProvider(LANGUAGE_NAME, new LanguageRenameProvider(channel)));
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

function getDeclaration(semantic: Semantic): DeclarationSemantic | Nothing {
  if (semanticIs<TypeDeclarationSemantic>(semantic, $Semantic.TYPE_DECLARATION)) {
    return semantic;
  }

  if (semanticIs<DeclarationTypeSemantic>(semantic, $Semantic.DECLARATION_TYPE)) {
    return semantic.declaration;
  }

  if (
    semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) &&
    semanticIs<DeclarationTypeSemantic>(semantic.type, $Semantic.DECLARATION_TYPE)
  ) {
    return semantic.type.declaration;
  }
}

function renameDeclarationAndUsages(
  workspace: WorkspaceEdit,
  declaration: DeclarationSemantic,
  oldName: String2,
  newName: String2,
): Nothing {
  for (const reference of declaration.usages) {
    renameWithWorkspace(workspace, reference, oldName, newName);
  }
}

function renameWithWorkspace(
  workspace: WorkspaceEdit,
  reference: SourceReference,
  oldName: String2,
  newName: String2,
): Nothing {
  if (reference.source.location && getRangeText(reference.source, reference.range) === oldName) {
    const uri = Uri.parse(reference.source.location);
    const range = convertRange(reference.range);

    workspace.replace(uri, range, newName);
  }
}
