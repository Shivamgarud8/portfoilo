import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "💸 Smart Automation in Action: How Cron Jobs Save You Money in the Cloud 🚀",
      text: "Discover how cron jobs can automate repetitive tasks, optimize cloud resource usage, and cut unnecessary costs. Learn practical tips to schedule workflows, manage cloud workloads efficiently, and make the most of serverless automation for smarter, cost-effective operations.",
      link: "https://medium.com/@shivam.garud2011"
    },
    {
      id: 2,
      title: "🚀 Automated Node.js App Deployment Using Jenkins Pipeline",
      text: "Learn how to automate the deployment of Node.js applications using Jenkins pipelines, enabling continuous integration and delivery (CI/CD). Streamline deployments, reduce manual errors, and achieve faster, reliable updates to your applications.",
      link: "https://medium.com/@shivam.garud2011"
    },
    {
      id: 3,
      title: "🔀 Bitbucket PR Workflow Explained: Create, Push, and Merge Like a Pro",
      text: "Master the Pull Request (PR) workflow in Bitbucket to collaborate efficiently, review code, and merge changes safely. Learn how to create PRs, push updates, and merge like a pro, ensuring clean code integration and smooth team collaboration.",
      link: "https://medium.com/@shivam.garud2011"
    },
    {
      id: 4,
      title: "🌿 Mastering Git Branches: The Secret Weapon for Smarter Collaboration 🚀",
      text: "Unlock the power of Git branches to collaborate efficiently, manage features, and maintain clean code. Learn strategies to create, merge, and manage branches like a pro, making team development smoother and more organized.",
      link: "https://medium.com/@shivam.garud2011"
    },
    {
      id: 5,
      title: "🌡️ Weather API Notifier: Build a Serverless Weather Tracking System with AWS 🔐",
      text: "Create a serverless weather tracking system using AWS Lambda, DynamoDB, and SNS. Automate weather data collection, send notifications, and generate daily reports — all without managing servers. Perfect for cost-effective, scalable automation.",
      link: "https://medium.com/@shivam.garud2011"
    },
    {
      id: 6,
      title: "SSH Key to Bitbucket and Clone Your Repository Securely (Step-by-Step Guide) 🔑",
      text: "Master secure Git operations by adding an SSH key to Bitbucket and cloning repositories safely. Follow this step-by-step guide to ensure encrypted authentication, safe collaboration, and streamlined workflow for your development projects.",
      link: "https://medium.com/@shivam.garud2011"
    }
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📚 Blog List & Descriptions
      </motion.h2>
      <p className="blog-sub">
        Explore my latest posts on DevOps, Cloud, Serverless, and Automation.
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${p.userVote === "agree" ? "active" : ""}`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${p.userVote === "disagree" ? "active" : ""}`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>

            <p style={{ marginTop: "1rem", textAlign: "right" }}>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Read More
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
