import style from "./ListingDetail.module.css";
import Slider from "react-slick";

const PropertyFeatures = (props) => {
  const settings = {
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 1200,
    innerWidth: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className={`${style.AmmentiesCollection}`}>
        <div className={`${style.AmmentiesSection}`}>
          <h3>Activities</h3>
          <div className={`${style.AmmentiesPart}`} >
              {props.property?.amenities?.activities.map((item) => {
                  return (
                    <div className={`${style.Ammentiesbox}`}>
                      <div className={`${style.Ammentiesicon}`}>
                        <img
                          src={`/assets/images/Amenities/${item}.png`}
                          alt=""
                        />
                      </div>
                      <h6>{item}</h6>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className={`${style.AmmentiesSection}`}>
          <h3>Facilities</h3>
          <div className={`${style.AmmentiesPart}`}>
              {props.property?.amenities?.facilities.map((item) => {
                  return (
                    <div className={`${style.Ammentiesbox}`}>
                      <div className={`${style.Ammentiesicon}`}>
                        <img
                          src={`/assets/images/Amenities/${item}.png`}
                          alt=""
                        />
                      </div>
                      <h6>{item}</h6>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className={`${style.AmmentiesSection}`}>
          <h3>Safety</h3>
          <div className={`${style.AmmentiesPart}`}>
              {props.property?.amenities?.safety.map((item) => {
                  return (
                    <div className={`${style.Ammentiesbox}`}>
                      <div className={`${style.Ammentiesicon}`}>
                        <img
                          src={`/assets/images/Amenities/${item}.png`}
                          alt=""
                        />
                      </div>
                      <h6>{item}</h6>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className={`${style.AmmentiesSection}`}>
          <h3>Lisure</h3>
          <div className={`${style.AmmentiesPart}`}>
              {props.property?.amenities?.leisure.map((item) => {
                  return (
                    <div className={`${style.Ammentiesbox}`}>
                      <div className={`${style.Ammentiesicon}`}>
                        <img
                          src={`/assets/images/Amenities/${item}.png`}
                          alt=""
                        />
                      </div>
                      <h6>{item}</h6>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyFeatures;
