<template>
    <div class="container mt-2">
        <div class="bg-light  p-4">
            <ul class="nav nav-pills justify-content-center">
                <li class="nav-item" v-for="item in homenavItems" :key="item.id">
                    <router-link class="nav-link text-dark  border m-1 p-3" :to='item.itemPath'>{{item.itemName}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeNavbar',
        data(){
            return{
                homenavItems:[
                    {id:1, itemName:'IRANSITE',itemPath:'/iransite'},
                    {id:2, itemName:'طراحی سایت',itemPath:'/designsite'},
                    {id:3, itemName:'طراحی سایت وردپرس',itemPath:'/wordpress'},
                    {id:4, itemName:'سئو',itemPath:'/seo'},
                    {id:5, itemName:'گوگل ادورز',itemPath:'/googleadwords'},
                    {id:6, itemName:'اپلیکشین',itemPath:'/application'},
                    {id:6, itemName:'عکاسی',itemPath:'/photography'},
                    {id:6, itemName:'CRM',itemPath:'/crm'},
                    {id:6, itemName:'پشتیبانی',itemPath:'/support'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>