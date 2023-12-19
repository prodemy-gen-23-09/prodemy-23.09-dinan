const Footer = () => (
  <div className="w-full flex bg-orange-300 justify-around p-5">
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">About</h2>
      <p>Contact Us</p>
      <p>About Us</p>
      <p>Our Other Product</p>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Help</h2>
      <p>Payment</p>
      <p>Shipping</p>
      <p>Return Policy</p>
      <p>FAQ</p>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Policy</h2>
      <p>Privacy</p>
      <p>Tems Of Use</p>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Follow Us</h2>
      <a className="block">Facebook</a>
      <a className="block">Instagram</a>
      <a className="block">Twitter</a>
    </div>
  </div>
)

export default Footer
