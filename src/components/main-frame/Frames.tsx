import styles from "./MainFrame.module.scss";
import {motion} from "framer-motion";

export function Frames({frameAppearDuration}: { frameAppearDuration: number }) {
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
                            width: ['0px', '5px', '10px'],
                            height: ['0px', '5px', '10px']
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: [0.1, 0.3, 0.5],
                            ease: "backOut"
                        }}
                    />

                    <motion.div
                        className={styles.frame}
                        initial={{height: '10px', width: '0px'}}
                        animate={{
                            width: ['0px', '5px', '10px'],
                            height: ['0px', '5px', '10px'],
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: [0.1, 0.3, 0.5],
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <motion.div
                    className={styles.bottomFrames}
                    initial={{top: '5px', left: 0}}
                    animate={{top: ['1vh', '1vh', '60vh']}}
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
                            height: ['0px', '5px', '10px'],
                            width: ['0px', '5px', '10px'],
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: [0.1, 0.3, 0.5],
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
                            height: ['0px', '5px', '10px'],
                            width: ['0px', '5px', '10px'],
                        }}
                        transition={{
                            duration: frameAppearDuration,
                            times: [0.1, 0.3, 0.5],
                            ease: "easeInOut"
                        }}
                    />

                </motion.div>
            </div>
        </div>
    );
}