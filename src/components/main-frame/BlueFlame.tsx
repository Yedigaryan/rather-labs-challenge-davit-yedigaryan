import styles from "./MainFrame.module.scss";
import {motion} from "framer-motion";


export function BlueFlame({isSecondStage, frameAppearDuration}: {
    isSecondStage: boolean,
    frameAppearDuration: number
}) {

    return (
        isSecondStage ?
            <motion.div
                key='blue_fire'
                className={styles.blueFlame}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 4, ease: "easeInOut", delay: frameAppearDuration - 1.5}}
            >
                <video autoPlay muted loop width='192px' height='230px'>
                    {
                        <>
                            <source src='./assets/videos/animus_blue.mp4' type="video/mp4"/>
                            <source src='./assets/videos/animus_blue.mov' type="video/quicktime"/>
                        </>
                    }
                    Sorry, your browser doesn't support videos.
                </video>
            </motion.div>

            :
            <motion.div
                key='animus_blue'
                className={styles.blueFlame}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 6, ease: "easeInOut", delay: frameAppearDuration - 1.5}}
            >
                <video key='blue_fire' autoPlay muted loop width='192px'
                       height='230px'>
                    {
                        <>
                            <source src='./assets/videos/blue_fire.mp4' type="video/mp4"/>
                            <source src='./assets/videos/blue_fire.mov' type="video/quicktime"/>
                        </>

                    }
                    Sorry, your browser doesn't support videos.
                </video>
            </motion.div>
    );
}