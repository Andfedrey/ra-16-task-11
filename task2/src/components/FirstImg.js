import React from 'react';
import { useSelector } from 'react-redux';

export default function FirstImg() {
  const { allPhotos } = useSelector((state) => state.photos);
  return (
    <div>
      {allPhotos[0] && <img src={`${allPhotos[0]}`} alt="#" className="album-img first" />}
    </div>
  );
}
