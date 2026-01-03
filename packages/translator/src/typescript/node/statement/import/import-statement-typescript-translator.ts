import {$StringNode, ImportStatementNode} from '#analyzer';
import {is, newText, Text} from '#core';

export function translateTypescriptImportStatement(node: ImportStatementNode): Text {
  if (!is(node.expression, $StringNode()) || !node.expression.content) {
    return newText(`/* error import */;`);
  }

  // todo fix import path (should be provider related)
  const path = node.expression.content.getText().toNativeString().replace(/^(.+?)(\.[^.]+)?$/, '$1.ts');

  return newText(`import '${path}'`);
}
