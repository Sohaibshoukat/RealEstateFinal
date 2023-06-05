import { useState } from "react";
import { addAmenities } from "../../features/properties/propertiesSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";


const CheckBoxFilter = () => {
  const dispatch = useDispatch();

  const {
    amenities
  } = useSelector((state) => state.properties);

  // const Router = useRouter();

  const ammenties = [
    "Swimming pool",
    "Gymnasium",
    "security",
    "Lifts",
    "Badminton Court",
    "Kids Play area",
    "Table tennis",
    "Cycle/jogging track",
    "Power backup",
    "Solar Panels",
    "Treated water Supply",
    "Maid rooms",
    "CCTV cameras",
    "Intercom Facility",
    "Fire Frightening",
    "cafeteria",
    "saloon",
    "spa",
    "Reception",
    "Sewage treatment",
    "Daycare Center",
    "Coffee Shop",
    "Super Store",
    "Prayer Area",
    "Car Parking",
    "B Park parking",
    "Garbage collection",
    "housekeeping",
    "laundry service",
    "Rooftop Garden",
    "Library",
    "Cigar room",
    "Bar",
    "Steam & Sauna",
    "Theatre",
  ];

  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          {ammenties.map((am) => {
            console.log(amenities)
            return (
              <li>
                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={am}
                    onChange={(e) => {
                      dispatch(addAmenities(e.target.value));
                    }}
                  />
                  <label className="form-check-label" htmlFor="customCheck1">
                    {am}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CheckBoxFilter;
