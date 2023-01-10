/**
 * @param callback Method to call.
 * @param delay Delay in ms.
 */
 export function debounce(callback, delay) {
  let timeoutId= null;

  return () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
}
