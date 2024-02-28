export const sortProducts = (productsData, value) => {
  const sortedProducts = [...productsData];
  
  switch (value) {
    case 'priceLowToHigh':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceHighToLow':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'nameAToZ':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'nameZToA':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return sortedProducts;
}
