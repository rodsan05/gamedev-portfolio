(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"000e":function(e,t,a){"use strict";a.r(t);var n=a("8056"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"0224":function(e,t,a){},"17ab":function(e,t,a){},"1ba2":function(e,t,a){"use strict";a.r(t);var n=a("c53f"),i=a("000e");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("32eb");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"f784f3ae",null);t["default"]=o.exports},"1e66":function(e,t,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"1e67":function(e,t,a){},"27bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},i=[],r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},o=[],l=r["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),c=l,d=(a("1e66"),a("2877")),p=Object(d["a"])(c,s,o,!1,null,"e66acff8",null),u=p.exports,h=r["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),g=h,v=(a("5935"),Object(d["a"])(g,n,i,!1,null,"190958aa",null));t["a"]=v.exports},"32eb":function(e,t,a){"use strict";var n=a("1e67"),i=a.n(n);i.a},"39eb":function(e,t,a){"use strict";var n=a("0224"),i=a.n(n);i.a},"416f":function(e,t,a){},"4d97":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are various projects I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],r=a("2b0e"),s=a("27bb"),o=a("983d"),l=[new o["a"]("project-2","Vanguard Music","img/projects/project-2-icon.png",'\n    <div class="paragraph">\n        <strong>Vanguard Music</strong> is an AI-driven tool for composing video game music.\n        <br/></br>It is part of a bachelor\'s degree final project, aiming to simplify music composition for users with little to no musical knowledge. \n        Using generative AI and various heuristics, Vanguard Music creates adaptive compositions that can fit different themes. \n        The tool adjusts instruments and arrangements, producing music suitable for interactive and evolving game environments.</a>\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/hB6-ShmxmYs?si=Vf-gPc7w6BcvdSV_" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>AI-driven melody composer</li>\n        <li>Heurisctic-based harmonizer</li>\n        <li>Percusion presets and styles</li>\n        <li>Different tematics</li>\n        <li>Automatic arragement in REAPER</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/miggon23/TFG_AsistenteComposicionConIA" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    \x3c!-- <div class="paragraph center">\n    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />\n    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />\n    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />\n    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />\n    </div> --\x3e\n    ',"#5a78af"),new o["a"]("project-3","Separity","img/projects/project-3-icon.png",'\n    <div class="paragraph">\n        <strong>Separity</strong>   is a data-driven 3D video game engine developed in C++.\n        <br/><br/>Separity is composed of various sub-engines that leverage different libraries, including:\n        <ul>\n            <li>Bullet3D for physics</li>\n            <li>Ogre for graphics</li>\n            <li>OgreOverlay for UI</li>\n            <li>SDL for input handling</li>\n            <li>Luabridge for scripting and scene creation</li>\n            <li>FMOD for audio</li>\n        </ul>\n        </a>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>A scripting engine integrated with Luabridge, allowing users to create scripts for game objects entirely in Lua. \n        The script structure is similar to Unity\'s MonoBehaviour.</li>\n        <li>Fully data-driven architecture, with Lua used to define both scenes and scripts.</li>\n        <li>Support for 3D models and animations exported directly from Blender, along with integration for using Blender as a scene editor.</li>\n        <li>Customizable 3D physics and collision handling.</li>\n        <li>Support for keyboard and controller input.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Source code is available on <a href="https://github.com/XupappInc/Separity" target="_blank">GitHub</a>.\n        </div>\n    </div>\n    ',"#383838"),new o["a"]("project-4","Crazy U","img/projects/project-4-icon.png",'\n    <div class="paragraph">\n    <strong>Crazy U</strong>is a 3D arcade driving video game inspired by Crazy Taxi. \n    In Crazy U, players take on the role of a bus driver navigating through Ciudad Universitaria in Madrid. \n    The objective is to pick up passengers at various bus stops and drop them off at the next stop before time runs out.\n    <br/><br/>The game is developed using the Separity game engine, utilizing both C++ and Lua.</a>\n    </div>\n\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/YhjGVR6Uz1E?si=I0DKITzdQpZiBcuP" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://sebana.itch.io/crazyu" target="_blank">itch.io</a>.\n        Source code is available on <a href="https://github.com/XupappInc/CrazyU" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/CrazyU/crazyULogo.png" alt="Crazy U Logo" />\n        <img class="pc-screenshot" src="img/projects/CrazyU/crazyUScreenshot.png" alt="Crazy U Screenshot" />\n    </div>\n    ',"#f7233f"),new o["a"]("project-5","Destino Rojo","img/projects/project-5-icon.png",'\n    <div class="paragraph">\n        <strong>Destino Rojo</strong> is a first person 3D escape room game developed in Unity. <br/><br/>In Destino Rojo, players must solve a series \n        of puzzles and interact with items scattered throughout each room to achieve the objective, which changes with each level.<br/><br/> \n        Destino Rojo was developed for the 2024 <a href="https://itch.io/jam/comjamon2024" target="_blank">ComJamOn</a>.\n        </a>\n    </div>\n\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/c9rDMGRyfJM?si=rdHreZ6S2hwAruQZ" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://paula-morillas-alonso.itch.io/destinorojo" target="_blank">itch.io</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/DestinoRojo/destinoRojoScreenshot2.png" alt="Destino Rojo Screenshot" />\n        <img class="pc-screenshot" src="img/projects/DestinoRojo/destinoRojoScreenshot3.png" alt="Destino Rojo Screenshot" />\n    </div>',"#e48246"),new o["a"]("project-6","Verdant Sorrow","img/projects/project-6-icon.png",'\n        <div class="paragraph">\n        <strong>Verdant Sorrow</strong> is a 2D action game where players face off against a series of powerful enemies in a boss rush format. \n        The goal is to defeat each boss and restore the primordial essences in order to save the world.\n        <br/><br/>The game is developed in C++ using the SDL2 library.</a>\n        </div>\n    \n        <div class="paragraph center">\n            <iframe class="youtube" src="https://www.youtube.com/embed/p7Zeqp_8Kdk?si=GfKXCRy2HtT6WETe" frameborder="0" allowfullscreen></iframe>\n        </div>\n    \n        <div class="paragraph">\n            <div class="notice">\n            Windows build available on <a href="https://xuppap-inc.github.io/VerdantSorrow/" target="_blank">the official webpage</a>.\n            Source code is available on <a href="https://github.com/XupappInc/CrazyU" target="_blank">GitHub</a>.\n            </div>\n        </div>\n    \n        <div class="paragraph center">\n            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot.png" alt="Verdant Sorrow Screenshot" />\n            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot3.png" alt="Verdant Sorrow Screenshot" />\n            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot5.png" alt="Verdant Sorrow Screenshot" />\n            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot4.png" alt="Verdant Sorrow Screenshot" />\n        </div>\n        ',"#5e2782")],c=r["a"].extend({name:"GameProjects",components:{ProjectsList:s["a"]},data:function(){return{projects:l}}}),d=c,p=a("2877"),u=Object(p["a"])(d,n,i,!1,null,null,null);t["default"]=u.exports},5935:function(e,t,a){"use strict";var n=a("416f"),i=a.n(n);i.a},"67f3":function(e,t,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"7c58":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],r=a("2b0e"),s=a("27bb"),o=a("983d"),l=[new o["a"]("project-6","Sultans Of Sing","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.\n            </div>\n            <div class="paragraph center">\n              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Some stuff</li>\n            <li>Some great stuff</li>\n            <li>More awesome stuff</li>\n            <li>And then some</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> \n        </div>\n    ',"#c10606",!1,!0),new o["a"]("project-7","Drew Blood","img/projects/project-7-icon.png",'\n    <div class="paragraph">\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> \n            </div>',"#1ca1e2"),new o["a"]("project-8","The Art of Walking","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n          </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n            </div>'),new o["a"]("project-9","Nikolable","img/projects/project-9-icon.png",'\n     <div class="paragraph">\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>')],c=r["a"].extend({name:"OtherProjects",components:{ProjectsList:s["a"]},data:function(){return{projects:l}}}),d=c,p=a("2877"),u=Object(p["a"])(d,n,i,!1,null,null,null);t["default"]=u.exports},8056:function(e,t){},"8cdb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},i=[],r=(a("67f3"),a("2877")),s={},o=Object(r["a"])(s,n,i,!1,null,"c64612d2",null);t["default"]=o.exports},"983d":function(e,t,a){"use strict";var n=function(){function e(e,t,a,n,i,r,s){void 0===i&&(i="#000000"),void 0===r&&(r=!1),void 0===s&&(s=!1),this.id=e,this.name=t,this.htmlDescription=n,this.iconUrl=a,this.isHigh=r,this.isWide=s,this.accentColor=i}return e}();t["a"]=n},a00a:function(e,t,a){"use strict";var n=a("17ab"),i=a.n(n);i.a},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Contact information")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm currently searching for a job."),a("br"),e._v("Feel free to contact me about any opportunity.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:rodsan2602@gmail.com",target:"_blank"}},[e._v("rodsan2602@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/rodrigo-sanchez-torres/",target:"_blank"}},[e._v("linkedin.com/in/rodrigo-sanchez-torres")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/rodsan05",target:"_blank"}},[e._v("github.com/rodsan05")])])])])}],r=(a("a00a"),a("2877")),s={},o=Object(r["a"])(s,n,i,!1,null,"6d56c693",null);t["default"]=o.exports},c53f:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" I'm a graduate with a Bachelor's Degree in Video Game Development from the Complutense University of Madrid. "),a("br"),e._v("I did and intership for 4 months as an Unity Developer, working mainly on VR and AR experiences. "),a("br"),a("br"),e._v("Right now I'm looking for a job so if you have any opportunity feel free to "),a("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(". "),e._m(0)],1),a("div",{staticStyle:{clear:"both"}}),e._m(1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"d/CV_RodrigoSanchez_eng.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF")]),a("a",{staticClass:"download-link",attrs:{href:"d/CV_RodrigoSanchez_spa.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Descargar en PDF")]),a("div",{staticStyle:{clear:"both"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"full-content"},[a("h2",[e._v("Work experience")]),a("h3",[e._v("Unity Developer - Artax Games")]),a("h4",[e._v("October 2024 - Present")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("I develop various gameplay functionalities in C# for company projects. Also including: "),a("ul",[a("li",[e._v("Integrate SFX into the project and facilitate communication between the audio team using FMOD and the Unity programming team.")]),a("li",[e._v("Integrate various assets such as animations, UI, and VFX.")]),a("li",[e._v("Implemented a real-time gameplay cinematic system with configurable camera transitions.")])])]),a("h3",[e._v("Unity Developer - Role Productions")]),a("h4",[e._v("May 2023 - August 2023")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("I developed and collaborated on various Augmented Reality and Virtual Reality projects for the company. Highlights include:")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("A Virtual Reality kayaking experience. "),a("ul",[a("li",[e._v("Refactored existing code developed by a third party, achieving a well-organized class structure. I applied software architecture principles and design patterns to do so.")]),a("li",[e._v("Conducted QA testing with the project's funding entity, adapting the experience and improving user experience.")]),a("li",[e._v("Optimized the performance of the experience for Meta Quest 2, increasing the frame rate to 60 FPS. This was done in collaboration with the art team and using Unity and Meta debugging tools. - Created a tool that allowed editing all in-game text from an Excel sheet by converting it to JSON format.")]),a("li",[e._v("Created a tool that allowed editing all in-game text from an Excel sheet by converting it to JSON format.")]),a("li",[e._v("Prepared documentation on the project structure.")])])]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("Other Augmented Reality and Virtual Reality experiences: "),a("ul",[a("li",[e._v("Designed the project structures, keeping them clear and organized.")]),a("li",[e._v("Conducted documentation and research on various technologies to meet the specific needs of each project.")])])]),a("div",{staticClass:"tech-stack"},[e._v("Unity, C#, JSON")]),a("h2",[e._v("Skills")]),a("div",{staticClass:"skill-set"},[a("h3",[e._v("Languages")]),a("div",{staticClass:"skill"},[e._v("C++")]),a("div",{staticClass:"skill"},[e._v("C#")]),a("div",{staticClass:"skill"},[e._v("Python")]),a("div",{staticClass:"skill"},[e._v("Java")]),a("div",{staticClass:"skill"},[e._v("JavaScript")])]),a("div",{staticClass:"skill-set"},[a("h3",[e._v("Tools & Frameworks")]),a("div",{staticClass:"skill"},[e._v("Visual Studio")]),a("div",{staticClass:"skill"},[e._v("Android Studio")]),a("div",{staticClass:"skill"},[e._v("Eclipse")]),a("div",{staticClass:"skill"},[e._v("Unity")]),a("div",{staticClass:"skill"},[e._v("UWP")]),a("div",{staticClass:"skill"},[e._v("GIT")]),a("div",{staticClass:"skill"},[e._v("Blender")])]),a("div",{staticStyle:{clear:"both"}}),a("h2",[e._v("Education")]),a("h3",[e._v("Bachelor's Degree in Video Game Development - 2024")]),a("h4",[e._v("Complutense University of Madrid")]),a("h2",[e._v("Languages")]),a("h3",[e._v("Spanish")]),a("div",[e._v("Native")]),a("h3",[e._v("English")]),a("div",[e._v("B2 level, currently preparing C1")]),a("h3",[e._v("Japanese")]),a("div",[e._v("A1 level")])])}]},dec8:function(e,t,a){},ee3f:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[e._v("Hello!")]),a("div",{staticClass:"paragraph"},[e._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("I have experience working on "),a("router-link",{attrs:{to:"/game-projects"}},[e._v("projects")]),e._v(" ranging from video games to generative AI and various tools")],1),a("div",{staticStyle:{"margin-top":"40px"}},[e._v("I'm "),a("strong",[e._v("currently looking for a job")]),e._v(" as a programmer. Feel free to reach out to me at "),a("a",{attrs:{href:"mailto:rodsan2602@gmail.com"}},[e._v("rodsan2602@gmail.com")]),e._v(" or "),a("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" I'm Rodrigo Sánchez Torres, a programmer with a Bachelor’s Degree in Video Game Development from the Complutense University of Madrid."),a("br"),e._v(" I'm well-versed in programming languages such as C++, C#, Python, and Java. ")])}],r=(a("39eb"),a("2877")),s={},o=Object(r["a"])(s,n,i,!1,null,"4a3d8fc6",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.8c0f2a34.js.map