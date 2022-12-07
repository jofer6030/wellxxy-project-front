import { createSlice } from '@reduxjs/toolkit';

interface StepState {
  steps: number;
}
const localStorageSteps = Number(localStorage.getItem('step'));

const initialState: StepState = {
  steps: !localStorageSteps ? 1 : localStorageSteps < 1 ? 1 : localStorageSteps,
};

export const stepSlice = createSlice({
  name: 'STEP',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.steps = state.steps + 1;
      localStorage.setItem('step', state.steps.toString());
    },
    resetStep: (state) => {
      state.steps = 1;
      localStorage.setItem('step', state.steps.toString());
    },
  },
});

export const { nextStep, resetStep } = stepSlice.actions;

export default stepSlice.reducer;
