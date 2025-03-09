import { motion } from "framer-motion";

interface ArrowRightProps {
  show: boolean; // 控制箭头显示与否
}

const ArrowRight: React.FC<ArrowRightProps> = ({ show }) => {
    return (
        <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: show ? 1 : 0, // 根据 show 控制透明度
                y: show ? 0 : 10, // 动态控制位置
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // 平滑过渡
            viewBox="0 0 448 512"
            width={18}
            height={20}
        >
            {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white"/>
        </motion.svg>
    );
};

export default ArrowRight;