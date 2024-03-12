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
  WorkspaceEdit,
} from 'vscode';

import {parseSemantic} from '../../../../core/semantic/semantic';
import {LANGUAGE_NAME} from '../../config';
import {getDocumentSyntax} from '../../util';

export function configureRefactoringFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerRenameProvider(LANGUAGE_NAME, new LanguageRenameProvider(channel)));
}

class LanguageRenameProvider implements RenameProvider {
  constructor(channel: OutputChannel) {}

  provideRenameEdits(
    document: TextDocument,
    position: Position,
    newName: string,
    token: CancellationToken,
  ): ProviderResult<WorkspaceEdit> {
    throw new Error('Method not implemented2.');
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: string}> {
    const syntax = getDocumentSyntax(document);
    parseSemantic(syntax);

     
  }
}
