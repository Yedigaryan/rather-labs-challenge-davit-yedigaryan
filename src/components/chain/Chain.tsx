import {motion} from "framer-motion";
import styles from "./Chain.module.scss";
import {useEffect, useState} from "react";

export function Chain({frameAppearDuration}: { frameAppearDuration: number }) {
    const [bgColor, setBgColor] = useState('white');

    const slashAnimationVariant = {
        hidden: {backgroundColor: "gray", opacity: 0, height: 0},
        show: {
            backgroundColor: bgColor,
            height: '16px',
            opacity: 1,
            transition: {duration: frameAppearDuration + 0.5, ease: "easeInOut", delay: frameAppearDuration - 0.5}
        },
    }


    useEffect(() => {
        setTimeout(() => setBgColor('green'), (frameAppearDuration + 1.5) * 1000)
    }, []);
    return (
        <div className={styles.chainWrapper}>
            <div>
                <motion.div
                    variants={slashAnimationVariant}
                    className={styles.outerSlash}
                    initial="hidden"
                    animate="show"
                />
                <motion.div
                    variants={slashAnimationVariant}
                    className={styles.outerSlash}
                    initial="hidden"
                    animate="show"
                />
            </div>
            <div>
                <motion.div
                    variants={slashAnimationVariant}
                    className={styles.outerSlash}
                    initial="hidden"
                    animate="show"
                />
                <motion.div
                    variants={slashAnimationVariant}
                    className={styles.outerSlash}
                    initial="hidden"
                    animate="show"
                />
            </div>

        </div>
    );
}