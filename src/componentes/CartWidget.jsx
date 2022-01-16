import carrito from '../media/carrito.svg'

export const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt='carrito' />
            Mi Carrito
        </div>
    )
}
export default CartWidget