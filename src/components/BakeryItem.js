// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {

    return (
        <div className="BakeryItem">

            <div className="card" style={{width: '18rem'}}>
                <img src={props.image} className="card-img-top" alt={'Image of ' + props.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <h5 className="card-title">{props.price}</h5>
                        <a href="#" className="btn btn-primary" onClick={() => props.handleClick(props)}>Add to cart</a>
                    </div>
            </div>
        </div>
       
    );
}