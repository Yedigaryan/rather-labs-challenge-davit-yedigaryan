import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function MainFrame() {
    const controls = useAnimation();
    const [number, setNumber] = useState(0);

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });
        const timer = setTimeout(() => setNumber(1), 500); // Change number after 500ms
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={controls}>
            <div className="blue-object"></div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}>
                <p>Number: {number}</p>
            </motion.div>
        </motion.div>
    );
}
