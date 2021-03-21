import * as React from 'react';
import * as CSS from 'csstype';
export interface IStep {
  stepContent: () => JSX.Element;
  statusColor?: string;
  statusCircleSize?: number;
  onClickHandler?: (
    event?: React.MouseEvent<HTMLDivElement>,
  ) => void | undefined;
}

const buttonContainerStyles: CSS.Properties = {
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '12px',
  padding: '2px',
  cursor: 'pointer',
};

export const Step = ({
  stepContent,
  statusColor,
  statusCircleSize,
  onClickHandler,
}: IStep): JSX.Element => {
  const circleStyles = {
    borderRadius: statusCircleSize ?? 16,
    width: statusCircleSize ?? 16,
    height: statusCircleSize ?? 16,
    border: '2px solid #E1E1E1',
    background: statusColor ?? 'white',
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onClickHandler?.();
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={onClickHandler}
      onKeyDown={keyDownHandler}
      role="button"
      style={{...buttonContainerStyles}}>
      <div>
        <div style={circleStyles} />
      </div>
      <div style={{paddingBottom: 2}}>{stepContent()}</div>
    </div>
  );
};
