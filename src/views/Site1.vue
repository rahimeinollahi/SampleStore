<template>
    <div>
        <h1>از سایت ا </h1>
        <div class="d-flex justify-content-center">
            <h3 class="display-6 text-warning"> دریافت مشاوره رایگان</h3>
        </div>

        <div>
            <h5 class="text-info border p-3 display-51">برای گرفتن بهترین تصمیم، از مشاوره تخصصی وبسیتو به صورت رایگان استفاده کنید !</h5>
        </div>

        <div>
            <div class="row">
                <div class="col-sm-1"></div>
                <div id="border-card" class="justify-content-center  mt-5 p-5">
                    <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-6 justify-content-center d-flex">
                            <form action="">
                                <input type="text" id="txt-name" name="txt-name" class="form-control" placeholder="نام و نام خانوادگی">
                            </form>
                        </div>
                        <div class="col-sm-6">
                             <input type="number" id="txt-name" name="txt-name" class="form-control text-danger" placeholder="شماره تماس">
                        </div>
                    </div>
                </div>
                    <button class="btn-lg w-50 btn-info mt-5">شماوره رایگان</button>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: myfont2;
    src: url('../../src/assets/fonts/A Google.ttf');
}
*{
    font-family: myfont2;
}
#border-card{
box-shadow: 3px 0px 0px rgb(14, 255, 114),
5px 10px 2px rgb(81, 235, 176);
}
</style>