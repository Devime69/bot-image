
import React from 'react'
import { useState, useEffect } from 'react';
const ImageGenerator = (props) => {
PROBLEMS
const [imageUrl, setImageUrl] = useState('');
useEffect(() =>{

const API_KEY = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';
const API_URL = `https://api.deepai.org/api/text2img?key=${API_KEY}&q=${props.keyword}&image_type=photo&pretty=true`;
async function fetchData() {
const response = await fetch(API_URL);
const data = await response.json() ;
const randomIndex = Math.floor (Math.random() * data.hits.length);
const image = data.hits [randomIndex];
setImageUrl(image.webformatURL);
};
fetchData();
}, 
[propskeyword]);}

return
(
 <div>
<img src={imageUrl} alt={props.keyword}/>

 </div>
 
 );
  export default ImageGenerator;