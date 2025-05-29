<template>
  <div class="flex justify-around items-center h-[22vh] bg-black/20">
    <ContactInformation class="font-bold">
      <template v-slot:contact1>
        <div :class="githubClass">
          <i class="fa-brands fa-github"></i>
          <a :href="github">GitHub</a>
        </div>
      </template>
      <template v-slot:contact2>
        <div :class="linkedinClass">
          <i class="fa-brands fa-linkedin"></i>
          <a :href="linkedin">LinkedIn</a>
        </div>
      </template>
      <template v-slot:contact3>
        <div :class="emailClass">
          <i class="fa-solid fa-envelope"></i>
          <a :href="email">Email</a>
        </div>
      </template>
      <template v-slot:contact4>
        <div :class="whatsappClass">
          <i class="fa-brands fa-whatsapp"></i>
          <a :href="whatsapp">WhatsApp</a>
        </div>
      </template>
    </ContactInformation>
    <SignatureBar />
  </div>
</template>
<script setup lang="ts">
import ContactInformation from '@/components/footer/ContactInformation.vue';
import SignatureBar from '@/components/footer/SignatureBar.vue';
import { ref } from 'vue';

const githubClass = ref('text-black hover:text-white');
const linkedinClass = ref('text-blue-500 hover:text-white before:content-[]');
const emailClass = ref('text-red-400 hover:text-white before:content-[]');
const whatsappClass = ref('text-green-500 hover:text-white before:content-[]');

const github = 'https://github.com/Gabryel-Barboza';
const linkedin = 'https://www.linkedin.com/in/gabryel-barboza-nunes-35a9a6311/';
const email = 'mailto:gabryelbuildbarboza@gmail.com';
const whatsapp = '#';
</script>
<style></style>
