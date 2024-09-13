import React from "react";

const ShippingPolicy = () => {
  return (
    <div className=" space-y-8 px-3 py-5 md:px-14 md:py-6">
      <div className="">
        <h2 className="sm:2xl scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight text-black first:mt-0 md:text-2xl">
          {"shipping policy"}
        </h2>
      </div>
      <div className="mt-12 space-y-3 text-black">
        <p className="text-sm font-bold">Order Processing And Shipping Time</p>
        <p className="text-sm">
          At this time, through our website, we process and ship orders to all
          emirates within the United Arab Emirates only. <br /> For orders
          outside the U.A.E., kindly contact us via WhatsApp on number "
          <span className="bg-textShadow font-bold">+ 971 50 611 75 89</span>"
          for the necessary details, shipping fees and logistics. <br />
          <br /> We do our best to process your orders within 1 to 2 business
          days after placing your order (Please allow a delay of few additional
          days in the delivery in case your order has been placed just before or
          within weekends and holidays).
          <br />
          <br /> Once your order has been shipped out to you by our carrier, you
          will receive a WhatsApp notification on your number that your order is
          on the way!
        </p>
      </div>
      <div className=" space-y-3 text-black">
        <p className="text-sm font-bold">Shipping Rates & Estimates</p>
        <p className="text-sm">
          We offer shipping to all regions within the emirate of Abu Dhabi,
          Dubai, Sharjah, Ajman, Ras Al Khaimah, Oum Al Qiwen and Fujairah in
          the U.A.E. at a standard flat-shipping rate (irrespective of the
          weight, dimensions and delivery location of your order) at a 30 AED
          (Including VAT) per delivery. <br />
          <br /> For orders outside the U.A.E., the shipping rates may vary, so
          kindly contact our WhatsApp number{" "}
          <span className="bg-textShadow font-bold">
            "+971 50 611 75 89"
          </span>{" "}
          for more details.
        </p>
      </div>
      <div className="space-y-3 text-black">
        <p className="text-sm font-bold">
          Shipping Method, Schedule And Delivery Times
        </p>
        <p className="text-sm">
          All our orders are shipped by our courier shipping services agent.
        </p>
        <p className="text-sm">
          Please expect the delivery after placing your order as per the
          following schedule:
        </p>
        <div className="overflow-x-auto">
          <table className="w-1/4 border border-gray-400 md:w-3/4">
            <thead>
              <tr>
                <th className="min-w-[60px] border border-gray-400 px-2 py-1 text-left text-sm font-bold text-black md:min-w-[150px] md:px-4 md:py-2">
                  Order Initiation Day
                </th>
                <th className="border border-gray-400 px-2 py-1 text-center text-sm font-bold text-black md:px-4 md:py-2">
                  Order Expected Delivery Day
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow font-bold">Monday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow font-bold">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow font-bold">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by the next day (
                          <span className="bg-textShadow font-bold">
                            Tuesday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by the next day (
                          <span className="bg-textShadow font-bold">
                            Tuesday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Wednesday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow font-bold">Tuesday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow font-bold">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow font-bold">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by the next day (
                          <span className="bg-textShadow font-bold">
                            Wednesday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by the next day (
                          <span className="bg-textShadow font-bold">
                            Wednesday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Thursday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow font-bold">Wednesday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by the next day (
                          <span className="bg-textShadow font-bold">
                            Thursday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by the next day (
                          <span className="bg-textShadow font-bold">
                            Thursday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Friday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow font-bold">Thursday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by the next day (
                          <span className="bg-textShadow font-bold">
                            Friday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by the next day (
                          <span className="bg-textShadow font-bold">
                            Friday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Saturday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow">Friday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by the next day (
                          <span className="bg-textShadow font-bold">
                            Saturday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by the next day (
                          <span className="bg-textShadow font-bold">
                            Saturday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Monday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow">Saturday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <table className="w-[450px] border border-gray-400 md:w-[900px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            12.00 AM - 5.00 PM
                          </span>
                          "
                        </th>
                        <th className="border border-gray-400 px-2 py-2">
                          Order placed between "
                          <span className="bg-textShadow">
                            5.00 PM and 12.00 AM
                          </span>
                          "
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/2 px-2 py-2">
                          Expect your order on the same day for delivery in Abu
                          Dhabi and by (
                          <span className="bg-textShadow font-bold">
                            Monday
                          </span>
                          ) for delivery to all other emirates.
                        </td>
                        <td className="w-1/2 border-l border-gray-400 px-2 py-2">
                          Expect your order by (
                          <span className="bg-textShadow font-bold">
                            Monday
                          </span>
                          ) for delivery inside Abu Dhabi and by "
                          <span className="bg-textShadow font-bold">
                            Monday or Tuesday
                          </span>
                          " for delivery to all other emirates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-t border-gray-400">
                <td className="border border-gray-400 px-4 py-2 text-sm font-bold text-black">
                  <span className="bg-textShadow">Sunday</span>
                </td>
                <td className="border-l border-gray-400 px-4 py-2 text-sm text-black">
                  <div className="w-[450px] border border-gray-400 px-2 py-2 md:w-[900px]">
                    Expect your order by (
                    <span className="bg-textShadow font-bold">Monday</span>) for
                    delivery inside Abu Dhabi and by (
                    <span className="bg-textShadow font-bold">Tuesday</span>)
                    for delivery to all other emirates.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          Please be aware that the mentioned delivery time periods may become
          longer in case you are placing an order just before or during weekends
          and holidays.
        </p>
        <p className="text-sm">
          Kindly expect a phone call from our courier agent to coordinate with
          you on your most suitable order delivery time that meets your
          schedule.
        </p>
      </div>
      <div className="space-y-3 text-black">
        <p className="text-sm font-bold">
          How to check the status of your order ?
        </p>
        <p className="text-sm">
          Once your order has been shipped to you, you will receive a text
          message notification via WhatsApp that your order is on the way; You
          can contact us back on the same number via WhatsApp or by a phone call
          to inquire about any details or the status of your order delivery.
        </p>
        <p className="text-sm">
          In case of any request or whether you would like to follow up with
          your order, kindly call us or contact us via WhatsApp on the following
          numbers (Everyday between "
          <span className="bg-textShadow font-bold">8.15 AM to 12.00 AM</span>
          "):
        </p>
        <div className=" pt-2 md:mx-60">
          <p className="text-sm">
            "<span className="bg-textShadow font-bold">+971 54 758 17 87</span>"
            (Retail Store)
          </p>
          <p className="text-sm">
            "<span className="bg-textShadow font-bold">+971 2 666 49 50</span>"
            (Retail Store)
          </p>
        </div>
        <p className="text-sm">
          We are dedicated in providing the fastest response and best service
          possible at each inquiry, so if you don't get an immediate reply, we
          might be involved in serving other customers or occupied in following
          up the delivery of your order and working hard to put forward the
          fastest and best services for you !
        </p>
        <p className="text-sm">
          Rest assured that we will get back to you as soon as we get the first
          chance ! Guaranteed !
        </p>
      </div>
      <div className="space-y-3 text-black">
        <p className="text-sm font-bold">Returns, Damaged or Faulty Orders ?</p>
        <p className="text-sm">
          We work hard to make your shopping experience with us comfortable and
          with a peace of mind !
        </p>
        <p className="text-sm">
          While if you simply find yourself unsatisfied with your order or in
          case you receive a damaged or faulty order (not matching your order
          criteria), then first this means that you have already chosen us for
          your purchase and this is enough to owe you all our major efforts to
          keep you happy !
        </p>
        <p className="text-sm">
          Therefore, feel free to immediately escalate the case, to our
          management team, on phone number "
          <span className="bg-textShadow font-bold">+ 971 50 611 75 89</span>"
          and we will work as fast as possible to resolve this matter for you.
          We will send you a new order free of cost and free of delivery charge
          and pick up the old one at the time of delivery of your new order. In
          case you opt for a refund, we will arrange for a free of charge pick
          up of the order and issue a refund as per your initial mode of payment
          at the time of placing your order (Please note that in case your
          initial mode of payment was by an electronic card, you can still
          choose for a cash refund for a faster money back processing).
        </p>
      </div>
      <div className="space-y-3 text-black">
        <p className="text-sm font-bold">Customer Service</p>
        <p className="text-sm">
          If you have any questions or inquiries, face any problems, complaints
          or require any support never hesitate to contact us on our management
          team number at "
          <span className="bg-textShadow font-bold">+971 50 611 75 89</span>"
          (by phone call or WhatsApp text message) or by email at{" "}
          <span className="italic text-blue-500 underline hover:cursor-pointer">
            beirutroastery.1980@gmail.com
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
