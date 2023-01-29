/* Function that takes in [key] and returns [value] stored against that key from local storage
 * @param  {} key
 * @returns value of key from local storage
 */
const getValueFromLS = (key) => {
  return localStorage.getItem(key);
};

/**
 * Function that takes in [key] and [value] then stores them to local storage
 * @param  {} key
 * @param  {} value
 */
const setValueToLS = (key, value) => {
  try {
    console.log("Setting value to ls", key, value);
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error storing data in localStorage: ", err);
  }
};

export { getValueFromLS, setValueToLS };
