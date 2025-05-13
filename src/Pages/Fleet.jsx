import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NyobaLagi from "../ComponentFleet/NyobaLagi";
import BrowseByType from "../ComponentFleet/BrowseByType";
import BrowseByManufacturers from "../ComponentFleet/BrowseByManufacturer";

const Fleet = () => {
    return (
        <div>
            <Header />
            <NyobaLagi />
            <BrowseByType/>
            <BrowseByManufacturers/>
            <Footer />
        </div>
    );
};

export default Fleet;