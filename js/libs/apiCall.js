export const getAPI = async function (url) {
  try {
    let response = await axios.get(url);
    let data = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
