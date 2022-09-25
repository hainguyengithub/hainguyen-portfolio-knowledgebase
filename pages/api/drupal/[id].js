import { server } from "config";

export default async function handle({ query: { id } }, res) {
  await fetch(`${server}/drupal.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const match = data.articles.filter((each) => {
        return parseInt(each.id) == parseInt(id);
      });
      if (match && "length" in match && match.length > 0) {
        res.status(200).json(match[0]);
      } else {
        return res.status(404).json("Article is not found.");
      }
    });
}
