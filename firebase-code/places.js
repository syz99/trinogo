//places.js

const { db } = require('../util/admin');

exports.getAllPlaces = (request, response) => {
	db
		.collection('places')
		.orderBy('location', 'asc') 
		.get()
		.then((data) => {
			let places = [];
			data.forEach((doc) => {
				places.push({
                    placeId: doc.id,
                    location: doc.data().location,
                    attractions: doc.data().attractions,
                    attractions_link: doc.data().attractions_link,
                    attractions_rating: doc.data().attractions_rating,
                    attractions_review: doc.data().attractions_review,
                    hotel: doc.data().hotel,
                    hotel_link: doc.data().hotel_link,
                    hotel_rating: doc.data().hotel_rating,
                    hotel_review: doc.data().hotel_review,
                    restaurant: doc.data().restaurant,
                    restuarant_link: doc.data().restuarant_link,
                    restaurant_rating: doc.data().restaurant_rating,
                    restaurant_review: doc.data().restaurant_review,
				});
			});
			return response.json(places);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
