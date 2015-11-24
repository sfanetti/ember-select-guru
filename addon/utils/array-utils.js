export default {
  intersection(first = [], second = []) {
    return first.filter((item) => {
      return second.indexOf(item) !== -1;
    });
  },
  difference(first = [], second = []) {
    let secondSet = new Set(second);
    return first.filter((item) => {
      return !secondSet.has(item);
    });
  }
};
