import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux'
function Galleries() {
    const posts=useSelector((state)=>state.posts)
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:556,itemsToShow:1},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:3}
    ]
    return (
        <div>
            <Carousel breakPoints={breakPoints} outerSpacing={2}>
                {posts.map((post)=>(
                    <div style={{marginTop:'100px',padding:'50px'}}>
                        <img alt='miki'style={{alignContent:'center',justifyContent:'center',minHeight:'300px',maxWidth:'350px'}} src={post.selectedFile}/>
                        <p className='title'>{post.title}</p>
                        <p className='title'>{post.creator}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Galleries
