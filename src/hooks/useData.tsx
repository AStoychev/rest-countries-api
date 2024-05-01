import React, { useState, useEffect } from "react";

import { countryServiceFactory } from "../services/countryServices";

interface Country {
    flag: string
    name: string
    population: number
    region: string
    capital: string
  }

export const useData = () => {
    const [result, setResult] = useState<Country[]>([]);
    const [show, setShow] = useState<string>('all')

    const getCountries = countryServiceFactory()

    // React.ChangeEvent<HTMLInputElement>

    const selectByRegion = (e: string) => {
        setShow('region')
    }

    const selectByName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShow('one')
    }

    useEffect(() => {
        if (show === 'region') {
            getCountries.getCountryByRegion()
                .then(result => {
                    if (result !== undefined) {
                        setResult(result)
                    }
                })
        }
        else if (show === 'one') {
            getCountries.getCountryByName()
                .then(result => {
                    if (result !== undefined) {
                        setResult(result)
                    }
                })
        }
        else {
            getCountries.getAllCountries()
                .then(result => {
                    if (result !== undefined) {
                        setResult(result)
                    }
                })
        }
    }, [show])

    // console.log(1111111111, result)

    console.log('Data: ', show)

    return {
        show,
        result,
        selectByRegion,
        selectByName,
    }
}