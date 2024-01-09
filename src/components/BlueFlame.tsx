import {AnimationControls, motion, MotionValue, useAnimation, useMotionValue, useTransform} from "framer-motion";

export function BlueFlame() {
    const controls: AnimationControls = useAnimation();
    const pathLength: MotionValue<number> = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);


    return (
        <>
            <motion.svg
                initial={false}
                whileHover="hover"
                whileTap="pressed"
                width="440"
                height="440"
            >

            </motion.svg>
            <motion.div initial={{opacity: 0, y: -100}} animate={controls}>
                <div className="blue-object"></div>
            </motion.div>
        </>
    );
}