import { Request, Response } from "express";
declare class BookController {
    showListBook: (req: Request, res: Response) => Promise<void>;
    showCreateBook: (req: Request, res: Response) => void;
    createBook: (req: Request, res: Response) => Promise<void>;
    updateBook: (req: Request, res: Response) => Promise<void>;
    editBook: (req: Request, res: Response) => Promise<void>;
    deleteBook: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BookController;
export default _default;
