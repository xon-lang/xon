import {
    ArrayTypeContext,
    DictionaryTypeContext,
    FunctionTypeContext,
    SimpleTypeContext,
    TypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { DictionaryTypeTree } from './dictionary-type/dictionary-type.tree';
import { FunctionTypeTree } from './fucntion-type/function-type.tree';
import { SimpleTypeTree } from './simple-type/simple-type.tree';
import { TypeTree } from './type.tree';

export function getTypeTree(ctx: TypeContext): TypeTree {
    if (ctx === undefined) return undefined;

    if (ctx instanceof SimpleTypeContext) return new SimpleTypeTree(ctx);
    if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
    if (ctx instanceof DictionaryTypeContext) return new DictionaryTypeTree(ctx);
    if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);

    throw Error('No Statemenet found for ' + ctx.constructor.name);
}

export function getTypesTree(types: TypeContext[]) {
    return types?.map(getTypeTree) || [];
}

export function createSimpleTreeType(name) {
    const type = new SimpleTypeTree();
    type.name = name;
    return type;
}

export function createArrayTreeType(baseType: TypeTree) {
    const type = new ArrayTypeTree();
    type.baseType = baseType;
    return type;
}

export function createFunctionTreeType(args: TypeTree[], returnType: TypeTree) {
    const type = new FunctionTypeTree();
    type.args = args;
    type.returnType = returnType;
    return type;
}
