import { SimpleTypeTree } from '../simple-type/simple-type.tree';

export class StrType extends SimpleTypeTree {
    static instance = new StrType();

    name = 'str';

    __add__ = {
        null: StrType.instance,
        bool: StrType.instance,
        num: StrType.instance,
        str: StrType.instance,
    };
}
