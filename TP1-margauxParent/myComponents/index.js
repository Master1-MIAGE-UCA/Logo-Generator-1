const getBaseURL = () => {
  return new URL('.', import.meta.url);
};

//https://source.unsplash.com/1600x900/?restaurant

class MyLogo extends HTMLElement {
  
  style = `
    .rotate-scale-down-diag-1 {
      -webkit-animation: rotate-scale-down-diag-1 5s linear infinite both;
              animation: rotate-scale-down-diag-1 5s linear infinite both;
    }

    .pulsate-bck {
      -webkit-animation: pulsate-bck 0.5s ease-in-out infinite both;
              animation: pulsate-bck 0.5s ease-in-out infinite both;
    }

    .shake-horizontal {
      -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
              animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
    }

    .bounce-in-bck {
      -webkit-animation: bounce-in-bck 1.1s infinite both;
              animation: bounce-in-bck 1.1s infinite both;
    }

    .roll-in-blurred-top {
      -webkit-animation: roll-in-blurred-top 4s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite both;
              animation: roll-in-blurred-top 4s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite both;
    }

    /* ----------------------------------------------
    * Generated by Animista on 2021-9-20 22:6:26
    * Licensed under FreeBSD License.
    * See http://animista.net/license for more info. 
    * w: http://animista.net, t: @cssanimista
    * ---------------------------------------------- */
   
   /**
    * ----------------------------------------
    * animation rotate-scale-down-diag-1
    * ----------------------------------------
    */
   @-webkit-keyframes rotate-scale-down-diag-1 {
     0% {
       -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
               transform: scale(1) rotate3d(1, 1, 0, 0deg);
     }
     50% {
       -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
               transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
     }
     100% {
       -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
               transform: scale(1) rotate3d(1, 1, 0, -360deg);
     }
   }
   @keyframes rotate-scale-down-diag-1 {
     0% {
       -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
               transform: scale(1) rotate3d(1, 1, 0, 0deg);
     }
     50% {
       -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
               transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
     }
     100% {
       -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
               transform: scale(1) rotate3d(1, 1, 0, -360deg);
     }
   }

   /* ----------------------------------------------
 * Generated by Animista on 2021-9-26 20:48:38
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bg-pan-top
 * ----------------------------------------
 */
@-webkit-keyframes bg-pan-top {
  0% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
@keyframes bg-pan-top {
  0% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-26 20:51:14
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation pulsate-bck
 * ----------------------------------------
 */
@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-26 20:51:14
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation pulsate-bck
 * ----------------------------------------
 */
@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-26 20:54:10
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-in-bck
 * ----------------------------------------
 */
@-webkit-keyframes bounce-in-bck {
  0% {
    -webkit-transform: scale(7);
            transform: scale(7);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: scale(1.24);
            transform: scale(1.24);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  89% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: scale(1.04);
            transform: scale(1.04);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-bck {
  0% {
    -webkit-transform: scale(7);
            transform: scale(7);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: scale(1.24);
            transform: scale(1.24);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  89% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: scale(1.04);
            transform: scale(1.04);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-26 20:55:26
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation roll-in-blurred-top
 * ----------------------------------------
 */
@-webkit-keyframes roll-in-blurred-top {
  0% {
    -webkit-transform: translateY(-800px) rotate(-720deg);
            transform: translateY(-800px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotate(0deg);
            transform: translateY(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-top {
  0% {
    -webkit-transform: translateY(-800px) rotate(-720deg);
            transform: translateY(-800px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotate(0deg);
            transform: translateY(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-26 21:14:33
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
   
    #logo {
        color:red;
        font-family: 'Grey Qo', cursive;
        font-size: 40px;
        border: 5px solid black;
        text-align: center;
        writing-mode: ;
        text-orientation: upright;
        font-style: normal;
        font-weight: normal;
        text-shadow: ;
        font-family: serif;
        <!--background-image: url("https://source.unsplash.com/1600x900/?restaurant");-->
        opacity: 1;
        width: 500px;
        border-radius: 150px;
        background:pink;
    }

    .container{
      display:flex;
      justify-content:space-between;
      width:1000px;
      height:1000px;
    }

    .param{
      width:1000px;
      height:1000px;
      border: 5px solid black;
      text-align: center;
    }

    .espace{
      width:200px;
      height:1000px;
    }

    .logo-aff{
      width:700px;
      height:600px;
      background-position: center;
    }

    #header{
      text-align : center;
    }

    `;

