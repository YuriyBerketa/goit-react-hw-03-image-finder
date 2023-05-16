import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTyes from 'prop-types';

export function ImageGallery({ items }) {
    return (
        <>
        <ul class="gallery">
  {items.map(item => <ImageGalleryItem key={item.id} item={item}/>)}
</ul>
        </>
    )
}

ImageGallery.propTypes = {
    item: PropTyes.array,
}

