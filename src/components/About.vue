<template>
    <div id="about">
        <div class="title">
            <div class="col-12">
                <h2>Profile</h2>
            </div>
        </div>
        <div class="content">
            <div class="col-3">
                <img src="../assets/img/lieselot_geirnaert.jpg" alt="head picture Lieselot">
            </div>
            <div class="col-3">
                <h3>About</h3>
                <p>
                    I am a student Electronics-IT from Ghent with a heart for programming and developing
                    but also for children and youthwork. I like to be active and love to keep learning.
                    My friends describe me as helpful, creative, always smiling and always enthusiastic.
                </p>
            </div>
            <div class="col-3 details">
                <h3>Details</h3>
                <font-awesome-icon icon="id-card" />
                <p>Lieselot Geirnaert</p>
                <font-awesome-icon icon="birthday-cake" />
                <p>22/08/1996</p>
                <font-awesome-icon icon="at" />
                <a href="mailto:lieselot.geirnaert@gmail.com">lieselot.geirnaert@gmail.com</a>
                <font-awesome-icon icon="mobile-alt" />
                <p>+32495 82 30 00</p>
                <font-awesome-icon icon="home" />
                <p>Doornzeledries 1A<br>9940 Evergem<br>Belgium</p>
                <font-awesome-icon :icon="['fab', 'github']" />
                <p><a href="https://github.com/LieselotGeirnaert" target="_blank">GitHub</a></p>
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                <p><a href="https://www.linkedin.com/in/lieselot-geirnaert-092512167/" target="_blank">LinkedIn</a></p>
            </div>
            <div class="col-3 languages">
                <h3>Languages</h3>
                <p>Dutch</p>
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <p class="space"></p>
                <p>French</p>
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon :icon="['far', 'circle']" />
                <font-awesome-icon :icon="['far', 'circle']" />
                <font-awesome-icon :icon="['far', 'circle']" />
                <p class="space"></p>
                <p>English</p>
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="circle" />
                <font-awesome-icon :icon="['far', 'circle']" />
                <p class="space"></p>
            </div>
        </div>
    </div>
</template>
