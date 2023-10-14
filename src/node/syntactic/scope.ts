import { String2 } from '~/lib/core';
import { DataType } from '~/node/syntactic/data-type';

export class Scope {
  idType: { id: String2; type: DataType }[] = [];

  constructor(public parent: Scope | null) {}

  add(id: String2, type: DataType): void {
    this.idType.push({ id, type });
  }

  find(id: String2): DataType | null {
    return this.idType.find((x) => x.id === id) ?? this.parent?.find(id) ?? null;
  }

  newScope(): Scope {
    return new Scope(this);
  }
}
