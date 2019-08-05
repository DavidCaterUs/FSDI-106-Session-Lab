var catalog = [];

function getCatalog() {

  this.catalog = [{
      title: "first item",
      description: "This is the log description of the item",
      price: 19.99,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png",
      category: "cat 1"
    },

    {
      title: "second item",
      description: "This is the log description of the item",
      price: 19.99,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png",
      category: "cat 1"
    }
  ];

}

function displayCatalog() {
  //get the reference to ul
  var ul = $("#catalog");
  //for every item on the catalog array
  for (let i = 0; i < catalog.length; i++) {
    var item = catalog[i];
//create an LI
    var li =
    `<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
    <h6>${item.price}</h6>
  </div>
</div>`;
    ul.append(li);
  }
}

function init() {
  console.log("Init Catalog Page")

  getCatalog();
  displayCatalog();
}



window.onload = init;
