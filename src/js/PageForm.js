import PageList from "./PageList";

const PageForm = (platform, developer) => {
  form.innerHTML = `
    <form id="searchmovie" class="justify-content-end mt-5 mb-5 mr-1 row">
      <div class="input-group col-10 col-md-6 align-self-end">
        <div class="input-group-prepend">
          <div style="background-color: #FFFF;" class="input-group-text">
            <i class="fa fa-search"></i></div>
          </div>
          <input type="text" class="form-control" id="movie-search" placeholder="search Game..">
        </div>
      </div>
      <button id="search-movie" type="submit" class="btn btn-primary">Go</button>
    </form>
        `;

  let button = document.querySelector("#search-movie");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    geturl();
  });

  const geturl = () => {
    let contentSearch = document.querySelector("#movie-search").value;
    PageList(contentSearch, platform, developer);
  };
};

export default PageForm;
