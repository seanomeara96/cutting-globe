import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Irg47J6hGciURAFZCsbHlzlv90XgVdX1N4eHIx4ZmrtrG8YktEIc1LVSKZdSaIDQijEGHx1lRRdYaUyKvRIjIcX00lu4duRgF"
    )
  }
  return stripePromise
}
