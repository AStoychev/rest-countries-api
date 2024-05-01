import { Link } from 'react-router-dom';

import { IoSunnySharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import styles from './Header.module.css';

interface HeaderStyle {
    switchTheme: Function
    dark: boolean
}

const LIGHT_MODE_TEXT = 'Light Mode';
const DARK_MODE_TEXT = 'Dark Mode';

export default function Header({ switchTheme, dark }: HeaderStyle) {

    const onClickTheme = () => {
        switchTheme()
    }

    return (
        <header className={dark ? styles.headerDark : styles.headerLight}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link className={styles.link} to="/">Where in the world?</Link>
                    <div className={styles.colorModeWrapper}>
                        {dark ?
                            <IoSunnySharp size='24px'/>
                            :
                            <IoMoonOutline size='24px' />
                        }
                        <button onClick={onClickTheme}>{dark ? LIGHT_MODE_TEXT : DARK_MODE_TEXT}</button>
                    </div>
                </div>
            </div>
        </header>
    )
}