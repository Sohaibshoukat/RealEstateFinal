import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import Propertie_detail from "../../../pages/listing-details-v2/index";
import style from "./Listing.module.css";
import { useRouter } from "next/router";
import { addfavrioteProperty } from "../../Customer/Favriote";
import { useContext } from "react";
import VillaContext from "../../../Context/TownVilla/TownVillaContext";
import UnitConverter from "../../common/AreaCalculator";
import CurrencyConverter from "../../common/PriceConverter";
import Slider from "react-slick";

const FeaturedItem = () => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    innerWidth: 0,
  };

  const [showPopUp, setShowPopUp] = useState(false);

  const handleMouseEnter = () => {
    setShowPopUp(true);
  };

  const handleMouseLeave = () => {
    setShowPopUp(false);
  };

  const villaproject = useContext(VillaContext);

  const { villa } = villaproject;

  const {
    location,
    affordability,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    category,
    yearBuilt,
    area,
    amenities,
    LDA,
    FBR,
    area_type,
    view,
    company,
    furnishing,
    developer,
    view3D,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const router = useRouter();

  const dispatch = useDispatch();

  // location handler
  const locationHandler = (item) => {
    return item?.projectLocation?.address
      .toLowerCase()
      .includes(location.toLowerCase());
  };

  const handleFavriote = (property) => {
    dispatch(addfavrioteProperty(property));
  };

  const favProperties = useSelector(
    (state) => state.favProperties.favrioteproperty
  );

  // status handler
  const statusHandler = (item) =>
    item?.status.toLowerCase().includes(status.toLowerCase());

  // status handler
  const affordabilityHandler = (item) =>
    item?.affordabilityStatus
      .toLowerCase()
      .includes(affordability.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item?.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item?.startingprice < price?.max && item?.startingprice > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item?.HighlightIcon.BathRange == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item?.HighlightIcon.BedsRange == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item?.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // build LDA handle
  const builtLDAHandler = (item) =>
    item?.check_lda_approval.toLowerCase().includes(LDA.toLowerCase());

  // build FBR handle
  const builtFBRHandler = (item) =>
    item?.check_fbr_approval.toLowerCase().includes(FBR.toLowerCase());

  // build area handle
  const builtAreaTypeHandler = (item) =>
    item?.projectcategory.toLowerCase().includes(area_type.toLowerCase());

  // build view handle
  const builtViewHandler = (item) =>
    item?.view.toLowerCase().includes(view.toLowerCase());

  // build Category handle
  const builtCategoryHandler = (item) =>
    item?.category.toLowerCase().includes(category.toLowerCase());

  // build Category handle
  const builtCompanyHandler = (item) =>
    item?.company.toLowerCase().includes(company.toLowerCase());

  // build view 3D handle
  const builtView3DHandler = (item) =>
    item?.view3D.toLowerCase().includes(view3D.toLowerCase());

  // build Furnishing handle
  const builtFurnishingHandler = (item) =>
    item?.furnishing.toLowerCase().includes(furnishing.toLowerCase());

  // build Dveloper handle
  const builtDeveloperHandler = (item) =>
    item?.developer.toLowerCase().includes(developer.toLowerCase());

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item?.itemDetails[2].number) > area.min &&
          parseInt(item?.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item?.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item?.featured === featured;
    }
    return true;
  };

  //Pop up Work
  const [ID, setID] = useState(null);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("setIsModalOpen");

    if (storedValue !== null) {
      console.log(storedValue);
      setIsModalOpen(!storedValue);
    }
  }, []);

  // status handler
  let content = villa
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.filter(propertiesHandler)
    // ?.filter(priceHandler)
    // ?.filter(bathroomHandler)
    // ?.filter(bedroomHandler)
    // ?.filter(garagesHandler)
    // ?.filter(builtYearsHandler)
    // ?.filter(areaHandler)
    // ?.filter(affordabilityHandler)
    // ?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    // ?.filter(featuredHandler)
    // ?.filter(builtLDAHandler)
    // ?.filter(builtFBRHandler)
    // ?.filter(builtCategoryHandler)
    // ?.filter(builtView3DHandler)
    // ?.filter(builtFurnishingHandler)
    // ?.filter(builtDeveloperHandler)
    // ?.filter(builtViewHandler)
    // ?.filter(builtCompanyHandler)
    // ?.filter(builtAreaTypeHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item?.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <Slider {...settings} arrows={true}>
              <img className="img-whp" src={item?.main_image} alt="fp1.jpg" />
              {item?.interiorPictures.map((itemimg) => (
                <img className="img-whp" src={itemimg} alt="fp1.jpg" />
              ))}
              {item?.exteriorPictures.map((itemimg) => (
                <img className="img-whp" src={itemimg} alt="fp1.jpg" />
              ))}
            </Slider>

            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item?.featured_project && (
                  <li className="list-inline-item">
                    <a href="#">Featured</a>
                  </li>
                )}
              </ul>
              <li>
                <a
                  className="fp_price tooltip-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                    setID(item?._id);

                    window.history.pushState(
                      { ID },
                      null,
                      `/listing-details-v2/${item?._id}`
                    );
                  }}
                >
                  PKR {item?.startingprice}
                  <div className="Converstion_popup tooltip-text">
                    <h3>Land Area</h3>
                    <p style={{ color: "white" }}>
                      <b>
                        Marla:{" "}
                        {
                          <CurrencyConverter
                            value={20000000}
                            inputCurrency={"pkr"}
                          />
                        }
                      </b>
                    </p>
                    <p style={{ color: "white" }}>
                      Sqft: {item?.HighlightIcon?.SqftRange}
                    </p>
                    <p style={{ color: "white" }}>
                      Square Yards:{" "}
                      {
                        UnitConverter({
                          value: item?.HighlightIcon?.SqftRange,
                          inputUnit: "sqft",
                        })[2]
                      }
                    </p>
                    <p style={{ color: "white" }}>
                      Kanal:{" "}
                      {
                        UnitConverter({
                          value: item?.HighlightIcon?.SqftRange,
                          inputUnit: "sqft",
                        })[3]
                      }
                    </p>
                  </div>
                </a>
              </li>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item?.projecttype}</p>
              <h4>
                <a
                  className="fp_title"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                    setID(item?._id);
                    window.history.pushState(
                      { ID },
                      null,
                      `/listing-details-v2/${item?._id}`
                    );
                  }}
                >
                  {item?.project_title}
                </a>
              </h4>
              <p className="text-thm">
                <span className="flaticon-placeholder"></span>
                {item.projectLocation.address}
              </p>
              <p className="text-thm">Developer: {item.projectDeveloper}</p>

              <ul className="prop_details" style={{ marginBottom: "10px" }}>
                <li
                  className="list-inline-item"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <a href="#" className="tooltip-link">
                    sqft: {item?.HighlightIcon?.SqftRange}
                    <div className="Converstion_popup tooltip-text">
                      <h3>Land Area</h3>
                      <p style={{ color: "white" }}>
                        <b>
                          Marla:{" "}
                          {
                            UnitConverter({
                              value: item?.HighlightIcon?.SqftRange,
                              inputUnit: "sqft",
                            })[0]
                          }
                        </b>
                      </p>
                      <p style={{ color: "white" }}>
                        Sqft: {item?.HighlightIcon?.SqftRange}
                      </p>
                      <p style={{ color: "white" }}>
                        Square Yards:{" "}
                        {
                          UnitConverter({
                            value: item?.HighlightIcon?.SqftRange,
                            inputUnit: "sqft",
                          })[2]
                        }
                      </p>
                      <p style={{ color: "white" }}>
                        Kanal:{" "}
                        {
                          UnitConverter({
                            value: item?.HighlightIcon?.SqftRange,
                            inputUnit: "sqft",
                          })[3]
                        }
                      </p>
                    </div>
                  </a>
                </li>
                <li
                  className="list-inline-item"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <a href="#" className="tooltip-link">
                    project Size : {item?.HighlightIcon?.HouseSizeRange}
                    <div className="Converstion_popup tooltip-text">
                      <h3>Land Area</h3>
                      <p style={{ color: "white" }}>
                        <b>
                          Marla:{" "}
                          {
                            UnitConverter({
                              value: item?.HighlightIcon?.SqftRange,
                              inputUnit: "sqft",
                            })[0]
                          }
                        </b>
                      </p>
                      <p style={{ color: "white" }}>
                        Sqft: {item?.HighlightIcon?.HouseSizeRange}
                      </p>
                      <p style={{ color: "white" }}>
                        Square Yards:{" "}
                        {
                          UnitConverter({
                            value: item?.HighlightIcon?.SqftRange,
                            inputUnit: "sqft",
                          })[2]
                        }
                      </p>
                      <p style={{ color: "white" }}>
                        Kanal:{" "}
                        {
                          UnitConverter({
                            value: item?.HighlightIcon?.SqftRange,
                            inputUnit: "sqft",
                          })[3]
                        }
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              {/* <button className="btn btn-thm" style={{width:"100%"}}>Whatsapp Call</button> */}
              <div className={style.btn_group}>
                <button
                  className={style.btn_favriote}
                  onClick={() => {
                    handleFavriote(item);
                  }}
                >
                  Add to Favriote
                </button>
              </div>
            </div>
            {/* End .tc_content */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, addLength, content]);

  return (
    <>
      {IsModalOpen && (
        <div className={style.popUpStyling}>
          <Link href={`/listing-map-v4`}>
            <button
              className={`${style.btn_close}`}
              style={{
                position: "absolute",
                zIndex: "600",
                top: "1%",
                right: "0",
              }}
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
              </svg>
            </button>
          </Link>
          <Propertie_detail itemId={ID} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      {content}
    </>
  );
};

export default FeaturedItem;
