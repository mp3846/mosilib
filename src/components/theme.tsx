import React from 'react'
import styles from '../styles/theme.module.css'

export type ThemeType = 'light' | 'dark' | 'custom'

const Theme = ({ theme }: { theme: ThemeType }) => <div className={styles.container}>{theme}</div>

Theme.displayName = 'Theme'
export default Theme
