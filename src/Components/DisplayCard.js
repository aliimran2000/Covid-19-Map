import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { green} from '@material-ui/core/colors';

export default function OutlinedCard(props) {
 

  console.log(props.Isrc.countryInfo)
  return (
    <Card  style={{width:"100%",backgroundColor:green[100]}} variant="outlined">
      <CardContent>
        
      {props.Isrc.countryInfo ? (
        <img  src={props.Isrc.countryInfo.flag} alt="Country Flag" />
        ) : (
        <Skeleton variant="rect" width={210} height={118} />
        )
      }

    {props.Isrc.todayCases? (
        <Typography color="primary">
            New Cases Today : {props.Isrc.todayCases}
        </Typography>
        ) : (
        <Skeleton animation="wave" />
        )
      } 

     {props.Isrc.active? (
        <Typography color="primary">
            Active Cases : {props.Isrc.active}
        </Typography>
        ) : (
        <Skeleton animation="wave" />
        )
      }

     {props.Isrc.cases? (
        <Typography color="primary">
            Total Cases : {props.Isrc.cases}
        </Typography>
        ) : (
        <Skeleton animation="wave" />
        )
      }

    


        
        
           
        
      </CardContent>
    </Card>
  );
}
