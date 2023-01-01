import { Stats } from 'fs';
import { String2 } from '~/lib/core';

export class FileFs {
  constructor(public fullPath: String2, public stats: Stats) {}
}
