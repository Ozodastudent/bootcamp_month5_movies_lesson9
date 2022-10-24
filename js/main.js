const listEl = document.querySelector(".movies_list");

const moviesListFragment = document.createDocumentFragment();

for (const item of kinolar) {
  const moviesTemplate = document
    .querySelector(".movies_template")
    .content.cloneNode(true);
  console.log(moviesTemplate);

  moviesTemplate.querySelector(".movies_title").textContent = item.title;
  moviesTemplate.querySelector(".movies_time").textContent = item.year;
  moviesTemplate.querySelector(".movies_type").textContent =
    item.cast.join(", ");
  moviesTemplate.querySelector(".movies_genre").textContent = item.genres;
  moviesListFragment.appendChild(moviesTemplate);
}
listEl.appendChild(moviesListFragment);
