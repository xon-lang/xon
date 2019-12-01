export const asmTypes: any = {
    8: 'byte',
    16: 'word',
    32: 'dword',
    48: 'fword',
    64: 'qword',
    80: 'tword',
    128: 'xword',
    256: 'yword',
    512: 'zword',
}

export const asmDefineTypes: any = {
    8: 'db',
    16: 'dw',
    32: 'dd',
    48: 'df',
    64: 'dq',
    80: 'dt'
}

export const asmReserveTypes: any = {
    8: 'rb',
    16: 'rw',
    32: 'rd',
    48: 'rf',
    64: 'rq',
    80: 'rt'
}

export const specialSymbols: any = {
    '\\\\t': '\t',
    '\\\\v': '\v',
    '\\\\0': '\0',
    '\\\\b': '\b',
    '\\\\f': '\f',
    '\\\\n': '\n',
    '\\\\r': '\r',
    '\\\\"': '"',
    '\\\\\\\\': '\\',
}

export function stringLiteralToBytes(text: string) {
    return stringToBytes(text.slice(1, -1));
}

export function stringToBytes(text: string) {
    Object.keys(specialSymbols).forEach(
        x => text = text.replace(new RegExp(x, 'g'), specialSymbols[x])
    )
    return text.split('').map(x => x.charCodeAt(0))
}