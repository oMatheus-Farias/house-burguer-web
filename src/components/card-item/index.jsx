const CardItem = ({ burguerName, price, image }) => {
  return (
    <section className="w-full bg-primary rounded-xl overflow-hidden max-w-[31.25em] mx-auto mt-12">
      <div className="w-full p-16 flex flex-col items-center justify-center">
        <img
          src={image}
          alt="Hamburguer Image"
          className="rounded-full min-h-[18.75em] min-w-[18.75em] max-h-[18.75em] max-w-[18.75em] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="w-full h-16 bg-dark px-5 flex justify-between items-center">
        <p className="text-white font-bold">{burguerName}</p>
        <p className="text-white font-bold">{`R$ ${price.toFixed(2)}`}</p>
      </div>
    </section>
  );
};

export default CardItem;
