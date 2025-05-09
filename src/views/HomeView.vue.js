import Hero from '@/components/Hero.vue';
import Services from '@/components/Services.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
/** @type {[typeof Hero, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Hero, new Hero({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Services, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Services, new Services({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof ContactForm, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(ContactForm, new ContactForm({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Hero: Hero,
            Services: Services,
            ContactForm: ContactForm,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
