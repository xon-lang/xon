import {newTextData, newTextResource} from '#common';
import {SemanticAnalyzer, semanticFromResource} from '#core';
import {OutputChannel, TextDocument} from 'vscode';

export function getDocumentSemantic(document: TextDocument, channel: OutputChannel): SemanticAnalyzer {
  try {
    const text = newTextData(document.getText());
    const location = newTextData(document.uri.fsPath);
    const resource = newTextResource(location, text);

    return semanticFromResource(resource);
  } catch (error) {
    channel.appendLine(error?.toString() ?? 'Error');
    throw new Error('Not implemented');
  }
}
