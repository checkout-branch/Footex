import AboutUsHeader from "../Layout/AboutUs-Header/AboutUsHeader"
import VideoComponent from "../Layout/VideoComponent/VideoComponent";
import WareHouseVideo from '../assets/warehouse.mp4';
import PackingVideo from '../assets/packing.mp4'; 
import dispatchingVideo from '../assets/dispatching.mp4'; 


 




const AboutUsComponent = () => {

    return(
        <div>
            <AboutUsHeader/>
            <VideoComponent headerText="WAREHOUSE" videoSource={WareHouseVideo}/>
            <VideoComponent headerText="PACKING" videoSource={PackingVideo}/>
            <VideoComponent headerText="DISPATCHING" videoSource={dispatchingVideo}/>
        </div>
    )
}



export default AboutUsComponent;