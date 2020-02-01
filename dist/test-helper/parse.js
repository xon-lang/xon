"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const index_1 = require("../index");
function parseFile(filePath, type) {
    const code = fs.readFileSync(filePath, 'utf8');
    return index_1.parseCode(code, type);
}
exports.parseFile = parseFile;
function parseWrongCode(code, type) {
    expect.assertions(1);
    try {
        index_1.parseCode(code, type);
    }
    catch (e) {
        expect(e.message).not.toBeNull();
    }
}
exports.parseWrongCode = parseWrongCode;
function getTestCode() {
    const testFilePath = module.parent.parent.filename;
    const dir = path.dirname(testFilePath);
    const name = path.basename(testFilePath, '.ts');
    return fs.readFileSync(path.join(dir, name + '.xon')).toString();
}
exports.getTestCode = getTestCode;
function testXonFIle(type, fn) {
    const name = path.basename(module.parent.parent.filename, '.test.td');
    const code = getTestCode();
    const tree = index_1.parseCode(code, type);
    test(name, () => fn(tree));
}
exports.testXonFIle = testXonFIle;
//# sourceMappingURL=parse.js.map