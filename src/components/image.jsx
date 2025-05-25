function Image(image) {

    // console.log(image)

    return (

                    <div className='image'>
                        <img src={"https://tw2025.iamasq.works/media/thumbs.php?src=/storage/uploads"+image.image.path+"&w=1500"} alt={image.image.alt} />
                        <div className='caption'></div>
                    </div>

    )
                
                    
 }
 export default Image;
 