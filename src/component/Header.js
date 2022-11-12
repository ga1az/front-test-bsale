const Header = () => {
  const template = `
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="container-fluid">
          <a class="text-xl text-black font-semibold" href="/">Bsale Shop</a>
        </div>
        <div class="flex gap-11">
          <form action="" method="get" class="flex gap-1">
            <input for="fname" name="fname" type="text" class="border rounded-xl"/>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  `;
  return template;
};

export default Header;
