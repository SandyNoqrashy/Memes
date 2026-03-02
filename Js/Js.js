let input = document.querySelector("input");
let btnShow = document.querySelector("button");
let myMeme = document.querySelector(".mymeme");

btnShow.addEventListener("click", () => {
  let show = input.value;
  if (show >= 0 && show < 100)
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => {
        let { name, url } = data.data.memes[show];
        myMeme.innerHTML = `
        <h2 class="text-danger">${name}</h2>
    <div class="mx-auto border rounded p-3 text-center "  style="max-width: 400px; max-height: 450px; " >
    <img src="${url}"class="img-fluid" style="max-height:300px; object-fit:contain;" >
    </div>
    `;
   

      });
       else{
        myMeme.innerHTML=`<h2 class="text-danger">Please Enter Valid Number</h2>`
    }
});
