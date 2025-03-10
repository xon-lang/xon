import {$IdNode, ValueDeclarationNode} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptValueDeclarationStatement(node: ValueDeclarationNode): Text {
  if (!node.target) {
    return newText(`/* error value declaration */`);
  }

  if (is(node.target, $IdNode())) {
    return newText(`const ${node.target.text} = 0`);
  }

  return newText(`/* error value declaration */`);
}
