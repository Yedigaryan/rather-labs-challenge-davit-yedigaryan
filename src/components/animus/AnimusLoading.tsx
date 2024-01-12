import styles from "./AnimusLoading.module.scss"
import {AnimusLoadingElement} from "./AnimusLoadingElement";
import {motion} from "framer-motion";

export function AnimusLoading() {
    const pointsDuration: number = 6;
    const lineDuration: number = 4;
    const top1: string[] = generateRandomArray(20, 0, 21);
    const top2: string[] = generateRandomArray(20, 22, 38);
    const top3: string[] = generateRandomArray(20, 0, 10);
    const top4: string[] = generateRandomArray(20, 11, 38);
    const pointLeft1: string[] = generateRandomArray(20, 0, 21);
    const pointLeft2: string[] = generateRandomArray(20, 22, 38);
    const pointLeft3: string[] = generateRandomArray(20, 0, 10);
    const pointLeft4: string[] = generateRandomArray(20, 11, 38);
    const pointLeft5: string[] = generateRandomArray(20, 0, 21);
    const pointLeft6: string[] = generateRandomArray(20, 22, 38);
    const pointLeft7: string[] = generateRandomArray(20, 0, 10);
    const pointLeft8: string[] = generateRandomArray(20, 11, 38);
    const pointRight1: string[] = generateRandomArray(20, 0, 21);
    const pointRight2: string[] = generateRandomArray(20, 22, 38);
    const pointRight3: string[] = generateRandomArray(20, 0, 10);
    const pointRight4: string[] = generateRandomArray(20, 11, 38);
    const pointRight5: string[] = generateRandomArray(20, 0, 21);
    const pointRight6: string[] = generateRandomArray(20, 22, 38);
    const pointRight7: string[] = generateRandomArray(20, 0, 10);
    const pointRight8: string[] = generateRandomArray(20, 11, 38);

    function generateRandomArray(length: number, min: number, max: number): string[] {
        const randomArray: string[] = [];
        for (let i = 0; i < length; i++) {
            const randomNumber = `${Math.floor(Math.random() * (max - min + 1)) + min}px`;
            randomArray.push(randomNumber);
        }
        return randomArray;
    }

    return (
        <>
            <div className={styles.loadingWrapper}>
                <div style={{marginTop: '-1px'}} className={styles.column}>
                    <AnimusLoadingElement marginBottom={'6px'}/>
                    <AnimusLoadingElement marginBottom={'11px'}/>
                    <AnimusLoadingElement marginBottom={'14px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>
                <div className={styles.column}>
                    <motion.div
                        initial={{top: '0px'}}
                        animate={{top: pointLeft1}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '10px'}}
                        animate={{top: pointLeft2}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '18px'}}
                        animate={{top: pointLeft3}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '30px'}}
                        animate={{top: pointLeft4}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        className={styles.absolute}
                        initial={{top: '10px'}}
                        animate={{top: top1}}
                        transition={{duration: lineDuration, ease: "easeInOut"}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        className={styles.absolute}
                        initial={{top: '10px'}}
                        animate={{top: top2}}
                        transition={{duration: lineDuration, ease: "easeInOut"}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        initial={{top: '2px'}}
                        animate={{top: pointRight1}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '12px'}}
                        animate={{top: pointRight2}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '22px'}}
                        animate={{top: pointRight3}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '34px'}}
                        animate={{top: pointRight4}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                </div>
                <div className={styles.column}>
                    <motion.div
                        initial={{top: '5px'}}
                        animate={{top: pointLeft5}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '16px'}}
                        animate={{top: pointLeft6}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '21px'}}
                        animate={{top: pointLeft7}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        initial={{top: '39px'}}
                        animate={{top: pointLeft8}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsLeft}/>
                    <motion.div
                        className={styles.absolute}
                        initial={{top: '10px'}}
                        animate={{top: top3}}
                        transition={{duration: lineDuration, ease: "easeInOut"}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        className={styles.absolute}
                        initial={{top: '10px'}}
                        animate={{top: top4}}
                        transition={{duration: lineDuration, ease: "easeInOut"}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        initial={{top: '9px'}}
                        animate={{top: pointRight5}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '14px'}}
                        animate={{top: pointRight6}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '20px'}}
                        animate={{top: pointRight7}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                    <motion.div
                        initial={{top: '25px'}}
                        animate={{top: pointRight8}}
                        transition={{duration: pointsDuration, ease: "easeInOut"}}
                        className={styles.pointsRight}/>
                </div>
                <div style={{marginTop: '-2px'}} className={styles.column}>
                    <AnimusLoadingElement marginBottom={'10px'}/>
                    <AnimusLoadingElement marginBottom={'13px'}/>
                    <AnimusLoadingElement marginBottom={'7px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>

            </div>
        </>
    );
}