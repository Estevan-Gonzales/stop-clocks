import React, { useState, useEffect } from 'react';

function Clock() {
    const [clock, setClock] = useState(0);

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setClock((prev) => prev + 1);
        }, 1000)

    return () => {
        clearInterval(IntervalId);
    }
    })

    return (
        <div>
            <h1>Clock 1: {clock}</h1>
        </div>
    )
}

export default Clock;