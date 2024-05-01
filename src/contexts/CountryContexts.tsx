// import React, { createContext, useContext, useState, useEffect,ReactNode } from 'react';

// import { countryServiceFactory } from '../services/countryServices';

// interface CountryType {
//     country: [];
//     setCountry: (country: []) => void;
// }

// const CountryContext = createContext<CountryType | undefined>(undefined);


// const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [country, setCountry] = useState<[]>([]);

//     const getCountries = countryServiceFactory();

//     const onFilter = () => {
//         setCountry
//     }

//     // useEffect(() => {
//     //     if (show === 'region') {
//     //       getCountries.getCountryByRegion()
//     //         .then(result => {
//     //           if (result !== undefined) {
//     //             setCountry(result)
//     //           }
//     //         })
//     //     }
//     //     else if (show === 'one') {
//     //       getCountries.getCountryByName()
//     //         .then(result => {
//     //           if (result !== undefined) {
//     //             setCountry(result)
//     //           }
//     //         })
//     //     }
//     //     else {
//     //       getCountries.getAllCountries()
//     //         .then(result => {
//     //           if (result !== undefined) {
//     //             setCountry(result)
//     //           }
//     //         })
//     //     }
//     //   }, [show])

//     const value: CountryType = {
//         country,
//         setCountry
//     };

//     return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
// };
// export default CountryProvider;




// export const useCountryContext = () => {
//     const context = useContext(CountryContext);
//     if (!context) {
//         throw new Error('useMyContext must be used within a CountryProvider');
//     }
//     return context;
// };