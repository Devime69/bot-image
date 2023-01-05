import React from 'react'
import { useState } from 'react';
import ImageGenerator from './ImageGenerator';
const DisplayImage = () => {
const [keyword, setKeyword] = useState ('');
const [image, setImage ] = useState('') ;
function handleSubmit (event){
event.preventDefault () ;
setImage( keyword)}
return (<>
<form onSubmit={handleSubmit}>
<input type="text" value={keyword} onChange={event => setKeyword (event.target.value)} placeholder="Enter keyword" />
<button type="submit">Search</button>
</form>
<ImageGenerator keyword={image} />
</>);}
export default DisplayImage