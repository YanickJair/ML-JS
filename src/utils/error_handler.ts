export class ErrorHanlder extends Error {
  constructor(args: any) {
    super(args)
    this.name = 'ErrorHandler'
  }
}