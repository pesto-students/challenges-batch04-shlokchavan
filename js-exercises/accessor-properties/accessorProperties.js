const binaryRadix = 2;
const deciamlRadix = 10;

const accessorProperties = () => ({
  storedNumber: null,
  get number() {
    return this.storedNumber;
  },
  set number(value) {
    this.storedNumber = Number(parseInt(value, deciamlRadix).toString(binaryRadix));
  },
});

export {
  accessorProperties,
};
