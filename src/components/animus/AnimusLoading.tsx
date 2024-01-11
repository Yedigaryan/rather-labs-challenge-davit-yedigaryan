import styles from "./AnimusLoading.module.scss"
import {AnimusLoadingElement} from "./AnimusLoadingElement";
import {motion} from "framer-motion";

export function AnimusLoading() {
    const top1: string[] = []
    const top2: string[] = []
    const top3: string[] = []
    const top4: string[] = []
    return (
        <>
            <div className={styles.loadingWrapper}>
                <div className={styles.column}>
                    <AnimusLoadingElement marginBottom={'6px'}/>
                    <AnimusLoadingElement marginBottom={'11px'}/>
                    <AnimusLoadingElement marginBottom={'14px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>
                <div className={styles.column}>
                    <motion.div
                        initial={{top: '10px'}}
                        animate={{top: []}}
                        style={{position: 'absolute'}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        style={{position: 'absolute'}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                </div>
                <div className={styles.column}>
                    <motion.div
                        style={{position: 'absolute'}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                    <motion.div
                        style={{position: 'absolute'}}
                    >
                        <AnimusLoadingElement marginBottom={'0'}/>
                    </motion.div>
                </div>
                <div style={{marginTop: '-1px'}} className={styles.column}>
                    <AnimusLoadingElement marginBottom={'10px'}/>
                    <AnimusLoadingElement marginBottom={'13px'}/>
                    <AnimusLoadingElement marginBottom={'7px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>

            </div>
        </>
    );
}