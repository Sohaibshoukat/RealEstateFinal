import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertySpecification from "../common/listing-details/PropertySepcification";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import NearbyProperties from "./NearBySlider";
import PaymentPlan from "../payment-plan";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DecisionDriver from "./DecisionDriver";
import Rating from "./Rating";

const DetailsContent = (props) => {
  // const history = useNavigate();

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   const scrollY = window.scrollY;
  //   //   const element = document.getElementById("about");

  //   //   if (element && scrollY >= element.offsetTop) {
  //   //     history(`/your-url/#${element.id}`);
  //   //   }
  //   // };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [history]);

  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem property={props.property} />
        </div>
        {/* End .lsd_list */}

        <h3 className="mb30 scroll-section">About</h3>
        <PropertyDescriptions property={props.property} />
      </div>
      {/* End .listing_single_description */}

      <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments property={props.property} />
        </div>
      </div>
      {/* End .property_attachment_area */}

      {/* payment Integration */}

      <div className="property_attachment_area">
        <PaymentPlan property={props.property} />
      </div>

      {/* End payment Integration */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Amenities</h2>
          </div>
          {/* End .col */}

          <PropertyFeatures property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2>Nearby Properties</h2>
            <p>Within 50 Miles OF {props.property.project_title}</p>
          </div>
          <NearbyProperties Located={props.property.locationCoordinates} />
        </div>
      </div>

      <div className="application_statics mt30">
        <h3 className="mb30">
          Location{" "}
          <small className="float-end">
            {props.property?.projectLocation?.address}
          </small>
        </h3>
        <div className="property_video p0">
          <PropertyLocation property={props.property} />
        </div>
      </div>
      {/* End .location_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <FloorPlans property={props.property} />
        </div>
      </div>
      {/* End .floor_plane */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Decision Driver</h2>
          </div>
          {/* End .col */}

          <DecisionDriver property={props.property} />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Rating</h2>
          </div>
          {/* End .col */}

          <Rating property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Specification</h2>
          </div>
          {/* End .col */}

          <PropertySpecification property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div>
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
