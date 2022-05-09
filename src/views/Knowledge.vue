<template>
    <div>
        <div class="">
            <img src="../../src/assets/images/Tabadol-Danesh-Desktop.webp" alt="daneshdesktop" class="img-fluid">
            <h3 class="display-3 text-end mx-5">انجمن طراحی سایت</h3>
            <p class="border p-5 mx-5">در این قسمت می توانید دانش خود را با همکاران و طراحان سایت دیگر به اشتراک بگذارید. این دانش شاید حتی یک سوال باشد که برای شما ایجاد شده است. با طرح سوال در این قسمت می توانید به دیگران نیز در موقعیت های مشابه یاری دهید.</p>
        </div>

        <div class="d-flex jsutify-content-end border mt-3 mx-5 p-2">
            <h3 class="p-1">به دلیل تسهیل در پاسخگویی ایران سایت به شما لطفا درخواست های خود را با کلیک بر روی ثبت درخواست ثبت نمایید</h3>
            <button class="btn btn-info">ثبت درخواست  <i  class="fa fa-key"/></button>
        </div>
        <pre>



        </pre>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-3 mx-2 border bg-secondary mb-2">
                    <div v-for="item in knowItems" :key="item.id">
                        <router-link :class="item.itemClass" :to="item.itemPath">{{item.itemName}}</router-link>
                    </div>
                </div>

                <div class="col-md-3 mx-2 border bg-secondary mb-2">
                    <div v-for="item in knowItems" :key="item.id">
                        <router-link :class="item.itemClass" :to="item.itemPath">{{item.itemName}}</router-link>
                    </div>
                </div>

                <div class="col-md-3 mx-2 border bg-secondary mb-2">
                    <div v-for="item in knowItems" :key="item.id">
                        <router-link :class="item.itemClass" :to="item.itemPath">{{item.itemName}}</router-link>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                knowItems:[
                    {id:1, itemName:'طراحی سایت شرکتی',itemPath:'/', itemClass:' mt-5 nav-link card mx-1  p-2 mb-2 bg-light'},
                    {id:1, itemName:' بهینه سازی سایت',itemPath:'/', itemClass:' mt-5 nav-link card mx-1  p-2 mb-2 bg-light'},
                    {id:1, itemName:'طراحی سایت فروشگاهی',itemPath:'/', itemClass:' mt-5 nav-link card mx-1  p-2 mb-2 bg-light'},
                    {id:1, itemName:'پشتیبانی سایت',itemPath:'/', itemClass:' mt-5 nav-link card mx-1  p-2 mb-2 bg-light'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: myfont;
    src: url('../../src/assets/fonts/A Google.ttf');
}
*{
    font-family: myfont;
}
</style>