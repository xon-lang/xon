import { DataTypeInfo } from '../../data-type';

export class ExpressionTreeBase {
    dataType: DataTypeInfo;
    dataTypeDependsOn: string[] = [];
}
