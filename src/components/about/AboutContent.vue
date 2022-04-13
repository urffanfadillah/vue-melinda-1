<template>
    <div class="d-flex justify-content-center" style="background-color: rgba(255, 255, 255, 0); padding-top: 14px; padding-bottom: 14px;">
        <div class="d-flex gap-2">
            <img src="@/assets/images/mouse-icon.png" alt="mouse-icon" class="mouse img-fluid">
            <p class="my-auto">Scroll to bottom</p>
        </div>
    </div>    
    <ContentImages
        isCream        
        subTitle="Melinda Hospital"
        title="History of Melinda Hospital"
        paragraph="In 2004 ago, dr. Susan Melinda, SpOG., a specialist in obstetrics and gynecology, established a hospital with the concept of a 5-star hotel and an art gallery that offers health facilities for women, especially mothers and children.
        under the name Melinda Hospital. With an international standard, the hospital, which was established on July 23, 2004, is equipped with professional medical personnel. Health is the main key to a woman's beauty and happiness. We are sincerely committed to realizing every woman's dream to look beautiful, healthy and happy. said dr. Susan Melinda about her concern for women's needs.

        As a hospital devoted to women, Melinda Hospital was built so that all women can express their noble side, whether they are in a position as a woman or as a mother to their children. With a unique hospital concept, it will make patients and visitors feel comfortable. Melinda Hospital consists of five floors with a capacity of 33 beds, modern, energy efficient, minimalist architecture, spacious rooms and corridors. The Art and Craft Gallery which is installed along the corridor will also make the atmosphere warmer to welcome anyone who comes to Melinda Hospital."        
    >
        <img src="@/assets/images/group-about.png" alt="services" class="img-fluid" style="object-fit: cover;">
    </ContentImages>
    <ContentImages
        subTitle="Melinda Hospital Gallery"
        title="Our Vision and Mission"
        paragraph="We respect human dignity. 'Patients who come we treat like family' without discriminating against ethnicity, religion, race, and class. Professional and quality service with a touch of love is our priority to grow, develop, and be independent."
        textWhite
    >
        <img src="@/assets/images/images-about-1.png" alt="services" class="img-fluid" style="object-fit: cover;">
    </ContentImages>
    <div class="container mx-auto py-5">
        <HeadingContent 
            subTitle="Melinda Hospital"
            title="Our Filosofy"
        />
        <div class="row">
            <div class="col-sm-12">
                <p>
                    Melinda Hospital was established on July 23, 2004, and during that time the concept and pattern of serving wholeheartedly was sown, implanted, nurtured, nurtured and fought for until now.

                    Serving must be wholehearted and accompanied by sincere thoughts, feelings and wills. The personality of an employee in serving patients totally or wholeheartedly is believed to have a positive impact on the patient's healing, body and soul, as well as the spirit of life, attitudes, and behavior of the patient.

                    This heart-based service process is also related to the formation of employee character. By serving wholeheartedly directly and concretely to patients, there is a change in employees, strengthening their mindset, attitude patterns, and positive behavior patterns. One example is that employees become more optimistic at work, broad-minded, more patient and able to control emotions, and are more positive-minded.

                    This heart-based service is also believed to have a positive impact on the image of the institution, in this case Melinda Hospital, contributing to improving the image of the world of Indonesian hospitals in the international arena.
                </p>
                <p>
                    Serving wholeheartedly can fail if employees and doctors are not sensitive to patient needs, are not friendly to patients, and do not apologize for disappointing patients. The most fatal attitude from patients is when doctors and employees are considered the cause of discomfort or disappointment. This will spread to the image of the institution that was originally glorified and could turn 180 degrees into scorn, abandonment and even alienation, not wanting to hear anymore.

                    Getting into the habit of serving wholeheartedly requires willingness, and serious effort and serious commitment, taking into account real practices, including the following:

                    Be willing to listen with empathy.
                    Willing to take the time to answer and discuss using various media, including cyberspace.
                    Maintain a communication relationship with the spirit of openness, warmth, and ethics.
                    Counseling, motivation, and enthusiasm for life.
                    Tenderness and do a touch of love to the patient.
                    In summary, serve wholeheartedly, the first is always grateful, the second does not forget to always be grateful for the trust of our customers, the third is to apologize for our shortcomings and mistakes as imperfect humans.
                </p>
            </div>
        </div>
    </div>
    <AwardsContent />
    <FooterContent />
</template>

<script>
    import ContentImages from "@/components/utils/ContentImages.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    import FooterContent from "@/components/utils/FooterContent.vue"
    import AwardsContent from "@/components/about/AwardsContent.vue"
    export default {
        components: {
            ContentImages, HeadingContent, FooterContent, AwardsContent
        }
    }   
</script>

<style>

</style>