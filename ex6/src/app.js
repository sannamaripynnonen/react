import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

function App() {
const [text, setText] = React.useState('');
const [undoString, setUndoString] = React.useState('');
const [redoString, setRedoString] = React.useState('');

const addText = (event) => {
  let id = event.currentTarget.id;
  let newString = text
  
  if (id == 1) {
    newString += 1;
  }

  else if (id == 2) {
    newString += 2;
  }

  else {
    newString += 3
  }
  setText(newString);
  setUndoString(newString);
  setRedoString('');
}

const undo = (event) => {
  setRedoString(undoString);
  setText(undoString.substring(0, undoString.length-1));
  setUndoString(undoString.substring(0, undoString.length-1));
}

const redo = (event) => {
  setText(redoString);
  setUndoString(redoString);
  setRedoString([]);
}

  return (
      <div>
        <Box>
        <TextField disabled={true} value={text} variant={'outlined'} ></TextField>
        </Box>

        <Box>
        <Button id='1' onClick={addText} variant='contained'>1</Button>
        <Button id='2' onClick={addText} variant='contained'>2</Button>
        <Button id='3' onClick={addText} variant='contained'>3</Button>
        </Box>

        <Box>
        <IconButton disabled={undoString.length == 0} onClick={undo} >
          <UndoIcon />
        </IconButton>
        <IconButton disabled={redoString.length == 0} onClick={redo} >
          <RedoIcon />
        </IconButton>
        </Box>
      </div>

  );
}

export default App;