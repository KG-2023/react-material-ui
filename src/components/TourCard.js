import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

const TourCard = () =>{

    return (
        <Grid item xs={3}>
            <img className="paperImage" src="../images/pexels-balaji-srinivasan-3936815.jpg" alt="Tabung Hampi"/>
            <Typography variant="subtitle1" component="h2">
                Tabung Hampi
            </Typography>
            <Paper elevation={10}> Hello World!</Paper>
        </Grid>
        
    )
    
}

export default TourCard;