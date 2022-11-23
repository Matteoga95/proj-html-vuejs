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
    ],
    feedbacks: [
        {
            "name": "Tara Smith",
            "imgSrc": "review_1-compressor.jpg",
            "paragraph": "'The trainers at Avada Gym have helped me reach my fitness goals beyond anything i could of hoped for. i love it!'"
        },
        {
            "name": "Simon Chel",
            "imgSrc": "review_3-compressor-2.jpg",
            "paragraph": "'The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.'"
        },
        {
            "name": "Jen Wirth",
            "imgSrc": "review_2-compressor.jpg",
            "paragraph": "'The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment..'"
        },
        {
            "name": "Jeff Glum",
            "imgSrc": "review_4-compressor-2.jpg",
            "paragraph": "'No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers..'"
        }
    ],
    trainers: [
        {
            "name": "Ann Baker",
            "imgSrc": "trainer1.jpg"
        },
        {
            "name": "Anne Warren",
            "imgSrc": "trainer3.jpg"
        },
        {
            "name": "Peter Rice",
            "imgSrc": "trainer4.jpg"
        }
    ]
})