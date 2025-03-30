import {$ImportStatementNode} from '#analyzer';
import {newArrayData, newFileResource, newText} from '#common';
import {translateTypescriptStatement} from '#translator';
import {is} from '#typing';
import {LANGUAGE_NAME, newTextDocumentAnalyzer} from '#vscode';
import * as fs from 'node:fs';
import {commands, ExtensionContext, OutputChannel, TextDocument, window, workspace} from 'vscode';

export function configureTranslatorFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    workspace.onDidSaveTextDocument((document: TextDocument) => {
      if (document.languageId !== LANGUAGE_NAME) {
        return;
      }

      // let translateOnSave = EXTENSION_CONFIG.translateOnSave.get();

      // if (translateOnSave) {
      saveTranslatedFile(document, channel);
      // }
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
    const analyzer = newTextDocumentAnalyzer(document, channel);
    const importStatements = analyzer.statements.takeWhile((x) => is(x, $ImportStatementNode()));

    const importTranslations = newText(
      importStatements.map(translateTypescriptStatement),
      newText('\n'),
    ).toNativeString();

    const statementTranslations = newText(
      analyzer.statements.slice(importStatements.count()).map(translateTypescriptStatement),
      newText('\n'),
    ).toNativeString();

    const file = newFileResource(analyzer.documentUri);
    const destinationPath = file
      .getDirectory()
      .uri.resolve(newArrayData([file.name.addLastItems(newText('.ts'))]))
      .value.toNativeString();

    fs.writeFileSync(
      destinationPath,
      `// @ts-nocheck\n${importTranslations ? importTranslations + '\n' : ''}\n${statementTranslations}\n`,
    );
    channel.clear();
    channel.appendLine(`${analyzer.documentUri.value.toNativeString()} - translated`);
  } catch (error: any) {
    channel.appendLine(error?.toString());
  }
}
