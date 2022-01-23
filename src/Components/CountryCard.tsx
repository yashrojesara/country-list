import { makeStyles } from "@mui/styles";
import { ICountry, IWeatherInfo } from "./types/types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { getWeatherByCapital } from "./service";
import WeatherDialog from "./WeatherDialog";

const useStyles = makeStyles({    
    card: {
        padding: '1em',
        margin: '1em'
    }
})

interface CountryCardProps {
    country: ICountry
    index: number
}
  
const CountryCard: React.FC<CountryCardProps> = ({
    country,
    index,
}: CountryCardProps) => {
    const classes = useStyles();
    const [weatherDialogOpen, setWeatherDialogOpen] = useState(false);      
    const [weather, setWeather] = useState<IWeatherInfo>();

    const onWeatherCapitalClick = async(capital: string) => {
        setWeatherDialogOpen(true)
        await getWeatherByCapital(capital).then(res => {
            const data = res.data as IWeatherInfo;
            setWeather(data)
        });
    }

    return (
        <>        
            <WeatherDialog
                open={(weatherDialogOpen)} 
                handleClose={() => setWeatherDialogOpen(false)}
                weather={weather}
            />
                    
            <Card className={classes.card} key={index} sx={{ minWidth: 275 }}>
                <CardContent key={index}>
                    <img height='150px' width='250px' src={country.flags.png} alt="flag"/>                           
                    <Typography data-testid={'Capital'} sx={{ fontSize: 16 }} component="div">
                        {country.name.common}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Capital: {country.capital}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Population: {country.population}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        latlng: {`${country.latlng[0]}°, ${country.latlng[1]}°`}
                    </Typography>                                                       
                </CardContent>
                
                <CardActions>
                    <Button data-testid='button' onClick={() => onWeatherCapitalClick(country.capital[0])} color='primary' variant="outlined" size="small">Get Weather Info</Button>
                </CardActions>
            </Card>
        </>        
    )
}

export default CountryCard;