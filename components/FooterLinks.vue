<template>
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">
            <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-4">
                <!--First Section -->
                
                <div class="mx-4 mt-6">
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase w-full">
                    {{ menuitems.footer.sections[0].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4">
                        <img src="https://res.cloudinary.com/lamcom/image/upload/v1659711534/mkagency/MkAgencies_logo_niih1r.png">
                           
                        
                    </li>
                </ul>
            </div>
           
            <!--Second Section -->
            
                <div class="mx-4 mt-6">
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[1].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[1].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base text-white leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>
           
            <!--3rd Section -->
                 <div class="mx-4 mt-6">
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[2].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4">
                        <img src="https://res.cloudinary.com/lamcom/image/upload/v1663072712/mkagency/qr/qr_gxc3kh.png">
                    </li>
                </ul>
            </div>
            <!--Fourth section -->
                <div class="mx-4 mt-6">
                <ContactUs />
            </div>
             
            </div>
            </div>
         <!-- <div class="grid grid-cols-3 gap-8 md:grid-cols-1 lg:grid-cols-3 w-full">
            <div>
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase w-full">
                    {{ menuitems.footer.sections[0].name }}
                </h4>
                <ul class="mt-4 grid">
                    <li class="mt-4">
                        <img src="https://res.cloudinary.com/lamcom/image/upload/v1659711534/mkagency/MkAgencies_logo_niih1r.png">
                           
                        
                    </li>
                </ul>
            </div>
            
            <div class="grid grid-cols-1">
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[1].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[1].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base text-white leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[2].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[2].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>

              <div>
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase w-full">
                    {{ menuitems.footer.sections[3].name }}
                </h4>
                <ul class="mt-4 grid">
                    <li class="mt-4">
                        <img src="https://res.cloudinary.com/lamcom/image/upload/v1659711534/mkagency/MkAgencies_logo_niih1r.png">                         
                        
                    </li>
                </ul>
            </div>
            
         </div>
         <div class="grid grid-cols-1">
          <div class="flex flex-col">
                <ContactUs />
            </div>
         </div>
         <div class="grid grid-cols-1">
            <div class="mt-12 md:mt-0 md:min-w-64 lg:w-full">
                <iframe class="md:min-w-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.489847774526!2d77.6548749151321!3d12.876192590918535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c9d9255fc4d%3A0x6a652194251fe657!2sLAM%20House!5e0!3m2!1sen!2sin!4v1662564565090!5m2!1sen!2sin" width="333" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div> -->

</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
    components: {

    },
    data() {
        return {
            menuitems
        };
    },
    methods: {

    }
}
</script>

