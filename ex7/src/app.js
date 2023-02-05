import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


function App() {
  const [updateCounter, setUpdateCounter] = React.useState(0);
  const [locale, setLocale] = React.useState('en-GB');
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const RATE = 0.72
  
  let date = new Intl.DateTimeFormat(locale, {dateStyle: 'long', timeStyle:'long'}).format(new Date())
  
  const conversion = (event) => {
    let converted;
    let currency;
    if (event.target.value == 'toDollar') {
      converted = input/RATE;
      setLocale('en-US')
      currency = 'USD'

    }
    else {
      converted = input*RATE;
      setLocale('en-GB')
      currency = 'GBP'
    }
    setOutput(new Intl.NumberFormat(locale, {style: 'currency', currency:currency}).format(converted));
    }

  const updateInput = (event) => {
    setInput(parseFloat(event.target.value));

  }

  useEffect(() => {
		setTimeout(() => {setUpdateCounter(updateCounter + 1)}, 1000);
	});

  return (
      <Box style={{position:'fixed', top:10, left:10}} >
        <Typography variant='body1' >Exchange rate at</Typography>
        <Typography>{date}</Typography>
        <Typography variant='body1'>is</Typography>
        <TextField variant='outlined' size='small' value={input} onChange={updateInput} ></TextField>
        <Typography>{' = ' + output}</Typography>
        <FormControl>
        <RadioGroup onChange={conversion}>
          <FormControlLabel value="toDollar" control={ <Radio /> } label="£ to $" />
          <FormControlLabel value="toPound" control={ <Radio /> } label="$ to £" />
        </RadioGroup>
      </FormControl>
      </Box>

  );
}

export default App;