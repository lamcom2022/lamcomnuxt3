<template>
    <div class="bg-white pt-10 pb-20">
        <div class="grid max-w-7xl mx-auto pt-10 pb-10">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mx-4">
                    Products
                </h2>
        </div>        
        <div class="max-w-7xl inline-block mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8">
          <!--Cleaning Cloths -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663219162/mkagency/products/cleaningcloths_ulocbu.jpg">
                    <h2 class="grid text-center text-2xl">Cleaning Cloths</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                   <router-link :to="{ path: '/productsub' }">  <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> </router-link>
                </div> 
            </div>
          <!--Sign Board -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663219162/mkagency/products/signboard_xmap2t.jpg">
                    <h2 class="grid text-center text-2xl">Sign boards,Caddy Basket and Moping Trolleys </h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--HiAccess -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663219162/mkagency/products/higaccess_h6t8f5.jpg">
                    <h2 class="grid text-center text-2xl">Glass and Highaccess Cleaning System </h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Brooms -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663219162/mkagency/products/brooms_owv5np.jpg">
                    <h2 class="grid text-center text-2xl">Brooms Brushes and Squeegee </h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Air care -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663219162/mkagency/products/roomfreshner_afm3js.jpg">
                    <h2 class="grid text-center text-2xl">Air Care Products</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Kitchen Care Products -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663224393/mkagency/products/scrub_ipgsts.jpg">
                    <h2 class="grid text-center text-2xl">Kitchen Care Products</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Fabric Care Products -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663225148/mkagency/products/fabric_wvprlh.jpg">
                    <h2 class="grid text-center text-2xl">Fabric Care Products</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--House Keeping Solutions -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663225648/mkagency/products/solution_bwtbq3.jpg">
                    <h2 class="grid text-center text-2xl">House Keeping Solutions</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Floor & Carpet Care Solutions -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663225885/mkagency/products/floor_qkew1h.jpg">
                    <h2 class="grid text-center text-2xl">Floor & Carpet Care Solutions</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Heavy Duty Bins & Stainless Steel Bins -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663226048/mkagency/products/push-bin_rrzykb.jpg">
                    <h2 class="grid text-center text-2xl">Heavy Duty Bins & Stainless Steel Bins</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Automatic Shoe Shine Machines -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663226283/mkagency/products/shoeshine_noqzg8.jpg">
                    <h2 class="grid text-center text-2xl">Automatic Shoe Shine Machines</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Fly Catcher/Q Manager/Air Curtain -->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663226464/mkagency/products/flycatcher_cccs2q.jpg">
                    <h2 class="grid text-center text-2xl">Fly Catcher/Q Manager/Air Curtain</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Stainless Steel Planter Pot-->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663226612/mkagency/products/planter_zypkse.jpg">
                    <h2 class="grid text-center text-2xl">Stainless Steel Planter Pot</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Tissue Paper & Dispenser-->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663227006/mkagency/products/tissuepaper_xboxku.jpg">
                    <h2 class="grid text-center text-2xl">Tissue Paper & Dispenser</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Rooms Spray & Dispensers-->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663227160/mkagency/products/roomspray_vplnc1.jpg">
                    <h2 class="grid text-center text-2xl">Rooms Spray & Dispensers</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Automatic Hot & Cold Hand Dryers-->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663227304/mkagency/products/handdryer_rkk9dw.jpg">
                    <h2 class="grid text-center text-2xl">Automatic Hot & Cold Hand Dryers</h2>
                </div>
                <div class="grid place-content-center mt-3">                 
                    <button class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white">Shop Now</button> 
                </div> 
            </div>
          <!--Wet Dry & Micro Fibre Mops-->   
            <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
                <div class="grid grid-cols-1 w-full justify-center">
                    <img class="w-full aspect-auto object-none object-center " src="https://res.cloudinary.com/lamcom/image/upload/v1663227501/mkagency/products/wet_f0wqcn.jpg">
                    <h2 class="grid text-center text-2xl">Wet Dry & Micro Fibre Mops</h2>
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