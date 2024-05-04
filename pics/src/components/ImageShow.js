function ImageShow({image}){
    return <div className="img"><img src={image.urls.small} alt={image.alt_description} /></div>;
}

export default ImageShow;