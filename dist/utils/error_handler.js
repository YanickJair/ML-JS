"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHanlder extends Error {
    constructor(args) {
        super(args);
        this.name = 'ErrorHandler';
    }
}
exports.ErrorHanlder = ErrorHanlder;
