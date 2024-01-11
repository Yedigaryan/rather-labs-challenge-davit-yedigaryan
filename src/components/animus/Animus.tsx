import {motion} from "framer-motion";
import styles from "./Animus.module.scss"
import {useEffect, useState} from "react";
import {AnimusLoading} from "./AnimusLoading";

export function Animus() {
    const [isLightOn, setIsLightOn] = useState(false)
    const revealAnimation = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
        },
    }

    useEffect(() => {
        let timer: number = 0;
        const timeout: NodeJS.Timer = setInterval(() => setIsLightOn((prevState: boolean) => {
            if (timer <= 2) {
                timer++;
                return prevState;
            }
            return !prevState;
        }), 500)
        return () => clearInterval(timeout)
    }, []);

    return (
        <div className={styles.animusWrapper}>
            <AnimusLoading/>
            <motion.span
                variants={revealAnimation}
                initial="hidden"
                animate="show"
                transition={{duration: 2, ease: "easeInOut", delay: 1}}
            >ANIMUS REC.
            </motion.span>
            <div className={styles.animusCentralContent}>
                <motion.span
                    variants={revealAnimation}
                    initial="hidden"
                    animate="show"
                    transition={{duration: 2, ease: "easeInOut", delay: 2}}
                >#3335
                </motion.span>
                <div style={{display: 'flex'}}>
                    <motion.span
                        initial={{backgroundColor: "black"}}
                        animate={{backgroundColor: isLightOn ? "green" : "black"}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                        className={styles.greenLight}></motion.span>
                    <motion.span
                        variants={revealAnimation}
                        initial="hidden"
                        animate="show"
                        transition={{duration: 2, ease: "easeInOut", delay: 3.1}}
                    >ON
                    </motion.span>
                </div>
            </div>
        </div>
    );
}