<template>
    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">طراحی وب سایت</a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link class="dropdown-item text-center" to="/googleadd/site1">ُسایت 1</router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-item text-center" to="/googleadd/site1">ُسایت 2</router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-item text-center" to="/googleadd/site1">ُسایت 3</router-link>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/webgraphic">طراحی گرافیک</router-link>
            </li>
        </ul>
        
            <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>