import MakingAnOrder from "../../smart/MakingAnOrder/makingAnOrder";
import Nav from "../../smart/Nav/Nav";

function PlaceAnOrder() {
    return(
        <>
            <Nav />
            <section className='page'>
                <MakingAnOrder />
            </section>
        </>
    )
}

export default PlaceAnOrder;