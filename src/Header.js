import React from 'react';
import classes from './css/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li><a href="/">Blog</a></li>
        <li><a href="#">お問い合わせ</a></li>
      </ul>
    </header>
  );
}
