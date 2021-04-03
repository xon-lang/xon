/* eslint-disable no-param-reassign */
import { DefinitionContext } from '../../grammar/xon-parser';
import { IssueService } from '../../issue-service/issue-service';
import { NamingService } from '../../naming-service/naming-service';
import { BaseTree } from '../base.tree';
import { FunctionTypeTree } from '../type/function-type/function-type.tree';
import { GenericTypeTree } from '../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import {
  createFunctionType,
  // createGenericType,
  createPlainType,
  getTypeTree,
  typeAny,
} from '../type/type-helper';
import { TypeTree } from '../type/type.tree';
import { IndexMemberTree } from './member/index-member/index-member.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { getMemberTree } from './member/member-helper';
import { MemberTree } from './member/member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public generics: string[];

  public inheritanceType?: PlainTypeTree | GenericTypeTree;

  private _generics: Map<string, TypeTree> = new Map();

  private _members: MemberTree[];

  public get properties(): PropertyMemberTree[] {
    return this._members
      .filter((x) => x instanceof PropertyMemberTree)
      .map((x) => x as PropertyMemberTree);
  }

  public get inits(): InitMemberTree[] {
    return this._members.filter((x) => x instanceof InitMemberTree).map((x) => x as InitMemberTree);
  }

  public get indexes(): IndexMemberTree[] {
    return this._members
      .filter((x) => x instanceof IndexMemberTree)
      .map((x) => x as IndexMemberTree);
  }

  public get operators(): OperatorMemberTree[] {
    return this._members
      .filter((x) => x instanceof OperatorMemberTree)
      .map((x) => x as OperatorMemberTree);
  }

  public get methods(): MethodMemberTree[] {
    return this._members
      .filter((x) => x instanceof MethodMemberTree)
      .map((x) => x as MethodMemberTree);
  }

  public constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx._name.text;
    this.generics = ctx
      .generics()
      ?.id()
      .map((x) => x.text);
    this.inheritanceType =
      ctx.type() && (getTypeTree(ctx.type()) as PlainTypeTree | GenericTypeTree);
    if (this.name !== 'Any' && !this.inheritanceType) this.inheritanceType = typeAny;
  }

  public getType(): FunctionTypeTree {
    const mainType = createPlainType(this.name);
    // const returnType = this.generics.length ? createGenericType(mainType, this.generics) : mainType;
    return createFunctionType([], mainType);
  }

  public body(): MemberTree[] {
    if (!this._members) {
      NamingService.instance.pushScope();
      this._members = this.ctx.member().map((x) => getMemberTree(x).useGenerics(this._generics));
      this._members.forEach((x) => x.body());

      this.validate();
      NamingService.instance.popScope();
    }

    return this._members;
  }

  public useGenerics(generics: Map<string, TypeTree>): DefinitionTree {
    this._generics = generics;
    return this;
  }

  private validate() {
    if (this.name[0] === this.name[0].toLowerCase())
      IssueService.instance.addWarning(
        this,
        `Definition name "${this.name}" start from lowercase`,
        `Definition name must be ${this.name[0].toUpperCase() + this.name.slice(1)}`,
      );

    this.operators
      .filter((x) => (x.parameters[0].getType() as PlainTypeTree).name !== this.name)
      .forEach((x) =>
        IssueService.instance.addWarning(
          x,
          `First operator "${x.name}" overload type  is wrong`,
          `First parameter "${x.parameters[0].name}" must be "${this.name}"`,
        ),
      );

    this.methods
      .filter((x) => this.properties.some((z) => z.name === x.name))
      .forEach((x) =>
        IssueService.instance.addWarning(
          x,
          `Method name "${x.name}" is the same as property`,
          'Use another name for method or property',
        ),
      );
  }
}
