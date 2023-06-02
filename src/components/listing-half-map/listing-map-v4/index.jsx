import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import FilteringItem from "./FilteringTop";
import MyGoogleMap from "./GoogleMap";
import style from "./Listing.module.css";


const index = () => {
  return (
    <div style={{overflow: "hidden",height: "100vh"}}>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Filters Shown --> */}

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className={`our-listing our-listing_map2 bgc-f7 pt0 pb0 ${style.Pop_edits}` }
      >
        <section className={style.Filtering_top}>
          <div className={style.Filter_items}>
            <FilteringItem />
          </div>
        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-7 col-xl-6  p0 position-relative">
              <MyGoogleMap />
            </div>

            <div className="col-xxl-5 col-xl-6 ">
              <div className="half_map_area_content mt30">
                <div className="listing_list_style listing-map-style m0 mb20">
                  <GridListButton />
                </div>

                <div className="col-md-12">
                  <div className="grid_list_search_result ">
                    <div className="row align-items-center">
                      <FilterTopBar2 />
                    </div>
                  </div>

                  <div className="row" style={{marginBottom:"100px",overflowY:"scroll"}}>
                    <FeaturedItem />
                  </div>

                  <div className="row">
                    <div className="col-lg-12 mt20">
                      <div className="mbp_pagination">
                        <Pagination />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
