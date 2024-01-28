/**
 * Hook for consistent fetch handling when receiving JSON
 */
export const useHandleFetch = () => {
  const handleFetch = async (url, options) => {
    return fetch(url, options)
    .then(async resp => {
      const json = await resp.json();
      if (resp.ok) {
        return json;
      } else {
        throw Error(json.message);
      }
    })
    .catch(err => {
      throw err;
    })
  }

  return handleFetch;
}