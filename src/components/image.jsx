function Image(image) {

    // console.log(image)
const cleanPath = image.image.path.startsWith('/uploads')
  ? image.image.path
  : './uploads' + image.image.path;



    return (

                    <div className='image'>
                        
                        <img src={cleanPath} alt={image.image.alt} />
                        <div className='caption'></div>
                    </div>

    )
                
                    
 }
 export default Image;
 