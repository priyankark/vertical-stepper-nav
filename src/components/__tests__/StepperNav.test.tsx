/* eslint-disable no-undef */
import * as React from 'react';
import '@testing-library/jest-dom';
import {StepperNav} from '../StepperNav';
import {render, fireEvent, screen} from '@testing-library/react';

describe('StepperNav tests', () => {
  test('basic snapshot', () => {
    const {asFragment} = render(
      <StepperNav
        steps={[
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 1</div>,
            stepStatusCircleSize: 16,
            stepStateColor: 'darkblue',
          },
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 2</div>,
            stepStatusCircleSize: 16,
          },
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 3</div>,
            stepStateColor: 'green',
          },
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 3</div>,
          },
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('user can invoke the onClick handler by clicking on a step', () => {
    const onClickHandlerMock = jest.fn();
    render(
      <StepperNav
        steps={[
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 1</div>,
            stepStatusCircleSize: 16,
            stepStateColor: 'darkblue',
            onClickHandler: onClickHandlerMock,
          },
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 2</div>,
            stepStatusCircleSize: 16,
            stepStateColor: 'darkgreen',
          },
          {
            stepContent: () => <div style={{fontSize: 14}}>Step 3</div>,
            stepStatusCircleSize: 16,
            stepStateColor: 'red',
          },
        ]}
      />,
    );
    fireEvent.click(screen.getByText(/Step 1/i));
    expect(onClickHandlerMock).toHaveBeenCalledTimes(1);
  });
});
