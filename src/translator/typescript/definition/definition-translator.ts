import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { Translator } from '../../translator';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';
import { getAttributeTranslators } from '../attribute/attribute-translator-helper';

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
    const properties = getAttributeTranslators(
      this.tree.attributes
        
        .filter((x) => !x.type || !(x.parameters)),
    ).join('\n');
    const methodsWithBody = getAttributeTranslators(
      this.tree.attributes
        
        .filter((x) => x.type && x.parameters && x.body),
    ).join('\n\n');
    const methodsWithNoBody = getAttributeTranslators(
      this.tree.attributes
        
        .filter((x) => x.type && x.parameters && !x.body),
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
