import React from 'react'

const Cards = (props) => {
  return (
    <div className='cardo' style={{width:"70%" , height:"25rem",display:'flex',borderRadius:'10px',margin:'50px',backgroundColor:"#0D0D0C",boxShadow:' 0 4px 8px 0 red, 0 6px 20px 0 red'}}>
     <div className='leftcardo' style={{width:'50%',color:'white',padding:'20px'}}>
        <div className='contentsleft' style={{display:"flex"}}>
            <img src={props.imgs} alt='picturess' style={{width:'100px', height:'200px'}}></img>
            <div className='contentsright'>
                <h2 style={{textAlign:"center"}}>&nbsp;&nbsp;{props.name}</h2>
                <p style={{marginTop:"-14px",color:"skyblue",textAlign:'center'}}>{props.year}&nbsp;&nbsp;&nbsp;{props.director}</p>
                <p style={{marginTop:"4px",textAlign:"center"}}>{props.time} &nbsp;&nbsp;&nbsp;&nbsp; {props.subtitle}</p>
            </div>
        </div>
        <div className='description'>
            <p>{props.description}</p>
        </div>
     </div>
     <div className='rightcardo' style={{width:'50%'}} >
        <img src={props.imgs} alt='picturess' style={{width:'100%', height:'100%',borderTopRightRadius:"8px",borderBottomRightRadius:"8px",backgroundImage:"linear-gradient(to right, black,black)"}}></img>
     </div>
    </div>
  )
}

export default Cards