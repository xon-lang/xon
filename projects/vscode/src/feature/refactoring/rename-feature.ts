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

import {LANGUAGE_NAME} from '../../config';

export function configureFormatterFeature(context: ExtensionContext, channel: OutputChannel) {
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
    throw new Error('Method not implemented.');
  }

  prepareRename?(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Range | {range: Range; placeholder: string}> {
    throw new Error('Method not implemented.');
  }
}
