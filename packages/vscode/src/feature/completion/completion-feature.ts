// import {DotCompletionItemProvider, IdCompletionItemProvider, LANGUAGE_NAME} from '#vscode';
import {ImportCompletionItemProvider, LANGUAGE_NAME} from '#vscode';
import {ExtensionContext, OutputChannel, languages} from 'vscode';

export function configureCompletionFeature(context: ExtensionContext, channel: OutputChannel) {
  // context.subscriptions.push(
  //   languages.registerCompletionItemProvider(LANGUAGE_NAME, new DotCompletionItemProvider(channel), '.'),
  // );

  // context.subscriptions.push(
  //   languages.registerCompletionItemProvider(LANGUAGE_NAME, new IdCompletionItemProvider(channel)),
  // );

  context.subscriptions.push(
    languages.registerCompletionItemProvider(
      LANGUAGE_NAME,
      new ImportCompletionItemProvider(channel),
      ...['"', '/'],
    ),
  );

  // context.subscriptions.push(
  //   languages.registerInlineCompletionItemProvider(LANGUAGE_NAME, new ImportCompletionItemProvider2()),
  // );
}
