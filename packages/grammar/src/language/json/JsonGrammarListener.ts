// Generated from packages/grammar/src/json/JsonGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { Json5Context } from "./JsonGrammarParser.js";
import { ObjContext } from "./JsonGrammarParser.js";
import { PairContext } from "./JsonGrammarParser.js";
import { KeyContext } from "./JsonGrammarParser.js";
import { ValueContext } from "./JsonGrammarParser.js";
import { ArrContext } from "./JsonGrammarParser.js";
import { NumberContext } from "./JsonGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JsonGrammarParser`.
 */
export class JsonGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.json5`.
	 * @param ctx the parse tree
	 */
	enterJson5?: (ctx: Json5Context) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.json5`.
	 * @param ctx the parse tree
	 */
	exitJson5?: (ctx: Json5Context) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGrammarParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGrammarParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

