import {$IdNode, ValueDeclarationNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptType} from '#translator';
import {is} from '#typing';

export function translateTypescriptValueDeclarationStatement(node: ValueDeclarationNode): Text {
  if (!node.id) {
    return newText(`/* error value declaration */`);
  }

  if (is(node.id, $IdNode())) {
    const keyword = node.keyword ? newText(`${node.keyword?.text} `) : newText();

    let type = newText();

    if (node.type?.expression) {
      type = newText(`: ${translateTypescriptType(node.type.expression)}`);
    }

    let value = newText();

    if (node.value?.expression) {
      value = newText(` = ${translateTypescriptType(node.value.expression)}`);
    }

    return newText(`${keyword}${node.id.text}${type}${value}`);
  }

  return newText(`/* error value declaration */`);
}
