
import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';
// import { ScatterPlot } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    transform: "scaleX(-1)",
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    filter: 'brightness(80%)', // Adjust the filter effect as desired
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
    // background: 'linear-gradient(to bottom, #ffffff, #f1f1f1)', // Custom background gradient
    backgroundColor: "#177ad1",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  },
  nameTypography: {
    fontFamily: 'Arial', // Custom font family
    fontSize: '1.2rem', // Custom font size
    color: '#333333', // Custom font color
    marginBottom: '8px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.nameTypography} gutterBottom>
              {name || 'Name'}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.nameTypography} gutterBottom>
              {call.name || 'Name'}
            </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
        )}
           </Grid>
            );
        };
        
        export default VideoPlayer;