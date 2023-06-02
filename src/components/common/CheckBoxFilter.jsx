import { useState } from "react";
import {
  addAmenities
} from "../../features/properties/propertiesSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

const CheckBoxFilter = () => {
  
  const dispatch = useDispatch();

  // const Router = useRouter();


  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                value="Air Conditioning"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air Conditioning
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
                value="Lawn"
                onChange={(e)=>{
                  dispatch(addAmenities(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Lawn
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
                value="Swimming Pool"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming Pool
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
                value="Barbeque"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck4">
                Barbeque
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck5"
                value="Microwave"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck5">
                Microwave
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck6"
                value="TV Cable"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck6">
                TV Cable
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck7"
                value="Dryer"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck7">
                Dryer
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck8"
                value="Outdoor Shower"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck8">
                Outdoor Shower
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck9"
                value="Washer"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck9">
                Washer
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
                value="Gym"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck11"
                value="Refrigerator"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck11">
                Refrigerator
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
                value="WiFi"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck12">
                WiFi
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck13"
                value="Laundry"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck13">
                Laundry
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck14"
                value="Sauna"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck14">
                Sauna
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck15"
                value="Window Coverings"
                onChange={(e)=>{dispatch(addAmenities(e.target.value))}}
              />
              <label className="form-check-label" htmlFor="customCheck15">
                Window Coverings
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
