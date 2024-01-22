import {ICases} from "../interfaces/NumberInterfaces";

export const STEP_DURATION: number = 0.1

export const casesPart: ICases[] = [
    {time: STEP_DURATION, payload: [{row: 0, col: 0, digit: true}]},
    {time: +(STEP_DURATION * 2).toFixed(1), payload: [{row: 0, col: 0, isWhite: false}]},
    {time: +(STEP_DURATION * 3).toFixed(1), payload: [{row: 1, col: 1, digit: true}]},
    {time: +(STEP_DURATION * 5).toFixed(1), payload: [{row: 2, col: 0, isWhite: false}, {row: 2, col: 2, isWhite: false}]},
    {
        time: +(STEP_DURATION * 7).toFixed(1), payload: [
            {row: 1, col: 0, digit: true},
            {row: 2, col: 0, digit: false},
            {row: 2, col: 2, digit: false}
        ]
    },
    {time: +(STEP_DURATION * 10).toFixed(1), payload: [{row: 2, col: 1, digit: false}]},
    {time: +(STEP_DURATION * 12).toFixed(1), payload: [{row: 0, col: 0, digit: false}, {row: 2, col: 3, digit: false}]},
    {
        time: +(STEP_DURATION * 13).toFixed(1),
        payload: [
            {row: 3, col: 0, digit: false},
            {row: 3, col: 5, digit: false}
        ]
    },
    {time: +(STEP_DURATION * 14).toFixed(1), payload: [{row: 3, col: 2, digit: true}, {row: 3, col: 3, isWhite: false}]},
    {time: +(STEP_DURATION * 15).toFixed(1), payload: [{row: 1, col: 1, digit: false}, {row: 3, col: 3, digit: false}]},
    {time: +(STEP_DURATION * 16).toFixed(1), payload: [{row: 1, col: 0, digit: true}]},
    {
        time: +(STEP_DURATION * 17).toFixed(1),
        payload: [
            {row: 2, col: 1, digit: true},
            {row: 4, col: 4, isWhite: false}
        ]
    },
    {
        time: +(STEP_DURATION * 18).toFixed(1),
        payload: [
            {row: 0, col: 0, digit: true},
            {row: 2, col: 3, digit: true},
            {row: 3, col: 1, digit: false}
        ]
    },
    {
        time: +(STEP_DURATION * 19).toFixed(1),
        payload: [
            {row: 2, col: 0, digit: false},
            {row: 2, col: 2, digit: false},
            {row: 3, col: 0, digit: true},
            {row: 3, col: 5, digit: true},
            {row: 3, col: 3, isWhite: false},
            {row: 4, col: 3, digit: false}
        ]
    },
    {
        time: +(STEP_DURATION * 20).toFixed(1),
        payload: [
            {row: 1, col: 1, digit: true},
            {row: 3, col: 3, digit: true},
            {row: 4, col: 2, digit: true}
        ]
    },
    {time: +(STEP_DURATION * 21).toFixed(1), payload: [{row: 4, col: 1, digit: false}]},
    {time: +(STEP_DURATION * 22).toFixed(1), payload: [{row: 4, col: 5, digit: true}]},
    {time: +(STEP_DURATION * 23).toFixed(1), payload: [{row: 3, col: 4, digit: false}]},
    {
        time: +(STEP_DURATION * 24).toFixed(1),
        payload: [{row: 4, col: 0, digit: false}, {row: 4, col: 4, digit: true, isWhite: true}]
    },
    {time: +(STEP_DURATION * 25).toFixed(1), payload: [{row: 4, col: 6, digit: false}]},
    {time: +(STEP_DURATION * 26).toFixed(1), payload: [{row: 0, col: 0, isWhite: true}]},
    {time: +(STEP_DURATION * 27).toFixed(1), payload: [{row: 4, col: 1, digit: false}, {row: 4, col: 2, digit: true}]},
    {
        time: +(STEP_DURATION * 28).toFixed(1),
        payload: [
            {row: 2, col: 0, digit: true},
            {row: 2, col: 2, digit: true},
            {row: 4, col: 3, digit: true}
        ]
    },
    {time: +(STEP_DURATION * 29).toFixed(1), payload: [{row: 1, col: 0, digit: false}]},
    {time: +(STEP_DURATION * 30).toFixed(1), payload: [{row: 4, col: 1, digit: true}]},
    {time: +(STEP_DURATION * 31).toFixed(1), payload: [{row: 4, col: 1, isWhite: true}]},
    {time: +(STEP_DURATION * 32).toFixed(1), payload: [{row: 4, col: 1, isWhite: true}]},
    {time: +(STEP_DURATION * 33).toFixed(1), payload: [{row: 3, col: 4, digit: true}]},
    {time: +(STEP_DURATION * 34).toFixed(1), payload: [{row: 2, col: 1, digit: false}]},
    {time: +(STEP_DURATION * 35).toFixed(1), payload: [{row: 4, col: 0, digit: true}]},
    {time: +(STEP_DURATION * 36).toFixed(1), payload: [{row: 4, col: 6, digit: true}]},
    {time: +(STEP_DURATION * 37).toFixed(1), payload: [{row: 0, col: 0, digit: false}, {row: 2, col: 3, digit: false}]},
    {time: +(STEP_DURATION * 38).toFixed(1), payload: [{row: 3, col: 0, digit: false}, {row: 3, col: 5, digit: false}]},
    {
        time: +(STEP_DURATION * 39).toFixed(1),
        payload: [
            {row: 1, col: 1, digit: false},
            {row: 3, col: 3, digit: false},
            {row: 3, col: 2, digit: true},
            {row: 4, col: 2, digit: false}]
    },
    {time: +(STEP_DURATION * 40).toFixed(1), payload: [{row: 1, col: 0, digit: true}]},
    {time: +(STEP_DURATION * 41).toFixed(1), payload: [{row: 4, col: 5, digit: false}]},
    {time: +(STEP_DURATION * 42).toFixed(1), payload: [{row: 4, col: 4, digit: false}]},
    {time: +(STEP_DURATION * 43).toFixed(1), payload: [{row: 2, col: 1, digit: true}]},
    {time: +(STEP_DURATION * 44).toFixed(1), payload: [{row: 4, col: 1, isWhite: true}]},
    {time: +(STEP_DURATION * 45).toFixed(1), payload: [{row: 0, col: 0, digit: true}, {row: 2, col: 3, digit: true}]},
    {time: +(STEP_DURATION * 46).toFixed(1), payload: [{row: 3, col: 1, digit: false}]},
    {time: +(STEP_DURATION * 47).toFixed(1), payload: [{row: 3, col: 0, digit: true}, {row: 3, col: 5, digit: true}]},
    {
        time: +(STEP_DURATION * 48).toFixed(1),
        payload: [{row: 2, col: 0, digit: false}, {row: 2, col: 2, digit: false}, {row: 4, col: 3, digit: false}]
    },
    {
        time: +(STEP_DURATION * 49).toFixed(1),
        payload: [
            {row: 1, col: 1, digit: true},
            {row: 3, col: 3, digit: true},
            {row: 4, col: 2, digit: true},
            {row: 4, col: 1, digit: false}]
    },
    {
        time: +(STEP_DURATION * 50).toFixed(1),
        payload: [
            {row: 4, col: 5, digit: false, isWhite: true},
            {row: 4, col: 4, digit: true},
            {row: 3, col: 4, digit: false}
        ]
    },
    {time: +(STEP_DURATION * 51).toFixed(1), payload: [{row: 4, col: 4, digit: true}]},
    {time: +(STEP_DURATION * 52).toFixed(1), payload: [{row: 4, col: 0, digit: false}]},
    {
        time: +(STEP_DURATION * 53).toFixed(1),
        payload: [{row: 4, col: 6, digit: false, isWhite: true}, {row: 1, col: 1, isWhite: true}]
    },
    {time: +(STEP_DURATION * 54).toFixed(1), payload: [{row: 3, col: 1, digit: true}]},
    {time: +(STEP_DURATION * 55).toFixed(1), payload: [{row: 3, col: 2, digit: false, isWhite: true}]},
    {
        time: +(STEP_DURATION * 56).toFixed(1),
        payload: [
            {row: 2, col: 0, digit: true},
            {row: 2, col: 2, digit: true},
            {row: 4, col: 3, digit: true}
        ]
    },
    {time: +(STEP_DURATION * 57).toFixed(1), payload: [{row: 1, col: 0, digit: false}]},
    {time: +(STEP_DURATION * 58).toFixed(1), payload: [{row: 4, col: 1, digit: true}]},
    {time: +(STEP_DURATION * 59).toFixed(1), payload: [{row: 3, col: 4, digit: true}]},
    {time: +(STEP_DURATION * 60).toFixed(1), payload: [{row: 2, col: 1, digit: false}]},
    {time: +(STEP_DURATION * 61).toFixed(1), payload: [{row: 4, col: 0, digit: true}]},
    {time: +(STEP_DURATION * 62).toFixed(1), payload: [{row: 4, col: 6, isWhite: false}]},
    {
        time: +(STEP_DURATION * 63).toFixed(1), payload: [
            {row: 0, col: 0, digit: false},
            {row: 2, col: 3, digit: false},
            {row: 4, col: 6, digit: true}]
    },
    {
        time: +(STEP_DURATION * 64).toFixed(1),
        payload: [
            {row: 2, col: 2, isWhite: true},
            {row: 3, col: 0, digit: false},
            {row: 3, col: 5, digit: false}
        ]
    },
    {time: +(STEP_DURATION * 65).toFixed(1), payload: [{row: 3, col: 2, digit: false}]},
    {
        time: +(STEP_DURATION * 66).toFixed(1),
        payload: [
            {row: 1, col: 1, digit: false},
            {row: 3, col: 3, digit: false},
            {row: 4, col: 2, digit: false}
        ]
    },
    {time: +(STEP_DURATION * 67).toFixed(1), payload: [{row: 1, col: 0, digit: true}]},
    {time: +(STEP_DURATION * 68).toFixed(1), payload: [{row: 4, col: 4, digit: false}]},
    {time: +(STEP_DURATION * 69).toFixed(1), payload: [{row: 2, col: 1, digit: true}]},
    {
        time: +(STEP_DURATION * 70).toFixed(1),
        payload: [
            {row: 0, col: 0, digit: true},
            {row: 2, col: 3, digit: true},
            {row: 3, col: 1, digit: false}
        ]
    },
];
