import { useNavigate } from 'react-router-dom';

import styles from './BorderCountiesButton.module.css';

interface ButtonProps {
    border: string
    isDark: boolean
}

export default function BorderCountriesButton({ border, isDark }: ButtonProps) {
    const navigate = useNavigate();

    const onBorderButtonClick = (neighbor: string) => {
        navigate(`/${neighbor}`)
    }

    return (
        <>
            <div className={styles.buttonWrapper}>
                <button onClick={() => onBorderButtonClick(border)} className={isDark ? styles.buttonDark : styles.buttonLight}>{border}</button>
            </div>
        </>
    )
}