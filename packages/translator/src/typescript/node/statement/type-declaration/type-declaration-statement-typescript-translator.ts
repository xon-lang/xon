import {$TypeDeclarationNode, TypeDeclarationNode} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {translateTypescriptStatement} from '#translator';
import {is} from '#typing';

export function translateTypescriptTypeDeclarationStatement(node: TypeDeclarationNode): Text {
  if (is(node, $TypeDeclarationNode())) {
    const body = newText(node.body?.map(translateTypescriptStatement) ?? newArrayData(), newText('\n'));
    return newText(`type ${node.id.text} = {\n${body.margin(2)}\n}`);
  }

  return newText(`/* error type declaration */`);
}
