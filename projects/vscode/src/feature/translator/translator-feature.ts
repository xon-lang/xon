// import {
//   commands,
//   ExtensionContext,
//   OutputChannel,
//   TextDocument,
//   Uri,
//   window,
//   workspace,
// } from 'vscode';
// import { config } from '../config';

// export function configureTranslatorFeature(
//   context: ExtensionContext,
//   channel: OutputChannel
// ) {
//   context.subscriptions.push(
//     workspace.onDidSaveTextDocument((document: TextDocument) => {
//       if (document.languageId !== LANGUAGE_NAME) return;
//       let translateOnSave = config().get<string>('translateOnSave');
//       if (translateOnSave) {
//         translateSourceToTypeScript(document.uri);
//       }
//     })
//   );

//   context.subscriptions.push(
//     commands.registerCommand('xon.translate-ts', (a?: Uri) => {
//       const uri = a || window.activeTextEditor?.document.uri;
//       if (uri) {
//         translateSourceToTypeScript(uri);
//       }
//     })
//   );
// }

// function translateSourceToTypeScript(uri: Uri) {
//   // const code = fs.readFileSync(uri.fsPath).toString();
//   // const tree = getSourceTree(parse(code, uri.fsPath).source());
//   // const translator = getSourceTranslator(tree);
//   // const destinationPath = path.resolve(
//   //   path.dirname(uri.fsPath),
//   //   path.basename(uri.fsPath, '.xon') + '.ts'
//   // );
//   // const result = translator.toString();
//   // fs.writeFileSync(destinationPath, result);
// }
