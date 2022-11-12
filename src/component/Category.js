const Category = (data) => {
  const template = `
    <div class="flex gap-3 md:flex-row lg:flex-row flex-col items-center">
      ${data
        .map(
          (category) => `<form method="get" class="flex items-center">
      <button type="submit" for="category" name="category" value=${category.id} class="px-3 py-1 rounded-full text-sm md:text-lg bg-gray-100">${category.name}</button>
    </form>
    `
        )
        .join("")}
    </div>
  `;
  return template;
};

export default Category;
