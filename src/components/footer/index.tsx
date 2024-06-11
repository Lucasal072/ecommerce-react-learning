import AppleStore from "../icons/AppleStore";
import CallUs from "../icons/CallUs";
import GooglePlay from "../icons/GooglePlay";
import Whatsapp from "../icons/Whatsapp";
import TextWithIcon from "../TextWithIcon";

export const Footer = () => {
  return (
    <footer className="bg-[#008ECC] h-[600px] flex flex-col items-center ">
      <div className="border-b-2 border-white h-[550px] flex flex-row items-center gap-14">
        <div className="text-white w-[400px] h-[450px] flex flex-col items-start gap-2">
          <h1 className=" text-[60px]">MegaMart</h1>
          <p className=" text-[20px]">Contact Us</p>
          <TextWithIcon icon={<Whatsapp />} text={<p>Whats App</p>} />
          <p>+1 202-918-2132</p>
          <TextWithIcon icon={<CallUs />} text={<p>Call Us</p>} />
          <p>+1 202-918-2132</p>
          <p>Download App</p>
          <div className="flex gap-4 flex-row">
            <AppleStore />
            <GooglePlay />
          </div>
        </div>
        <div className="w-[250px] h-[300px] text-white   flex flex-col gap-4 ">
          <h1 className="border-b-4  border-b-white w-fit ">
            Most Popular Categories
          </h1>
          <ul className="[&_:is(li)]:list-disc flex flex-col gap-3 text-[13px]">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>
        <div className="w-[250px] h-[300px] text-white   flex flex-col gap-4 ">
          <h1 className="border-b-4  border-b-white w-fit text-[20px]">
            Customer Services
          </h1>
          <ul className="[&_:is(li)]:list-disc flex flex-col gap-3">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
      <p className="text-white flex items-center justify-center h-14">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </p>
    </footer>
  );
};
