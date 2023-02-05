import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  text: {
    color: props => props.color,
    fontWeight: 'bold',
    boxShadow: '0 2px 10px 2px',
    textAlign: 'center'
  }
}));

function App() {
  const [color, setFontColor] = React.useState("#000000");

  const changeColor = (event) => {
    let color = event.target.value;

    if (color == "black"){
      setFontColor("#000000");
    }

    else if (color == "blue"){
      setFontColor("#1500FF");
    }

    else if (color == "red") {
      setFontColor("#FF2D00");
    }

    else {
      setFontColor("#00FD0A")
    }
  }

  const styledClasses=useStyles({color: color});

  return (
    <div className="App">
      
      <Typography variant="h1" className={styledClasses.text}>
        Hello!
      </Typography>

      <FormControl>
        <RadioGroup onChange={changeColor}>
          <FormControlLabel value="black" control={ <Radio /> } label="black" />
          <FormControlLabel value="blue" control={ <Radio /> } label="blue" />
          <FormControlLabel value="red" control={ <Radio /> } label="red" />
          <FormControlLabel value="green" control={ <Radio /> } label="green" />
        </RadioGroup>
      </FormControl>
    

    </div>
  );
}

export default App;