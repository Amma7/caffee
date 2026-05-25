document.addEventListener("DOMContentLoaded", function(){
     loadPage('snippet/home-snippet.html');
    });
    
    document.querySelectorAll("navbar-toggler").forEach(link => {
        link.addEventListener("click", function(e){
        e.preventDefault();
        const page= this.getAttribute("href");
        loadPage(page);

        if(window.innerWidth < 768){
            const navbarCollapseElemebt = document.getElementById("navbarSupportedContent");
            if(CollapseElement) {
              const bsCollapse = Bootstrap.Collapse.getInstance(navbarCollapseElemebt); 
              bsCollapse.hide();
              }
            }
        });
    });

function loadPage(page){
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "<img src='image/Ajax-loader.gif'>";
    fetch(page)
    .then(response => {
        if(!response.ok) { throw new Error("page not found");
        }
        return response.text();
    })
    .then(Html => {
        mainContent.innerHTML = Html;
    })
    .catch(err => {
        mainContent.innerHTML = "<p> Error:" + err.message + "loading page</p>";
    });

};



// $(function(){
//      $(".navbar-nav a").on("click",function(event){
//         var screenWidth = window.innerWidth;
//         if( window.innerWidth < 768){
//             $("#navbarSupportedContent").collapse('hide');
//         }
//      });
// });
// (function(global){
//     var dc = {};
//     var homeHtml = "snippets/home-snipet.html";

//     var insertHtml = function(selector, Html){
//         var targetElem = document.querySelector(selector);
//         targetElem.innerHtml= Html;
//     };
// var showloading = function (selector){
//     var html = "<div class='text-center'>";
//     html +="<img src='image/Ajax-loader.gif'></div>";
//     insertHtml(selector, html)
// };
// document.addEventListener("DOMContentLoaded", function(event){

//     showloading("#main-content");
//     $ajaxUtils.sendGetRequest(
//         homeHtml,
//         function(responseText){
//             document.querySelector("#main-content")
//             .innerHTML = responseText;
//         },
//        false);
//     }); 
//    glabal.$dc = dc;
// })(window);
