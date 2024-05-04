const fullBlogFilterList = document.querySelector('.full-blog-filter-list');
const nineBlogBtn = document.getElementById('nine');
const fourBlogBtn = document.getElementById('four');
const verticalBlogDeskBtn = document.getElementById('vertical-desk');
const horizontalBlogDeskBtn = document.getElementById('horizontal-desk');
const blogArticlesList = document.querySelector('.blog-articles-list');

fullBlogFilterList.addEventListener('click', e => {
  if (e.target.closest('button') == verticalBlogDeskBtn) {
    blogArticlesList.classList.remove('nine-style');
    nineBlogBtn.classList.remove('active-filter-button');
    fourBlogBtn.classList.remove('active-filter-button');
    horizontalBlogDeskBtn.classList.remove('active-filter-button');
    verticalBlogDeskBtn.classList.add('active-filter-button');
    blogArticlesList.classList.remove('horizontal-style');
  } else if (e.target.closest('button') == horizontalBlogDeskBtn) {
    blogArticlesList.classList.remove('nine-style');
    horizontalBlogDeskBtn.classList.add('active-filter-button');
    verticalBlogDeskBtn.classList.remove('active-filter-button');
    nineBlogBtn.classList.remove('active-filter-button');
    fourBlogBtn.classList.remove('active-filter-button');
    blogArticlesList.classList.add('horizontal-style');
  } else if (e.target.closest('button') == fourBlogBtn) {
    blogArticlesList.classList.remove('nine-style');

    fourBlogBtn.classList.add('active-filter-button');
    blogArticlesList.classList.remove('horizontal-style');
    nineBlogBtn.classList.remove('active-filter-button');
    horizontalBlogDeskBtn.classList.remove('active-filter-button');
    verticalBlogDeskBtn.classList.remove('active-filter-button');
  } else {
    blogArticlesList.classList.remove('horizontal-style');
    nineBlogBtn.classList.add('active-filter-button');
    horizontalBlogDeskBtn.classList.remove('active-filter-button');
    verticalBlogDeskBtn.classList.remove('active-filter-button');
    fourBlogBtn.classList.remove('active-filter-button');
    blogArticlesList.classList.add('nine-style');
  }
});

const showMoreBtn = document.querySelector('.blog-show-more');
const articlesListItems = document.querySelectorAll('.display-none');

showMoreBtn.addEventListener('click', () => {
  articlesListItems[0].classList.remove('display-none');
  articlesListItems[1].classList.remove('display-none');
  articlesListItems[2].classList.remove('display-none');
});
