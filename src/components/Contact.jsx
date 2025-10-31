import React from "react";
import Styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <section id="contact" data-aos="fade-up" className={Styles.contactSection}>
        <h2 className={Styles.sectionTitle}>Get in Touch</h2>
        <p className={Styles.description}>
          Whether you need a fresh design, photo editing, or creative
          collaboration — feel free to reach out!
        </p>

        <div className={Styles.contactLinks}>
          <a
            href="/syed-ammar-resume.pdf"
            download
            className={Styles.btn}
          >
            📃 Download Resume
          </a>
          <a
            href="https://wa.me/923158408583"
            target="_blank"
            className={Styles.btn}
          >
            💬 WhatsApp
          </a>
        </div>

        <p className={Styles.email}>
          <strong>Email:</strong>{" "}
          <a href="mailto:ammarzaydi23@gmail.com">
            ammarzaydi23@gmail.com
          </a>
        </p>
      </section>

{/* 
      PERSONAL INFORMATION
+92 

Gulshan-e-Roomi Society, Block F 954 Gulistan-e-Johar, Karachi */}

      <footer className={Styles.footer}>
        <p>🎨 “Designing visuals that speak louder than words.”</p>
      </footer>
    </>
  );
};

export default Contact;
