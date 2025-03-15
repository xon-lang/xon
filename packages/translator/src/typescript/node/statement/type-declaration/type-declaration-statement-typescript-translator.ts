import {$TypeDeclarationNode, StatementNode, TypeDeclarationNode} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {translateTypescriptValueDeclarationStatement} from '#translator';
import {is} from '#typing';

export function translateTypescriptTypeDeclarationStatement(node: TypeDeclarationNode): Text {
  if (is(node, $TypeDeclarationNode())) {
    const body = translateAttributes(node.body ?? newArrayData());

    return newText(`type ${node.id.text} = ${body}`);
  }

  return newText(`/* error type declaration */`);
}

function translateAttributes(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(
    body.map((x) => translateTypescriptValueDeclarationStatement(x, true)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}\n`);
}
