const getUserLandingPage = (req, res) => {
    res.send(
        [
            {
                "id": 1,
                "name": "Olajide Jhon",
                "username": "JoJo",
            },
            {
                "id": 2,
                "name": "Adedeji Obaloluwa",
                "username": "Jerry",
            },
            {
                "id": 2,
                "name": "Oluwapelumi Victor",
                "username": "Darasimi",
            },
            [
                {
                    "name": "Rice",
                    "category": "Grains",
                    "Price": "10kobo"
                }
            ]
        ]
    )
}