import React, { useState } from "react";
import "./styles.css";

//LIST

const hotelItems = {
  Delhi: [
    {
      name: " Hotel: Radisson Blu Hotel New Delhi Paschim Vihar",
      rating: "Rating: 4.5/5",
      description:
        "Description: Good location and helpful staff. Extremely clean rooms Amazing services. Looking forward to visit again Very nice breakfast."
    },
    {
      name: "Hotel: Hotel LA",
      rating: "Rating: 4.5/5",
      description:
        "Description: Hotel LA New Delhi offers a children's playground. A business center and vending machines with drinks and snacks are available on site at the hotel. Gurudwara Sis Ganj Sahib is 11 mi from Hotel LA New Delhi, while Jama Masjid is 11 mi away."
    },
    {
      name: "Hotel: Piccadily Hotel",
      rating: "Rating: 4.3/5",
      description:
        "Description: well-appointed hotel with iconic rooms, specialty restaurants, a 24-hour Business Centre, an outdoor pool, a spa and Fitness by Precor®zone, catering to discerning business and leisure travelers in the bustling West Delhi region."
    }
  ],
  Mumbai: [
    {
      name: "Hotel: Hotel Taj Land End",
      rating: "Rating: 4.6/5",
      description:
        "Description: With a view overlooking the Arabian Sea and the Bandra Worli Sea Link, and located just 200 m from the seafront, Taj Lands End features award-winning traditional Indian spa treatments, an outdoor pool and 5 dining options."
    },
    {
      name: "Hotel: ITC Maratha Hotel",
      rating: "Rating: 4.3/5",
      description:
        "Description: Located beside the Santa Cruz Domestic Airport, The Orchid Hotel offers rooms with cable TV. It features a rooftop pool, a 24-hour coffee shop and free airport transfers from the domestic airport (terminal 1B) only. Mumbai International Airport is 9 km away."
    },
    {
      name: "Hotel: Orchid Hotel",
      rating: "Rating: 4.2/5",
      description:
        "Description: Rooms at the Orchid come with a minibar and tea/coffee maker. A work desk with internet connection is available in each room. Free water bottles are provided at the property."
    }
  ],
  Chennai: [
    {
      name: "Hotel: Hotel ITC Grand Chola",
      rating: "Rating: 4.8/5",
      description:
        "Description: Situated along Mount Road in Chennai, ITC Grand Chola is 8 km from the Chennai International Airport. It features 10 dining options and an outdoor swimming pool and a fitness centre. The spa and wellness centre, Kayakalp The Royal Spa offers 12 treatment rooms with a wide variety of massages and therapies."
    },
    {
      name: "Hotel: Le Royal Meridien Hotel",
      rating: "Rating: 4.4/5",
      description:
        "Description:  15-minute drive from Marina Beach. It offers newly renovated rooms, a spa, 24-hour fitness centre and 3 dining options. Guests enjoy free parking."
    },
    {
      name: "Hotel: Marriott Courtyard Hotel",
      rating: "Rating: 4.3/5",
      description:
        "Description: Spacious and trendy rooms are fitted with floor-to-ceiling windows, a 40-inch flat-screen TV and elegant en suite bathroom with rainshower facilities. Rooms include a minibar, personal safe and premium toiletries. Each room comes with a mp3 player, an alarm clock and an iPod docking station."
    }
  ],
  Kolkata: [
    {
      name: "Hotel: Kolkata Rajharts",
      rating: "Rating: 4.7/5",
      description:
        "Description:  15 km from New Market, Ibis Kolkata Rajarhat features accommodation with a restaurant, free private parking, a fitness centre and a bar. Around 15 km from Eden Gardens, the property is also 16 km away from Indian Museum and offers free WiFi."
    },
    {
      name: "Hotel: Grand Market Pavilion",
      rating: "Rating: 4.6/5",
      description:
        "Description: we're just minutes from the waterfront, tour guides, shopping and grand old homes. Set among some of Charleston's most historical landmarks, the Market Pavilion offers decadent guest rooms, countless amenities, outstanding dining and nightlife."
    },
    {
      name: "Hotel: Ottimo Cucina Italiana",
      rating: "Rating: 4.5/5",
      description:
        "Description: Fully air conditioned rooms with 3bhk flats and swimming pools."
    }
  ]
};

export default function App() {
  const [selectedHotel, setselectedHotel] = useState("Delhi");
  const hotelItemsArray = Object.keys(hotelItems);
  function itemClickHandler(hotelName) {
    setselectedHotel(hotelName);
  }

  return (
    <div className="App">
      <h1> Best Hotels </h1>
      <h4>See the Best Hotels in the following Cities:</h4>

      <div id="container">
        {hotelItemsArray.map((hotelItem) => {
          return (
            <button onClick={() => itemClickHandler(hotelItem)} key={hotelItem}>
              {hotelItem}
            </button>
          );
        })}
        <hr />
        <ul>
          {hotelItems[selectedHotel].map((item) => (
            <li id="item" key={item.name}>
              <div id="name">{item.name}</div>{" "}
              <div id="rating">{item.rating}</div>
              <div id="description">{item.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
