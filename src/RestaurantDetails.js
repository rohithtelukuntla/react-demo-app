import React, { Component } from 'react'
import Restaurants from "./Restaurants";
export default class RestaurantDetails extends Component {
    restaurants=[{
        "id": 1,
    "name": "Mission Chinese Food",
    "neighborhood": "Manhattan",
    "photograph": "1.jpg",
    "address": "171 E Broadway, New York, NY 10002",
    "latlng": {
      "lat": 40.713829,
      "lng": -73.989667
    },
    "cuisine_type": "Asian",
    "operating_hours": {
      "Monday": "5:30 pm - 11:00 pm",
      "Tuesday": "5:30 pm - 12:00 am",
      "Wednesday": "5:30 pm - 12:00 am",
      "Thursday": "5:30 pm - 12:00 am",
      "Friday": "5:30 pm - 12:00 am",
      "Saturday": "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
      "Sunday": "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"
    },
    "reviews": [{
        "name": "Steve",
        "date": "October 26, 2016",
        "rating": 4,
        "comments": "Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank."
      },
      {
        "name": "Morgan",
        "date": "October 26, 2016",
        "rating": 4,
        "comments": "This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!"
      },
      {
        "name": "Jason",
        "date": "October 26, 2016",
        "rating": 3,
        "comments": "I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."
      }
    ]
  }, {
    "id": 2,
    "name": "Emily",
    "neighborhood": "Brooklyn",
    "photograph": "2.jpg",
    "address": "919 Fulton St, Brooklyn, NY 11238",
    "latlng": {
      "lat": 40.683555,
      "lng": -73.966393
    },
    "cuisine_type": "Pizza",
    "operating_hours": {
      "Monday": "5:30 pm - 11:00 pm",
      "Tuesday": "5:30 pm - 11:00 pm",
      "Wednesday": "5:30 pm - 11:00 pm",
      "Thursday": "5:30 pm - 11:00 pm",
      "Friday": "5:30 pm - 11:00 pm",
      "Saturday": "5:00 pm - 11:30 pm",
      "Sunday": "12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm"
    },
    "reviews": [{
        "name": "Steph",
        "date": "October 26, 2016",
        "rating": 4,
        "comments": "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
      },
      {
        "name": "Steve",
        "date": "October 26, 2016",
        "rating": 4,
        "comments": "This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city."
      },
      {
        "name": "Sam",
        "date": "October 26, 2016",
        "rating": 5,
        "comments": "5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."
      }
    ]
  }, {
    "id": 3,
    "name": "Kang Ho Dong Baekjeong",
    "neighborhood": "Manhattan",
    "photograph": "3.jpg",
    "address": "1 E 32nd St, New York, NY 10016",
    "latlng": {
      "lat": 40.747143,
      "lng": -73.985414
    },
    "cuisine_type": "Asian",
    "operating_hours": {
      "Monday": "11:30 am - 2:00 am",
      "Tuesday": "11:30 am - 2:00 am",
      "Wednesday": "11:30 am - 2:00 am",
      "Thursday": "11:30 am - 2:00 am",
      "Friday": "11:30 am - 6:00 am",
      "Saturday": "11:30 am - 6:00 am",
      "Sunday": "11:30 am - 2:00 am"
    },
    "reviews": [{
        "name": "Steve",
        "date": "October 26, 2016",
        "rating": 4,
        "comments": "The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties."
      },
      {
        "name": "ZS",
        "date": "October 26, 2016",
        "rating": 5,
        "comments": "I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "
      },
      {
        "name": "Emily",
        "date": "October 26, 2016",
        "rating": 2,
        "comments": "MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"
      }
    ]
    }];
    render() {
        return (
           <Restaurants info={this.restaurants}/>
        )
    }
}