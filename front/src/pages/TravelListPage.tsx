import TravelList from "../components/TravelList";

const TravelListPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-violet-700 mb-10">Share your travel</h1>
      <TravelList />
    </div>
  );
};

export default TravelListPage;
