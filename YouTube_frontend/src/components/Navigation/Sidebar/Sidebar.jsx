import React from 'react';
import { AiFillHome, AiOutlineFire, AiOutlineVideoCamera } from 'react-icons/ai';
import styles from './sidebar.module.css';

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={isCollapsed ? styles.sidebar_collapsed : styles.sidebar_expanded}>
      <button className={styles.sidebar_button}>
        <AiFillHome className="icon" />
        {!isCollapsed && <span>Home</span>}
      </button>
      <button className={styles.sidebar_button}>
        <AiOutlineFire className="icon" />
        {!isCollapsed && <span>Trending</span>}
      </button>
      <button className={styles.sidebar_button}>
        <AiOutlineVideoCamera className="icon" />
        {!isCollapsed && <span>Subscriptions</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
