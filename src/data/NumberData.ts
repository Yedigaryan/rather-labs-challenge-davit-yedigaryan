import {ICases} from "../interfaces/NumberInterfaces";

export const casesPart: ICases[] = [
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
        action: 'setDigits',
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
