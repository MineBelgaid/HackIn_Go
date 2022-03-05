import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Navigation = ({section}) => {
    return (
        <div className="relative h-screen">
            {/* <section className="absolute inset-0"></section> */}
            {section}
            <Navbar />
            <NavMenu />
        </div>
    );
}
 
export default Navigation;