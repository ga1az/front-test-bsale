const Loader = () => {
  const template = `
    <div class="
      m-auto
    ">
      <div class="
        h-12 w-12 boder-4 border-l-gray-200
        border-t-green-500 border-r-gray-200 border-b-gray-200
        animate-spin ease-linear rounded-full
        ">
        Loading
      </div>
    </div>
  `;
  return template;
};

export default Loader;
