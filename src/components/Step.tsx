import * as React from 'react';
import * as CSS from 'csstype';
interface IStep {
    stepContent: () => JSX.Element;
    statusColor?: string;
    statusCircleSize?: number;
    onClickHandler?: (event?: React.MouseEvent<HTMLDivElement>) => void
}

const buttonContainerStyles: CSS.Properties = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: "12px",
    padding: "2px"
};

export const Step = ({ stepContent, statusColor, statusCircleSize, onClickHandler }: IStep) => {
    const circleStyles = {
        borderRadius: statusCircleSize ?? 16,
        width: statusCircleSize ?? 16,
        height: statusCircleSize ?? 16,
        border: "2px solid #E1E1E1",
        background: statusColor ?? "white"
    };
    return <div tabIndex={0} onClick={onClickHandler} role="button" style={{ ...buttonContainerStyles }}>
        <div>
            <div style={circleStyles} />
        </div>
        <div style={{ paddingBottom: 2 }}>
            {stepContent()}
        </div>
    </div>
}