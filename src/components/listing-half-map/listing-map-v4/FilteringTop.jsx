import Filter from "./Filters";

const GlobalHeroFilter = () => {
    return (
        <div>
            <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default GlobalHeroFilter;
