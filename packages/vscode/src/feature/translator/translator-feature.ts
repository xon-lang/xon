import {newAnalyzerContext, newCharacterStreamFromText, parseStatements} from '#analyzer';
import {newText} from '#common';
import {translateTypescriptStatement} from '#translator';
import {EXTENSION_CONFIG, LANGUAGE_NAME} from '#vscode';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {commands, ExtensionContext, OutputChannel, TextDocument, window, workspace} from 'vscode';

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
    const source = newCharacterStreamFromText(newText(document.getText()));
    const context = newAnalyzerContext(source);
    const {statements} = parseStatements(context);
    const translated = newText(statements.map(translateTypescriptStatement), newText('\n'));

    const dirname = path.dirname(filepath);
    const filename = path.basename(filepath) + '.gen.ts';
    const destinationPath = path.resolve(dirname, filename);

    fs.writeFileSync(destinationPath, `// @ts-nocheck\n\n${translated}\n`);
    channel.appendLine(`${filepath} - translated`);
  } catch (error: any) {
    channel.appendLine(error?.toString());
  }
}
