export default function handle({ query: { id } }, res) {
  const { articles } = require("../../../data/drupal.js");
  const match = articles.filter((each) => {
    return parseInt(each.id) == parseInt(id);
  });
  if (match && "length" in match && match.length > 0) {
    res.status(200).json(match[0]);
  } else {
    return res.status(404).json("Article is not found.");
  }
}
