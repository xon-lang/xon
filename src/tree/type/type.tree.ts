import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { DictionaryTypeTree } from './dictionary-type/dictionary-type.tree';
import { SimpleTypeTree } from './simple-type/simple-type.tree';

export abstract class TypeTree extends BaseTree {
    ctx?: TypeContext;

    get asSimple() {
        return (this as any) as SimpleTypeTree;
    }

    get asArray() {
        return (this as any) as ArrayTypeTree;
    }

    get asDictionary() {
        return (this as any) as DictionaryTypeTree;
    }

    abstract eq(anotherType: TypeTree): Boolean;
}
