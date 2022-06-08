export let Categories = [
  { id: 0, title: "Diğer" },
  { id: 1, title: "Elektronik" },
  { id: 2, title: "Yiyecek" },
  { id: 3, title: "Fatura" },
  { id: 4, title: "Kişisel" },
  { id: 5, title: "Yakıt" },
];
//let categoriesId = Categories.length;

export const findCategory = (categoryId) => {
  for (let index = 0; index < Categories.length; index++) {
    if (Categories[index].id === parseInt(categoryId)) {
      return Categories[index];
    }
  }
  return null;
};
