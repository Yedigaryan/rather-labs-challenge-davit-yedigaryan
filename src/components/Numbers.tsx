import {AnimatePresence, motion, useWillChange} from "framer-motion";
import {useEffect, useState} from "react";
import styles from "./Numbers.module.scss"


interface IColoredNumber {
    digit?: boolean;
    color?: "white" | "green" | "grey" | undefined | string
}


interface ISetNumbersPayload extends IColoredNumber {
    row?: number,
    col?: number,
    rows?: number[],
    cols?: number[]
}

interface ICases {
    time: number;
    action: string;
    payload: ISetNumbersPayload | ISetNumbersPayload[]
}

export default function Numbers({frameAppearDuration}: { frameAppearDuration: number }) {
    const willChange = useWillChange()

    const numbers: IColoredNumber[][] = [
        [
            {digit: false, color: "white"}
        ],
        [
            {digit: false, color: "white"}, {digit: true, color: "white"}
        ],
        [
            {digit: true, color: "white"}, {digit: false, color: "white"},
            {digit: true, color: "white"}, {digit: false, color: "white"}
        ],
        [
            {digit: true, color: "white"}, {digit: true, color: "white"}, {digit: false, color: "white"},
            {digit: true, color: "white"}, {digit: false, color: "white"}, {digit: true, color: "white"}
        ],
        [
            {digit: true, color: "white"}, {digit: true, color: "green"}, {digit: false, color: "white"},
            {digit: false, color: "white"}, {digit: false, color: "white"}, {digit: true, color: "white"},
            {digit: true, color: "white"}
        ]
    ];
    const [numberState, setNumberState] = useState(numbers);
    const stepDuration: number = 0.4;
    let indexOfNumber: number = 0;
    let timeInterval: number = 1;

    const casesPart: ICases[] = [
        {time: 1, action: 'setDigit', payload: [{row: 0, col: 0, digit: true}]},
        {time: 2, action: 'setColor', payload: [{row: 0, col: 0, color: "green"}]},
        {time: 3, action: 'setDigit', payload: [{row: 1, col: 1, digit: true}]},
        {time: 5, action: 'setColor', payload: [{row: 2, col: 0, color: "green"}, {row: 2, col: 2, color: "green"}]},
        {time: 9, action: 'toggleDigits', payload: {rows: [1, 2], cols: [0, 2]}},
        {time: 11, action: 'setDigit', payload: [{row: 2, col: 1, digit: false}]},
        {time: 14, action: 'setDigits', payload: [{row: 0, col: 0, digit: false}, {row: 2, col: 3, digit: false}]},
        {
            time: 15,
            action: 'setDigits',
            payload: [
                {row: 3, col: 0, digit: false},
                {row: 3, col: 5, digit: false},
                {row: 3, col: 3, color: "grey"}]
        },
        {time: 15.5, action: 'setDigits', payload: [{row: 3, col: 2, digit: true}, {row: 3, col: 3, color: "green"}]},
        {time: 16, action: 'setDigits', payload: [{row: 1, col: 1, digit: false}, {row: 3, col: 3, digit: false}]},
        {time: 16.5, action: 'setDigit', payload: [{row: 1, col: 0, digit: true}]},
        {
            time: 19, action: 'setDigits',
            payload: [
                {row: 2, col: 1, digit: true},
                {row: 4, col: 4, color: "green"}
            ]
        },
        {
            time: 21,
            action: 'setDigits',
            payload: [{row: 0, col: 0, digit: true}, {row: 2, col: 3, digit: true}, {row: 3, col: 1, digit: false}]
        },
        {
            time: 22,
            action: 'setDigits',
            payload: [
                {row: 2, col: 0, digit: false},
                {row: 2, col: 2, digit: false},
                {row: 3, col: 0, digit: true},
                {row: 3, col: 5, digit: true},
                {row: 3, col: 3, color: "green"},
                {row: 4, col: 3, digit: false}
            ]
        },
        {
            time: 23,
            action: 'setDigits',
            payload: [{row: 1, col: 1, digit: true}, {row: 3, col: 3, digit: true}, {row: 4, col: 2, digit: true}]
        },
        {time: 24, action: 'setDigit', payload: [{row: 4, col: 1, digit: false}]},
        {time: 25, action: 'setDigit', payload: [{row: 4, col: 5, digit: true}]},
        {time: 26, action: 'setDigit', payload: [{row: 3, col: 4, digit: false}]},
        {
            time: 27,
            action: 'setDigits',
            payload: [{row: 4, col: 0, digit: false}, {row: 4, col: 4, digit: true, color: "white"}]
        },
        {time: 28, action: 'setDigit', payload: [{row: 4, col: 6, digit: false}]},
        {time: 29, action: 'setColor', payload: [{row: 0, col: 0, color: "white"}]},
        {time: 30, action: 'setDigits', payload: [{row: 4, col: 1, digit: false}, {row: 4, col: 2, digit: true}]},
        {
            time: 31,
            action: 'setDigits',
            payload: [{row: 2, col: 0, digit: true}, {row: 2, col: 2, digit: true}, {row: 4, col: 3, digit: true}]
        },
        {time: 32, action: 'setDigit', payload: [{row: 1, col: 0, digit: false}]},
        {time: 33, action: 'setDigit', payload: [{row: 4, col: 1, digit: true}]},
        {time: 34, action: 'setColor', payload: [{row: 4, col: 1, color: "white"}]},
        {time: 34, action: 'setColor', payload: [{row: 4, col: 1, color: 'white'}]},
        {time: 35, action: 'setDigit', payload: [{row: 3, col: 4, digit: true}]},
        {time: 36, action: 'setDigit', payload: [{row: 2, col: 1, digit: false}]},
        {time: 37, action: 'setDigit', payload: [{row: 4, col: 0, digit: true}]},
        {time: 38, action: 'setDigit', payload: [{row: 4, col: 6, digit: true}]},
        {time: 39, action: 'setDigit', payload: [{row: 0, col: 0, digit: false}, {row: 2, col: 3, digit: false}]},
        {time: 40, action: 'setDigit', payload: [{row: 3, col: 0, digit: false}, {row: 3, col: 5, digit: false}]},
        {
            time: 41,
            action: 'setDigit',
            payload: [
                {row: 1, col: 1, digit: false},
                {row: 3, col: 3, digit: false},
                {row: 3, col: 2, digit: true},
                {row: 4, col: 2, digit: false}]
        },
        {time: 42, action: 'setDigit', payload: [{row: 1, col: 0, digit: true}]},
        {time: 43, action: 'setDigit', payload: [{row: 4, col: 5, digit: false}]},
        {time: 44, action: 'setDigit', payload: [{row: 4, col: 4, digit: false}]},
        {time: 45, action: 'setDigit', payload: [{row: 2, col: 1, digit: true}]},
        {time: 46, action: 'setColor', payload: [{row: 4, col: 1, color: 'white'}]},
        {time: 47, action: 'setDigit', payload: [{row: 0, col: 0, digit: true}, {row: 2, col: 3, digit: true}]},
        {time: 48, action: 'setDigits', payload: [{row: 3, col: 1, digit: false, color: 'grey'}]},
        {time: 49, action: 'setDigit', payload: [{row: 3, col: 0, digit: true}, {row: 3, col: 5, digit: true}]},
        {
            time: 50,
            action: 'setDigit',
            payload: [{row: 2, col: 0, digit: false}, {row: 2, col: 2, digit: false}, {row: 4, col: 3, digit: false}]
        },
        {
            time: 51,
            action: 'setDigit',
            payload: [
                {row: 1, col: 1, digit: true},
                {row: 3, col: 3, digit: true},
                {row: 4, col: 2, digit: true},
                {row: 4, col: 1, digit: false}]
        },
        {
            time: 52,
            action: 'setDigits',
            payload: [
                {row: 4, col: 5, digit: false, color: 'white'},
                {row: 4, col: 4, digit: true},
                {row: 3, col: 4, digit: false}
            ]
        },
        {time: 53, action: 'setDigit', payload: [{row: 4, col: 4, digit: true}]},
        {time: 53.5, action: 'setDigit', payload: [{row: 4, col: 0, digit: false}]},
        {
            time: 54.5,
            action: 'setDigits',
            payload: [{row: 4, col: 6, digit: false, color: 'white'}, {row: 1, col: 1, color: 'white'}]
        },
        {time: 55.5, action: 'setDigit', payload: [{row: 3, col: 1, digit: true}]},
        {time: 56, action: 'setDigits', payload: [{row: 3, col: 2, digit: false, color: 'white'}]},
        {
            time: 57,
            action: 'setDigit',
            payload: [{row: 2, col: 0, digit: true}, {row: 2, col: 2, digit: true}, {row: 4, col: 3, digit: true}]
        },
        {time: 57.5, action: 'setDigit', payload: [{row: 1, col: 0, digit: false}]},
        {time: 58.5, action: 'setDigit', payload: [{row: 4, col: 1, digit: true}]},
        {time: 59.5, action: 'setDigit', payload: [{row: 3, col: 4, digit: true}]},
        {time: 60.5, action: 'setDigit', payload: [{row: 2, col: 1, digit: false}]},
        {time: 61.5, action: 'setDigit', payload: [{row: 4, col: 0, digit: true}]},
        {time: 62, action: 'setColor', payload: [{row: 4, col: 6, color: 'green'}]},
        {
            time: 63, action: 'setDigit', payload: [
                {row: 0, col: 0, digit: false},
                {row: 2, col: 3, digit: false},
                {row: 4, col: 6, digit: true}]
        },
        {
            time: 64,
            action: 'setColorAndDigit',
            payload: [{row: 2, col: 2, color: 'white'}, {row: 3, col: 0, digit: false}, {row: 3, col: 5, digit: false}]
        },
        {time: 65, action: 'setDigit', payload: [{row: 3, col: 2, digit: false}]},
        {
            time: 66,
            action: 'setDigit',
            payload: [{row: 1, col: 1, digit: false}, {row: 3, col: 3, digit: false}, {row: 4, col: 2, digit: false}]
        },
        {time: 67, action: 'setDigit', payload: [{row: 1, col: 0, digit: true}]},
        {time: 68, action: 'setDigit', payload: [{row: 4, col: 4, digit: false}]},
        {time: 69, action: 'setDigit', payload: [{row: 2, col: 1, digit: true}]},
        {
            time: 70,
            action: 'setDigit',
            payload: [{row: 0, col: 0, digit: true}, {row: 2, col: 3, digit: true}, {row: 3, col: 1, digit: false}]
        },
    ];

    const casesMap = new Map();

    function setDigit(digitSettings: ISetNumbersPayload): void {
        console.log('digit', digitSettings)
        setNumberState((prevState) => {
            const updatedState = [...prevState];
            if (digitSettings.row && digitSettings.col) {
                updatedState[digitSettings.row][digitSettings.col].digit = digitSettings.digit;
            }
            return updatedState;
        });
    };

    function setColor({row, col, color}: ISetNumbersPayload): void {
        console.log('setColor')
        setNumberState((prevState) => {
            const updatedState = [...prevState];
            if (row && col) {
                updatedState[row][col].color = color;
            }
            return updatedState;
        });
    };

    function toggleDigits(digitSettings: ISetNumbersPayload): void {
        console.log('toggleDigits')
        setNumberState((prevState) => {
            const updatedState = [...prevState];
            if (digitSettings.row && digitSettings.col) {
                updatedState[digitSettings.row][digitSettings.col].digit = !prevState[digitSettings.row][digitSettings.col].digit;
            }
            return updatedState;
        });
    };

    function setDigits(digitSettings: ISetNumbersPayload[]): void {
        console.log('digitSettings', digitSettings)
        setNumberState((prevState) => {
            const updatedState = [...prevState];
            digitSettings.forEach(({row, col, digit, color}) => {

                if (row && col) {
                    updatedState[row][col].digit = digit;
                    if (color) {
                        updatedState[row][col].color = color;
                    }
                }
            });
            return updatedState;
        });
    };


    useEffect(() => {
        casesPart.forEach(({time, action, payload}) => {
            if (!casesMap.has(time)) {
                casesMap.set(time, []);
            }
            casesMap.get(time).push({action, payload});
        });

        const timer = setInterval(() => {
            const currentTime = timeInterval / 2;

            // if (currentTime === 0) {
            //     // Case 1
            //     console.log('case 1');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 2 * stepDuration) {
            //     // Case 2
            //     console.log('case 2');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].color = "green";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 3 * stepDuration) {
            //     // Case 3
            //     console.log('case 3');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 5 * stepDuration) {
            //     // Case 4
            //     console.log('case 4');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].color = "green";
            //         updatedState[2][2].color = "green";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 9 * stepDuration) {
            //     // Case 5
            //     console.log('case 5');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = !prevState[1][0].digit;
            //         updatedState[2][0].digit = !prevState[2][0].digit;
            //         updatedState[2][2].digit = !prevState[2][2].digit;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 11 * stepDuration) {
            //     // Case 6
            //     console.log('case 6');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 14 * stepDuration) {
            //     // Case 7
            //     console.log('case 7');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = false;
            //         updatedState[2][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 15 * stepDuration) {
            //     // Case 8
            //     console.log('case 8');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][0].digit = false;
            //         updatedState[3][5].digit = false;
            //         updatedState[3][3].color = "grey";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 15.5 * stepDuration) {
            //     // Case 9
            //     console.log('case 9');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][2].digit = true;
            //         updatedState[3][3].color = "green";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 16 * stepDuration) {
            //     // Case 10
            //     console.log('case 10');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = false;
            //         updatedState[3][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 16.5 * stepDuration) {
            //     // Case 11
            //     console.log('case 11');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 19 * stepDuration) {
            //     // Case 12
            //     console.log('case 12');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = true;
            //         updatedState[4][4].color = "green";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 21 * stepDuration) {
            //     // Case 13
            //     console.log('case 13');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = true;
            //         updatedState[2][3].digit = true;
            //         updatedState[3][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 22 * stepDuration) {
            //     // Case 14
            //     console.log('case 14');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].digit = false;
            //         updatedState[2][2].digit = false;
            //         updatedState[3][0].digit = true;
            //         updatedState[3][5].digit = true;
            //         updatedState[3][3].color = "green";
            //         updatedState[4][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            //
            // if (currentTime === 23 * stepDuration) {
            //     // Case 15
            //     console.log('case 15');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = true;
            //         updatedState[3][3].digit = true;
            //         updatedState[4][2].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 24 * stepDuration) {
            //     // Case 16
            //     console.log('case 16');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 25 * stepDuration) {
            //     // Case 17
            //     console.log('case 17');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][5].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 26 * stepDuration) {
            //     // Case 18
            //     console.log('case 18');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][4].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 27 * stepDuration) {
            //     // Case 19
            //     console.log('case 19');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][0].digit = false;
            //         updatedState[4][4].digit = true;
            //         updatedState[4][4].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 28 * stepDuration) {
            //     // Case 20
            //     console.log('case 20');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][6].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 29 * stepDuration) {
            //     // Case 21
            //     console.log('case 21');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 30 * stepDuration) {
            //     // Case 22
            //     console.log('case 22');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].digit = false;
            //         updatedState[4][2].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 31 * stepDuration) {
            //     // Case 23
            //     console.log('case 23');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].digit = true;
            //         updatedState[2][2].digit = true;
            //         updatedState[4][3].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 32 * stepDuration) {
            //     // Case 24
            //     console.log('case 24');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 33 * stepDuration) {
            //     // Case 25
            //     console.log('case 25');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 34 * stepDuration) {
            //     // Case 26
            //     console.log('case 26');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 35 * stepDuration) {
            //     // Case 27
            //     console.log('case 27');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][4].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 36 * stepDuration) {
            //     // Case 28
            //     console.log('case 28');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 37 * stepDuration) {
            //     // Case 29
            //     console.log('case 29');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 38 * stepDuration) {
            //     // Case 30
            //     console.log('case 30');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][6].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 39 * stepDuration) {
            //     // Case 31
            //     console.log('case 31');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = false;
            //         updatedState[2][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 40 * stepDuration) {
            //     // Case 32
            //     console.log('case 32');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][0].digit = false;
            //         updatedState[3][5].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 41 * stepDuration) {
            //     // Case 33
            //     console.log('case 33');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = false;
            //         updatedState[3][3].digit = false;
            //         updatedState[3][2].digit = true;
            //         updatedState[4][2].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 42 * stepDuration) {
            //     // Case 34
            //     console.log('case 34');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 43 * stepDuration) {
            //     // Case 35
            //     console.log('case 35');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][5].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 44 * stepDuration) {
            //     // Case 36
            //     console.log('case 36');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][4].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 45 * stepDuration) {
            //     // Case 37
            //     console.log('case 37');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 46 * stepDuration) {
            //     // Case 38
            //     console.log('case 38');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 47 * stepDuration) {
            //     // Case 39
            //     console.log('case 39');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = true;
            //         updatedState[2][3].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 48 * stepDuration) {
            //     // Case 40
            //     console.log('case 40');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][1].digit = false;
            //         updatedState[3][3].color = "grey";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 49 * stepDuration) {
            //     // Case 41
            //     console.log('case 41');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][0].digit = true;
            //         updatedState[3][5].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 50 * stepDuration) {
            //     // Case 42
            //     console.log('case 42');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].digit = false;
            //         updatedState[2][2].digit = false;
            //         updatedState[4][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 51 * stepDuration) {
            //     // Case 43
            //     console.log('case 43');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = true;
            //         updatedState[3][3].digit = true;
            //         updatedState[4][2].digit = true;
            //         updatedState[4][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 52 * stepDuration) {
            //     // Case 44
            //     console.log('case 44');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][5].digit = false;
            //         updatedState[4][4].color = "white";
            //         updatedState[3][4].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 53 * stepDuration) {
            //     // Case 45
            //     console.log('case 45');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][4].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 53.5 * stepDuration) {
            //     // Case 46
            //     console.log('case 46');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][0].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 54.5 * stepDuration) {
            //     // Case 47
            //     console.log('case 47');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][6].digit = false;
            //         updatedState[1][1].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 55.5 * stepDuration) {
            //     // Case 48
            //     console.log('case 48');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 56 * stepDuration) {
            //     // Case 49
            //     console.log('case 49');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][2].digit = false;
            //         updatedState[3][2].color = "white";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 57 * stepDuration) {
            //     // Case 50
            //     console.log('case 50');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].digit = true;
            //         updatedState[2][2].digit = true;
            //         updatedState[4][3].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 57.5 * stepDuration) {
            //     // Case 51
            //     console.log('case 51');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 58.5 * stepDuration) {
            //     // Case 52
            //     console.log('case 52');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 59.5 * stepDuration) {
            //     // Case 53
            //     console.log('case 53');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][4].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 60.5 * stepDuration) {
            //     // Case 54
            //     console.log('case 54');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 61.5 * stepDuration) {
            //     // Case 55
            //     console.log('case 55');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 62 * stepDuration) {
            //     // Case 56
            //     console.log('case 56');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][6].color = "green";
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 63 * stepDuration) {
            //     // Case 57
            //     console.log('case 57');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = false;
            //         updatedState[2][3].digit = false;
            //         updatedState[4][6].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 64 * stepDuration) {
            //     // Case 58
            //     console.log('case 58');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][2].color = "white";
            //         updatedState[3][0].digit = false;
            //         updatedState[3][5].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 65 * stepDuration) {
            //     // Case 59
            //     console.log('case 59');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][2].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 66 * stepDuration) {
            //     // Case 60
            //     console.log('case 60');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = false;
            //         updatedState[3][3].digit = false;
            //         updatedState[4][2].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 67 * stepDuration) {
            //     // Case 61
            //     console.log('case 61');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][0].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 68 * stepDuration) {
            //     // Case 62
            //     console.log('case 62');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][4].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 69 * stepDuration) {
            //     // Case 63
            //     console.log('case 63');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][1].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 70 * stepDuration) {
            //     // Case 64
            //     console.log('case 64');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[0][0].digit = true;
            //         updatedState[2][3].digit = true;
            //         updatedState[3][1].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 71 * stepDuration) {
            //     // Case 65
            //     console.log('case 65');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][0].digit = true;
            //         updatedState[3][5].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 71.5 * stepDuration) {
            //     // Case 66
            //     console.log('case 66');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[2][0].digit = false;
            //         updatedState[2][1].digit = false;
            //         updatedState[4][3].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 72 * stepDuration) {
            //     // Case 67
            //     console.log('case 67');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[1][1].digit = true;
            //         updatedState[3][3].digit = true;
            //         updatedState[4][2].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 73.5 * stepDuration) {
            //     // Case 68
            //     console.log('case 68');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][2].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 74.5 * stepDuration) {
            //     // Case 69
            //     console.log('case 69');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[4][5].digit = true;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }
            // if (currentTime === 75 * stepDuration) {
            //     // Case 69
            //     console.log('case 69');
            //     setNumberState((prevState) => {
            //         const updatedState = [...prevState];
            //         updatedState[3][4].digit = false;
            //         return updatedState;
            //     });
            //     timeInterval++;
            // }


            const caseItem = casesMap.get(currentTime);

            // console.log('caseItem', caseItem[0])
            if (caseItem) {
                switch (caseItem[0]?.action) {
                    case 'setDigit': {
                        if ('row' in caseItem[0]?.payload) {
                            setDigits(caseItem[0].payload);
                        }
                        break;
                    }
                    case 'setColor': {
                        if ('row' in caseItem[0]?.payload) {
                            setColor(caseItem[0]?.payload);
                        }
                        break;
                    }
                    case 'toggleDigits': {
                        if ('rows' in caseItem[0]?.payload) {
                            toggleDigits(caseItem[0]?.payload);
                        }
                        break;
                    }
                    case 'setDigits': {
                        if ('row' in caseItem[0]?.payload[0]) {
                            setDigits(caseItem[0]?.payload);
                        }
                        break;
                    }
                    default:
                        console.log('Unknown action');
                }
            }
            timeInterval++;

        }, 500);

        return () => clearInterval(timer);

    }, []);


    return (<>
        <AnimatePresence>
            {numberState.map((items: IColoredNumber[], index: number) => (
                <motion.div
                    className={styles.numberRow}
                    key={`${index}`}
                    initial={{width: '0px', opacity: 0}}
                    animate={{width: '100%', opacity: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                >{items.map((number: IColoredNumber, index2: number) => {
                    indexOfNumber++;
                    return (
                        <motion.div
                            style={{willChange}}
                            className={styles.number}
                            key={`${index}-${index2}`}
                            initial={{color: 'white', opacity: 0}}
                            animate={{color: number.color, opacity: 1}}
                            transition={{duration: 1, ease: "easeOut", delay: indexOfNumber * stepDuration}}
                        >{number.digit ? 1 : 0}</motion.div>
                    )
                })}
                </motion.div>
            ))}
        </AnimatePresence>
    </>)
}