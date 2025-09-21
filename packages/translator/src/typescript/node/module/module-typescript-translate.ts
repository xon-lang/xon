import {ModuleNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptStatement} from '#translator';

export function translateTypescriptModule(node: ModuleNode): Text {
  return newText(node.children.map(translateTypescriptStatement), newText('\n'));
}
