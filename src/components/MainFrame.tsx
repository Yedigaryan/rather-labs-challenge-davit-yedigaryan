import {AnimationControls, color, motion, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";
import Numbers from "./Numbers";
import {BlueFlame} from "./BlueFlame";
import styles from "./MainFrame.module.scss"

export default function MainFrame() {
    const controls: AnimationControls = useAnimation();
    const [number, setNumber] = useState(0);


    useEffect(() => {
        const timer = setTimeout(() => setNumber(1), 500); // Change number after 500ms
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
                                    transition={{duration: frameAppearDuration, times: [0.1, 0.3, 0.5], ease: "backOut"}}
                                />

                                <motion.div
                                    className={styles.frame}
                                    initial={{height: '10px', width: '0px'}}
                                    animate={{
                                        width: ['0px', '5px', '10px'],
                                        height: ['0px', '5px', '10px'],
                                    }}
                                    transition={{duration: frameAppearDuration, times: [0.1, 0.3, 0.5], ease: "easeInOut"}}
                                />
                            </div>

                            <motion.div
                                className={styles.bottomFrames}
                                initial={{top: '5px', left: 0}}
                                animate={{top: ['1vh', '1vh', '70vh']}}
                                transition={{duration: 1, times: [0.1, 0.5, 1], ease: "easeInOut", delay: frameAppearDuration}}
                            >
                                <motion.div
                                    className={styles.frame}
                                    initial={{height: '0px', width: '10px', color: "black", top: '10px', left: 0}}
                                    animate={{
                                        height: ['0px', '5px', '10px'],
                                        width: ['0px', '5px', '10px'],
                                    }}
                                    transition={{duration: frameAppearDuration, times: [0.1, 0.3, 0.5], ease: "easeInOut"}}
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
                                    transition={{duration: frameAppearDuration, times: [0.1, 0.3, 0.5], ease: "easeInOut"}}
                                />

                            </motion.div>
                        </div>
                    </motion.div>
                    <div className={styles.numbers}>
                        <Numbers frameAppearDuration={frameAppearDuration}/>
                    </div><
                    div className={styles.blueFlame}>
                    {/*<BlueFlame/>*/}
                    </div>
                </div>
            </div>
        </>
    );
}
