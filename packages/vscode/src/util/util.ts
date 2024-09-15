import {OutputChannel, TextDocument} from 'vscode';
import {SemanticAnalyzer, semanticFromResource} from '@xon/core/src/analyzer/semantic/semantic-analyzer';
import {textResourceFromData} from '@xon/core/src/util/resource/text/text-resource';

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
