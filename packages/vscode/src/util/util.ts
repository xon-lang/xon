import { SemanticAnalyzer, textResourceFromData, semanticFromResource } from '#core';
import {OutputChannel, TextDocument} from 'vscode';

export function getDocumentSemantic(document: TextDocument, channel: OutputChannel): SemanticAnalyzer {
  try {
    const text = document.getText();
    const location = document.uri.fsPath;
    const resource = textResourceFromData(location, text);

    return semanticFromResource(resource);
  } catch (error) {
    channel.appendLine(error?.toString() ?? 'Error');
    throw new Error('Not implemented');
  }
}
