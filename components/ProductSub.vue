<template>
    <div class="bg-white pt-10 pb-20">
        <div class="grid max-w-7xl mx-auto pt-10 pb-10">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mx-4">
                    Cleaning Cloths
                </h2>
        </div>        
        <div class="max-w-7xl inline-block mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8">
          <!--Glass Cloth  -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663248796/mkagency/products/cleaningcloths/glasscloth_pkckei.jpg">
                    <h2 class="grid text-center text-2xl">Glass Cloth </h2>
                    <p class="grid text-center text-xl text-gray-500">Rs. 250 </p>
                </div>
                <div class="grid place-content-center mt-3">                 
                <router-link :to="{ path: '/cart' }"> <button type="button" class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> </router-link>
                </div> 
            </div>
          <!--Mop Cloth  -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663248798/mkagency/products/cleaningcloths/mopcloth_ywffmg.jpg">
                    <h2 class="grid text-center text-2xl">Mop Cloth  </h2>
                    <p class="grid text-center text-xl text-gray-500">Rs. 250 </p>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Checked Cloth -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663248796/mkagency/products/cleaningcloths/checkedcloth_hlntne.jpg">
                    <h2 class="grid text-center text-2xl">Checked Cloth  </h2>
                    <p class="grid text-center text-xl text-gray-500">Rs. 250 </p>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Yellow Cloth -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663248796/mkagency/products/cleaningcloths/yellowcloth_ryq29x.jpg">
                    <h2 class="grid text-center text-2xl">Yellow Cloth  </h2>
                    <p class="grid text-center text-xl text-gray-500">Rs. 250 </p>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Micro Fibre Cloth  -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663248798/mkagency/products/cleaningcloths/microfibre_jowsj2.jpg">
                    <h2 class="grid text-center text-2xl">Micro Fibre Cloth </h2>
                    <p class="grid text-center text-xl text-gray-500">Rs. 250 </p>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          
        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>