import axios from "axios";

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

const obtenerBebidas = async () => {
  try {
    const { data } = await axios.get(URL);
    const { drinks } = data;
    return drinks;
  } catch (error) {
    console.log(error);
  }
};

export { obtenerBebidas };
