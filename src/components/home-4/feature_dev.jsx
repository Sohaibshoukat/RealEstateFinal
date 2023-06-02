import Link from "next/link";
import Slider from "react-slick";
import agency from "../../data/agency";

const Feture_dev = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={true}>
      {agency.map(
        (item) =>
          item.featured === "yes" && (
            <Link href={`/agency-details/${item._id}`}>
              <a>
                <div className="thumbdev">
                  <img
                    className="image-fluid w-100"
                    src={item.img}
                    alt="pc1.jpg"
                    style={{ height: "15rem" }}
                  />
                </div>
              </a>
            </Link>
          )
      )}
    </Slider>
  );
};

export default Feture_dev;
