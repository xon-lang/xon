import {ImportStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptValue} from '#translator';

export function translateTypescriptImportStatement(node: ImportStatementNode): Text {
  if (!node.expression) {
    return newText(`/* error import */;`);
  }

  const expression = translateTypescriptValue(node.expression);

  return newText(`import ${expression};`);
}
