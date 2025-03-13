import {$IdNode, ValueDeclarationNode} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptValueDeclarationStatement(node: ValueDeclarationNode): Text {
  if (!node.id) {
    return newText(`/* error value declaration */`);
  }

  if (is(node.id, $IdNode())) {
    return newText(`const ${node.id.text} = 0`);
  }

  return newText(`/* error value declaration */`);
}
