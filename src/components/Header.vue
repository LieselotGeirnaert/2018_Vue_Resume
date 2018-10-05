<template>
    <header>
        <div class="navigation">
            <div class="navbar">
                <div class="navbar--full">
                    <ul class="nav-tabs">
                        <li><a href="#about">about</a></li>
                        <li><a href="#education">eduction</a></li>
                        <li><a href="#it">IT knowledge</a></li>
                        <li><a href="#experiences">experiences</a></li>
                    </ul>
                </div>
                <div class="navbar--mobile">
                    <div v-on:click="change" :class="{'hamburger': !clicked, 'change hamburger': clicked }">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    <ul v-if="clicked" class="nav-tabs">
                        <li><a href="#about">about</a></li>
                        <li><a href="#education">eduction</a></li>
                        <li><a href="#it">IT knowledge</a></li>
                        <li><a href="#experiences">experiences</a></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
        <div class="intro">
            <h1>Lieselot</h1><h1>Geirnaert</h1>
            <hr>
            <p>student fullstack webdeveloper</p>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            clicked: false
        }
    },
    methods: {
        change () {
            this.clicked = !this.clicked;
        }
    }
}
</script>
