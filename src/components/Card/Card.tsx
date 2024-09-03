import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mantine/core';

import { addCommasToNumber } from '../../functions/addCommasToNumber';

import styles from './Card.module.css';

interface CardCountryProps {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    cca3: string;
    dark: boolean
}

export default function Card({ flag, name, population, region, capital, cca3, dark }: CardCountryProps) {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/${cca3}`)
    }

    return (
        <div className={dark ? styles.cardDark : styles.cardLight} onClick={onCardClick}>
            <div className={styles.cardWrapper}>
                <div className={styles.flagWrapper}>
                    <Tooltip label={name} position="top" withArrow color="lime">
                        <img src={flag} alt={name} />
                    </Tooltip>
                </div>
                <div className={styles.infoWrapper}>
                    <h4>{name}</h4>
                    <p>Population: <span>{addCommasToNumber(population)}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </div>
        </div>
    )
}