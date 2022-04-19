export const filteringAnArray = (array, filterString) => {
  return array.filter((arrayElement) => {
    return (
      arrayElement.title.toLowerCase().includes(filterString.toLowerCase()) ||
      arrayElement.brand.toLowerCase().includes(filterString.toLowerCase())
    );
  });
};
