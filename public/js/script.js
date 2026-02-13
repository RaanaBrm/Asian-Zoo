const hambugerMenu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector("nav");
hambugerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded",() => {
  const welcomeView = document.getElementById("welcome-view");
  const detailsView = document.getElementById("details-view");
  const backButton = document.getElementById("back-button");
  const animalLinks = document.querySelectorAll(".sidebar a")

  if(welcomeView && detailsView){

    function updateDetailsView(animal){

      document.getElementById("det-name").textContent = animal.name;
      document.getElementById("det-type").textContent = animal.type;
      document.getElementById("det-size").textContent = animal.size;
      document.getElementById("det-weight").textContent = animal.weight;
      document.getElementById("det-food").textContent = animal.food;
      document.getElementById("det-description").textContent = animal.description;

      const img = document.getElementById("det-image");
      if(img){
       img.src  = `/images/${animal.image}`;
       img.alt = animal.name;
      }

      welcomeView.classList.add("hidden");
      detailsView.classList.remove("hidden");
    }

    animalLinks.forEach(link => {
      link.addEventListener("click",(e)=> {
        const url = new URL(link.href,window.location.origin);
        const animalId = url.searchParams.get("id");

        if(animalId && typeof animalData !== 'undefined'){
        const animal = animalData.find(a => a.id === animalId);

        if(animal){
          e.preventDefault();
          updateDetailsView(animal);  
        }
      }
    });
  });

  if(backButton) {
    backButton.addEventListener("click",() => {
      detailsView.classList.add("hidden");
      welcomeView.classList.remove("hidden");
    });
  }

}

});