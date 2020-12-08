import { SimpleTypeTree } from '../simple-type/simple-type.tree';
import { StrType } from './str-type';

export class NumType extends SimpleTypeTree {
    static instance = new NumType();

    name = 'num';

    __add__ = {
        null: NumType.instance,
        bool: NumType.instance,
        num: NumType.instance,
        str: StrType.instance,
    };
}
