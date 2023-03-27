import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../features/photos/photosSlice';

export default function AddPhoto() {
  const [imgUrl, setImgUrl] = useState('');
  const validUrl = new RegExp('^http(?::\\/\\/|s:\\/\\/).*?\\.(?:gif|jpg|png)$', 'i');
  const dispatch = useDispatch();
  const changeHandle = (e) => {
    setImgUrl(() => e.target.value);
  };
  const clickHandle = () => {
    if (validUrl.exec(imgUrl)) {
      dispatch(addPhoto(imgUrl));
      setImgUrl('');
    }
    alert('вам необходимо ввести ссылку на изображение и input за собой за сами убирайте')
  };
  return (
    <div>
      <input type="text" onChange={changeHandle} value={imgUrl} />
      <button type="button" onClick={clickHandle}>addPhoto</button>
    </div>
  );
}
