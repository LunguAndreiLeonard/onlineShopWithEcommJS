import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStrip } from '@stripe/react-stripe-js'
import Review from './Review'
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, shippingData, backStep }) => {

    const handleSubmit = (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cashElement = elements.getElement(cashElement);

        const oderData = {
            line_items: checkoutToken.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            shipping: { name: 'Primary', street: shippingData.address1, town_city: shippingData.city, country: shippingData.shippingSubdivision, country: shippingData.shippingCountry, },
            payment: {
                gateway: 'stripe',
            }
        }
    }




    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Metoda de plata: </Typography>
            <Typography variant='subtitle2' gutterBottom style={{ margin: '20px 0' }}>ramburs</Typography>

            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form>

                            <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>Inapoi</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Plateste {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>

                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm