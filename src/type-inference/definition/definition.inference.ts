import { DefinitionTree } from '../../tree/definition/definition.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseInference } from '../base.inference';
import { GenericsMap } from '../generics-map';
import { addToScope } from '../id-scope';
import { getParameterInference } from '../parameter/parameter-inference.helper';
import { ParameterInference } from '../parameter/parameter.inference';
import { InitMemberInference } from './member/init-member/init-member.inference';
import { getMemberInference } from './member/member-inference.helper';
import { MemberInference } from './member/member.inference';
import { MethodMemberInference } from './member/method-member/method-member.inference.type';
import { OperatorMemberInference } from './member/operator-member/operator-member.inference';
import { PropertyMemberInference } from './member/property-member/property-member.inference';

export class DefinitionInference extends BaseInference {
  public name: string;

  public declaredGenerics: string[];

  public parameters: ParameterInference[];

  public inheritanceType?: TypeTree;

  public members: MemberInference[] = [];

  public properties: PropertyMemberInference[] = [];

  public init: InitMemberInference;

  public operators: OperatorMemberInference[] = [];

  public methods: MethodMemberInference[] = [];

  public constructor(public tree: DefinitionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.declaredGenerics = tree.declaredGenerics;
    this.inheritanceType = tree.inheritanceType;

    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));

    this.members = tree.members.map((x) => getMemberInference(x, genericsMap));
    this.members.forEach((x) => {
      if (x instanceof InitMemberInference) this.init = x;
      if (x instanceof MethodMemberInference) this.methods.push(x);
      if (x instanceof OperatorMemberInference) this.operators.push(x);
      if (x instanceof PropertyMemberInference) this.properties.push(x);
    });
  }
}
