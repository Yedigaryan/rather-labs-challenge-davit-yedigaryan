import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Numbers from "../numbers/Numbers";
import {BlueFlame} from "./BlueFlame";
import styles from "./MainFrame.module.scss"
import {Chain} from "../chain/Chain";
import {Frames} from "./Frames";
import {Animus} from "../animus/Animus";

export default function MainFrame() {
    const [isSecondStage, setIsSecondStage] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => setIsSecondStage(true), 10000); // Change number after 500ms
        return () => clearTimeout(timer);
    }, []);
    const frameAppearDuration: number = 2;


    return (
        <>
            <div style={isSecondStage ? {transform: 'rotateY(180deg)'} : {}} className={styles.container}>
                <motion.div
                    initial={{top: '0', left: '0', translate: "(-50%, -50%)"}}
                    animate={{
                        rotateY: "0.5turn",
                    }}
                    transition={{
                        duration: 6,
                        ease: "backOut", when: "afterChildren", delay: 9.2
                    }}
                    className={styles.centerContent}>
                    {isSecondStage ?
                        <Animus/>
                        :
                        <Numbers frameAppearDuration={frameAppearDuration - 1}/>
                    }
                    <Frames frameAppearDuration={frameAppearDuration}/>
                    <BlueFlame frameAppearDuration={frameAppearDuration} isSecondStage={isSecondStage}/>
                    <Chain frameAppearDuration={frameAppearDuration}/>
                </motion.div>
            </div>
        </>
    );
}
