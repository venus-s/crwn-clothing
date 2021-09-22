import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemName,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
