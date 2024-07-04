import {commands, ExtensionContext, OutputChannel, TextDocument, window, workspace} from 'vscode';
import {semanticFromResource} from '../../../../core/analyzer/semantic/semantic-analyzer';
import {createTypescriptTranslator} from '../../../../core/translator/typescript/typescript-translator';
import {textResourceFrom} from '../../../../core/util/resource/text/text-resource';
import {LANGUAGE_NAME, WORKSPACE_CONFIG} from '../../config';

import * as fs from 'fs';
import * as path from 'path';

export function configureTranslatorFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    workspace.onDidSaveTextDocument((document: TextDocument) => {
      if (document.languageId !== LANGUAGE_NAME) {
        return;
      }

      let translateOnSave = WORKSPACE_CONFIG.translOnSave();

      if (translateOnSave) {
        saveTranslatedFile(document);
      }
    }),
  );

  context.subscriptions.push(
    commands.registerCommand('xon.translate-ts', () => {
      const document = window.activeTextEditor?.document;

      if (document) {
        saveTranslatedFile(document);
      }
    }),
  );
}

function saveTranslatedFile(document: TextDocument) {
  const uri = document.uri;
  const resource = textResourceFrom(uri.toString(), document.getText());
  const semanticAnalyzer = semanticFromResource(resource);
  const translator = createTypescriptTranslator(semanticAnalyzer);

  const dirname = path.dirname(uri.fsPath);
  const filename = path.basename(uri.fsPath, '.xon') + '.ts';
  const destinationPath = path.resolve(dirname, filename);
  const result = translator.translate();

  fs.writeFileSync(destinationPath, result);
}
