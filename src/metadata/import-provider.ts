import { lstatSync } from 'fs';
import os from 'os';
import path from 'path';
import { Boolean, String } from '../lib/core';
import { DeclarationScope } from './declaration/scope/declaration-scope';

function isDirectory(fullPath): Boolean {
  try {
    const stats = lstatSync(fullPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

function isFile(fullPath): Boolean {
  try {
    const stats = lstatSync(fullPath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
}

export class ImportProvider {
  fullPath: String;

  static cache: Map<String, DeclarationScope> = new Map();

  constructor(private importPath: string) {
    this.fullPath = resolvePath(this.importPath);
  }

  isValid() {
    return isDirectory(this.fullPath);
  }

  scope(): DeclarationScope {
    throw new Error('Not implemented');
  }
}

function resolvePath(importPath: String): String {
  if (importPath[0] === '~') {
    return path.join(os.homedir(), importPath.slice(1));
  }
  return path.resolve(importPath);
}
