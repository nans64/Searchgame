import PageList from "./PageList";

const PlatformSelect = (argument, developer) => {
  let select = document.querySelector("#selectplatform");
  select.innerHTML = `
  <form class="col-md-3 justify-content-start ml-1 mt-5 mb-5 row">
  <select
    id="platform-choice"
    name="platform-choice"
    class="form-control"
  >
    <option value="">Plateform</option>
    <option value="4">PC</option>
    <option value="18">PlayStation 4</option>
    <option value="1">Xbox One</option>
    <option value="3">iOS</option>
    <option value="21">Android</option
    ><option value="5">macOS</option
    ><option value="6">Linux</option
    ><option value="7">Nintendo Switch</option
    ><option value="8">Nintendo 3DS</option
    ><option value="9">Nintendo DS</option
    ><option value="13">Nintendo DSi</option
    ><option value="14">Xbox 360</option
    ><option value="80">Xbox</option
    ><option value="16">PlayStation 3</option
    ><option value="15">PlayStation 2"</option
    ><option value="27">PlayStation</option
    ><option value="19">PS Vita</option
    ><option value="17">PSP</option
    ><option value="10">Wii U</option
    ><option value="11">Wii</option
    ><option value="105">GameCube</option
    ><option value="84">Nintendo 64</option
    ><option value="24">Game Boy Advance</option
    ><option value="26">Game Boy</option>
  </select>
  </form>
      `;

  const platformChoice = document.querySelector("#platform-choice");

  platformChoice.addEventListener("change", (event) => {
    let platform = platformChoice.value;
    PageList(argument, platform, developer);
  });
};
export default PlatformSelect;
