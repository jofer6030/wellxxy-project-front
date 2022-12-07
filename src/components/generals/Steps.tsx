import { FC } from 'react';
import { dataStepsVerification } from '../../data/dataSteps';
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  StepIconProps,
  Typography,
  StepConnector,
} from '@mui/material';
import { useAppSelector } from '../../redux/hooks/reduxHooks';

const StepsComponent: FC<StepIconProps> = ({ active, completed, icon }) => {
  return (
    <Box className={completed ? 'step__item completed' : 'step__item'}>
      <Typography>{icon}</Typography>
    </Box>
  );
};

const Steps = ({ dataSteps }: { dataSteps: string[] }) => {
  const { steps } = useAppSelector((state) => state.Steps);

  return (
    <Box className='steps__container'>
      <Stepper
        className='step__component'
        activeStep={steps}
        alternativeLabel
        connector={
          <StepConnector
            classes={{
              line: 'step__line',
              completed: 'step__completed',
            }}
          />
        }
      >
        {dataSteps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={StepsComponent}
              classes={{
                label: 'step__label',
                completed: 'completed',
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Steps;
