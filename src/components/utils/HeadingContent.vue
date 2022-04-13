<template>
    <span class="content-sub-title mb-1">{{subTitle}}</span>
    <h1 class="heading fw-bold mb-4" :class="{ 'teks-biru' : blue_title, 'text-white': white_title }" v-html="title"></h1>
    <p class="fw-light" :class="{ 'text-dark' : text_dark, 'text-light' : !text_dark, 'visually-hidden' : no_text }">
      {{paragraph}}
    </p>
    <slot></slot>
</template>

<script>
export default {
  props: {
    subTitle: String,
    title: String,
    paragraph: String,
    text_dark: Boolean,
    no_text: Boolean,
    blue_title: Boolean,
    white_title : Boolean
  },
}
</script>

<style>
    .heading { font-size: 36px; }
    .teks-biru { color: #1B4674; }
    p { font-size: 16px; }
    .text-dark {
      color: #575757 !important;
    }
    @media (max-width: 575px) {
      .heading { font-size: 24px; }
      p { font-size: 12px; }
    }
    @media (max-width: 1199.98px) {
      .heading { font-size: 30px; }
      p { font-size: 14px; }
    }
</style>