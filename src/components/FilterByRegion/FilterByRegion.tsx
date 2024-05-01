import React, { useState } from 'react';

import styles from './FilterByRegion.module.css';

interface DropdownProps {
  changeShow: Function
  dark: boolean
}

const FILTER_STRING = 'FIlter by Region'

export default function FilterByRegion({ changeShow, dark }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    changeShow('region', selectedValue);
  };

  console.log(dark)

  return (
    <div className={styles.dropdown}>
      <select value={selectedOption} className={dark ? styles.selectDark : styles.selectLight} onChange={handleSelectChange}>
        <option value="all">{FILTER_STRING}</option>
        <option value='africa'>Africa</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  );
};