import { SimpleTypeTree } from '../simple-type/simple-type.tree';
import { NumType } from './num-type';
import { StrType } from './str-type';

export class BoolType extends SimpleTypeTree {
    static instance = new BoolType();

    name = 'bool';

    __add__ = {
        null: NumType.instance,
        bool: NumType.instance,
        num: NumType.instance,
        str: StrType.instance,
    };
}
