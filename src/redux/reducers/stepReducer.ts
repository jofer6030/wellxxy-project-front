import { createSlice } from '@reduxjs/toolkit';

interface StepState {
  steps: number;
}
const localStorageSteps = Number(localStorage.getItem('step'));

const initialState: StepState = {
  steps: !localStorageSteps ? 1 : Math.max(localStorageSteps, 1),
};

export const stepSlice = createSlice({
  name: 'STEP',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.steps = state.steps + 1;
      localStorage.setItem('step', state.steps.toString());
    },
    backStep: (state) => {
      state.steps = state.steps - 1;
      localStorage.setItem('step', state.steps.toString());
    },
    intialStep: (state) => {
      state.steps = 1;
      localStorage.setItem('step', state.steps.toString());
    },
  },
});

export const { nextStep, intialStep, backStep } = stepSlice.actions;

export default stepSlice.reducer;
