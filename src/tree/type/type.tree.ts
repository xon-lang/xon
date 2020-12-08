import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './fucntion-type/function-type.tree';
import { ObjectTypeTree } from './object-type/object-type.tree';
import { SimpleTypeTree } from './simple-type/simple-type.tree';

export abstract class TypeTree extends BaseTree {
    ctx?: TypeContext;
    name: string | number = NaN;

    __add__(type: TypeTree) {
        throw new Error('Not implemented');
    }

    get asSimple() {
        return (this as any) as SimpleTypeTree;
    }

    get asArray() {
        return (this as any) as ArrayTypeTree;
    }

    get asDictionary() {
        return (this as any) as ObjectTypeTree;
    }

    get asFunction() {
        return (this as any) as FunctionTypeTree;
    }

    abstract eq(anotherType: TypeTree): Boolean;
}
