import { SimpleTypeTree } from '../simple-type/simple-type.tree';
import { NumType } from './num-type';
import { StrType } from './str-type';

export class NullType extends SimpleTypeTree {
    static instance = new NullType();

    name = 'null';

    __add__ = {
        null: NumType.instance,
        bool: NumType.instance,
        num: NumType.instance,
        str: StrType.instance,
    };
}
