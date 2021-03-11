var test = {
    0: {
        "text": "Hello, how are you?",
        "options": [{ "response": "Bad", "next": 1 }, { "response": "Good", "next": 2 }],
        "effects": ["screen_shake", "fireworks"],
        "picture": [{ "id": 33, "alignment": "left" }]
    },
    1: {
        "text": "Why, what's wrong?",
        "options": [{ "response": "My dog ran away", "next": 3 },
            { "response": "I broke up with my girlfriend", "next": 4 }
        ]
    },
    2: { "text": "That's nice" }
}