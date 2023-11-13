import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import "../Gallery/Gallery.css"

export const Gallery = ({ items }) => {
  return (
    <ul className="image-gallery ">
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem image={item} />
        </li>
      ))}
    </ul>
  );
};
