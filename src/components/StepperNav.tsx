import * as React from 'react';
import {Step} from './Step';
import {Separator} from './Separator';

export interface IStepDescription {
  stepContent: () => JSX.Element;
  stepStateColor?: string;
  stepStatusCircleSize?: number;
  onClickHandler?: () => void | undefined;
}

export interface IStepperNavProps {
  steps: IStepDescription[];
}

export const StepperNav = (props: IStepperNavProps): JSX.Element => {
  return (
    <nav>
      {props.steps.map(
        (
          {stepContent, stepStateColor, onClickHandler, stepStatusCircleSize},
          index,
        ) => (
          <div key={index}>
            <Step
              stepContent={stepContent}
              statusColor={stepStateColor}
              onClickHandler={onClickHandler}
              statusCircleSize={stepStatusCircleSize}
            />
            {index !== props.steps.length - 1 && (
              <div
                style={{
                  paddingLeft: `${(stepStatusCircleSize ?? 16) / 2 + 1}px`,
                }}>
                <Separator />
              </div>
            )}
          </div>
        ),
      )}
    </nav>
  );
};
