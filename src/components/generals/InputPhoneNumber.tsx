import { useState, ComponentProps } from 'react';
import { Box, TextField } from '@mui/material';
import FlagPeruIcon from '../Icons/FlagPeruIcon';

interface Props {
  value?: ComponentProps<typeof TextField>['value'];
  onChange?: ComponentProps<typeof TextField>['onChange'];
  name?: ComponentProps<typeof TextField>['name'];
  label?: ComponentProps<typeof TextField>['label'];
  mb?: number;
}

const InputPhoneNumber = ({ value, onChange, name, label = 'Número de celular', mb = 24 }: Props) => {
  const [activeCode, setActiveCode] = useState(false);

  const handleFocus = () => {
    setActiveCode(true);
  };
  const handleBlur = () => {
    if (!value) {
      setActiveCode(false);
    }
  };
  return (
    <Box className='phone__number-input'>
      <TextField
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        sx={{ mb: `${mb}px` }}
        fullWidth
        label={label}
        type='number'
        value={value}
        name={name}
      />
      {(activeCode || !!value) && (
        <Box className='phone__number-input__flag'>
          <FlagPeruIcon /> <span>+51</span>
        </Box>
      )}
    </Box>
  );
};

export default InputPhoneNumber;
