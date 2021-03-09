import * as React from 'react';

// interface IStep {
//     label: string;
//     statusColor: string;
// }

export const Step: any = () => {
    return <div role="navigation">
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 12, padding: 5 }}>
            <div
                style={{
                    borderRadius: 16,
                    width: 16,
                    height: 16,
                    border: "2px solid #E1E1E1",
                    background: "lightgreen"
                }}
            />
            <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                Screen 1
            </div>
        </div>
    </div>
}