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
        saveTranslatedFile(document, channel);
      }
    }),
  );

  context.subscriptions.push(
    commands.registerCommand('xon.translate-ts', () => {
      const activeTextEditor = window.activeTextEditor;
      const document = window.activeTextEditor?.document;

      if (document) {
        saveTranslatedFile(document, channel);
      }
    }),
  );
}

function saveTranslatedFile(document: TextDocument, channel: OutputChannel) {
  try {
    const filepath = document.uri.fsPath;
    const resource = textResourceFrom(filepath, document.getText());
    const semanticAnalyzer = semanticFromResource(resource);
    const translator = createTypescriptTranslator(semanticAnalyzer);

    const dirname = path.dirname(filepath);
    const filename = path.basename(filepath) + '.gen.ts';
    const destinationPath = path.resolve(dirname, filename);
    const result = translator.translate();

    fs.writeFileSync(destinationPath, result);
  } catch (error: any) {
    channel.appendLine(error?.toString());
  }
}
