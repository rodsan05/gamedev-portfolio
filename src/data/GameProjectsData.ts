import ProjectData from '@/data/ProjectData.ts'

export default [
    // new ProjectData("project-1", "Optimistic Chubby", "img/projects/project-1-icon.png", 
    // `
    // <div class="paragraph">
    //  <strong>Optimistic Chubby</strong> is a thing of beauty that I am so proud of. It's available on Android because why not.
    //  <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>.
    // </div>
    // <div class="paragraph center">
    //     <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    // </div>
    // <div class="paragraph center">
    //     <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    // </div>

    // <div class="paragraph">
    //     Main features :
    //     <ul>
    //     <li>Some stuff</li>
    //     <li>Some great stuff</li>
    //     <li>More awesome stuff</li>
    //     <li>And then some</li>
    //     </ul>
    // </div>

    // <div class="paragraph center">
    //     <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    //     <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    // </div>
    // `, "#23bd69", true),
    new ProjectData("project-2", "Vanguard Music", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>Vanguard Music</strong> is an AI-driven tool for composing video game music.
        <br/></br>It is part of a bachelor's degree final project, aiming to simplify music composition for users with little to no musical knowledge. 
        Using generative AI and various heuristics, Vanguard Music creates adaptive compositions that can fit different themes. 
        The tool adjusts instruments and arrangements, producing music suitable for interactive and evolving game environments.</a>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/hB6-ShmxmYs?si=Vf-gPc7w6BcvdSV_" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>AI-driven melody composer</li>
        <li>Heurisctic-based harmonizer</li>
        <li>Percusion presets and styles</li>
        <li>Different tematics</li>
        <li>Automatic arragement in REAPER</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/miggon23/TFG_AsistenteComposicionConIA" target="_blank">GitHub</a>.
    </div>
    </div>

    <!-- <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Vanguard Music Screenshot" />
    </div> -->
    `, "#5a78af"),
    new ProjectData("project-3", "Separity", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Separity</strong>   is a data-driven 3D video game engine developed in C++.
        <br/><br/>Separity is composed of various sub-engines that leverage different libraries, including:
        <ul>
            <li>Bullet3D for physics</li>
            <li>Ogre for graphics</li>
            <li>OgreOverlay for UI</li>
            <li>SDL for input handling</li>
            <li>Luabridge for scripting and scene creation</li>
            <li>FMOD for audio</li>
        </ul>
        </a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>A scripting engine integrated with Luabridge, allowing users to create scripts for game objects entirely in Lua. 
        The script structure is similar to Unity's MonoBehaviour.</li>
        <li>Fully data-driven architecture, with Lua used to define both scenes and scripts.</li>
        <li>Support for 3D models and animations exported directly from Blender, along with integration for using Blender as a scene editor.</li>
        <li>Customizable 3D physics and collision handling.</li>
        <li>Support for keyboard and controller input.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/XupappInc/Separity" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Crazy U", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Crazy U</strong>is a 3D arcade driving video game inspired by Crazy Taxi. 
    In Crazy U, players take on the role of a bus driver navigating through Ciudad Universitaria in Madrid. 
    The objective is to pick up passengers at various bus stops and drop them off at the next stop before time runs out.
    <br/><br/>The game is developed using the Separity game engine, utilizing both C++ and Lua.</a>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/YhjGVR6Uz1E?si=I0DKITzdQpZiBcuP" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://sebana.itch.io/crazyu" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/XupappInc/CrazyU" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/CrazyU/crazyULogo.png" alt="Crazy U Logo" />
        <img class="pc-screenshot" src="img/projects/CrazyU/crazyUScreenshot.png" alt="Crazy U Screenshot" />
    </div>
    `, "#f7233f"),
    new ProjectData("project-5", "Destino Rojo", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Destino Rojo</strong> is a first person 3D escape room game developed in Unity. <br/><br/>In Destino Rojo, players must solve a series 
        of puzzles and interact with items scattered throughout each room to achieve the objective, which changes with each level.<br/><br/> 
        Destino Rojo was developed for the 2024 <a href="https://itch.io/jam/comjamon2024" target="_blank">ComJamOn</a>.
        </a>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/c9rDMGRyfJM?si=rdHreZ6S2hwAruQZ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://paula-morillas-alonso.itch.io/destinorojo" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/DestinoRojo/destinoRojoScreenshot2.png" alt="Destino Rojo Screenshot" />
        <img class="pc-screenshot" src="img/projects/DestinoRojo/destinoRojoScreenshot3.png" alt="Destino Rojo Screenshot" />
    </div>`, "#e48246"),
    new ProjectData("project-6", "Verdant Sorrow", "img/projects/project-6-icon.png", `
        <div class="paragraph">
        <strong>Verdant Sorrow</strong> is a 2D action game where players face off against a series of powerful enemies in a boss rush format. 
        The goal is to defeat each boss and restore the primordial essences in order to save the world.
        <br/><br/>The game is developed in C++ using the SDL2 library.</a>
        </div>
    
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/p7Zeqp_8Kdk?si=GfKXCRy2HtT6WETe" frameborder="0" allowfullscreen></iframe>
        </div>
    
        <div class="paragraph">
            <div class="notice">
            Windows build available on <a href="https://xuppap-inc.github.io/VerdantSorrow/" target="_blank">the official webpage</a>.
            Source code is available on <a href="https://github.com/XupappInc/CrazyU" target="_blank">GitHub</a>.
            </div>
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot.png" alt="Verdant Sorrow Screenshot" />
            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot3.png" alt="Verdant Sorrow Screenshot" />
            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot5.png" alt="Verdant Sorrow Screenshot" />
            <img class="pc-screenshot" src="img/projects/VerdantSorrow/verdantSorrowScreenshot4.png" alt="Verdant Sorrow Screenshot" />
        </div>
        `, "#5e2782"),
];