export default function Cart(props) {
    const addEntry = (i) => { //i is a bakery item
        return (
            <li className="list-group-item">{i.name}</li>
        );
    }
    
    let price = 0

    const addPrice = (i) => { //i is a bakery item
        price = price + toFixed(i.price);
    }

    const cartData= props.cartData;
    const listCart = cartData.map(addEntry);
    const totalPrice = cartData.map(addPrice);

    return (
        <div className="Cart">
            <h2>Cart</h2>
            <ul className="list-group" style={{marginBottom: '2rem'}}>
                {listCart}
            </ul>
            <h4>Total cost: ${price}</h4>
        </div>

    );
}