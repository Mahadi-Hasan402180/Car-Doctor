const CustomerRating = () => {
  return (
    <div className="mt-8 mb-4">
      <div className="border-2 border-y-blue-200 text-blue-700 p-4">
        <h2 className="text-center   text-5xl font-bold mt-8 mb-4">
          What Customer Says
        </h2>
        <p className="text-center  mb-4 text-black">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="my-8 flex gap-7 justify-center">

        <div>
        <div className="flex items-center gap-1">
          <div>
            <img
              className="h-20 w-20 rounded-full"
              src="https://i.ibb.co/6RTXCTX/438267546-797529415243255-7259249411915932051-n.jpg"
              alt="mahadi"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Mahadi Hasan</h2>
            <p>Businessman</p>
          </div>
        </div>
        <p className="mt-4">
            Car-Doctor exceeds expectations with intuitive design,<br />comprehensive content, diverse products,and stellar customer service. <br /> A must-visit for automotive enthusiasts. Highly recommended!
        </p>
        <p>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </p>
        </div>
        <div>
        <div className="flex items-center gap-1">
          <div>
            <img
              className="h-20 w-20 rounded-full"
              src="https://i.ibb.co/tPv9Pv2/437190466-1958811067897033-3973144970492304390-n.jpg"
              alt="mahadi"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Saddam Hossain</h2>
            <p>Businessman</p>
          </div>
        </div>
        <p className="mt-4">
        Five stars for Car-Doctor! Seamless navigation, comprehensive content, <br /> diverse product range, and exceptional customer service make <br /> it a must-visit for automotive enthusiasts. Highly recommended
        </p>
        <p>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </p>
        </div>

      </div>
    </div>
  );
};

export default CustomerRating;
