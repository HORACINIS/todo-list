import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButtons = ({ setRadioBtnSelected, radioBtnOptions }) => {
  return (
    <RadioGroup
      row aria-label='radio buttons filter'
      name='radio buttons filter'
      defaultValue={radioBtnOptions[0].name}>
      {radioBtnOptions.map(({ name, value }) => (
        <FormControlLabel
          key={value}
          value={name}
          control={<Radio color="primary" />}
          label={name}
          labelPlacement="end"
          onChange={() => setRadioBtnSelected({ name: name, value: value })}
        />
      ))
      }
    </RadioGroup>
  );
};

export default RadioButtons;
