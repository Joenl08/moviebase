import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieCard from './MovieCard';
import { isMobile } from "react-device-detect";

function SliderCarousel(items = []) {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    const cards = [];
    if (items.items && items.items.length > 0) {
        for (let i = 0; i < items.items.length; i++) {
            cards.push(
                <div className="px-2" key={`mv-card-${i}`}>
                    <MovieCard 
                        image={items.items[i].image} 
                        title={items.items[i].title} 
                        description={`This is is movie entitled "${items.items[i].title}".`} />
                </div>
            )
        }
        return (
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={!isMobile ? true : false}
                autoPlay={false}
                // autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="pb-4"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={isMobile ? 'mobile' : 'desktop'}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {cards}
            </Carousel>
        );    
    }
    else {
        return (
            <p className="text-center">No slides to display.</p>
        )
    }
}

export default SliderCarousel;