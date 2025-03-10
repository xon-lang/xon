import {$IntegerNode, Node} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptValue(node: Node): Text {
  if (is(node, $IntegerNode())) {
    // todo update to string format and use appropriate 'radix' argument
    return node.contentNode.text;
  }

  // if (is(semantic, $CharValueSemantic())) {
  //   return newText(`"${semantic.type.value}"`);
  // }

  // if (is(semantic, $StringValueSemantic())) {
  //   return newText(`"${semantic.type.value}"`);
  // }

  // if (is(semantic, $IdValueSemantic())) {
  //   return semantic.name;
  // }

  // if (is(semantic, $IdValueSemantic())) {
  //   return semantic.name;
  // }

  // if (is(semantic, $MemberValueSemantic())) {
  //   const instance = translator.value(semantic.instance);
  //   const name = semantic.name ?? translator.error(semantic.nodeLink);

  //   return newText(`${instance}.${name}`);
  // }

  // return translator.error(semantic.nodeLink);

  return newText('/* error value */');
}
