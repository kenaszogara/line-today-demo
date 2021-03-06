import axios from "axios";

export default (req, res) => {
  axios
    .get(`https://today.line.me/id/portaljson`)
    .then((response) => {
      console.log(response.data.message);
      if (response.data.code == 200) {
        const categoryList = response.data.result.categoryList;
        res.send({ categoryList });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
