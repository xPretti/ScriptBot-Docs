export type FunctionType = {
   type: string;
   typeLink?: string;
};

export type FunctionParameter = {
   type: FunctionType;
   name: string;
   comment: string;
   value?: string;
};

export type FunctionReturn = {
   message: string;
   type: FunctionType;
};

export type FunctionReturns = {
   success?: FunctionReturn;
   error?: FunctionReturn;
};
