import Router from "next/router";
import style from "../../home-4/HomeStyling.module.css";
import {
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addaffordability,
  addStatus,
  addArea,
  addYearBuilt,
  addFBR,
  addLDA,
  addcategory,
  addview3D,
  addView,
  addCompany,
  addDeveloper,
  addfurnishing,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import CheckBoxFilter from "../../common/CheckBoxFilter";
import GlobalSelectBox from "../../common/GlobalSelectBox";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const GlobalFilter = ({ className = "" }) => {
  const { location } = useSelector((state) => state.properties);

  //dispatching
  const dispatch = useDispatch();
  dispatch(addPrice({ min: 10000, max: 20000 }));

  //Google Api Key loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });
  // const autocomplete = new google.maps.places.Autocomplete(input, options);

  // submit handler
  const submitHandler = () => {
    dispatch(resetAmenities());
    dispatch(addPrice({ min: 10000, max: 20000 }));
    dispatch(addBathrooms(""));
    dispatch(addBedrooms(""));
    dispatch(addGarages(""));
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addPropertyType(""));
    dispatch(addaffordability(""));
    dispatch(addStatus(""));
    dispatch(addArea(""));
    dispatch(addAreaMax(""));
    dispatch(addAreaMin(""));
    dispatch(addYearBuilt(""));
    dispatch(addFBR(""));
    dispatch(addLDA(""));
    dispatch(addcategory(""));
    dispatch(addBedrooms(""));
    dispatch(addView(""));
    dispatch(addview3D(""));
    dispatch(addCompany(""));
    dispatch(addDeveloper(""));
    dispatch(addfurnishing(""));
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            {isLoaded && (
              <Autocomplete>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => dispatch(addLocation(e.target.value))}
                />
              </Autocomplete>
            )}
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker  form-select show-tick"
                onChange={(e) => dispatch(addPropertyType(e.target.value))}
              >
                <option value="">Property Type</option>
                <option>Commercial</option>
                <option>Apartment</option>
                <option>Pent House</option>
                <option>Town Villas</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker  form-select show-tick"
                onChange={(e) => dispatch(addaffordability(e.target.value))}
              >
                <option value="">Affordability</option>
                <option>Affordable</option>
                <option>Value for Money</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker  form-select show-tick"
                onChange={(e) => dispatch(addStatus(e.target.value))}
              >
                <option value="">Property Status</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Delieverd">Delieverd</option>
                <option value="Off Plan">Off Plan</option>
                <option value="Recently Delieverd">Recently Delieverd</option>
              </select>
            </div>
          </div>
        </li>
        {/*End li*/}
        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li
          className={`custome_fields_520 list-inline-item ${style.Advance_bg}`}
        >
          <div className={`navbered ${style.Advance_bg}`}>
            <div className={`mega-dropdown ${style.Advance_bg}`}>
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div
                className={`dropdown-content dropdown-menu ${style.Advance_bg}`}
              >
                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}

                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Clear Filters
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
