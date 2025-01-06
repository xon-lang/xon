import {SemanticAnalyzer, semanticFromResource} from '#analyzer';
import {newText, newTextResource} from '#common';
import {OutputChannel, TextDocument} from 'vscode';

export function getDocumentSemantic(document: TextDocument, channel: OutputChannel): SemanticAnalyzer {
  try {
    const text = newText(document.getText());
    const location = newText(document.uri.fsPath);
    const resource = newTextResource(location, text);

    return semanticFromResource(resource);
  } catch (error) {
    channel.appendLine(error?.toString() ?? 'Error');
    throw new Error('Not implemented');
  }
}
