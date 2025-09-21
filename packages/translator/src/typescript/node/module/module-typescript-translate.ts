import {ModuleNode} from '#analyzer';
import {newCharacter, newText, Text} from '#common';
import {translateTypescriptStatement} from '#translator';

export function translateTypescriptModule(node: ModuleNode): Text {
  const body = newText(node.children.map(translateTypescriptStatement), newText('\n'));

  if (body.isEmpty()) {
    return body;
  }

  return body.addLastItem(newCharacter('\n'));
}
