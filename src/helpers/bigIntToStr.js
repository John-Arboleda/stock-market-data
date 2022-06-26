const bigIntToStr = (bigInt) => (
  bigInt > 1000000000000
    ? `$ ${(bigInt / 1000000000000).toFixed(2)} T`
    : `$ ${(bigInt / 1000000000).toFixed(2)} B`
);

export default bigIntToStr;
