const ImageList = (props) =>{
    const pictures =  props.images.map(image => {
        return (
        <div key={image.id} >
        <img src={image.webformatURL} />
        </div>)
    });
        
    return(
        <div>
            {pictures}
        </div>
    )
}

export default ImageList