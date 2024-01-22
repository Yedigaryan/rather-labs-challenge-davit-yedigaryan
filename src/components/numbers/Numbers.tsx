import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import styles from "./Numbers.module.scss"
import {IColoredNumber, ISetNumbersPayload} from "../../interfaces/NumberInterfaces";
import {casesPart, STEP_DURATION} from "../../data/NumberData";

export default function Numbers({frameAppearDuration}: { frameAppearDuration: number }) {

    const numbers: IColoredNumber[][] = [
        [
            {digit: false, isWhite: true}
        ],
        [
            {digit: false, isWhite: true}, {digit: true, isWhite: true}
        ],
        [
            {digit: true, isWhite: true}, {digit: false, isWhite: true},
            {digit: true, isWhite: true}, {digit: false, isWhite: true}
        ],
        [
            {digit: true, isWhite: true}, {digit: true, isWhite: true}, {digit: false, isWhite: true},
            {digit: true, isWhite: true}, {digit: false, isWhite: true}, {digit: true, isWhite: true}
        ],
        [
            {digit: true, isWhite: true}, {digit: true, isWhite: false}, {digit: false, isWhite: true},
            {digit: false, isWhite: true}, {digit: false, isWhite: true}, {digit: true, isWhite: true},
            {digit: true, isWhite: true}
        ]
    ];
    const [numberState, setNumberState] = useState(numbers);
    let indexOfNumber: number = 0;
    let timeInterval: number = 0;


    function setDigits(digitSettings: ISetNumbersPayload[]): void {
        setNumberState((prevState: IColoredNumber[][]) => {
            const updatedState: IColoredNumber[][] = [...prevState];
            digitSettings.forEach(({row, col, digit, isWhite}: ISetNumbersPayload): void => {
                if (row !== undefined && col !== undefined) {
                    if (digit !== undefined)
                        updatedState[row][col].digit = digit;
                    if (isWhite !== undefined) {
                        updatedState[row][col].isWhite = isWhite;
                    }
                }
            });
            return updatedState;
        });
    }

    useEffect(() => {
        const casesMap = new Map();
        casesPart.forEach(({time, payload}) => {
            if (!casesMap.has(time)) {
                casesMap.set(time, payload)
            }
        });

        const timer = setInterval(() => {
            const currentTime = +(timeInterval * STEP_DURATION).toFixed(1);

            const caseItems: ISetNumbersPayload[] = casesMap.get(currentTime);

            if (caseItems) {
                setDigits(caseItems)
            }
            timeInterval++;

        }, +((1000 * STEP_DURATION).toFixed(1)));

        return () => clearInterval(timer);

    }, []);


    return (
        <div className={styles.numbersWrapper}>
                {numberState.map((items: IColoredNumber[], index: number) => (
                    <motion.div
                        className={styles.numberRow}
                        key={`${index}`}
                        initial={{width: '0px', opacity: 0}}
                        animate={{width: '100%', opacity: 1}}
                        transition={{duration: 1, ease: "easeOut", delay: frameAppearDuration}}
                    >{items.map((number: IColoredNumber, index2: number) => {
                        indexOfNumber++;
                        return (
                            <motion.div
                                className={styles.number}
                                key={`${index}-${index2}`}
                                initial={{color: 'white', opacity: 0}}
                                animate={{color: number.isWhite ? "white" : "green", opacity: 1}}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: indexOfNumber * STEP_DURATION + frameAppearDuration
                                }}
                            >{number.digit ? 1 : 0}</motion.div>
                        )
                    })}
                    </motion.div>
                ))}
        </div>)
}