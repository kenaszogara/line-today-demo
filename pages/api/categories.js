import axios from "axios";

export default (req, res) => {
  axios
    .get(`https://today.line.me/id/portaljson`)
    .then((response) => {
      console.log(response.data.message);
      if (response.data.code == 200) {
        const categories = response.data.result.categories;
        res.status(200).json({ categories });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
