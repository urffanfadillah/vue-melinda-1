<template>
  <div class="modal fade" id="room-tour" tabindex="-1" aria-labelledby="room-tour" aria-hidden="true">
    <div class="modal-dialog modal-lg rounded">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h5 class="modal-title fw-bold" id="room-tour-title">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ratio ratio-16x9">
            <slot></slot>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,        
    }
}
</script>

<style>

</style>