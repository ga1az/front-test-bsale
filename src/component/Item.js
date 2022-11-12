const Item = (id, name, url_image, price, discount, category) => {
  const maxLen = 18;
  const template = `
    <div key=${id} class="bg-white text-gray-700 w-80 h-50 shadow-lg rounded-md overflow-hidden
      flex justify-center  flex-col
    ">
      <img src=${url_image} alt=${name} class="w-full lg:h-72 md:h-48
      object-cover object-center
      " />
      <div class="flex p-5 flex-col gap-2">
        <h2 class="font-semibold text-2xl overflow-ellipsis">${
          name.length > maxLen ? name.slice(0, maxLen) + "..." : name
        }</h2>
        <div>
          <span class="text-xl font-bold">
            $ ${new Intl.NumberFormat("es-CL").format(
              price - price * (discount / 100)
            )}
          </span>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-sm line-through opacity-50">
              $ ${new Intl.NumberFormat("es-CL").format(price)}
            </span>
            <span class="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              -${discount}%
            </span>
          </div>
        </div>
        <div>
          <button class="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;
  return template;
};

export default Item;
