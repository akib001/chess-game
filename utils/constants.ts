import { Piece } from "./enums";

export const CHESS_PIECES = {
  WHITE_PAWN: "w_pawn",
  WHITE_KNIGHT: "w_knight",
  WHITE_ROOK: "w_rook",
  WHITE_BISHOP: "w_bishop",
  WHITE_QUEEN: "w_queen",
  WHITE_KING: "w_king",

  // Add the rest of the black chess pieces here
  BLACK_PAWN: "b_pawn",
  BLACK_BISHOP: "b_bishop",
  BLACK_QUEEN: "b_queen",
  BLACK_KING: "b_king",
  BLACK_ROOK: "b_rook",
  BLACK_KNIGHT: "b_knight",
};

export const initialChessBoard: Piece[] = [
  Piece.BLACK_ROOK,
  Piece.BLACK_KNIGHT,
  Piece.BLACK_BISHOP,
  Piece.BLACK_QUEEN,
  Piece.BLACK_KING,
  Piece.BLACK_BISHOP,
  Piece.BLACK_KNIGHT,
  Piece.BLACK_ROOK,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.BLACK_PAWN,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.EMPTY,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_PAWN,
  Piece.WHITE_ROOK,
  Piece.WHITE_KNIGHT,
  Piece.WHITE_BISHOP,
  Piece.WHITE_QUEEN,
  Piece.WHITE_KING,
  Piece.WHITE_BISHOP,
  Piece.WHITE_KNIGHT,
  Piece.WHITE_ROOK,
];

export const PIECE_IMAGES = {
  [Piece.WHITE_PAWN]: "https://assets-themes.chess.com/image/ejgfv/150/wp.png",
  [Piece.WHITE_KNIGHT]:
    "https://assets-themes.chess.com/image/ejgfv/150/wn.png",
  [Piece.WHITE_ROOK]: "https://assets-themes.chess.com/image/ejgfv/150/wr.png",
  [Piece.WHITE_BISHOP]:
    "https://assets-themes.chess.com/image/ejgfv/150/wb.png",
  [Piece.WHITE_QUEEN]: "https://assets-themes.chess.com/image/ejgfv/150/wq.png",
  [Piece.WHITE_KING]: "https://assets-themes.chess.com/image/ejgfv/150/wk.png",
  [Piece.BLACK_PAWN]: "https://assets-themes.chess.com/image/ejgfv/150/bp.png",
  [Piece.BLACK_KNIGHT]:
    "https://assets-themes.chess.com/image/ejgfv/150/bn.png",
  [Piece.BLACK_ROOK]: "https://assets-themes.chess.com/image/ejgfv/150/br.png",
  [Piece.BLACK_BISHOP]:
    "https://assets-themes.chess.com/image/ejgfv/150/bb.png",
  [Piece.BLACK_QUEEN]: "https://assets-themes.chess.com/image/ejgfv/150/bq.png",
  [Piece.BLACK_KING]: "https://assets-themes.chess.com/image/ejgfv/150/bk.png",
};

export const SQUARE_HORIZONTAL_LABEL: Record<number, string> = {
  56: "a",
  57: "b",
  58: "c",
  59: "d",
  60: "e",
  61: "f",
  62: "g",
  63: "h",
};

export const SQUARE_VERTICAL_LABEL: Record<number, string> = {
  0: "6",
  8: "5",
  16: "4",
  32: "3",
  40: "2",
  48: "1",
  56: "0",
};

// test
