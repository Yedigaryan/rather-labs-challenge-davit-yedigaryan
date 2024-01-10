import {motion} from "framer-motion";
import styles from "./Chain.module.scss";
import {useEffect, useState} from "react";

export function Chain() {
    const [bgColor, setBgColor] = useState('white')

    useEffect(() => {
        setTimeout(() => setBgColor('green'), 5000)
    }, []);
    return (
        <div className={styles.chainWrapper}>
            <div>
                <motion.div
                    className={styles.outerSlash}
                    initial={{backgroundColor: "gray", opacity: 0, height: 0}}
                    animate={{
                        backgroundColor: bgColor,
                        height: '16px',
                        opacity: 1
                    }}
                    transition={{duration: 5, ease: "easeInOut", delay: 2}}
                />
                <motion.div
                    className={styles.outerSlash}
                    initial={{backgroundColor: "gray", opacity: 0, height: 0}}
                    animate={{
                        backgroundColor: bgColor,
                        height: '16px',
                        opacity: 1
                    }}
                    transition={{duration: 5, ease: "easeInOut", delay: 2}}
                />
            </div>
            <div>
                <motion.div
                    className={styles.outerSlash}
                    initial={{backgroundColor: "gray", opacity: 0, height: 0}}
                    animate={{
                        backgroundColor: bgColor,
                        height: '16px',
                        opacity: 1
                    }}
                    transition={{duration: 5, ease: "easeInOut", delay: 2}}
                />
                <motion.div
                    className={styles.outerSlash}
                    initial={{backgroundColor: "gray", opacity: 0, height: 0}}
                    animate={{
                        backgroundColor: bgColor,
                        height: '16px',
                        opacity: 1
                    }}
                    transition={{duration: 5, ease: "easeInOut", delay: 2}}
                />
            </div>

        </div>
    );
}