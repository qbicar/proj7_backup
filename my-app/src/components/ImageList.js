import React from 'react'
import Image from './Image'
import NoResults from './NotFound'


const ImageList = (props) => {   
    const results = props.data
    let photos
    if (results.length > 0) {
        photos = results.map(photo => <Image 
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
            key={photo.id} />)
    } else {
        photos = <NoResults />
    }

    return (
        <div className="photo-container">
        <ul >
            {photos}
        </ul>
        </div>
    )
}
export default ImageList