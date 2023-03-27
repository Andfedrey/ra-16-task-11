import React from 'react';
import AllImg from './AllImg';
import FirstImg from './FirstImg';
import LastImg from './LastImg';

export default function Photos() {
  return (
    <div className="album">
      <LastImg />
      <FirstImg />
      <AllImg />
    </div>
  );
}
