import {$TypeDeclarationNode, TypeDeclarationNode} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {translateTypescriptBody} from '#translator';
import {is} from '#typing';

export function translateTypescriptTypeDeclarationStatement(node: TypeDeclarationNode): Text {
  if (is(node, $TypeDeclarationNode())) {
    const body = translateTypescriptBody(node.body ?? newArrayData());

    return newText(`type ${node.id.text} = ${body}`);
  }

  return newText(`/* error type declaration */`);
}
