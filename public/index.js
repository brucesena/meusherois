var codes = new Map([['spider', 1009610], ['iron', 1009368], ['hulk', 1009351]]);

function getHero(id) {
   try {
      $.getJSON("/api/hero/" + codes.get(id), function (ret) {


         if (ret.erro) {
            throw new Error('Problemas ao acessar a API');
         }
         var divAtual = document.getElementById(id + 'Desc');
         var h = document.createElement("H2");
         var t = document.createTextNode(ret.data.name);
         var p = document.createElement('p');
         var texto = document.createTextNode(ret.data.description);

         divAtual.innerHTML = "";

         h.appendChild(t);
         p.appendChild(texto);

         divAtual.appendChild(h);
         divAtual.appendChild(p);



      });
   } catch (err) {
      alert(err.message);
   }
}

function getStories(id) {
   $.getJSON("/api/stories/" + codes.get(id), function (ret) {
      try {

         if (ret.erro) {
            throw new Error('Problemas ao acessar a API');
         }
         var divAtual = document.getElementById(id + 'Stories');
         var novoUl = document.createElement('ul');

         var h = document.createElement("H3");
         var t = document.createTextNode('Stories');
         divAtual.innerHTML = "";
         h.appendChild(t);
         divAtual.appendChild(h);

         novoUl.class = 'list-group';
         divAtual.appendChild(novoUl);
         ret.data.forEach(element => {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(element.name);
            node.class = "list-group-item";
            node.appendChild(textnode);
            novoUl.appendChild(node);
         });
      } catch (err) {
         alert(err.message);
      }
   });
}

document.getElementById('tabSpider').onclick = function () {
   getHero('spider');
   getStories('spider');
}

document.getElementById('tabIron').onclick = function () {
   getHero('iron');
   getStories('iron');
}

document.getElementById('tabHulk').onclick = function () {
   getHero('hulk');
   getStories('hulk');
}

$(document).ready(function () {
   getHero('spider');
   getStories('spider');
});