  html = `
    
    <div id="header">
      Maquer le controle des paramètres du logo :   
      <input type="button" id="masquerParam" value="Masquer les paramètres" class="btnHeader"/> (ne fonctionne pas)
      <br><br><br>
    </div>

    <div class="container">

      <div class="param">

        <br>
        Titre de votre logo : <input type="texte" id="selecteurText">

        <br><br>
        Ajouter un slogan : <input type="texte" id="selecteurSlogan">
        
        <br><br>
        Position top : 0 <input type="range" val=0 min=0 max=200 id="selecteurPositionTop"> 200
        <br><br>
        Position left : 0 <input type="range" val=0 min=0 max=200 id="selecteurPositionLeft"> 200

        <br><br>
        Position :
        <input type="radio" value="Gauche" class="position" name="pos">Gauche
        <input type="radio" value="Centre" class="position" name="pos" checked>Centre
        <input type="radio" value="Droite" class="position" name="pos">Droite
        
        <br><br>
        Hauteur : 0 <input type="range" val=0 min=0 max=200 id="selecteurHeight"> 200
        <br><br>
        Largeur : 0 <input type="range" val=0 min=0 max=200 id="selecteurWidth"> 200
        <br><br>
        Radius : 0 <input type="range" val=0 min=0 max=200 id="selecteurRadius"> 200

        <br><br>
        Transparence du texte : 0 <input type="range" val=1 min=0 max=1 step=0.1 id="selecteurOpacity"> 1

        <br><br>
        Orientation du logo :
        <input type="radio" value="Horizontal" class="selecteurOrientation" name="orientation" checked>Horizontal
        <input type="radio" value="Vertical" class="selecteurOrientation" name="orientation">Vertical
        
        <br><br>
        Couleur du texte : <input type="color" id="selecteurCouleur">
        
        <br><br>
        Italique :
        <input type="button" value="Non-italique" class="selecteurItalique">
        <input type="button" value="Italique" class="selecteurItalique">
        
        <br><br>
        Gras :
        <input type="button" value="Non-gras" class="selecteurGras">
        <input type="button" value="Gras" class="selecteurGras">
        
        <br><br>
        Ombrage :
        <input type="button" value="Non-ombré" class="selecteurOmbre">
        <input type="button" value="Ombré" class="selecteurOmbre">

        <br>
        <br>
        <label for="police-select">Changer de police : </label>
        <select name="police" id="police-select">
        <option value="">--Choisir une option--</option>
        <option value="arial">Arial</option>
        <option value="calibri">Calibri</option>
        <option value="fantasy">Fantasy</option>
        <option value="serif">Serif</option>
        </select>

        <br><br>
        <label for="anim-select">Changer d'animation : </label>
        <select name="animation" id="anim-select">
            <option value="">--Choisir une option--</option>
            <option value="">Aucune</option>
            <option value="anim1">Rotate scale down diag</option>
            <option value="anim2">Pulsate bck</option>
            <option value="anim3">Shake horizontal</option>
            <option value="anim4">Bounce in bck</option>
            <option value="anim5">Roll in blurred top</option>
        </select>

        <br><br>
        Taille du logo : 5 <input type="range" val=40 min=5 max=100 id="selecteurTaille"> 100

        <br><br>
        EN COURS (NE MARCHE PAS) :
        <br><br>
        <!--<input type="file" name="backpicture" id="loadpicture" value="">
        <label for="avatar">Choose a picture:</label>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">-->
        <input type="file" name="backpicture" id="loadpicture" value="">

        <br><br>
        Couleur du fond : <input type="color" id="selecteurCouleurFond">
        <br><br>
        Couleur de la bordure : <input type="color" id="selecteurCouleurB">

      </div>

      <div class="espace"></div>

      <div class="logo-aff">
        <div id="logo">
        <div id="title">nom du logo</div>
        <div id="slogan"></div>
        </div>
      </div>

    </div>
    `;

  constructor() {
    super();
    // On crée le "shadow DOM"
    this.attachShadow({ mode: "open" });

    // récupérer les propriétés/attributs HTML
    this.couleur = this.getAttribute("couleur");
    if (!this.couleur) this.couleur = "black";

    this.text = this.getAttribute("text");
    this.slogan = this.getAttribute("slogan");
    this.animationClass = this.getAttribute("animation");
    this.controls = this.getAttribute("controls");
    this.size = this.getAttribute("size");
    this.background = this.getAttribute("background");
  }

  connectedCallback() {
    // ici on instancie l'interface graphique etc.
    this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;

    this.logo = this.shadowRoot.querySelector("#logo");
    this.title = this.shadowRoot.querySelector("#title");

    // affecter les valeurs des attributs à la création
    this.logo.style.color = this.couleur;
    this.logo.style.background = this.background;
    this.logo.classList.add(this.animationClass);

    this.declareEcouteurs();

    // On modifie les URLs relatifs
    this.fixRelativeURLs();
  }

  fixRelativeURLs() {
    let images = this.shadowRoot.querySelectorAll('img');
    images.forEach((e) => {
      console.log("dans le foreach")
      let imagePath = e.getAttribute('src');
      e.src = getBaseURL() + '/' + imagePath;
    });

    //console.log(getBaseURL() +  "images/flammes.jpg")
    //this.logo.style.background = "url(" + getBaseURL() + "images/rose.jpg)";

  }

