import {
    reactive
} from 'vue'

export const store = reactive({
    services: [
        {
            "title": "Strenght & Conditioning",
            "iconString": "fa-solid fa-link-slash"
        },
        {
            "title": "Fitness & Cardio",
            "iconString": "fa-solid  fa-bicycle"
        },
        {
            "title": "Flexibility & Rest",
            "iconString": "fa-solid fa-cloud"
        },
        {
            "title": "Health & Diet",
            "iconString": "fa-solid fa-heart-pulse"
        }
    ]
})