import style from "./ListingDetail.module.css";

const PropertySpecification = (props) => {
  return (
    <>
      <div className={`${style.AmmentiesCollection}`}>
        <div className={`${style.AmmentiesSection}`}>
          <h3>Structure</h3>
          <div className={`${style.SpecificationPart}`}>
            {props.property?.list_of_specifications?.Structure.map((item) => {
                return (
                  <div className={`${style.Specificationbox}`}>
                    <h5>{item.Title}</h5>
                    <h6>{item.Description}</h6>
                  </div>
                );
              })}
          </div>
        </div>

        <div className={`${style.AmmentiesSection}`}>
          <h3>Flooring</h3>
          <div className={`${style.SpecificationPart}`}>
            {props.property?.list_of_specifications?.Flooring.map((item) => {
                return (
                  <div className={`${style.Specificationbox}`}>
                    <h5>{item.Title}</h5>
                    <h6>{item.Description}</h6>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={`${style.AmmentiesSection}`}>
          <h3>
            Doors<br></br> Wardrobe <br></br> Windows
          </h3>
          <div className={`${style.SpecificationPart}`}>
            {props.property?.list_of_specifications?.doorsWindowsWardrobe.map((item) => {
                return (
                  <div className={`${style.Specificationbox}`}>
                    <h5>{item.Title}</h5>
                    <h6>{item.Description}</h6>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={`${style.AmmentiesSection}`}>
          <h3>
            Bedroom<br></br>Bathroom<br></br>Kitchen
          </h3>
          <div className={`${style.SpecificationPart}`}>
            {props.property?.list_of_specifications?.bedroomBathroomKitchen.map((item) => {
                return (
                  <div className={`${style.Specificationbox}`}>
                    <h5>{item.Title}</h5>
                    <h6>{item.Description}</h6>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySpecification;
