import { SimpleTypeTree } from '../simple-type/simple-type.tree';
import { TypeTree } from '../type.tree';
import { StrType } from './str-type';

export class NumType extends SimpleTypeTree {
    static instance = new NumType();

    name = 'num';

    __add__(type: TypeTree): TypeTree {
        const fits = {
            null: NumType.instance,
            bool: NumType.instance,
            num: NumType.instance,
            str: StrType.instance,
        };

        return fits[type.name];
    }

    __substract__(type: TypeTree): TypeTree {
        const fits = {
            null: NumType.instance,
            bool: NumType.instance,
            num: NumType.instance,
            str: undefined,
        };

        return fits[type.name];
    }
}
