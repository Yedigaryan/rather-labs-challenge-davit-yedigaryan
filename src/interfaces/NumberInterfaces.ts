export interface IColoredNumber {
    digit?: boolean;
    isWhite?: boolean;
}


export interface ISetNumbersPayload extends IColoredNumber {
    row?: number,
    col?: number,
}

export interface ICases {
    time: number;
    payload: ISetNumbersPayload[]
}