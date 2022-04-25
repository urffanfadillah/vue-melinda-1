<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import AwardsContent from "@/components/about/AwardsContent.vue"
    import HistoryView from "@/components/about/HistoryView.vue"
    import VisionMissionView from "@/components/about/VisionMissionView.vue"
    import OurFilosofyView from "@/components/about/OurFilosofyView.vue"
    export default {
        components: {
            FooterContent, AwardsContent, HistoryView, VisionMissionView, OurFilosofyView
        },
    }   
</script>

<template>        
    <div class="d-flex justify-content-center" style="background-color: rgba(255, 255, 255, 0); padding-top: 14px; padding-bottom: 14px;">
        <div class="d-flex gap-2">
            <img src="@/assets/images/mouse-icon.png" alt="mouse-icon" class="mouse img-fluid">
            <p class="my-auto">Scroll to bottom</p>
        </div>
    </div>
    <HistoryView />
    <VisionMissionView />
    <OurFilosofyView />
    <AwardsContent />
    <FooterContent />
</template>

<style>

</style>