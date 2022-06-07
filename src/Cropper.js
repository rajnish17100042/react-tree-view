import React,{useState} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'


const Cropper = () => {
    const [image,setImage]=useState('https://images.freeimages.com/images/large-previews/315/a-kayak-rider-passing-by-1641874.jpg')
    const [crop, setCrop] = useState();
    const [result,setResult]=useState(null);
    // console.log(crop);

    const getCroppedImg=()=>{
        const canvas= document.createElement('canvas');
        const scaleX=image.naturalWidth/image.width;
        const scaleY=image.naturalHeight/image.height;
        canvas.width=crop.width;
        canvas.height=crop.height;
        const ctx=canvas.getContext('2d');

        ctx.drawImage(
           crop,
           crop.x*scaleX,
           crop.y*scaleY,
           crop.width*scaleX,
           crop.height*scaleY,
           0,
           0,
           crop.width,
           crop.height 
        )

        const base64Image=canvas.toDataURL('image/jpeg');
        console.log(base64Image);
        setResult(base64Image);
    }

    return (
        <>
      <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={()=>{console.log(crop)}}>
        <img src={image} style={{width:"500px",height:"500px"}} />
        <button className='btn btn-danger' onClick={getCroppedImg}> Crop Image</button>
      </ReactCrop>

       {result && 
       <div className='col-6'>
       <img src={result} alt="Cropped Image" className='img-fluid'/>
       </div>
      }
      </>
    )
}

export default Cropper