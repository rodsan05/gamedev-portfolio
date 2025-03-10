<template>
    <div>
        <h1>Resume</h1>

        <div class="paragraph">
            I'm a graduate with a Bachelor's Degree in Video Game Development from the Complutense University of Madrid.
      <br />I did and intership for 4 months as an Unity Developer, working mainly on VR and AR experiences.
      <br />
      <br />Right now I'm looking for a job so if you have any opportunity feel free to
      <router-link to="/contact">contact me</router-link>.

            <div style="margin-top:20px; margin-bottom:20px;">
                <a class="download-link" href="d/CV_RodrigoSanchez_eng.pdf" target="_blank"><i
                        class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
                <a class="download-link" href="d/CV_RodrigoSanchez_spa.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>
                    Descargar en PDF</a>
                <div style="clear:both"></div>
            </div>
        </div>
        <!-- <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div> -->

        <div style="clear:both"></div>

        <div class="full-content">
            <h2>Work experience</h2>

            <h3>Unity Developer - Artax Games</h3>
            <h4>October 2024 - Present</h4>

            <div style="margin-top: 20px;">I develop various gameplay functionalities in C# for company projects. Also including:
                <ul>
                    <li>Integrate SFX into the project and facilitate communication between the audio team using FMOD and the Unity programming team.</li>
                    <li>Integrate various assets such as animations, UI, and VFX.</li>
                    <li>Implemented a real-time gameplay cinematic system with configurable camera transitions.</li>
                </ul>    
            </div>

            <h3>Unity Developer - Role Productions</h3>
            <h4>May 2023 - August 2023</h4>

            <div style="margin-top: 20px;">I developed and collaborated on various Augmented Reality and Virtual Reality projects for the company.
                Highlights include:</div>

            <div style="margin-top: 20px;">A Virtual Reality kayaking experience.
                <ul>
                    <li>Refactored existing code developed by a third party, achieving a well-organized class structure.
                        I applied software architecture principles and design patterns to do so.</li>
                    <li>Conducted QA testing with the project's funding entity, adapting the experience and improving
                        user experience.</li>
                    <li>Optimized the performance of the experience for Meta Quest 2, increasing the frame rate to 60
                        FPS. This was done in collaboration with the art team and using Unity and Meta debugging tools.
                        - Created a tool that allowed editing all in-game text from an Excel sheet by converting it to
                        JSON format.</li>
                    <li>Created a tool that allowed editing all in-game text from an Excel sheet by converting it to
                        JSON format.</li>
                    <li>Prepared documentation on the project structure.</li>
                </ul>
            </div>

            <div style="margin-top: 20px;">Other Augmented Reality and Virtual Reality experiences:
                <ul>
                    <li>Designed the project structures, keeping them clear and organized.</li>
                    <li>Conducted documentation and research on various technologies to meet the specific needs of each
                        project.</li>
                </ul>
            </div>

            <div class="tech-stack">Unity, C#, JSON</div>

            <h2>Skills</h2>

            <div class="skill-set">
                <h3>Languages</h3>
                <div class="skill">C++</div>
                <div class="skill">C#</div>
                <div class="skill">Python</div>
                <div class="skill">Java</div>
                <div class="skill">JavaScript</div>
            </div>

            <div class="skill-set">
                <h3>Tools & Frameworks</h3>
                <div class="skill">Visual Studio</div>
                <div class="skill">Android Studio</div>
                <div class="skill">Eclipse</div>
                <div class="skill">Unity</div>
                <div class="skill">UWP</div>
                <div class="skill">GIT</div>
                <div class="skill">Blender</div>
            </div>
            <div style="clear:both" />

            <h2>Education</h2>

            <h3>Bachelor's Degree in Video Game Development - 2024</h3>
            <h4>Complutense University of Madrid</h4>

            <h2>Languages</h2>

            <h3>Spanish</h3>
            <div>Native</div>

            <h3>English</h3>
            <div>B2 level, currently preparing C1</div>

            <h3>Japanese</h3>
            <div>A1 level</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    // import SkillRate from "@/components/SkillRate.vue";

    // export default Vue.extend({
    //     name: "Resume",
    //     components: {
    //         SkillRate,
    //     },
    // });
</script>

<style scoped>
    h2 {
        font-weight: 100;
        font-size: 2em;
        margin: 0px;
        padding: 0px;
        padding-top: 50px;
    }

    h3 {
        font-weight: 100;
        font-size: 1.6em;
        margin: 0px;
        padding: 0px;
        padding-top: 30px;
    }

    h4 {
        font-weight: 100;
        font-size: 1.3em;
        margin: 0px;
        padding: 0px;
        padding-top: 15px;
        font-style: italic;
    }

    .paragraph {
        max-width: 700px;
    }

    .download-link {
        float: left;
        margin-right: 50px;
    }

    .full-content div {
        max-width: 800px;
    }

    .skill-set h3[data-v-6bdef06a] {
    padding-bottom: 10px
    }

    .skill {
        float: left;
        border: 1px solid hsla(0, 0%, 86.3%, .44);
        margin: 5px;
        padding: 2px 10px;
    }

    .photo img {
        height: 300px;
        width: 300px;
    }

    .tech-stack {
        font-style: italic;
    }

    .photo {
        margin-top: 50px;
        text-align: center;
    }

    @media only screen and (min-width: 620px) {
        .paragraph {
            float: left;
        }

        .photo {
            float: left;
            padding: 30px;
            padding-left: 80px;
        }

        .skill-set {
            float: left;
            padding-right: 30px;
            max-width: 300px !important;
        }
    }
</style>