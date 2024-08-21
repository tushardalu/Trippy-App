import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destinations </h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData 
      className="first-des"
        heading="Taal Volcano , Batangas"
        text=" Taal Volcano has had several violent eruptions in the past, causing
            deaths on the island and the populated areas surrounding the lake,
            with an overall death toll of about 6,000. Because of its proximity
            to populated areas and its eruptive history, the volcano was
            designated a Decade Volcano, worthy of close study to prevent future
            natural disasters. "
      />
      <DestinationData
      className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text=" Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain. "
      />
    </div>
  );
};
export default Destination;
