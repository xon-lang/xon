import {exec} from 'node:child_process';
import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

exec(
  'java -jar ./scripts/antlr/antlr-4.13.2-complete.jar -Dlanguage=TypeScript packages/grammar/src/json/JsonGrammar.g4',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`${stdout}`);

    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }

    removeExportDefault('./packages/grammar/src/json');
  },
);

function removeExportDefault(directory: string) {
  readdirSync(directory).forEach((file) => {
    if (file.endsWith('.ts')) {
      const filePath = join(directory, file);
      const content = readFileSync(filePath, 'utf8');
      const newContent = content.replace(/export default class/g, 'export class');
      writeFileSync(filePath, newContent, 'utf8');
    }
  });
}
