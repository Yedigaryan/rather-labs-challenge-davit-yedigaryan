import styles from "./MainFrame.module.scss";
import {motion} from "framer-motion";

export function Frames({frameAppearDuration}: { frameAppearDuration: number }) {
    const widthHeightArray: string[] = ['0px', '13px', '26px']
    const widthHeightTimingArray: number[] = [0, 0.3, 0.5]
    return (
        <div className={styles.frames}>

            <div>
                <div
                    className={styles.topFrames}
                >
                    <motion.div
                        className={styles.frame}
                        initial={{width: '0px', height: '0px'}}
                        animate={{
                            width: widthHeightArray,
                            height: widthHeightArray
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: widthHeightTimingArray,
                            ease: "backOut"
                        }}
                    />

                    <motion.div
                        className={styles.frame}
                        initial={{height: '10px', width: '0px'}}
                        animate={{
                            width: widthHeightArray,
                            height: widthHeightArray,
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: widthHeightTimingArray,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <motion.div
                    className={styles.bottomFrames}
                    initial={{top: '5px', left: 0}}
                    animate={{top: ['1vh', '1vh', '48vh']}}
                    transition={{
                        duration: 1,
                        times: [0.1, 0.5, 1],
                        ease: "easeInOut",
                        delay: frameAppearDuration
                    }}
                >
                    <motion.div
                        className={styles.frame}
                        initial={{height: '0px', width: '10px', color: "black", top: '10px', left: 0}}
                        animate={{
                            height: widthHeightArray,
                            width: widthHeightArray,
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: widthHeightTimingArray,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className={styles.frame}
                        initial={{
                            width: '10px',
                            height: '0px',
                            color: "black",
                            left: '80%'
                        }}
                        animate={{
                            height: widthHeightArray,
                            width: widthHeightArray,
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: widthHeightTimingArray,
                            ease: "easeInOut"
                        }}
                    />

                </motion.div>
            </div>
        </div>
    );
}