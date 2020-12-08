import { SimpleTypeTree } from '../simple-type/simple-type.tree';

export class StrType extends SimpleTypeTree {
    static instance = new StrType();

    name = 'str';
}
