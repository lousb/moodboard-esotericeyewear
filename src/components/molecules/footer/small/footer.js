import React, { useState } from "react";
import styles from './footer.module.css';
import { motion } from "framer-motion";
import { translate } from "./anim";

function Footer() {
    
    const currentYear = new Date().getFullYear();

    const handleBackToTop = () => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
          scrollContainer.scrollTop = 0;
        }
      };


  return (
    <footer className={styles["footer"]}>
        <div className={styles["footer-wrap"]}>
            <div className={styles["footer-col-1"]}>
                <div className={styles["header-logo"]}>
                    <img src="/LOGO-DESKTOP.png" alt="Logo"></img>
                </div>
            </div>
            <div className={styles["footer-col-2"]}>
            </div>
            <div className={styles["footer-col-3"]}>
                <p>Moodboard, Esoteric Eyewear</p>
  

     
            </div>
            <div className={styles["footer-col-4"]}>
                <a>Esoteric Art Studio © {currentYear}</a>
                <a>A Wyeth Site</a>
            </div>
        
        </div>
    </footer>
  );
}

export default Footer;
