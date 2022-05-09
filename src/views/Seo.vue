<template>
    <div>
        <div class="bg-dark text-white text-end mx-5 p-3 ">
            <h3>تجربه ای دلنشین از سئو</h3>
            <h5>با ما بهتر دیده شوید</h5> 
            <hr>
            <form action="" class="input-group ">
                 <div class="input-group">
                    <div class="d-flex justify-content-center">
                        <input type="text" class="form-control" @click="searchItem()" placeholder="چیزی وارد کنید.">
                        <span class="input-group-text "><i class="fa fa-search" /></span>
                    </div>
                 </div>
            </form>

        </div>

        <div class="d-flex flex-column">
            <h3 class="text-center mt-4 display-2">ایران سایت</h3>
            <h6 class="mt-3 display-3">سئو و بهینه سازی وب سایت</h6>
            <h6 class="mt-3 display-6"> ایران سایت ارائه کننده خدمات برتر سئو در پر رقابت ترین کلمات کلیدی در ایران</h6>
        </div>
        
        <button class="btn btn-info mt-3 mb-3 p-2">بیشتر بخوانید</button>
        <hr class="mx-5">
        <img src="../../src/assets/images/req-banner.jpg" alt="image banner" class="img-fuild mx-2">
    </div>
</template>

<script>
    export default {
        methods:{
            searchItem(){
                alert('در آینده کامل ترش خواهم کرد.')
            }
        }
    }
</script>

<style lang="scss" scoped>
form{
    direction: rtl;
}
</style>