import { FunctionTypeMetadata } from '../function/function-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  constructorType: FunctionTypeMetadata;
  generics: TypeMetadata[] = [];

  constructor(public name: string, public genericsCount: number) {
    super();
  }

  setInit(init: FunctionTypeMetadata) {
    this.constructorType = init;
  }

  cloneWithGenerics(generics: TypeMetadata[]): IdTypeMetadata {
    const type = new IdTypeMetadata(this.name, this.genericsCount);
    this.constructorType = this.constructorType;
    this.generics = generics;
    return type;
  }
}
