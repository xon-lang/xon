// Generated from grammars/test/TestGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./TestGrammarParser.js";
import { ExprContext } from "./TestGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TestGrammarParser`.
 */
export default class TestGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TestGrammarParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `TestGrammarParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `TestGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `TestGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

