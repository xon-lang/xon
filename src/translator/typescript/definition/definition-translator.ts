import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { Translator } from '../../translator';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';

export class DefinitionTranslator implements Translator {
  constructor(private tree: DefinitionTree) {}

  toString(): string {
    let base = getExpressionTranslator(this.tree.base, false) || '';
    if (base && this.tree.base instanceof MethodExpressionTree) base = ' ' + base;

    let modifier = 'interface ';
    if (this.tree.modifier.text === 'object') {
      modifier = 'class ';
    }
    const id = getIdTranslator(this.tree.id);
    const properties = getParameterTranslators(
      this.tree.attributes.filter((x) => !x.type || !(x.type instanceof MethodExpressionTree)),
    ).join('\n');
    const methodsWithBody = getParameterTranslators(
      this.tree.attributes.filter(
        (x) => x.type && x.type instanceof MethodExpressionTree && x.body,
      ),
    ).join('\n\n');
    const methodsWithNoBody = getParameterTranslators(
      this.tree.attributes.filter(
        (x) => x.type && x.type instanceof MethodExpressionTree && !x.body,
      ),
    ).join('\n');
    const attributes =
      '\n' +
      [properties, methodsWithBody, methodsWithNoBody]
        .filter(Boolean)
        .join('\n\n')
        .replace(/^(.+\S)/gm, '  $1');
    return modifier + id + base + attributes;
  }
}
