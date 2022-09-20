<template> 
  <section class="grid">
 
 <div class="grid lg:grid-cols-2 md:grid-cols-1 mt-0 h-full lg:w-3/4 md:w-1/2 py-12 pb-24 mx-12">
   

    <div class="flex flex-col xl:w-11/12 md:w-1/5 h-full md:mx-2 mt-12 shadow-lg shadow-gray-900">
    <h2 class="flex flex-col lg:text-center text-xl text-gray-700 mx-4 md:text-left font-semibold uppercase pb-12 mt-10">Shipping Address</h2>
        <h2 class="flex flex-col text-lg text-gray-700 mx-4 lg:mx-32 font-semibold uppercase">Shipping Details</h2>
       <form>
           <div class="form-group lg:w-3/4 md:w-1/2 h-full md:mx-3 py-12 lg:mx-12 flex flex-col">
            <label for="Mobile Number" class="md:flex-none form-label inline-block mb-2 text-gray-700 font-semibold">
            <span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>Mobile No</label>
            <input type="number" name="phone" id="phone" class="shrink w-72 form-control rounded mb-2 mx-4">
            <label for="Email" class="form-label inline-block mb-2 text-gray-700 font-semibold"><span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>Email ID</label>
            <input type="email" name="email" id="email" class="shrink w-72 form-control rounded mb-2 mx-4">
            <label for="Name" class="form-label inline-block mb-2 text-gray-700 font-semibold"><span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>Name</label>
            <input type="text" name="fname" id="fname" class="shrink w-72 form-control rounded mb-2 mx-4">
            <label for="AddressLine1" class="form-label inline-block mb-2 text-gray-700 font-semibold"><span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>Address Line1</label>
            <input type="text" name="add1" id="add1" class="shrink w-72 form-control rounded mb-2 mx-4">
            <label for="AddressLine2" class="form-label inline-block mb-2 text-gray-700 font-semibold"><span class="text-white px-2 text-lg gap-2 font-semibold">*</span>Address Line2</label>
            <input type="text" name="add2" id="add1" class="shrink w-72 form-control rounded mb-2 mx-4">
            <!--Landmark pincode -->
            <div class="grid md:grid-cols-1 lg:grid-cols-2">
                <div class="flex flex-col px-2">
                    <label for="Landmark" class="form-label inline-block mb-2 text-gray-700 font-semibold flex flex-col">
                        <span class="text-secondary text-lg px-2 gap-2 font-semibold">*</span>Landmark
                    </label>
                    <input type="text" name="landmark" id="landmark" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
                <div class="flex flex-col px-2">
            <label for="Pincode" class="form-label inline-block mb-2 text-gray-700 font-semibold md:flex md:flex-col">
                <span class="text-secondary text-lg px-2 gap-2 font-semibold">*</span>Pincode</label>
            <input type="text" name="pincode" id="pincode" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
            </div>

            <!--City/Town -->
             <div class="grid md:grid-cols-1 lg:grid-cols-2">
                <div class="flex flex-col px-2">
            <label for="Town/City" class="form-label inline-block mb-2 text-gray-700 font-semibold">
                <span class="text-secondary text-lg px-2 gap-2 font-semibold">*</span>City/Town</label>
            <input type="text" name="city" id="city" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
                <div class="flex flex-col px-2">
            <label for="State" class="form-label inline-block mb-2 text-gray-700 font-semibold">
                <span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>State</label>
            <input type="text" name="state" id="state" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
            </div>

            <!--Country -->
             <div class="grid md:grid-cols-1 lg:grid-cols-2">
                <div class="flex flex-col px-2">
            <label for="Country" class="form-label inline-block mb-2 text-gray-700 font-semibold">
                <span class="text-secondary text-lg px-2 gap-2 font-semibold">*</span>Country</label>
            <input type="text" name="country" id="country" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
                <div class="flex flex-col px-2">
            <label for="Alternate Mobile" class="form-label inline-block mb-2 text-gray-700 font-semibold">
                <span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span>Alternate Mobile No</label>
            <input type="text" name="phone1" id="phone1" class="shrink w-72 form-control rounded mb-2 mx-4">
                </div>
            </div>
            <div class="flex mt-3 mx-4">
            <input type="checkbox" class="appearance-none indeterminate:bg-secondary py-3 w-6 h-6" />
            <span class="text-lg text-gray-700 inline-flex mx-4">Billing Address is Same as Shipping Address</span>
            </div>

            <button class="bg-gray-600 rounded-full mt-6 w-36 h-12 text-white font-semibold uppercase mx-4" type="submit">Save Address</button>
            
           </div> 
       </form>
    </div>
    <!--cart column -->
     <div class="flex flex-col w-full h-full md:mx-3 lg:mx-32 mt-12">
      <h2 class="text-xl lg:text-center md:text-left text-gray-700 lg:mx-32 md:mx-4 font-semibold uppercase pb-12 mt-10">cart (1 Items)</h2>
        <div class="grid lg:grid-cols-2 md:grid-cols-1">
            <div class="w-64 h-64 bg-gray-400">
                <img class="bg-none" src="https://res.cloudinary.com/lamcom/image/upload/v1659704505/mkagency/glasscloth_kc5xhv.png">
            </div>
            <div class="px-6 mt-3 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1">
              <div class="lg:grid lg:grid-cols-2 md:flex md:flex-col w-full">
                <h2 class="text-lg font-bold uppercase">Glass Cloth</h2>
                <h2 class="text-lg font-bold text-secondary">Rs. 900</h2>
              </div>
                <span class="border-b-2"></span>
                <p class="text-sm font-bold uppercase py-3">Size : </p>
                <p class="text-sm font-bold uppercase py-3">colour : </p>
                 <div class="flex pb-12 items-start"> 
                  <div class="pt-2">                
                <button class="rounded-full border-2 w-24 h-12 flex-initial gap-4">+ 1 -</button>
                  </div>
                  <div class="pt-2">               
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
                  </div>          
        </div>
            </div>
                   
        </div>       
        <div class="border-b-2 w-full"></div>

        <div class="lg:text-center md:text-center gap-4 w-full lg:grid lg:grid-cols-2">
          <div class="mt-6 w-full">
            <p class="text-lg text-gray-700 uppercase font-bold">Total</p>
          </div>
          <div class="mt-6 flex flex-col">
            <p class="text-lg text-gray-700 font-bold">Rs.900</p>
          </div>
        </div> 

         <div class="flex flex-col lg:text-center md:text-left gap-4 w-full lg:grid lg:grid-cols-2">
          <div class="mt-6 w-full flex flex-col">
            <p class="text-lg text-gray-700 lg:text-center md:text-left uppercase font-bold">Discount</p>
          </div>
          <div class="mt-6 items-end">
            <p class="text-lg text-gray-700 font-bold">Rs.100</p>
          </div>
        </div> 

        <div class="flex flex-col lg:text-center md:text-left gap-4 w-full lg:grid lg:grid-cols-2">
          <div class="mt-6 w-full flex flex-col">
            <p class="text-lg text-gray-700 font-bold lg:text-center md:text-left">Shipping Charges</p>
          </div>
          <div class="mt-6 items-end">
            <p class="text-lg text-gray-700 font-bold">Rs.100</p>
          </div>
        </div> 
        <div class="flex flex-col lg:text-center md:text-left gap-4 w-full lg:grid lg:grid-cols-2">
          <div class="mt-6 w-full flex flex-col">
            <p class="text-lg text-gray-700 lg:text-center md:text-left font-bold">Around Total</p>
          </div>
          <div class="mt-6 items-end">
            <p class="text-lg text-gray-700 font-bold">Rs.900</p>
          </div>
        </div> 

        <div class="mt-12 lg:items-center md:items-center">
          <button class="rounded-full bg-gray-600 text-white uppercase w-80 h-12 lg:mx-64 md:mx-4 font-bold">Proceed to Review</button>

        </div>


     </div>
 </div>
</section>
  
</template>

<script>

export default {
  setup() {
   
  },
 
}
</script>
