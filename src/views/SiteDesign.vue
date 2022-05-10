<template>
    <div id="designsite" class="img-fluid">
        <p>test is passed</p>
        <h1 class="display-1">طراحی سایت و فروشگاه اینترنتی</h1>
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10 d-flex flex-row border p-3">
                <button class="btn btn-warning p-3 flex-grow-2  mx-3">تماس با ما</button>
                <button class="btn btn-info p-3 flex-grow-1  mx-3">تماس با ما</button>
            </div>
            <div class="col-sm-1"></div>
        </div>

        <div class="row">
           <div class="col-sm-6"></div>
           <div class="col-sm-6">
                <h3 class="display-3 text-end mx-5 text-info">درباره ما بدانید</h3>
               <p class="mx-5">شرکت بلو وب به عنوان یک مجموعه پیشرو در راه اندازی سرویس های مرتبط 
                   با اینترنت، ضمن بهره گیری از فن آوری روز و با تکیه بر تجربه 12 ساله
                   و تخصص تیم فنی خود، مفتخر به ارایه طیف وسیعی از خدمات اینترنتی است.
                </p>

                <p>
                    شرکت بلو وب تنها یک شرکت طراحی سایت نیست
                    . ما با مشاوره اولیه نیاز کسب و کار شما را بررسی می کنی
                    م. تجربیات مشابه را با شما مطرح می کنیم. بهترین مسیر های راه اندازی کسب و کار اینترنتی
                     را به شما معرفی می کنیم. این راهکار ها می تواند با بستر
                     وب سایت، فروشگاه اینترنتی، اپلیکیشن موبایل و… تعریف شوند.
                </p>
                <button class="btn btn-warning p-3 mx-2">اطلاعات بیشتر</button>
                <button class="btn btn-info p-3 mx-2">اطلاعات بیشتر</button>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

    #designsite{
        background-image: url('../assets/images/slide_3_el2.png');
        background-repeat: no-repeat;
        
    }
    p{
        line-height: 50px;
    }
    @font-face {
        font-family: myfont3;
        src: url('../assets/fonts/A Google.ttf');
    }
    *{
        font-family: myfont3;
    }
</style>