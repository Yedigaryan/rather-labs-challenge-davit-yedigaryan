export interface IColoredNumber {
    digit?: boolean;
    color?: "white" | "green" | "grey" | undefined | string
}


export interface ISetNumbersPayload extends IColoredNumber {
    row?: number,
    col?: number,
    rows?: number[],
    cols?: number[]
}

export interface ICases {
    time: number;
    action: string;
    payload: ISetNumbersPayload | ISetNumbersPayload[]
}