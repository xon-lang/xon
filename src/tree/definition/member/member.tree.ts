import {
  IndexMemberContext,
  InitMemberContext,
  MethodMemberContext,
  OperatorMemberContext,
  PropertyMemberContext,
} from '../../../grammar/xon-parser';
import { NamingService } from '../../../naming-service/naming-service';
import { BaseTree } from '../../base.tree';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getStatementsTrees } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { createFunctionType, getTypeTree, typeVoid } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';

export abstract class MemberTree extends BaseTree {
  public name: string;

  public isPrivate: boolean;

  public isAbstract: boolean;

  public parameters?: ParameterTree[];

  public returnType?: TypeTree;

  private _dataType: TypeTree;

  private _statements?: StatementTree[];

  public constructor(
    public ctx:
      | PropertyMemberContext
      | InitMemberContext
      | IndexMemberContext
      | OperatorMemberContext
      | MethodMemberContext,
  ) {
    super();

    this.name = ctx._name.text;
    this.isPrivate = this.name.startsWith('_');
    this.isAbstract = !(ctx instanceof PropertyMemberContext) && !ctx.body();
    if (!(ctx instanceof PropertyMemberContext))
      this.parameters = ctx.parameter().map((x) => new ParameterTree(x));

    if (!(ctx instanceof InitMemberContext)) this.returnType = getTypeTree(ctx.type());

    if (this.ctx instanceof MethodMemberContext && !this.returnType) this.returnType = typeVoid;
  }

  public body(): StatementTree[] {
    NamingService.instance.pushScope();

    if (!this._statements && this.ctx.body())
      this._statements = getStatementsTrees(this.ctx.body());

    NamingService.instance.popScope();
    return this._statements;
  }

  public getType(): TypeTree {
    if (!this._dataType) {
      if (this.ctx instanceof PropertyMemberContext) this._dataType = this.returnType;
      else this._dataType = createFunctionType(this.parameters, this.returnType);
    }

    return this._dataType;
  }
}
