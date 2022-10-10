<template>
  <div>
    <!--<h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
		<select v-model="$colorMode.preference">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="sepia">Sepia</option>
		</select>-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Calendar } from "v-calendar";
//const colorMode = useColorMode()
//console.log(colorMode.preference)
useHead({
  title: "Lamcom Ecommerce",
  meta: [
    {
      name: "description",
      content:
        "MK AGENCY are the huge name in cleaning chemicals industry since 2000 started in the Bengaluru, Karnataka state in India.",
    },
    {
      property: "og:title",
      content: "MK Agency",
    },
    {
      property: "og:description",
      content:
        "MK AGENCY are the huge name in cleaning chemicals industry since 2000 started in the Bengaluru, Karnataka state in India.",
    },
    {
      property: "og:image",
      content: "/",
    },
    {
      property: "og:type",
      content: "http://www.mkagenciesblr.com",
    },
    {
      property: "og:site_name",
      content: "MK Agency",
    },
  ],
});
</script>