import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MouseEventHandler } from "react";
import { IWeatherInfo } from "./types/types";

const useStyles = makeStyles({        
    content: {
        width: '500px', 
        textAlign: 'center'       
    },
    title: {
        width: '500px',        
        textAlign: 'center'
    }
})

interface WeatherDialogProps {     
    open: boolean
    handleClose: MouseEventHandler<HTMLButtonElement>;
    weather: IWeatherInfo | undefined
}
  
const WeatherDialog: React.FC<WeatherDialogProps> = ({
    open,
    handleClose,    
    weather
}: WeatherDialogProps) => {
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className={classes.title}>Weather Info</DialogTitle>
            <Divider />
            
            <DialogContent className={classes.content}>                                
                <img src={weather?.current.weather_icons[0]} alt='icon'/>
                <Typography sx={{ fontSize: 16 }} component="div">
                    Capital: {weather?.location.name}
                </Typography>
                <Typography sx={{ fontSize: 16 }} component="div">
                    Temperature: {weather?.current.temperature}
                </Typography>
                <Typography sx={{ fontSize: 16 }} component="div">
                    Precip: {weather?.current.precip}
                </Typography>
                <Typography sx={{ fontSize: 16 }} component="div">
                    Wind Speed: {weather?.current.wind_speed}
                </Typography>                              
            </DialogContent>
            <Divider />

            <DialogActions>
                <Button color='primary' variant='contained' onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>       
    )
}

export default WeatherDialog;