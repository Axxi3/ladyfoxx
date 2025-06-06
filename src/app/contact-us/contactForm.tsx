import React from 'react';

export default function ContactForm() {
  return (
    <div className="md:w-5xl w-[92%] mx-4  md:mx-auto bg-[#2b5755] text-white p-6 md:p-10 rounded-md my-6 shadow-lg">
      <form className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="w-full p-3 rounded border border-[#142626] bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Smith"
              className="w-full p-3 rounded border border-[#142626] bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Jane@mail.com"
              className="w-full p-3 rounded border border-[#142626] bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="text"
              placeholder="+1(969) 819-8061"
              className="w-full p-3 rounded border border-[#142626] bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            placeholder="Hi, I am Jane I want help with...."
            rows={4}
            className="w-full p-3 rounded border border-[#142626] bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded transition-colors"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}
