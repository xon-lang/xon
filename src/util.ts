export const newLine = '\n';
export const newLineX2 = newLine + newLine;
export const tabSpace = '    ';

export function getFilename(fullPath: string) {
    return fullPath.split(/[\/\\]/).slice(-1)[0];
}

export function getFilenameWithoutExtension(fullPath: string) {
    return getFilename(fullPath).replace(/\.[^/.]+$/, '');
}

export function random(max = 999999999, min = 0) {
    return Math.random() * (max - min) + min;
}

export function randomInt(max = 999999999, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
