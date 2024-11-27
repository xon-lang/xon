import {DotCompletionItemProvider, IdCompletionItemProvider, LANGUAGE_NAME} from '#/vscode';
import {ExtensionContext, OutputChannel, languages} from 'vscode';

export function configureCompletionFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerCompletionItemProvider(LANGUAGE_NAME, new DotCompletionItemProvider(channel), '.'),
  );

  context.subscriptions.push(
    languages.registerCompletionItemProvider(LANGUAGE_NAME, new IdCompletionItemProvider(channel)),
  );
}
