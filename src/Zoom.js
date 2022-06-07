import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const zoom = () => {
  return (
    <>
    <p>React Zoom Pan Pinch</p>
    <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
        <TransformComponent>
          <img src="https://images.freeimages.com/images/large-previews/315/a-kayak-rider-passing-by-1641874.jpg" alt="test" style={{width:"500px",height:"500px"}}/>
        </TransformComponent>
      </TransformWrapper>
      <br/><br/>
      <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
        {({zoomIn,zoomOut,...rest})=>(
          <>
            <button className="btn btn-outline-primary mr-2" onClick={()=>{zoomIn()}}>Zoom In</button>
            <button className="btn btn-outline-secondary mr-2"  onClick={()=>{zoomOut()}}>Zoom Out</button>
            <TransformComponent>
              <img src="https://images.freeimages.com/images/large-previews/315/a-kayak-rider-passing-by-1641874.jpg" alt="test" style={{width:"500px",height:"500px"}}/>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
   


    </>
  )
}

export default zoom