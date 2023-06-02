import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV2 from "../../components/listing-details-v2";

const index = (props) => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V2" />
      <div style={{
        backgroundColor: "#fff",
        borderRadius:" 5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        maxWidth:"90%",
        maxHeight:" 100%",
        overflowY: "auto",
      }}>
        <ListingDetailsV2 itemId={props.itemId} />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });



