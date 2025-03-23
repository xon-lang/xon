import {$StringNode, ImportStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptImportStatement(node: ImportStatementNode): Text {
  if (!is(node.expression, $StringNode()) || !node.expression.content) {
    return newText(`/* error import */;`);
  }

  // todo fix import path (should be provider related)
  const path = node.expression.content.text.toNativeString().replace(/^(.+?)(\.[^.]+)?$/, '$1.ts');

  return newText(`import '${path}';`);
}
