import * as React from 'react';

const separatorStyles = {
    height: '5vh',
    width: 2,
    border: '1px solid #E1E1E1',
    background: '#E1E1E1'
}

interface ISeparator {
    height?: string | number
}

export const Separator = ({height}: ISeparator)=> {
    return <div style={{...separatorStyles, height: height ?? '5vh' }}/>
}