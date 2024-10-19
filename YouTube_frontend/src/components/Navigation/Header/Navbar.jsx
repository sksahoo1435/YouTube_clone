import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMicrophone, FaSearch, FaArrowLeft } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import youtube from '../../../assets/images/youtube.png';
import SearchInput from '../Search/Search';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.navbar_container}>
      <div className={styles.iconNhambugger}>
        <div className={styles.hambugger_icon}>
          <RxHamburgerMenu size="1.5rem" />
        </div>
        <div className={`${showSearch ? styles.youtubeIconsInactive : styles.youtubeIcons}`}>
          <img src={youtube} alt='YouTube Icons' />
          <h2>YouTube<sup>IN</sup></h2>
        </div>
      </div>

      {showSearch ? (
        <>
          <div className={styles.back_button} onClick={() => setShowSearch(false)}>
            <FaArrowLeft size="1rem" />
          </div>
          <div className={styles.searchbox1}>
            <SearchInput />
          </div>
        </>
      ) : (
        <div className={styles.search_mic_container}>
          {isMobile ? (
            <div className={styles.search_icon} onClick={() => setShowSearch(true)}>
              <FaSearch size="1rem" />
            </div>
          ) : (
            <div className={styles.searchbox}>
              <SearchInput />
            </div>
          )}
          <div className={styles.micBox}>
            <FaMicrophone size="1rem" />
          </div>
        </div>
      )}

      <div className={styles.profile_button_container}>
        <div className={styles.signin_container}>
          <div>
            <CgProfile size="1.5rem" color='#4848b69c' />
          </div>
          <div className={styles.signInText}>Sign In</div>
        </div>
        <div className={`${showSearch ? styles.HiOutlineDotsVertical : styles.HiOutlineDotsVertical_mobile}`}>
          <HiOutlineDotsVertical size="1rem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
