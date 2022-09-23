import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;