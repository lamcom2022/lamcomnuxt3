<template>

    <!-- Secondary sidebar (Start)-->
    <nav aria-label="Sections"
        class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
        <div class="h-16 px-2 border-b border-blue-gray-200 items-center">
            <h2 class="text-lg leading-7 font-medium">
                Events
            </h2>
            <div>
                <p class="text-sm leading-5 text-gray-400">
                    Select the date to filter past and upcoming events
                </p>
            </div>
        </div>



        <div class="flex-1 min-h-0 overflow-y-auto p-2 text-center">
            <ClientOnly>
                <Calendar is-expanded title-position="left" :attributes="attrs" />
            </ClientOnly>

        </div>
    </nav>


</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
export default {
    components: {
        Calendar,
        DatePicker
    },
    data() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        return {
            today: new Date(),

            attrs: [
                {
                    highlight: {
                        color: 'purple',
                        fillMode: 'light',
                    },
                    dates: new Date(year, month, 12),
                },
                {
                    dot: true,
                    dates: [
                        new Date(2022, 8, 1), // Jan 1st
                        new Date(2022, 8, 10), // Jan 10th
                        new Date(2022, 8, 22), // Jan 22nd
                    ],
                },
                {
                    dot: 'red',
                    dates: [
                        new Date(2022, 8, 4), // Jan 4th
                        new Date(2022, 8, 10), // Jan 10th
                        new Date(2022, 8, 15), // Jan 15th
                    ],
                },
                {
                    dot: {

                    },
                    dates: [
                        new Date(2022, 8, 12), // Jan 12th
                        new Date(2022, 8, 26), // Jan 26th
                        new Date(2022, 8, 15), // Jan 15th
                    ],
                },
            ],
        };
    },
    methods: {},
};
</script>