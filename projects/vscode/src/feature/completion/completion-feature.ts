import {ExtensionContext, languages, OutputChannel} from 'vscode';
// import { CommaCompletionItemProvider } from './comma-completion-feature';
import {LANGUAGE_NAME} from '../../config';
import {DotCompletionItemProvider} from './items/dot-completion-feature';
import {IdCompletionItemProvider} from './items/id-completion-feature';

export function configureCompletionFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerCompletionItemProvider(LANGUAGE_NAME, new DotCompletionItemProvider(channel), '.'),
  );

  context.subscriptions.push(
    languages.registerCompletionItemProvider(LANGUAGE_NAME, new IdCompletionItemProvider(channel)),
  );

  //   const commaCompletion = languages.registerCompletionItemProvider(
  //     LANGUAGE_NAME,
  //     new CommaCompletionItemProvider(channel),
  //     ...[',', ' ']
  //   );
  //, commaCompletion);
}
