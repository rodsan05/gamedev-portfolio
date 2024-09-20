<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm Rodrigo Sánchez Torres, a programmer with a Bachelor’s Degree in Video Game Development from the Complutense University of Madrid.<br/>
        I'm well-versed in programming languages such as C++, C#, Python, and Java.
      </div>

      <div style="margin-top: 20px;">I have experience working on <router-link to="/game-projects">projects</router-link> ranging from video games to generative AI and various tools</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a programmer. Feel free to reach out to me at <a href="mailto:rodsan2602@gmail.com">rodsan2602@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <!-- <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div> -->

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>