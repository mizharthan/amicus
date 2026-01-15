import TopBar from "../components/layout/TopBar";
import Tabs from "../components/layout/Tabs";
import BottomNav from "../components/layout/BottomNav";
import StatCard from "../components/cards/StatCard";
import ChartCard from "../components/cards/ChartCard";
import UserListCard from "../components/cards/UserListCard";

const HomePage = () => {
  return (
    <div className="home-page">
      <TopBar />
      <Tabs />

      <div className="home-content">
        <div className="card-row">
          <StatCard />
          <StatCard />
        </div>

        <ChartCard />
        <UserListCard />
      </div>

      <BottomNav />
    </div>
  );
};

export default HomePage;
