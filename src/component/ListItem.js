import Item from "./Item";

const ListItem = (lista) => {
  const template = `
    <div class="
      grid
      md:grid-cols-3
      sm: grid-cols-1
      gap-4
      pt-8
      pb-20
      m-auto
      "
      id="list-items"
      >
        ${lista
          .map((item) =>
            Item(
              item.id,
              item.name,
              item.url_image,
              item.price,
              item.discount,
              item.category
            )
          )
          .join("")}
    </div>
  `;
  return template;
};

export default ListItem;
