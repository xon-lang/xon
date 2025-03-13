import {$StructuralTypeDeclarationNode, $TypeDeclarationNode, TypeDeclarationNode} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptTypeDeclarationStatement(node: TypeDeclarationNode): Text {
  if (is(node, $TypeDeclarationNode())) {
    return newText(`type ${node.id.text} = {}`);
  }

  if (is(node, $StructuralTypeDeclarationNode())) {
    return newText(`type ${node.id.text} = {}`);
  }

  return newText(`/* error type declaration */`);
}
