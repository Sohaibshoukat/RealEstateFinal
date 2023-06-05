import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Scheduler from "./Scheduler";
import Header from "./headerPopUp";
import DetailsContent from "../../components/listing-details-v2/DetailsContent";
import style from "./navbarPopUp.module.css";
import agency from "../../data/agency";
import Link from "next/link";
import { useContext } from "react";
import VillaContext from "../../Context/TownVilla/TownVillaContext";
import DeveloperContext from "../../Context/Developer/DeveloperContext";
import { useRef } from "react";


const ListingDynamicDetailsV2 = (props) => {
  const firstSchedulerRef = useRef(null);
  const secondSchedulerRef = useRef(null);
  const [isSecondSchedulerVisible, setSecondSchedulerVisible] = useState(false);

  const villaproject = useContext(VillaContext);
  const { villa } = villaproject;

  const dev = useContext(DeveloperContext);
  const { developer } = dev;

  const router = useRouter();
  const [property, setProperty] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [ImageState, setImageState] = useState("InnerimgList");
  const id = props.itemId;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProperty(villa?.find((item) => item._id == id));
    console.log(id);
    return () => {};
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSecondSchedulerVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (firstSchedulerRef.current) {
      observer.observe(firstSchedulerRef.current);
    }

    return () => {
      if (firstSchedulerRef.current) {
        observer.unobserve(firstSchedulerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Listing Single Property --> */}
      <section className="single_page_listing_style p0  md-mt0">
        <div className="container-fluid p0">
          {ImageState == "3Dview" ? (
            <iframe
              width="100%"
              height="500"
              frameborder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowfullscreen
              scrolling="no"
              src={`${property.video_3D}`}
            ></iframe>
          ) : ImageState == "Video" ? (
            <video
              width="100%"
              height="530"
              src={property.simple_video}
              controls
            />
          ) : (
            <Gallery>
              <div className="row g-0" key={property?.id}>
                <div className="col-md-6 col-lg-6 ">
                  <div className="row g-0">
                    <div className="col-lg-12 ">
                      <div className="spls_style_one 1px position-relative">
                        <Item
                          original={property?.img}
                          thumbnail={property?.img}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div style={{ padding: "3px" }}>
                              <img
                                style={{ borderRadius: "10px" }}
                                className="img-fluid w100 cover lds-2"
                                src={property.main_image}
                                alt={property.main_image}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 position-relative">
                  <div className="row g-0 gx-0" style={{ height: "100%" }}>
                    {ImageState == "InnerimgList"
                      ? property?.interiorPictures
                          ?.slice(0, 4)
                          ?.map((val, i) => (
                            <div className="col-6 col-lg-6 " key={i}>
                              <div
                                className="spls_style_one"
                                style={{ height: "100%" }}
                              >
                                <Item
                                  original={val}
                                  thumbnail={val}
                                  width={752}
                                  height={450}
                                >
                                  {({ ref, open }) => (
                                    <div
                                      role="button"
                                      style={{
                                        padding: "3px",
                                        height: "100%",
                                      }}
                                      ref={ref}
                                      onClick={open}
                                    >
                                      <img
                                        className="img-fluid w100"
                                        style={{
                                          borderRadius: "10px",
                                          height: "100%",
                                          objectFit: "cover",
                                          maxHeight: "100%",
                                        }}
                                        src={val}
                                        alt={val}
                                      />
                                    </div>
                                  )}
                                </Item>
                              </div>
                            </div>
                          ))
                      : property?.exteriorPictures
                          ?.slice(0, 4)
                          ?.map((val, i) => (
                            <div className="col-6 col-lg-6 " key={i}>
                              <div
                                className="spls_style_one"
                                style={{ height: "100%" }}
                              >
                                <Item
                                  original={val}
                                  thumbnail={val}
                                  width={752}
                                  height={450}
                                >
                                  {({ ref, open }) => (
                                    <div
                                      role="button"
                                      style={{
                                        height: "100%",
                                        border: "1.5px solid rgba(0,0,0,0.3)",
                                      }}
                                      ref={ref}
                                      onClick={open}
                                    >
                                      <img
                                        className="img-fluid w100"
                                        style={{
                                          height: "100%",
                                          objectFit: "cover",
                                          maxHeight: "100%",
                                        }}
                                        src={val}
                                        alt={val}
                                      />
                                    </div>
                                  )}
                                </Item>
                              </div>
                            </div>
                          ))}
                  </div>

                  <div className="single_property_social_share">
                    <div className="spss style2 mt10 text-right tal-400">
                      <ul className="mb0">
                        {property?.check_lda_approval && (
                          <li className={`list-inline-item ${style.tooltip}`}>
                            <a href="#">
                              <span>
                                LDA
                                <span class={style.tooltiptext}>
                                  {property.LDANum}
                                </span>
                              </span>
                            </a>
                          </li>
                        )}
                        {property?.check_fbr_approval && (
                          <li className={`list-inline-item ${style.tooltip}`}>
                            <a href="#">
                              <span>
                                FBR
                                <span class={style.tooltiptext}>
                                  {property.FBRNum}
                                </span>
                              </span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Gallery>
          )}
        </div>
        <div className={`${style.Button_Style}`}>
          <div className="search_option_button">
            <button
              onClick={() => setImageState("InnerimgList")}
              type="submit"
              className={`btn ${style.btn_transparent}  btn-thm`}
            >
              Interior
            </button>
          </div>
          <div>
            <button
              onClick={() => setImageState("OuterimgList")}
              type="submit"
              className={`btn ${style.btn_transparent} btn-thm`}
            >
              Exterrior
            </button>
          </div>
          <div>
            <button
              onClick={() => setImageState("3Dview")}
              type="submit"
              className={`btn ${style.btn_transparent} btn-thm`}
            >
              3D view
            </button>
          </div>
          <div>
            <button
              onClick={() => setImageState("Video")}
              type="submit"
              className={`btn ${style.btn_transparent} btn-thm`}
            >
              Video
            </button>
          </div>
        </div>
        <div className="listing_single_description2 mt30-767 mb30-767">
          <div className="single_property_title">
            <h2>{property?.project_title}</h2>
            <p>{property?.projectLocation?.address}</p>
          </div>
          <div className="single_property_social_share style2 static-title">
            <div className="logo_section">
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="price">
              <h2>PKR {property?.HighlightIcon?.PriceStartingfrom}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className={`${style.Highlighted_Icon}`}>
          <div className="container" style={{ maxWidth: "95%" }}>
            <div className={`${style.grid}`}>
              {property?.HighlightIcon &&
                Object.keys(property?.HighlightIcon).map((key, i) => {
                  return (
                    <div className={`${style.Icon_portion}`} key={i}>
                      <div className={`${style.Icon}`}>
                        <img
                          src={`/assets/images/Highlited/${key}.${
                            "png" || "jpg"
                          }`}
                          alt=""
                        />
                      </div>
                      <div className="Icon_text">
                        <h4>{property?.HighlightIcon[key]}</h4>
                        <p>{key}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className={`${style.Schedule_Tour}`} ref={firstSchedulerRef}>
            <Scheduler
              style={{ marginTop: `-10%` }}
              title={property.project_title}
            />
          </div>
        </div>
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row">
            <div className="col-md-12 col-lg-8">
              {/* End .listing_single_description2 */}
              <DetailsContent property={property} />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <div style={{ position: "sticky", top: "3%" }}>
                {/* {developer.map((item) => {
                  if (item.DevName === property.projectDeveloper) {
                    return (
                      <Link href={`/agency-details/${item._id}`}>
                        <div className={`${style.developersection}`}>
                          <div className={`${style.developer_img}`}>
                            <img src={item.DevLog} alt="" />
                          </div>
                          <div className={`${style.developer_data}`}>
                            <h5>Developer</h5>
                            <h3>{item.DevName}</h3>
                            <h4>
                              Rating: <span>{item.rating}</span>
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })} */}
                {isSecondSchedulerVisible&&
                <div 
                className={`${style.SideBar_Schedule_Tour} ${isSecondSchedulerVisible ? "show" : ""}`}>
                  <Scheduler sider={true} />
                </div>}
              </div>
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        <div
          className={`container`}
          style={{ maxWidth: "95%", marginTop: "40px" }}
        >
          <div className={`${style.MOUData}`}>
            <h2>MOU Contract</h2>
            <div className={`${style.MOU_image}`}>
              {agency.map((item) => {
                if (item.name === property.developer) {
                  return <img src={item.MOU} alt="" />;
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDynamicDetailsV2;
