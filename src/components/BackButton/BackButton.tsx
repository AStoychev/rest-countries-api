import { useNavigate } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import styles from './BackButton.module.css';

interface ButtonProps {
    isDark: boolean
}

export default function BackButton({isDark}: ButtonProps) {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(-1)
    }

    return (
        <>
            <button className={isDark ? styles.backButtonDark : styles.backButtonLight} onClick={onBackClick}>
                <IoArrowBack />
                <span>Back</span>
            </button>
        </>
    )
}