  declareEcouteurs() {
    this.shadowRoot.querySelector("#selecteurCouleur")
      .addEventListener("input", (event) => {
        this.changeCouleur(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurCouleurFond")
      .addEventListener("input", (event) => {
        this.changeCouleurFond(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurTaille")
      .addEventListener("input", (event) => {
        this.changeSize(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurText")
      .addEventListener("input", (event) => {
        this.changeText(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurSlogan")
      .addEventListener("input", (event) => {
        this.changeSlogan(event.target.value);
    });

    this.shadowRoot.querySelector("#masquerParam")
      .addEventListener("click", (event) => {
          this.masquerParam();
    });

    this.shadowRoot.querySelectorAll(".position").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changePosition(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelectorAll(".selecteurOrientation").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changeOrientation(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelectorAll(".selecteurItalique").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changeFont(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelectorAll(".selecteurGras").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changeFontBis(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelectorAll(".selecteurOmbre").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changeOmbre(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelectorAll("#police-select").forEach(
      (element) => {
        element.addEventListener("click", (event) => {
          this.changePolice(event.target.value);
        });
      }
    )

    this.shadowRoot.querySelector("#anim-select")
    .addEventListener("click", (event) => {
        this.changeAnimation(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurPositionTop")
      .addEventListener("input", (event) => {
        this.changeTop(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurPositionLeft")
      .addEventListener("input", (event) => {
        this.changeLeft(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurHeight")
      .addEventListener("input", (event) => {
        this.changeHeight(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurWidth")
      .addEventListener("input", (event) => {
        this.changeWidth(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurOpacity")
      .addEventListener("input", (event) => {
        this.changeOpacity(event.target.value);
    });

    this.shadowRoot.querySelector("#selecteurRadius")
      .addEventListener("input", (event) => {
        this.changeRadius(event.target.value);
    });

  }

  //---------------Toutes les fonctions---------------
  changeCouleur(val) {
    this.logo.style.color = val;
  }

  changeCouleurFond(val) {
    this.shadowRoot.querySelector("#logo").background = val;
  }

  changeSize(val) {
    this.logo.style.fontSize = val + "px";
  }

  changeText(val) {
    this.shadowRoot.querySelector("#title").textContent = val;
  }

  changePolice(val) {
    this.logo.style.fontFamily = val;
  }

  changeSlogan(val) {
    this.shadowRoot.querySelector("#slogan").textContent = val;
  }

  changeAnimation(val) {
    if (val == "anim1") {
        console.log("anim1 déclenchée");
        this.shadowRoot.querySelector("#logo").className = "";
        this.setAttribute("animation", "rotate-scale-down-diag-1")
        this.shadowRoot.querySelector("#logo").className = "rotate-scale-down-diag-1";

    }
    else if (val == "anim2") {
        console.log("anim2 déclenchée");
        this.shadowRoot.querySelector("#logo").className = "";
        this.setAttribute("animation", "pulsate-bck")
        this.shadowRoot.querySelector("#logo").className = "pulsate-bck";
    }
    else if (val == "anim3") {
        console.log("anim3 déclenchée");
        this.shadowRoot.querySelector("#logo").className = "";
        this.setAttribute("animation", "shake-horizontal")
        this.shadowRoot.querySelector("#logo").className = "shake-horizontal";
    }
    else if (val == "anim4") {
        console.log("anim4 déclenchée");
        this.shadowRoot.querySelector("#logo").className = "";
        this.setAttribute("animation", "bounce-in-bck")
        this.shadowRoot.querySelector("#logo").className = "bounce-in-bck";
    }
    else if (val == "anim5") {
        console.log("anim5 déclenchée");
        this.shadowRoot.querySelector("#logo").className = "";
        this.setAttribute("animation", "roll-in-blurred-top")
        this.shadowRoot.querySelector("#logo").className = "roll-in-blurred-top";
    }
}

  changePosition(val) {
    if (val === 'Gauche') {
      this.logo.style.textAlign = "start";
    }
    else if (val === 'Centre') {
      this.logo.style.textAlign = "center";
    }
    else if (val === 'Droite') {
      this.logo.style.textAlign = "end";
    }
  }

  changeOrientation(val) {
    if (val === 'Vertical') {
      this.logo.style.writingMode = "vertical-rl";
    }
    else {
      this.logo.style.writingMode = "";
    }
  }

  changeFont(val) {
    if (val === 'Italique') {
      this.logo.style.fontStyle = "italic";
    }
    else {
      this.logo.style.fontStyle = "normal";
    }
  }

  changeFontBis(val) {
    if (val === 'Gras') {
      this.logo.style.fontWeight = "bold";
    }
    else {
      this.logo.style.fontWeight = "normal";
    }
  }

  changeOmbre(val) {
    if (val === 'Ombré') {
      this.logo.style.textShadow = "black 0.1em 0.1em 0.2em";
    }
    else {
      this.logo.style.textShadow = "";
    }
  }

  changeTop(val) {
    console.log(val);
    this.logo.style.position = "relative";
    this.logo.style.top = val + "px";
  }

  changeLeft(val) {
    this.logo.style.position = "relative";
    this.logo.style.left = val + "px";
  }

  changeHeight(val) {
    this.logo.style.height = val + "px";
  }

  changeWidth(val) {
    //console.log(val);
    this.logo.style.width = val + "%";
  }

  changeOpacity(val) {
    this.logo.style.opacity = val;
  }

  changeRadius(val) {
    console.log(val);
    this.logo.style.borderRadius = val + "%";
  }

}

customElements.define("my-logo", MyLogo);
