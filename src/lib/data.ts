import React from "react";
import aveInfImage from "@/assets/img/avenger.jpg"
import aveEndImage from "@/assets/img/avenger1.jpg"
import ironManImage from "@/assets/img/iron-man.jpg"
import oppenImage from "@/assets/img/oppenheimer.jpg"

export const links = [
    {
        name: "Home",
        hash: "/landing",
    },
    {
        name: "Movies",
        hash: "/movie",
    },
    {
        name: "About",
        hash: "/about",
    }
] as const;

export const movieData = [
    {
        Id: "ave13516",
        Poster: aveEndImage,
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },
    {
        Id: "ave13515",
        Poster: aveInfImage,
        Title: "Avengers: Infinity War",
        Type: "Movie",
        Year: "2018",
        Describe: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."
    },
    {
        Id: "irm34213",
        Poster: ironManImage,
        Title: "Iron Man 3",
        Type: "Movie",
        Year: "2013",
        Describe: "Suffering from PTSD, Tony Stark encounters a formidable foe called the Mandarin. When he watches his world fall apart, he must rely on his own instincts as he embarks on a journey of retribution."
    },
    {
        Id: "ophm2342",
        Poster: oppenImage,
        Title: "Oppenheimer",
        Type: "Movie",
        Year: "2023",
        Describe: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history."
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
    {
        Id: "ave13516",
        Poster: "",
        Title: "Avengers: Endgame",
        Type: "Movie",
        Year: "2019",
        Describe: ""
    },
] as const;