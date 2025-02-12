import React from 'react'

import { Frame, Separator } from 'react95';
import { useEffect, useState } from 'react';

export default function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const updateTime = () => setDate(new Date());

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);

    }, []);

  // Format time dynamically
  const timeString = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);

  return (
    <Frame
    variant='field'
    shadow
    style={{ padding: '0.3rem', lineHeight: '1', width: 100 }}
    >

    <center>{timeString}</center>

    </Frame>
  )
}
