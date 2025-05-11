// src/components/common/galleryImages.js

// External Images
import entrance from '../../assets/images/entrance.png'
import building1 from '../../assets/images/building1.png';
import building2 from '../../assets/images/building2.png';
import building3 from '../../assets/images/building3.png';
import building4 from '../../assets/images/building4.webp';

// Internal Images
import interior1 from '../../assets/images/interior1.png';
import interior2 from '../../assets/images/interior2.png';
import interior3 from '../../assets/images/interior3.png';
import interior4 from '../../assets/images/interior4.png';
import interior5 from '../../assets/images/interior5.png';

// Amenities Images
import amenities1 from '../../assets/images/amenities/photo1.png';
import amenities2 from '../../assets/images/amenities/photo2.png';
import amenities3 from '../../assets/images/amenities/photo3.png';
import amenities4 from '../../assets/images/amenities/photo4.png';
import amenities5 from '../../assets/images/amenities/photo5.png';
import amenities6 from '../../assets/images/amenities/photo6.png';
import amenities7 from '../../assets/images/amenities/photo7.png';

// Family Images
import family1 from '../../assets/images/family1.jpg';
import family2 from '../../assets/images/family2.jpg';
import family3 from '../../assets/images/family3.jpg';
import family4 from '../../assets/images/family4.jpg';
import family5 from '../../assets/images/family5.jpg';

// Video Thumbnails - If you don't have thumbnail images, comment these out
// import videoThumb1 from '../../assets/images/video-thumb-1.jpg';
// import videoThumb2 from '../../assets/images/video-thumb-2.jpg';

// Default image for error handling
import defaultImage from '../../assets/images/default.jpg';

export const images = {
    external: {
        entrance,
        building1,
        building2,
        building3,
        building4,
    },
    internal: {
        interior1,
        interior2,
        interior3,
        interior4,
        interior5,
    },
    amenities: {
        photo1: amenities1,
        photo2: amenities2,
        photo3: amenities3,
        photo4: amenities4,
        photo5: amenities5,
        photo6: amenities6,
        photo7: amenities7,
    },
    lifestyle: {
        family1,
        family2,
        family3,
        family4,
        family5,
    },
    videos: {
        // If you don't have thumbnail images, we'll use placeholder or null
        thumb1: null,
        thumb2: null,
    },
    default: defaultImage,
};

export default images;