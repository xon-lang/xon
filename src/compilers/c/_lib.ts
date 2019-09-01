import { newLine, tabSpace } from './../../util';

export function generateStructType(name: string, object: any) {
    `typedef struct {
        ${Object.entries(object)
            .map(x => `${x[1]} ${[0]};`)
            .join(newLine)}
      } ${name};`;
}

export function alignBefore(text: string, times = 0) {
    return text
        .split('\n')
        .map(x => [...Array(times)].map(x => tabSpace).join('') + `${x}`)
        .join('\n');
}
