import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';

const TourCard = () =>{

    return (
        <Grid item xs={3}>
            <img className="paperImage" src="../images/pexels-balaji-srinivasan-3936815.jpg" alt="Tabung Hampi"/>
            <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                    Tabung Hampi
                </Typography>
            </Box>
            <Box sx={{
                display:"flex",
                alignItems: "center"
            }}>
                <AccessTime sx={{width: 12.5}}/>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    5 hours
                </Typography>
            </Box>
            <Box marginTop={3} 
            sx={{display:"flex", alignItems:"center"}}>
                <Rating name="read-only" value={4.5} readOnly  precision={0.5} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    4.5
                </Typography>
            </Box>
            
            <Paper elevation={10}> Hello World!</Paper>
        </Grid>
        
    )
    
}

export default TourCard;