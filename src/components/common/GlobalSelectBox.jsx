import Router from "next/router";
import style from "../home-4/HomeStyling.module.css"
import {
  addBathrooms,
  addBedrooms,
  addYearBuilt,
  addAreaMin,
  addAreaMax,
  addFBR,
  addLDA,
  addcategory,
  addArea,
  addfurnishing,
  addDeveloper,
  addView,
  addCompany,
  addview3D
} from "../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";

const GlobalSelectBox = () => {
  const dispatch = useDispatch();
  return (
    <>
    <ul className={style.Global_select_list}>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addBathrooms(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>Bathrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addBedrooms(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>Bedrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addYearBuilt(e.target.value))}}
         className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>Year built</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addcategory(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>Category</option>
            <option>Corner</option>
            <option>Standard</option>
            <option>Facing Lobby</option>
            <option>corner F Lobby</option>
            <option>Front</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <input
            type="number"
            className={`form-control ${style.width_set}`}
            id="exampleInputName2"
            placeholder="Min Area"
            onChange={(e) => dispatch(addAreaMin(e.target.value))}
          />
        </div>
      </li>
      {/* End Li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <input
            type="number"
            className={`form-control ${style.width_set}`}
            id="exampleInputName3"
            placeholder="Max Area"
            onChange={(e) => dispatch(addAreaMax(e.target.value))
            }
          />
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addLDA(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>LDA</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addFBR(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option>FBR</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </li>
      {/* End li */}

      

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addview3D(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">View3D</option>
            <option value="yes">Available</option>
            <option value="not">Not Available</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addfurnishing(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">Furnished status</option>
            <option value="yes">Availabel</option>
            <option value="no">Not Availabel</option>
          </select>
        </div>
      </li>
      {/* End li */}


      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addDeveloper(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">Developer</option>
            <option value="Mughal Estate">Mughal Estate</option>
            <option value="Zameen Estate">Zameen Estate</option>
            <option value="Hamza Estate">Hamza Estate</option>
          </select>
        </div>
      </li>
      {/* End li */}

      
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addView(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">View</option>
            <option value="Islamabad">Islamabad View</option>
            <option value="margala hills">Margala Hills View</option>
            <option value="motarway">Motarway View</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addCompany(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">Company Security</option>
            <option value="yes">Secured</option>
            <option value="Not">Not Secured</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select onChange={(e)=>{dispatch(addArea(e.target.value))}}
          className={`selectpicker  show-tick form-select ${style.width_set}`}>
            <option value="">Area Type</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
          </select>
        </div>
      </li>
      {/* End li */}
      </ul>
    </>
  );
};

export default GlobalSelectBox;
