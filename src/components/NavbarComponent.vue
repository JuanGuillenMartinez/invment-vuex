<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                Navbar
                </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#"
                        >Home</a
                    >
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Disabled</a
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {},
};
</script>

<style scoped>
.logo-nav {
    margin: 2px 12px;
}
span {
    color: whitesmoke;
}
</style>
