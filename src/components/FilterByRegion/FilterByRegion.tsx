import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

import { RiArrowDropDownLine } from "react-icons/ri";
import styles from './FilterByRegion.module.css';

interface DropdownProps {
    changeShow: Function
    dark: boolean
}

const FILTER_STRING = 'Filter by Region'

export default function FilterByRegion({ changeShow, dark }: DropdownProps) {
    const [selectedOption, setSelectedOption] = useState<string>(FILTER_STRING);

    const dropdownRef = useClickOutside(() => setIsOpen(false));

    const handleSelectChange = (value: string) => {
        const selectedValue = value;
        setSelectedOption(selectedValue);
        changeShow('region', selectedValue);
    };

    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div className={styles.dropdownWrapper}>
                <button onClick={() => setIsOpen(!isOpen)} className={dark ? styles.selectDark : styles.selectLight}>
                    {selectedOption}
                    <RiArrowDropDownLine />
                </button>
            </div>
            {isOpen && (
                <div className={dark ? styles.optionsWrapperDark : styles.optionsWrapperLight}>
                    {menuItems.map((item, index) => (
                        <button key={index} className={styles.buttonOptions} onClick={() => handleSelectChange(item)}>{item}</button>
                    ))}
                </div>
            )}
        </div>
    )
};