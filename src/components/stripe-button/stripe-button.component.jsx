import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JIJaUKrGy573csfaDUneturU0SLaHJgMcZ6wrT04wDdKy45wsxpBKoNg0XcKhjxGDFKNsLwdDyasGejVjDazm2800eT9450WC';
  const onToken = () => alert('Payment Successful');

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
