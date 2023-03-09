import { FC } from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface Props {
  receivedCode: string;
  setReceivedCode: React.Dispatch<React.SetStateAction<string>>;
}

const CodeSMS: FC<Props> = ({ receivedCode, setReceivedCode }) => {
  return (
    <Box className='code__sms'>
      <Typography variant='h2' className='title'>
        Registra el código que te enviamos por sms
      </Typography>
      <TextField
        label='Código recibido'
        fullWidth
        value={receivedCode}
        type='number'
        onChange={(e) => {
          setReceivedCode(e.target.value);
        }}
      />
    </Box>
  );
};

export default CodeSMS;
