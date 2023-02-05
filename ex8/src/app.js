import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  contents: {
    margin: '8pt',
    width: 350,
  },
})

function App() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [title, setTitle] = React.useState('Reverser');
  const [inputText, setInputText] = React.useState('Input:');
  const [outputText, setOutputText] = React.useState('Reversed:');
  const [buttonText, setButtonText] = React.useState('suomeksi');
  const [inEnglish, setInEnglish] = React.useState(true);

  const classes = useStyles();

  const updateInput = (event) => {
    let updatedinput = event.target.value;
    setInput(updatedinput)
    let palindrome = updatedinput.split("").reverse().join("")
    setOutput(palindrome);
  }

  const translate = (event) => {
    if(inEnglish) {
      setTitle('Sanan kääntäjä');
      setInputText('Syötetty sana:');
      setOutputText('Käännetty sana:');
      setButtonText('in english')
      setInEnglish(false);
    }
    else {
      setTitle('Reverser');
      setInputText('Input:');
      setOutputText('Reversed:');
      setButtonText('suomeksi')
      setInEnglish(true);

    }
  }

  return (
      <Box className={classes.contents} >
        <Typography>{title}</Typography>
        <Box display='flex' justifyContent='space-between' >
          <Box>
            <Typography>{inputText}</Typography>
          </Box>
          <Box>
            <Typography>{outputText}</Typography>
          </Box>
        </Box>

        <Box display='flex' justifyContent='space-between' >
          <Box>
            <TextField value={input} onChange={updateInput} ></TextField>
          </Box>
          <Box>
            <Typography>{output}</Typography>
          </Box>
        </Box>
        <Box>
          <Button className={classes.contents} variant='contained' onClick={translate} >{buttonText}</Button>
        </Box>
      </Box>

  );
}

export default App;