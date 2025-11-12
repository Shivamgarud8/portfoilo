import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          👨‍💻 About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hello! I’m <strong>Shivam Garud</strong>, a 4th-year B.Tech Computer Science student at P P Savani University. I’m passionate about <strong>DevOps</strong>, <strong>Cloud Computing</strong>, and <strong>AI</strong>, and I love exploring the latest technologies to enhance my skills and build innovative solutions.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          I have hands-on experience with <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>AWS</strong>, <strong>Python</strong>, <strong>Jenkins</strong>, and <strong>serverless architectures</strong>. I enjoy automating processes, optimizing workflows, and building cloud-native applications.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          Currently, I’m joining <strong>Fortune Cloud</strong> to further expand my expertise in DevOps and Cloud technologies, gain industry exposure, and work on real-world projects that challenge my skills.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          Beyond technology, I’m a creative problem-solver, always curious to learn new tools and frameworks, and love turning ideas into practical, working solutions.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", fontWeight: "bold" }}>
          My Motto: “Learn continuously, build fearlessly, and automate everything!” 🚀
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Cards remain the same --- */}
            {/* B.Tech */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Computer Science
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>P P Savani University</strong> — Surat, Gujarat
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>4th Year (Pursuing) | GPA: 9.0</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2025</p>
              </div>
            </motion.div>

            {/* Higher Secondary */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>R.S.M. Poonawala Experimental School</strong> — Surat
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Gujarat Board | Percentage: 78%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
              </div>
            </motion.div>

            {/* Secondary Education */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>R.S.M. Poonawala Experimental School</strong> — Surat
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Gujarat Board | Percentage: 69%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
