import './cart.styles.scss';

const Cartitem = ({ Cartitem }) => {
    const { name,quantity } = Cartitem;
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default Cartitem;
