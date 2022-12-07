import { InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Select from 'react-select';

interface CodeCountryOption {
  code: string;
  value: string;
  label: string;
}
interface CodeCountry {
  code: string;
  dial_code: string;
  name: string;
}

const Countries = () => {
  const [codesOptions, setCodesOptions] = useState<CodeCountryOption[]>([]);
  const getCodes = async () => {
    const response = await fetch('countryCodes.json');
    const data = (await response.json()) as CodeCountry[];
    setCodesOptions(
      data.map(({ code, dial_code, name }) => {
        return {
          label: dial_code,
          value: name,
          code: code.toLowerCase(),
        };
      })
    );
  };
  useEffect(() => {
    getCodes();
  }, []);
  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: 'none',
          width: '120px',
          height: '100%',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          ':hover': {
            border: 'none',
            boxShadow: 'none',
          },
        }),
        indicatorSeparator: (base, props) => ({
          ...base,
          display: 'none',
        }),
        valueContainer: (base, props) => ({
          ...base,
          padding: '0',
        }),
      }}
      options={codesOptions}
      defaultValue={codesOptions.find(({ code }) => code === 'pe')}
      placeholder=''
      formatOptionLabel={(country) => (
        <div className='country-option'>
          <img
            src={`https://flagcdn.com/16x12/${country.code}.png`}
            alt='country-image'
          />
          <span> {country.label}</span>
        </div>
      )}
    />
  );
};

const InputTel = () => {
  return (
    <TextField
      type='tel'
      label='Número de celular'
      fullWidth
      sx={{ mb: '24px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Countries />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputTel;
