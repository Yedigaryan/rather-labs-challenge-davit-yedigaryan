import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Numbers from "./Numbers";
import {BlueFlame} from "./BlueFlame";
import styles from "./MainFrame.module.scss"
import {Chain} from "./Chain";

export default function MainFrame() {
    const [isSecondStage, setIsSecondStage] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => setIsSecondStage(true), 10000); // Change number after 500ms
        return () => clearTimeout(timer);
    }, []);
    const frameAppearDuration: number = 2;


    return (
        <>
            <div className={styles.container}>
                <div className={styles.centerContent}>
                    <motion.div
                        // initial={{top: '0', left: '0', translate: "(-50%, -50%)"}}
                        // animate={{
                        //     rotateY: "0.5turn",
                        // }}
                        // transition={{
                        //     duration: 10,
                        //     ease: "backOut", when: "afterChildren", delay: 7
                        // }}
                        className={styles.frames}>
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
                    </motion.div>
                    <div className={styles.numbers}>
                        <Numbers frameAppearDuration={frameAppearDuration - 1}/>
                    </div>
                    <motion.div
                        className={styles.blueFlame}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{duration: 8, ease: "easeInOut", delay: frameAppearDuration - 1}}
                    >
                        <BlueFlame isSecondStage={isSecondStage}/>
                    </motion.div>
                    <Chain frameAppearDuration={frameAppearDuration}/>
                </div>
            </div>
        </>
    );
}
