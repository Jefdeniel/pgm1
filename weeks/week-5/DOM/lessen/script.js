// const paragraphElements = document.getElementsByTagName("p");
// console.log(paragraphElements[0].nodeName);

//  window.onload = function () {
//    var headingElement = document.createElement("h1");
//    var textNode = document.createTextNode("ewazebbie");
//    headingElement.appendChild(headingNode);
//    document.body.appendChild(headingElement)
//  };

const productsElement = document.getElementById("products");
var productsAttrs = productsElement.attributes;
for (var i = 0; i < productsAttrs.length; i++) {
  if (productsAttrs[i].nodeName.toLowerCase() == "border")
    productsElement.border = "1";
}
productsElement.summary = "note: increased border";
console.log(productsElement);
