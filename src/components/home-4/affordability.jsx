import Link from "next/link";
import affordable_Properties from "../../data/affordability";
import { addaffordability } from "../../features/properties/propertiesSlice";
import { useDispatch } from "react-redux";
import Slider from "react-slick";

const Affordability = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  return (
    <>
    <Slider {...settings} arrows={true}>
      {affordable_Properties.slice(0, 5).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4" key={item.id} onClick={(e) => dispatch(addaffordability(item.name))}>
          <Link href="/listing-map-v4">
            <a>
              <div className="thumbsearch">
                <img
                  className="image-fluid w-100"
                  src={item.img}
                  alt="pc1.jpg"
                  style={{height:"19rem"}}
                />
              </div>
              <div className="details">
                <h4>{item.name}</h4>
              </div>
            </a>
          </Link>
        </div>
      ))}
      </Slider>
    </>
  );
};

export default Affordability;
