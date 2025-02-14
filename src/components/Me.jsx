import React from 'react';
import { Avatar } from 'react95';

export default function Me({ onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <Avatar size={50} src='/personalIMG.jpg' />
    </div>
  );
}