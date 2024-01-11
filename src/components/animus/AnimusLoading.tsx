import styles from "./AnimusLoading.module.scss"
import {AnimusLoadingElement} from "./AnimusLoadingElement";
export function AnimusLoading() {
    return (
        <>
            <div className={styles.loadingWrapper}>
                <div className={styles.column}>
                    <AnimusLoadingElement marginBottom={'2px'}/>
                    <AnimusLoadingElement marginBottom={'4px'}/>
                    <AnimusLoadingElement marginBottom={'6px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>
                <div className={styles.column}>
                    <AnimusLoadingElement marginBottom={'0'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>
                <div className={styles.column}>
                    <AnimusLoadingElement marginBottom={'0'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>
               <div className={styles.column}>
                    <AnimusLoadingElement marginBottom={'4px'}/>
                    <AnimusLoadingElement marginBottom={'4px'}/>
                    <AnimusLoadingElement marginBottom={'2px'}/>
                    <AnimusLoadingElement marginBottom={'0'}/>
                </div>

            </div>
        </>
    );
}