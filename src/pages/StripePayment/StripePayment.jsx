import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'

export default function StripePaymentPage({setActiveStripe}) {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return

    const card = elements.getElement(CardElement)
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: card
    })

    if (result.error) {
      console.log(result.error.message)
    } else {
   

      const response = await ordersAPI.checkout({
        amount: 100, // Convert to smallest unit (cents for USD)
        id: result.paymentMethod.id
      })

  const paymentResult = await response

  if (paymentResult.message === 'Payment successful!') {
    // Handle success
    alert(paymentResult.message)
    navigate('/orders')
    setActiveStripe(false)
  } else {
    // Handle error
    alert(paymentResult.message)
  }
}
}

return (
<form onSubmit={handleSubmit}>
  <CardElement />
  <button type="submit">Pay</button>
</form>
)
}