import { Box, TextField, Typography } from '@mui/material';

const CodeSMS = () => {
  return (
    <Box className='code__sms'>
      <Typography variant='h2' className='title'>
        Registra el código que te enviamos por sms
      </Typography>
      <TextField label='Código recibido' fullWidth />
    </Box>
  );
};

export default CodeSMS;
