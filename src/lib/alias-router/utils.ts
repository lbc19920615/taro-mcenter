export const setter = <ValueType>(obj, key, value: ValueType) => {
  const keys = key.split(".");
  const pres = keys.slice(0, -1);
  const last = keys[keys.length - 1];
  const deepObj =
    keys.length === 1
      ? obj
      : pres.reduce((curObj, curKey) => {
          if (!curObj[curKey]) curObj[curKey] = {};
          return curObj[curKey];
        }, obj);
  deepObj[last] = value;
  return obj;
};
