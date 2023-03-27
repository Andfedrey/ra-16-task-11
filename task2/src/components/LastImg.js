import React from 'react';
import { useSelector } from 'react-redux';

export default function LastImg() {
  const { allPhotos } = useSelector((state) => state.photos);
  return (
    <div>
      {
        allPhotos.length >= 2
        && <img src={`${allPhotos[allPhotos.length - 1]}`} alt="#" className="album-img" />
      }
    </div>
  );
}
