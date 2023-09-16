const Order = require('../../models/order');
//const Shoe = require('../../models/shoes');
const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


module.exports = {
  cart,
  addCart,
  setShoeQuantity,
  checkout,
  getAllForUser
  
};

async function getAllForUser(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).sort(
    '-updatedAt'
  )
  res.json(orders)
}

async function cart(req, res) {
  const cart = await Order.getCart(req.user._id)
  res.json(cart)

  console.log(req.body);
}

   
async function addCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addShoeCart(req.params.id);
  res.json(cart);
}

async function setShoeQuantity(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setShoeQuantity(req.body.shoeId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const { amount, id } = req.body

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'I think I need to grab this from req.body',
      payment_method: id,
      confirm: true,
      // stripe needs a return url; update this with deployed app url
      return_url: 'http://localhost:3000/orders/new'
      // if a return url is not desired, use the following code instead:
      // automatic_payment_methods: {
      //   enabled: true,
      //   allow_redirects: 'never'
      // }
    })
    console.log('Payment: ', payment)

    const cart = await Order.getCart(req.user._id)
    cart.isPaid = true
    await cart.save()

    console.log('Updated cart: ', cart)

    res.json({ message: 'Payment successful!', cart })
  } catch (err) {
    console.log('Error: ', err)
    res.status(400).json({ message: 'Payment failed!' })
  }
}