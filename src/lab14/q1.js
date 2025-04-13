import React from 'react'; 
import sampleImageSrc from '../images/sample.jpg';  
 
function ImageDisplay() { 
  return ( 
    <div> 
      <h2>Images from Different Folders</h2> 
      <div> 
        <h3>Image from src/images folder:</h3> 
        <img  
          src={sampleImageSrc} 
          alt="Public folder image"  
          style={{ width: '150px', height: '200px' }} 
        /> 
      </div> 
       
      <div> 
        <h3>Image from public/images folder:</h3> 
        <img  
          src="/images/sample.jpg"  
          alt="Src folder image"  
          style={{ width: '150px', height: '200px' }} 
        /> 
      </div> 
    </div> 
  ); 
} 
 
export default ImageDisplay;