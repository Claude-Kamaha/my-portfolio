import React, {useState} from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../util";

export const Navbar = () =>{
    const [menuOpen, setMenuOpen]= useState(false)
    return <nav className={styles.navbar}>
        <a  className={styles.title} href="/">Portfolio</a>
        <div  className={styles.menu}>
        <img
                src={menuOpen? "src/assets/nav/menuIcon.png": "src/assets/nav/closeIcon.png"} // Use getImageUrl to get image URL
                className={styles.menuBtn} // Apply CSS class using CSS modules
                alt="Menu Icon" 
                onClick = {() =>setMenuOpen(!menuOpen)}
            />
            <ul  className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick= {()=>setMenuOpen(false)}>
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="experience">Experience</a>
                </li>
                <li>
                    <a href="projects">Projects</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}