

const ProductCard = ({product}) => {
    const {title,price,img} = product;
    return (
        <div className="card h-96 bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="products" className=" h-36 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-blue-900 font-bold">Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;