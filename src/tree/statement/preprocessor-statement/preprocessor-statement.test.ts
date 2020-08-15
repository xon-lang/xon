import { parseCode } from '../../../parse';
import { ProgramTree } from '../../program/program.tree';
import { PreprocessorStatementTree } from './preprocessor-statement.tree';

test('preprocessor test for any symbol', () => {
    const code =
        '#:joke wrong goal virus#0298 .RGJ^ j 6& W DCVµˆ∆∑#:¨˙√å∂√∆π–√•∂√¶˙∆˚#:çßÎ◊´‰◊´®√ı';
    const tree = parseCode(code, PreprocessorStatementTree);
    expect(tree.value).toBe(code.slice(2))
});

test('preprocessor value test', () => {
    const code = '#:await m();';
    const tree = parseCode(code, PreprocessorStatementTree);
    expect(tree.value).toBe('await m();');
});

test('preprocessor complex', () => {
    const code = '#:const battery = await si.battery();\nif a: log(0)';
    const tree = parseCode(code, ProgramTree);
    expect(tree.statements.length).toBe(2);
    const preprocessor = tree.statements[0] as PreprocessorStatementTree
    expect(preprocessor).toBeInstanceOf(PreprocessorStatementTree);
    expect(preprocessor.value).toBe('const battery = await si.battery();');
});
