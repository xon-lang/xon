import { SimpleTypeTree } from '../simple-type/simple-type.tree';

export class BoolType extends SimpleTypeTree {
    static instance = new BoolType();

    name = 'bool';
}
