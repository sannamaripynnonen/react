import React from 'react';
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

function App() {
  const [red, setRed] = React.useState(255)
  const [green, setGreen] = React.useState(255)
  const [blue, setBlue] = React.useState(255)

  const useStyles = makeStyles(theme => ({
    background: {
      backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')'
    }
  }))

  const classes = useStyles();

  const changeRed = (event, red) => {
    setRed(red);
  }

  const changeGreen = (event, green) => {
    setGreen(green);
  }

  const changeBlue = (event, blue) => {
    setBlue(blue);
  }

  return (
      <Box>
        <Paper style={{height: 300, width: 300, textAlign: 'center', margin:10}} className={classes.background}>
          <Slider
            value={red}
            valueLabelDisplay="off"
            step={1}
            min={0}
            max={255}
            onChange={changeRed}
            orientation="vertical"
          />

          <Slider
            value={green}
            valueLabelDisplay="off"
            step={1}
            min={0}
            max={255}
            onChange={changeGreen}
            orientation="vertical"
          />

          <Slider
            value={blue}
            valueLabelDisplay="off"
            step={1}
            min={0}
            max={255}
            onChange={changeBlue}
            orientation="vertical"
          />
        </Paper>
      </Box>

  );
}

export default App;