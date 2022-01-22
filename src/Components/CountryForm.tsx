import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})
  
const CountryForm: React.FC = () => {
    const classes = useStyles();
    const [countryName, setCountryName] = useState<string>('');
    const navigate = useNavigate();

    return (
        <div className={classes.main}>
            <TextField
                value={countryName}
                inputProps={{ 'data-testid': 'country-search-input' }}                                                
                label="Enter Country"
                variant="outlined"
                margin='normal'
                onChange={(e) => setCountryName(e.target.value)}
            />
            <Button
                onClick={() => {navigate(`/country/${countryName}`)}}
                variant="contained"
                color="primary"
                disabled={!countryName}                                
                data-testid="country-search-button"
            >
                Submit
            </Button>
        </div>
    )
}

export default CountryForm;