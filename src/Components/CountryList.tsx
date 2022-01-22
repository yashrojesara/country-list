import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getCountriesByName } from "./service";
import { ICountry } from "./types/types";
import CountryCard from "./CountryCard";

const useStyles = makeStyles({
    main: { 
        display: 'flex',   
        width: '100%',
        flexFlow: 'wrap',
        margin: '0em 5em'
    }
})

const CountryList: React.FC = () => {
    const classes = useStyles();
    const { countryName } = useParams();
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {        
        getCountry();        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCountry = async() => {
        if (countryName) {
            await getCountriesByName(countryName).then(res => {
                const data = res.data as ICountry[];
                setCountries(data) 
            });
        }        
    }

    return (
        <div className={classes.main}>
            {countries.map((country, index) => {
                return (
                    <CountryCard 
                    key={index}
                        country={country}
                        index={index}
                    />
                )}
            )}
        </div>
    )
}

export default CountryList;