import { FunctionTypeMetadata } from '../function/function-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  init: FunctionTypeMetadata;
  generics: TypeMetadata[] = [];

  constructor(public name: string, public genericsCount: number) {
    super();
  }

  setInit(init: FunctionTypeMetadata) {
    this.init = init;
  }

  cloneWithGenerics(generics: TypeMetadata[]): IdTypeMetadata {
    const type = new IdTypeMetadata(this.name, this.genericsCount);
    this.init = this.init;
    this.generics = generics;
    return type;
  }
}
