import { useParams } from "react-router-dom";

const Event = () => {
    let { eventId } = useParams();
    console.log(eventId);

    return (
        <section>
            
            {/* <h1>{location.name}</h1>
            <p>{location.description}</p>
            <h2>Date: {location.time.start} ---&gt; {location.time.end}</h2> */}
        </section>
    );
}
 
export default Event;