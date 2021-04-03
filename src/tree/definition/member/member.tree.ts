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
import { createFunctionType, getTypeTree } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';

export abstract class MemberTree extends BaseTree {
  public name: string;

  public isPrivate: boolean;

  public isAbstract: boolean;

  public parameters?: ParameterTree[] = [];

  public generics: string[];

  private _generics: Map<string, TypeTree> = new Map();

  private _returnType?: TypeTree;

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
    this.generics = ctx
      .generics()
      ?.id()
      .map((x) => x.text);
    this.isPrivate = this.name.startsWith('_');
    this.isAbstract = !(ctx instanceof PropertyMemberContext) && !ctx.body();
  }

  public body(): StatementTree[] {
    if (!(this.ctx instanceof PropertyMemberContext))
      this.parameters = this.ctx
        .parameter()
        .map((x) => new ParameterTree(x).useGenerics(this._generics));

    this._returnType =
      (this.ctx.type() && this._generics.get(this.ctx.type().text)) || getTypeTree(this.ctx.type());

    NamingService.instance.pushScope();

    if (!this._statements && this.ctx.body())
      this._statements = getStatementsTrees(this.ctx.body());

    NamingService.instance.popScope();
    return this._statements;
  }

  public useGenerics(generics: Map<string, TypeTree>): MemberTree {
    this._generics = generics;
    return this;
  }

  public getType(): TypeTree {
    return this.ctx instanceof PropertyMemberContext
      ? this._returnType
      : createFunctionType(this.parameters, this._returnType);
  }
}
