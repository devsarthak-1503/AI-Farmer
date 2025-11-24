import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div style={styles.container}>
            <video autoPlay muted loop style={styles.video}>
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
            </video>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={styles.text}
            >
                Smart Farming • Smart Future
            </motion.h1>
        </div>
    );
}

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
    },
    video: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    text: {
        position: "absolute",
        bottom: "15%",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: "42px",
        fontWeight: "700",
    }
};
