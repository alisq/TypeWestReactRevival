function Image(image) {

    console.log(image)

    return (

                    <div className='image'>
                        <img src={"https://tw2025.iamasq.works/storage/uploads"+image.image.path} alt={image.image.alt} />
                        <div className='caption'></div>
                    </div>

    )
                
                    
 }
 export default Image;
 