import React from 'react';
import { useSelector } from 'react-redux';

export default function AllImg() {
  const { allPhotos } = useSelector((state) => state.photos);
  return (
    <div>
      {
        allPhotos.length > 2
        && allPhotos.slice(1, -1).map((el, id) => (
          <img src={`${el}`} alt="#" className="album-img" key={id} />
        ))
      }
    </div>
  );
}
