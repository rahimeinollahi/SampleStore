<template>
    <div class="container-fluid mt-1 bg-light p-2 rounded" id="navhome2">
        <ul class="nav nav-tabs justify-content-center p-3">
            <li class="nav-item">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"> نمونه کارها</a>
                <ul class="dropdown-menu">

                <li class=" nav-item">
                        <router-link class="nav-link " to="/smaplwebsites"> نمونه کارها طراحی سایت</router-link>
                    </li>

                    <li class="nav-item"><router-link class="nav-link text-center " to="/sampleseo" > نمونه کار سئو  </router-link></li>
                </ul>
            </li>

            <li class="nav-item ">
                <router-link class="nav-link" to="/price">قیمت طراحی سایت</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/knoledge">تبادل دانش </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/news">اخبار </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/weblog">وبلاگ </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/hire">استخدام </router-link>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">درباره ما</a>
                <ul class="dropdown-menu">
                <li><router-link class="dropdown-item text-center border-bottom" to="/history"> سابقه و حسن شهرت  </router-link></li>
                <li><router-link class="dropdown-item text-center border-bottom" to="/goals"> اهداف و چشم انداز ها  </router-link></li>
                <li><router-link class="dropdown-item text-center border-bottom" to="/ordersite"> سفارش طراحی سایت  </router-link></li>
                <li><router-link class="dropdown-item text-center " to="/aboutus"> ارتباط با ما  </router-link></li>
                </ul>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/smile">لبخند مشتریان</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        name:"HomeNavbar2"
    }
</script>

<style lang="scss" scoped>
#navhome2{
    border-radius: 50%;
}
</style>