import {commands, ExtensionContext, OutputChannel, TextDocument, window, workspace} from 'vscode';
import {semanticFromResource} from '@xon/core/src/analyzer/semantic/semantic-analyzer';
import {createTypescriptTranslator} from '@xon/core/src/translator/typescript/typescript-translator';
import {textResourceFromData} from '@xon/core/src/util/resource/text/text-resource';
import {EXTENSION_CONFIG, LANGUAGE_NAME} from '../../config';

import * as fs from 'fs';
import * as path from 'path';

export function configureTranslatorFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    workspace.onDidSaveTextDocument((document: TextDocument) => {
      if (document.languageId !== LANGUAGE_NAME) {
        return;
      }

      let translateOnSave = EXTENSION_CONFIG.translateOnSave.get();

      if (translateOnSave) {
        saveTranslatedFile(document, channel);
      }
    }),
  );

  context.subscriptions.push(
    commands.registerCommand('xon.translateToTypescript', () => {
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
    const resource = textResourceFromData(filepath, document.getText());
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
