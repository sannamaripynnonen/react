import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'

function App() {
  let [click, setClick] = React.useState(0);
  let [x, setX] = React.useState('');
  let [y, setY] = React.useState('');
  let [wheel, setWheel] = React.useState(0);

  const textClick = (event) =>{
    click += 1
    setClick(click);
  }

  const textMove = (event) => {
    x = event.pageX

    setX(x);
    y = event.pageY
    setY(y);
    
  }

  const textWheel = (event) => {
    if (event.nativeEvent.wheelDelta > 0){
      wheel += 20
    }

    else {
      wheel -= 20
    }
    
    setWheel(wheel);
  }

  return (
    <Box>
      <Paper style={{width: 400, textAlign: 'center'}} variant="outlined" onMouseDown={textClick} onMouseMove={textMove} onWheel={textWheel}>
        <Box >
        <TextField value={"Mouse was clicked: " + click} variant="outlined"  disabled={true} fullWidth />
        <p></p>
        <TextField value={"Mouse was moved to x: " + x + " y: " + y} variant="outlined"  disabled={true} fullWidth />
        <p></p>
        <TextField value={"Mouse wheel event: " + wheel} variant="outlined"  disabled={true} fullWidth />
        </Box>
      </Paper>
    </Box>

  );
}

export default App;
