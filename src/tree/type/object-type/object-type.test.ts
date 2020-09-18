import { parse } from '../../../parse';
import { FunctionTree } from '../../function/function.tree';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { SimpleTypeTree } from '../simple-type/simple-type.tree';
import { ObjectTypeTree } from './object-type.tree';

test('one items', () => {
    const code = 'f(a {key str}): log\n';
    const tree = new FunctionTree(parse(code).function());
    expect(tree.name).toBe('f');
    expect(tree.args.length).toBe(1);
    expect(tree.args[0].name).toBe('a');

    const dictType = tree.args[0].type as ObjectTypeTree;
    expect(dictType).toBeInstanceOf(ObjectTypeTree);
    expect(dictType.items.length).toBe(1);
    expect(dictType.items[0].name).toBe('key');
    const type = dictType.items[0].type as SimpleTypeTree;
    expect(type.name).toBe('str');
});

test('two items', () => {
    const code = 'f(a {key str, another num}): log\n';
    const tree = new FunctionTree(parse(code).function());
    // tree.log()
    expect(tree.name).toBe('f');
    expect(tree.args.length).toBe(1);
    expect(tree.args[0].name).toBe('a');

    const dictType = tree.args[0].type as ObjectTypeTree;
    expect(dictType).toBeInstanceOf(ObjectTypeTree);
    expect(dictType.items.length).toBe(2);
    expect(dictType.items[0].name).toBe('key');
    expect(dictType.items[0].type.asSimple.name).toBe('str');

    expect(dictType.items[1].name).toBe('another');
    expect(dictType.items[1].type.asSimple.name).toBe('num');
});

test('complex dict type', () => {
    const code = 'f(a {first str[], second {b hidden[]}}): log\n';
    const tree = new FunctionTree(parse(code).function());
    expect(tree.name).toBe('f');

    expect(tree.args.length).toBe(1);
    expect(tree.args[0].name).toBe('a');

    const dictType = tree.args[0].type as ObjectTypeTree;
    expect(dictType).toBeInstanceOf(ObjectTypeTree);

    expect(dictType.items.length).toBe(2);
    expect(dictType.items[0].name).toBe('first');
    const type1 = dictType.items[0].type as ArrayTypeTree;
    const baseType1 = type1.baseType as SimpleTypeTree;
    expect(baseType1.name).toBe('str');

    expect(dictType.items[1].name).toBe('second');
    const type2 = dictType.items[1].type as ObjectTypeTree;
    expect(type2.items.length).toBe(1);
    const type2FirstItem = type2.items[0];
    expect(type2FirstItem.name).toBe('b');
    const type2FirstItemType = type2FirstItem.type as ArrayTypeTree;
    const type2InnerBaseType = type2FirstItemType.baseType as SimpleTypeTree;
    expect(type2InnerBaseType.name).toBe('hidden');
});
