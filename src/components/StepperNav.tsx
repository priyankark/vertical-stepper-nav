import * as React from 'react';
import { Step } from './Step';
import { Separator } from './Separator';

interface IStepDescription {
    stepContent: () => JSX.Element,
    stepStateColor?: string,
    stepStatusCircleSize?: number,
    onClickHandler?: () => void
}

interface IStepperNavProps {
    steps: IStepDescription[];
}

export const StepperNav = (props: IStepperNavProps): JSX.Element => {
    return <nav> 
    {
        props.steps.map(({ stepContent, stepStateColor, onClickHandler, stepStatusCircleSize }, index) =>
        <div>
            <Step
                key={index}
                stepContent={stepContent}
                statusColor={stepStateColor}
                onClickHandler={onClickHandler}
                statusCircleSize={stepStatusCircleSize}
            />
            {
                index !== props.steps.length - 1 &&
                <div style={{ paddingLeft: 7, marginTop: 0, paddingTop: 0 }}>
                    <Separator />
                </div>
            }
        </div>
    )}
    </nav>
}