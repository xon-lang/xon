import { ParserRuleContext } from 'antlr4ts';

const treeToPlain = (object): unknown => {
  const treeType = object.constructor.name.replace(/Tree$/, '');
  const plain = treeType ? { treeType } : {};

  const entries = Object.entries(object).filter(
    ([k, v]) => typeof v !== 'function' && v !== null && v !== undefined && k !== 'ctx'
  );

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    if (Array.isArray(value)) {
      plain[key] = value.map(treeToPlain);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
    } else if (typeof value === 'object' || value instanceof BaseTree) {
      plain[key] = treeToPlain(value);
    } else {
      plain[key] = value;
    }
  }

  return plain;
};

export abstract class BaseTree {
  public ctx?: ParserRuleContext;

  public toPlain(): unknown {
    return treeToPlain(this);
  }

  public toJson(): string {
    const tabWidth = 2;
    return JSON.stringify(this.toPlain(), null, tabWidth);
  }
}
