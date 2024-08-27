import React from "react";

const ContactUs = () => {
   
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Need A Direct Line?</h2>
          <p className="text-gray-600 mb-4">
            Ground Floor, Alpha-Software Technology Park, Canal Rd, near Canal
            View Hotel, Rahim Yar Khan, Punjab 64200, Pakistan
          </p>
          <div className="flex items-center mb-2">
            <span role="img" aria-label="phone" className="mr-2">
              📞
            </span>
            <span>(+92) 3030279447</span>
          </div>
          <div className="flex items-center">
            <span role="img" aria-label="email" className="mr-2">
              ✉️
            </span>
            <span>Visit: https://www.helloworldtech.com/</span>
          </div>
        </div>

        {/* Google Map Embed */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/place/Hello+World+Technologies/@28.4210223,70.3284369,17z/data=!4m16!1m9!3m8!1s0x39375c0f3e943895:0xf236a8d6b01facb8!2sHello+World+Technologies!8m2!3d28.4210176!4d70.3310118!9m1!1b1!16s%2Fg%2F11c5gbm7d0!3m5!1s0x39375c0f3e943895:0xf236a8d6b01facb8!8m2!3d28.4210176!4d70.3310118!16s%2Fg%2F11c5gbm7d0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name*"
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <textarea
            placeholder="Comment"
            className="border p-2 rounded-md w-full mb-4"
            rows="4"
            required
          ></textarea>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo">
              Save my name, email in this browser for the next time I comment
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#0DAFE6] text-white px-4 py-2 rounded-md"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
