/**
 * GENERATED FILE. Do not edit by hand.
 * Source: config/destinations.ts, via scripts/generate-form.mjs.
 * Regenerate with: npm run generate:form
 *
 * Paste this whole file into a Google Apps Script project, then:
 *   1. Run buildBindhastForm() once. It creates the form and prints its URLs.
 *   2. Follow google-form/SETUP.md to attach the submit trigger.
 */

var NOTIFY_EMAIL = 'deepghuge09@gmail.com'; // TODO: where lead alerts should go
var BUSINESS_NAME = 'Bindhast Trips';
var REPLY_PROMISE = 'We will call you with an exact quote within 24 hours.';

/** Half width of the quoted range around the midpoint. Tune here. */
var ESTIMATE_SPREAD = 0.12;

var DATA = [
  {
    "slug": "dubai",
    "name": "Dubai",
    "cities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "bestMonths": "November to March. April and October are warm but comfortable and cost less.",
    "flightTime": "3h 15m from Mumbai, 3h 45m from Delhi, 4h from Bengaluru",
    "visaType": "UAE tourist e-Visa, 30 days, single entry",
    "visaTimeline": "3 to 5 working days once we have your documents",
    "visaFee": 7500,
    "costNote": "Costs vary widely by area. Budget approximately 2,000 to 3,000 rupees per person per day for food and local transport.",
    "included": [
      "Return international flights, ticketed on your dates",
      "Hotel stay on twin sharing with daily breakfast",
      "Airport pickup and drop in a private vehicle",
      "Return transfers for every activity in your plan",
      "UAE tourist visa, including application, follow up and fees",
      "Every activity you select, booked in advance with tickets issued before departure",
      "Basic travel insurance for the trip dates",
      "Support on WhatsApp for the duration of your trip"
    ],
    "notIncluded": [
      "Meals other than breakfast, except where an activity includes one",
      "Personal expenses such as shopping, laundry, minibar and tips",
      "Activities added after arrival",
      "Tourism Dirham fee paid at hotel check-in, approximately 350 to 500 rupees per room per night",
      "Surcharges on peak dates such as New Year and Eid, confirmed before you pay",
      "Any increase in airfare between the estimate and ticketing, which we confirm with you first"
    ],
    "pricing": {
      "perNight": 8500,
      "childFactor": 0.6,
      "fixed": 9500,
      "flightLow": 18000,
      "flightHigh": 34000,
      "seasons": [
        {
          "label": "peak",
          "months": [
            11,
            12,
            1,
            2,
            3
          ],
          "multiplier": 1.25,
          "note": "The best weather of the year, and correspondingly the highest hotel rates."
        },
        {
          "label": "shoulder",
          "months": [
            4,
            10
          ],
          "multiplier": 1.05,
          "note": "Warm but comfortable, and noticeably cheaper than peak season."
        },
        {
          "label": "off",
          "months": [
            5,
            6,
            7,
            8,
            9
          ],
          "multiplier": 0.85,
          "note": "Hot outdoors, though most attractions are indoors, and rates fall substantially."
        }
      ]
    },
    "tiers": [
      {
        "id": "essentials",
        "name": "Dubai Essentials",
        "days": 5,
        "nights": 4,
        "from": 42000,
        "blurb": "The standard Dubai itinerary, covering the main sights without filler days.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Dubai",
            "detail": "Airport pickup in a private car, hotel check-in, and a short evening walk around Dubai Marina.",
            "city": "Dubai",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Old Dubai and Downtown",
            "detail": "The souks and the creek in the morning, Downtown in the evening.",
            "city": "Dubai",
            "suggested": [
              "dubai-city-tour",
              "old-dubai-souks",
              "dubai-fountain-boat"
            ]
          },
          {
            "day": 3,
            "title": "Desert day",
            "detail": "Free morning, afternoon pickup for the desert.",
            "city": "Dubai",
            "suggested": [
              "desert-safari"
            ]
          },
          {
            "day": 4,
            "title": "Beach and Burj Khalifa",
            "detail": "A slow morning by the sea, then the tower at sunset.",
            "city": "Dubai",
            "suggested": [
              "la-mer-beach",
              "burj-khalifa"
            ]
          },
          {
            "day": 5,
            "title": "Departure",
            "detail": "Late checkout where the hotel permits, then airport drop with time to spare.",
            "city": "Dubai",
            "suggested": []
          }
        ]
      },
      {
        "id": "complete",
        "name": "Dubai Complete",
        "days": 7,
        "nights": 6,
        "from": 61000,
        "blurb": "Two additional days, which allows a full Abu Dhabi visit and one unscheduled day.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Dubai",
            "detail": "Private airport pickup, check-in, and a free first evening at the Marina.",
            "city": "Dubai",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Old Dubai",
            "detail": "Souks, the creek crossing by abra, and the Al Fahidi district.",
            "city": "Dubai",
            "suggested": [
              "old-dubai-souks",
              "dubai-frame"
            ]
          },
          {
            "day": 3,
            "title": "Desert day",
            "detail": "Afternoon desert safari with BBQ dinner and a live show.",
            "city": "Dubai",
            "suggested": [
              "desert-safari"
            ]
          },
          {
            "day": 4,
            "title": "Abu Dhabi",
            "detail": "A long day out. Early start, back late.",
            "city": "Abu Dhabi",
            "suggested": [
              "abu-dhabi-tour"
            ]
          },
          {
            "day": 5,
            "title": "Your choice",
            "detail": "A park, a waterpark, or nothing at all.",
            "city": "Dubai",
            "suggested": [
              "aquaventure"
            ]
          },
          {
            "day": 6,
            "title": "Downtown and the water",
            "detail": "The tower at sunset, then dinner on the water.",
            "city": "Dubai",
            "suggested": [
              "burj-khalifa",
              "dhow-cruise"
            ]
          },
          {
            "day": 7,
            "title": "Departure",
            "detail": "Free morning, then airport drop.",
            "city": "Dubai",
            "suggested": []
          }
        ]
      },
      {
        "id": "dubai-abu-dhabi",
        "name": "Dubai and Abu Dhabi",
        "days": 8,
        "nights": 7,
        "from": 78000,
        "blurb": "As above, with two nights in Abu Dhabi rather than a single long day trip.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Dubai",
            "detail": "Private airport pickup and check-in.",
            "city": "Dubai",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Old Dubai",
            "detail": "Souks, creek crossing and Al Fahidi. Evening at the fountain show.",
            "city": "Dubai",
            "suggested": [
              "old-dubai-souks",
              "dubai-fountain-boat"
            ]
          },
          {
            "day": 3,
            "title": "Desert day",
            "detail": "Afternoon safari, BBQ dinner and the show.",
            "city": "Dubai",
            "suggested": [
              "desert-safari"
            ]
          },
          {
            "day": 4,
            "title": "Beach and Burj Khalifa",
            "detail": "Morning at the beach, tower at sunset, dinner on the water.",
            "city": "Dubai",
            "suggested": [
              "la-mer-beach",
              "burj-khalifa",
              "dhow-cruise"
            ]
          },
          {
            "day": 5,
            "title": "Move to Abu Dhabi",
            "detail": "Private transfer, hotel check-in, and the Grand Mosque in the late afternoon.",
            "city": "Abu Dhabi",
            "suggested": [
              "abu-dhabi-tour"
            ]
          },
          {
            "day": 6,
            "title": "Yas Island",
            "detail": "A full day on the island.",
            "city": "Abu Dhabi",
            "suggested": [
              "ferrari-world"
            ]
          },
          {
            "day": 7,
            "title": "Back to Dubai",
            "detail": "A museum morning, then the return transfer and a final evening free.",
            "city": "Abu Dhabi",
            "suggested": [
              "louvre-abu-dhabi"
            ]
          },
          {
            "day": 8,
            "title": "Departure",
            "detail": "Airport drop.",
            "city": "Dubai",
            "suggested": []
          }
        ]
      }
    ],
    "activities": [
      {
        "id": "desert-safari",
        "name": "Desert safari with BBQ dinner",
        "label": "Desert safari with BBQ dinner — ₹3,200 adult / ₹2,600 child — about 6h",
        "description": "Dune bashing, a camel ride, henna, a live show and a buffet dinner at a desert camp.",
        "adult": 3200,
        "child": 2600,
        "hours": 6,
        "city": "Dubai",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "adventure",
          "family",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "burj-khalifa",
        "name": "Burj Khalifa, levels 124 and 125",
        "label": "Burj Khalifa, levels 124 and 125 — ₹3,800 adult / ₹3,000 child — about 2h",
        "description": "Timed entry to the observation decks. Sunset slots sell out weeks in advance.",
        "adult": 3800,
        "child": 3000,
        "hours": 2,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "burj-khalifa-148",
        "name": "Burj Khalifa, level 148 SKY",
        "label": "Burj Khalifa, level 148 SKY — ₹8,500 adult / ₹6,800 child — about 2h",
        "description": "The higher deck, with lounge access and a shorter queue.",
        "adult": 8500,
        "child": 6800,
        "hours": 2,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "dubai-city-tour",
        "name": "Half day Dubai city tour",
        "label": "Half day Dubai city tour — ₹2,200 adult / ₹1,700 child — about 4h",
        "description": "A guided run through the old and new city with the main photo stops.",
        "adult": 2200,
        "child": 1700,
        "hours": 4,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "sightseeing",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "old-dubai-souks",
        "name": "Gold and spice souks with abra crossing",
        "label": "Gold and spice souks with abra crossing — ₹1,400 adult / ₹1,100 child — about 3h",
        "description": "The old trading quarter, crossing the creek on a wooden abra.",
        "adult": 1400,
        "child": 1100,
        "hours": 3,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture",
          "shopping"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "dhow-cruise",
        "name": "Marina dhow cruise with dinner",
        "label": "Marina dhow cruise with dinner — ₹2,400 adult / ₹1,800 child — about 3h",
        "description": "Two hours on the water with a buffet dinner and views of the lit skyline.",
        "adult": 2400,
        "child": 1800,
        "hours": 3,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "museum-future",
        "name": "Museum of the Future",
        "label": "Museum of the Future — ₹4,200 adult / ₹3,200 child — about 2h",
        "description": "Advance booking required. Same day tickets are rarely available.",
        "adult": 4200,
        "child": 3200,
        "hours": 2,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "dubai-frame",
        "name": "Dubai Frame",
        "label": "Dubai Frame — ₹1,200 adult / ₹900 child — about 2h",
        "description": "Observation deck with the old city on one side and the new city on the other.",
        "adult": 1200,
        "child": 900,
        "hours": 2,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "dubai-fountain-boat",
        "name": "Dubai Fountain lake ride",
        "label": "Dubai Fountain lake ride — ₹1,100 adult / ₹900 child — about 1h",
        "description": "A short boat ride on the lake during the fountain show.",
        "adult": 1100,
        "child": 900,
        "hours": 1,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed",
          "sightseeing",
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "la-mer-beach",
        "name": "Beach day at La Mer or Kite Beach",
        "label": "Beach day at La Mer or Kite Beach — no ticket cost — about 4h",
        "description": "Public beach with cafes and changing facilities. No ticket required.",
        "adult": 0,
        "child": 0,
        "hours": 4,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed",
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "aquaventure",
        "name": "Atlantis Aquaventure waterpark",
        "label": "Atlantis Aquaventure waterpark — ₹6,500 adult / ₹5,200 child — about 8h",
        "description": "The largest waterpark in the region. Allow a full day.",
        "adult": 6500,
        "child": 5200,
        "hours": 8,
        "city": "Dubai",
        "audience": "both",
        "intensity": "high",
        "tags": [
          "family",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "lost-chambers",
        "name": "Lost Chambers Aquarium",
        "label": "Lost Chambers Aquarium — ₹2,600 adult / ₹2,100 child — about 2h",
        "description": "Walk through aquarium at Atlantis. Easy on small children.",
        "adult": 2600,
        "child": 2100,
        "hours": 2,
        "city": "Dubai",
        "audience": "kids",
        "intensity": "low",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "dubai-aquarium",
        "name": "Dubai Aquarium and Underwater Zoo",
        "label": "Dubai Aquarium and Underwater Zoo — ₹2,400 adult / ₹1,900 child — about 2h",
        "description": "Inside Dubai Mall, so it combines easily with a shopping afternoon.",
        "adult": 2400,
        "child": 1900,
        "hours": 2,
        "city": "Dubai",
        "audience": "kids",
        "intensity": "low",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "img-worlds",
        "name": "IMG Worlds of Adventure",
        "label": "IMG Worlds of Adventure — ₹4,300 adult / ₹3,600 child — about 7h",
        "description": "Indoor theme park, so it stays comfortable in peak summer.",
        "adult": 4300,
        "child": 3600,
        "hours": 7,
        "city": "Dubai",
        "audience": "kids",
        "intensity": "moderate",
        "tags": [
          "family",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "ski-dubai",
        "name": "Ski Dubai snow park",
        "label": "Ski Dubai snow park — ₹3,600 adult / ₹3,100 child — about 3h",
        "description": "Indoor snow park with real snow. Jackets and boots are provided.",
        "adult": 3600,
        "child": 3100,
        "hours": 3,
        "city": "Dubai",
        "audience": "kids",
        "intensity": "moderate",
        "tags": [
          "family",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "miracle-garden",
        "name": "Dubai Miracle Garden",
        "label": "Dubai Miracle Garden — ₹1,900 adult / ₹1,500 child — about 3h",
        "description": "A large seasonal flower garden. Popular for photographs.",
        "adult": 1900,
        "child": 1500,
        "hours": 3,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "family",
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": "Seasonal, open approximately November to May"
      },
      {
        "id": "global-village",
        "name": "Global Village",
        "label": "Global Village — ₹1,100 adult / ₹900 child — about 4h",
        "description": "Open air market and food festival with pavilions by country.",
        "adult": 1100,
        "child": 900,
        "hours": 4,
        "city": "Dubai",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "family",
          "shopping",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": "Seasonal, open approximately October to April"
      },
      {
        "id": "marina-yacht",
        "name": "Shared yacht cruise on the Marina",
        "label": "Shared yacht cruise on the Marina — ₹6,000 per person — about 2h",
        "description": "Two hours on a shared yacht with refreshments.",
        "adult": 6000,
        "child": 6000,
        "hours": 2,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "relaxed",
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "balloon",
        "name": "Sunrise hot air balloon over the desert",
        "label": "Sunrise hot air balloon over the desert — ₹9,500 per person — about 5h",
        "description": "Pre dawn start, with a falcon display on landing and breakfast at a camp.",
        "adult": 9500,
        "child": 9500,
        "hours": 5,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "moderate",
        "tags": [
          "adventure",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "skydive",
        "name": "Skydive over the Palm",
        "label": "Skydive over the Palm — ₹22,000 per person — about 4h",
        "description": "Tandem jump with video. Weather dependent and booked well ahead.",
        "adult": 22000,
        "child": 22000,
        "hours": 4,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "high",
        "tags": [
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "desert-quad",
        "name": "Quad biking in the desert",
        "label": "Quad biking in the desert — ₹4,200 per person — about 3h",
        "description": "Self drive quad session with an instructor, usually combined with a safari.",
        "adult": 4200,
        "child": 4200,
        "hours": 3,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "high",
        "tags": [
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "helicopter-tour",
        "name": "Helicopter tour over Dubai",
        "label": "Helicopter tour over Dubai — ₹14,500 per person — about 1h",
        "description": "Twelve to seventeen minutes over the Palm, the Burj and the coast.",
        "adult": 14500,
        "child": 14500,
        "hours": 1,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "sightseeing",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "marina-brunch",
        "name": "Weekend brunch at a Marina restaurant",
        "label": "Weekend brunch at a Marina restaurant — ₹5,500 per person — about 3h",
        "description": "The long Dubai brunch. Food and drinks over three hours.",
        "adult": 5500,
        "child": 5500,
        "hours": 3,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "food",
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "nightlife-marina",
        "name": "Night out at a Marina club or lounge",
        "label": "Night out at a Marina club or lounge — ₹4,500 per person — about 4h",
        "description": "Entry and a table at a mainstream club. Dress code applies.",
        "adult": 4500,
        "child": 4500,
        "hours": 4,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "gold-souk-shopping",
        "name": "Guided gold and textile shopping",
        "label": "Guided gold and textile shopping — ₹1,800 per person — about 3h",
        "description": "A guide who knows the rates, which matters if you intend to buy gold.",
        "adult": 1800,
        "child": 1800,
        "hours": 3,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "shopping"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "spa-hammam",
        "name": "Traditional hammam and spa session",
        "label": "Traditional hammam and spa session — ₹4,800 per person — about 2h",
        "description": "Steam, scrub and massage. A good afternoon in peak summer.",
        "adult": 4800,
        "child": 4800,
        "hours": 2,
        "city": "Dubai",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "abu-dhabi-tour",
        "name": "Abu Dhabi day tour",
        "label": "Abu Dhabi day tour — ₹4,500 adult / ₹3,400 child — about 10h",
        "description": "Sheikh Zayed Grand Mosque, Qasr Al Watan and the Corniche, with lunch.",
        "adult": 4500,
        "child": 3400,
        "hours": 10,
        "city": "Abu Dhabi",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "culture",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "louvre-abu-dhabi",
        "name": "Louvre Abu Dhabi",
        "label": "Louvre Abu Dhabi — ₹2,900 adult / ₹2,200 child — about 3h",
        "description": "The domed museum on Saadiyat Island. Two to three hours is enough.",
        "adult": 2900,
        "child": 2200,
        "hours": 3,
        "city": "Abu Dhabi",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "ferrari-world",
        "name": "Ferrari World",
        "label": "Ferrari World — ₹6,200 adult / ₹5,200 child — about 8h",
        "description": "Indoor theme park on Yas Island, including the fastest rollercoaster in the world.",
        "adult": 6200,
        "child": 5200,
        "hours": 8,
        "city": "Abu Dhabi",
        "audience": "both",
        "intensity": "high",
        "tags": [
          "family",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "warner-bros",
        "name": "Warner Bros World Abu Dhabi",
        "label": "Warner Bros World Abu Dhabi — ₹5,800 adult / ₹4,900 child — about 8h",
        "description": "Fully indoor park. Gentler than Ferrari World and better for younger children.",
        "adult": 5800,
        "child": 4900,
        "hours": 8,
        "city": "Abu Dhabi",
        "audience": "kids",
        "intensity": "moderate",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      }
    ]
  },
  {
    "slug": "thailand",
    "name": "Thailand",
    "cities": [
      "Bangkok",
      "Pattaya",
      "Phuket",
      "Krabi"
    ],
    "bestMonths": "November to February offers the best weather. March and October are warmer and cost less.",
    "flightTime": "4h 20m from Kolkata, 4h 30m from Mumbai, 4h 15m from Delhi",
    "visaType": "Visa free entry for Indian passport holders, currently up to 60 days",
    "visaTimeline": "Nothing to apply for. You clear immigration on arrival.",
    "visaFee": 0,
    "costNote": "Costs on the ground are low. Approximately 1,500 rupees per person per day covers food and local transport comfortably.",
    "included": [
      "Return international flights, ticketed on your dates",
      "Hotel stay on twin sharing with daily breakfast",
      "Airport pickup and drop in a private vehicle",
      "All intercity transfers by flight, ferry or private car as the itinerary requires",
      "Return transfers for every activity in your plan",
      "Thailand Digital Arrival Card completed and submitted on your behalf",
      "Every activity you select, booked and confirmed before departure",
      "Basic travel insurance for the trip dates",
      "Support on WhatsApp for the duration of your trip"
    ],
    "notIncluded": [
      "Meals other than breakfast, except where an activity includes one",
      "Personal expenses such as shopping, laundry, minibar and tips",
      "Activities added after arrival",
      "The 300 baht tourist fee, if and when Thailand begins collecting it",
      "Surcharges on peak dates such as Christmas, New Year and Songkran, confirmed before you pay",
      "Any increase in airfare between the estimate and ticketing, which we confirm with you first"
    ],
    "pricing": {
      "perNight": 6500,
      "childFactor": 0.55,
      "fixed": 6000,
      "flightLow": 16000,
      "flightHigh": 30000,
      "seasons": [
        {
          "label": "peak",
          "months": [
            11,
            12,
            1,
            2
          ],
          "multiplier": 1.22,
          "note": "Dry and warm with low humidity. The best weather and the highest rates."
        },
        {
          "label": "shoulder",
          "months": [
            3,
            4,
            10
          ],
          "multiplier": 1.05,
          "note": "Hotter and still mostly dry. Songkran falls in April and is busy."
        },
        {
          "label": "off",
          "months": [
            5,
            6,
            7,
            8,
            9
          ],
          "multiplier": 0.85,
          "note": "Monsoon season, usually short afternoon showers rather than continuous rain. Rates fall sharply."
        }
      ]
    },
    "tiers": [
      {
        "id": "bangkok-pattaya",
        "name": "Bangkok and Pattaya",
        "days": 6,
        "nights": 5,
        "from": 34000,
        "blurb": "The most economical way to combine a city stay with a beach stay.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Bangkok",
            "detail": "Airport pickup, hotel check-in, and an evening at a night market for dinner.",
            "city": "Bangkok",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Old Bangkok",
            "detail": "Temples in the morning before the heat, the river in the evening.",
            "city": "Bangkok",
            "suggested": [
              "grand-palace",
              "river-cruise"
            ]
          },
          {
            "day": 3,
            "title": "Markets, then Pattaya",
            "detail": "Early start for the markets, then the transfer down to the coast.",
            "city": "Bangkok",
            "suggested": [
              "floating-market"
            ]
          },
          {
            "day": 4,
            "title": "Island day",
            "detail": "Out to the island for the day, back by evening.",
            "city": "Pattaya",
            "suggested": [
              "coral-island"
            ]
          },
          {
            "day": 5,
            "title": "Pattaya to Bangkok",
            "detail": "Free morning, transfer back, final evening free.",
            "city": "Pattaya",
            "suggested": [
              "sanctuary-truth"
            ]
          },
          {
            "day": 6,
            "title": "Departure",
            "detail": "Airport drop with time to spare.",
            "city": "Bangkok",
            "suggested": []
          }
        ]
      },
      {
        "id": "bangkok-phuket",
        "name": "Bangkok and Phuket",
        "days": 7,
        "nights": 6,
        "from": 47000,
        "blurb": "Bangkok followed by four nights in Phuket, with the domestic flight included.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Bangkok",
            "detail": "Airport pickup, hotel check-in, night market for dinner.",
            "city": "Bangkok",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Bangkok in one day",
            "detail": "Temples in the morning, the river at night.",
            "city": "Bangkok",
            "suggested": [
              "grand-palace",
              "river-cruise"
            ]
          },
          {
            "day": 3,
            "title": "Fly to Phuket",
            "detail": "Short domestic flight, hotel transfer, and a free first evening on the beach.",
            "city": "Phuket",
            "suggested": []
          },
          {
            "day": 4,
            "title": "Phi Phi islands",
            "detail": "A full day out on the water.",
            "city": "Phuket",
            "suggested": [
              "phi-phi"
            ]
          },
          {
            "day": 5,
            "title": "Phang Nga Bay",
            "detail": "A calmer day than Phi Phi.",
            "city": "Phuket",
            "suggested": [
              "james-bond"
            ]
          },
          {
            "day": 6,
            "title": "Free day",
            "detail": "Nothing scheduled.",
            "city": "Phuket",
            "suggested": [
              "big-buddha"
            ]
          },
          {
            "day": 7,
            "title": "Departure",
            "detail": "Airport drop.",
            "city": "Phuket",
            "suggested": []
          }
        ]
      },
      {
        "id": "bangkok-phuket-krabi",
        "name": "Bangkok, Phuket and Krabi",
        "days": 9,
        "nights": 8,
        "from": 68000,
        "blurb": "A longer itinerary covering Bangkok and two separate southern beach bases.",
        "itinerary": [
          {
            "day": 1,
            "title": "Arrive in Bangkok",
            "detail": "Airport pickup, hotel check-in, and a night market for dinner.",
            "city": "Bangkok",
            "suggested": []
          },
          {
            "day": 2,
            "title": "Bangkok in one day",
            "detail": "Grand Palace and Wat Pho, with an evening river cruise.",
            "city": "Bangkok",
            "suggested": [
              "grand-palace",
              "river-cruise"
            ]
          },
          {
            "day": 3,
            "title": "Fly to Phuket",
            "detail": "Domestic flight, hotel transfer, and a free first evening on the beach.",
            "city": "Phuket",
            "suggested": []
          },
          {
            "day": 4,
            "title": "Phi Phi islands",
            "detail": "Full day speedboat trip with snorkelling stops and lunch on board.",
            "city": "Phuket",
            "suggested": [
              "phi-phi"
            ]
          },
          {
            "day": 5,
            "title": "Phuket free day",
            "detail": "Old town, a massage, or nothing at all.",
            "city": "Phuket",
            "suggested": [
              "old-town-phuket"
            ]
          },
          {
            "day": 6,
            "title": "Ferry to Krabi",
            "detail": "Ferry crossing to Krabi and check-in at Ao Nang.",
            "city": "Krabi",
            "suggested": []
          },
          {
            "day": 7,
            "title": "Four Islands tour",
            "detail": "Longtail boat to Tup, Chicken, Poda and Phra Nang beaches.",
            "city": "Krabi",
            "suggested": [
              "four-islands"
            ]
          },
          {
            "day": 8,
            "title": "Elephants and free time",
            "detail": "Sanctuary visit in the morning, afternoon free.",
            "city": "Krabi",
            "suggested": [
              "elephant-sanctuary"
            ]
          },
          {
            "day": 9,
            "title": "Departure",
            "detail": "Transfer to Krabi airport.",
            "city": "Krabi",
            "suggested": []
          }
        ]
      }
    ],
    "activities": [
      {
        "id": "grand-palace",
        "name": "Grand Palace and Wat Pho tour",
        "label": "Grand Palace and Wat Pho tour — ₹2,600 adult / ₹1,900 child — about 5h",
        "description": "Guided half day covering the two principal temples in the old city.",
        "adult": 2600,
        "child": 1900,
        "hours": 5,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "culture",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "floating-market",
        "name": "Floating market and railway market",
        "label": "Floating market and railway market — ₹2,800 adult / ₹2,200 child — about 7h",
        "description": "Damnoen Saduak and Maeklong. Departure is around 6am.",
        "adult": 2800,
        "child": 2200,
        "hours": 7,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "culture",
          "sightseeing",
          "shopping"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "river-cruise",
        "name": "Chao Phraya dinner cruise",
        "label": "Chao Phraya dinner cruise — ₹2,900 adult / ₹2,200 child — about 3h",
        "description": "Buffet dinner on the river, with the riverside temples lit.",
        "adult": 2900,
        "child": 2200,
        "hours": 3,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "cooking-class",
        "name": "Thai cooking class",
        "label": "Thai cooking class — ₹2,500 adult / ₹2,000 child — about 4h",
        "description": "A market visit followed by preparing and eating four dishes.",
        "adult": 2500,
        "child": 2000,
        "hours": 4,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "food",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "street-food-tour",
        "name": "Evening street food tour",
        "label": "Evening street food tour — ₹2,400 adult / ₹1,900 child — about 4h",
        "description": "A guided walk through Chinatown and the night stalls, eating as you go.",
        "adult": 2400,
        "child": 1900,
        "hours": 4,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "food",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "safari-world",
        "name": "Safari World and Marine Park",
        "label": "Safari World and Marine Park — ₹3,100 adult / ₹2,500 child — about 8h",
        "description": "Drive through safari with dolphin and sea lion shows. A full day.",
        "adult": 3100,
        "child": 2500,
        "hours": 8,
        "city": "Bangkok",
        "audience": "kids",
        "intensity": "moderate",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "ayutthaya",
        "name": "Ayutthaya day trip",
        "label": "Ayutthaya day trip — ₹3,400 adult / ₹2,700 child — about 9h",
        "description": "The ruined former capital, an hour and a half north of Bangkok.",
        "adult": 3400,
        "child": 2700,
        "hours": 9,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "culture",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "muay-thai",
        "name": "Muay Thai live match",
        "label": "Muay Thai live match — ₹2,700 per person — about 3h",
        "description": "Ringside seats at a competitive stadium rather than a tourist show.",
        "adult": 2700,
        "child": 2700,
        "hours": 3,
        "city": "Bangkok",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "culture",
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "rooftop-bar",
        "name": "Rooftop bar evening",
        "label": "Rooftop bar evening — ₹3,200 per person — about 3h",
        "description": "A table at one of the river or Sukhumvit rooftops. Dress code applies.",
        "adult": 3200,
        "child": 3200,
        "hours": 3,
        "city": "Bangkok",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "chatuchak",
        "name": "Chatuchak weekend market",
        "label": "Chatuchak weekend market — ₹900 adult / ₹700 child — about 4h",
        "description": "Fifteen thousand stalls. Weekends only, and best before noon.",
        "adult": 900,
        "child": 700,
        "hours": 4,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "shopping",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "thai-massage-bkk",
        "name": "Traditional Thai massage",
        "label": "Traditional Thai massage — ₹1,200 per person — about 2h",
        "description": "A proper hour at an established parlour rather than a street shopfront.",
        "adult": 1200,
        "child": 1200,
        "hours": 2,
        "city": "Bangkok",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "coral-island",
        "name": "Coral Island with lunch",
        "label": "Coral Island with lunch — ₹2,200 adult / ₹1,700 child — about 7h",
        "description": "Speedboat from Pattaya to Koh Larn, with beach time and a seafood lunch.",
        "adult": 2200,
        "child": 1700,
        "hours": 7,
        "city": "Pattaya",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "relaxed",
          "family",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "nong-nooch",
        "name": "Nong Nooch Tropical Garden",
        "label": "Nong Nooch Tropical Garden — ₹1,900 adult / ₹1,500 child — about 5h",
        "description": "Botanical gardens with a culture show and an elephant show.",
        "adult": 1900,
        "child": 1500,
        "hours": 5,
        "city": "Pattaya",
        "audience": "kids",
        "intensity": "low",
        "tags": [
          "family",
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "sanctuary-truth",
        "name": "Sanctuary of Truth",
        "label": "Sanctuary of Truth — ₹1,400 adult / ₹1,100 child — about 2h",
        "description": "An all timber carved temple on the seafront, still under construction.",
        "adult": 1400,
        "child": 1100,
        "hours": 2,
        "city": "Pattaya",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "alcazar-show",
        "name": "Alcazar cabaret show",
        "label": "Alcazar cabaret show — ₹1,800 adult / ₹1,400 child — about 2h",
        "description": "A large scale costume and dance show. Suitable for all ages.",
        "adult": 1800,
        "child": 1400,
        "hours": 2,
        "city": "Pattaya",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "family",
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "underwater-world",
        "name": "Underwater World Pattaya",
        "label": "Underwater World Pattaya — ₹1,700 adult / ₹1,300 child — about 2h",
        "description": "Walk through tunnel aquarium. An easy indoor afternoon.",
        "adult": 1700,
        "child": 1300,
        "hours": 2,
        "city": "Pattaya",
        "audience": "kids",
        "intensity": "low",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "pattaya-floating-market",
        "name": "Pattaya Floating Market",
        "label": "Pattaya Floating Market — ₹1,200 adult / ₹900 child — about 3h",
        "description": "Four zones of stalls and food on the water. Quieter than Damnoen Saduak.",
        "adult": 1200,
        "child": 900,
        "hours": 3,
        "city": "Pattaya",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture",
          "shopping",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "walking-street",
        "name": "Walking Street evening",
        "label": "Walking Street evening — no ticket cost — about 3h",
        "description": "The main nightlife strip. Adults only, and busiest after 10pm.",
        "adult": 0,
        "child": 0,
        "hours": 3,
        "city": "Pattaya",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "phi-phi",
        "name": "Phi Phi islands by speedboat",
        "label": "Phi Phi islands by speedboat — ₹3,400 adult / ₹2,600 child — about 9h",
        "description": "Maya Bay, Pileh Lagoon, snorkelling stops and lunch on board.",
        "adult": 3400,
        "child": 2600,
        "hours": 9,
        "city": "Phuket",
        "audience": "both",
        "intensity": "high",
        "tags": [
          "adventure",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "james-bond",
        "name": "James Bond Island sea canoe",
        "label": "James Bond Island sea canoe — ₹3,600 adult / ₹2,800 child — about 8h",
        "description": "Phang Nga Bay by longtail boat, with canoeing through limestone caves.",
        "adult": 3600,
        "child": 2800,
        "hours": 8,
        "city": "Phuket",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "adventure",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "fantasea",
        "name": "Phuket FantaSea show with dinner",
        "label": "Phuket FantaSea show with dinner — ₹3,300 adult / ₹2,700 child — about 4h",
        "description": "A large theatrical culture show with a buffet dinner.",
        "adult": 3300,
        "child": 2700,
        "hours": 4,
        "city": "Phuket",
        "audience": "kids",
        "intensity": "low",
        "tags": [
          "family"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "elephant-sanctuary",
        "name": "Ethical elephant sanctuary",
        "label": "Ethical elephant sanctuary — ₹4,200 adult / ₹3,300 child — about 5h",
        "description": "Feeding and bathing at a sanctuary that does not offer riding.",
        "adult": 4200,
        "child": 3300,
        "hours": 5,
        "city": "Phuket",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "family",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "old-town-phuket",
        "name": "Phuket Old Town walking tour",
        "label": "Phuket Old Town walking tour — ₹1,600 adult / ₹1,200 child — about 3h",
        "description": "Sino Portuguese shophouses, street art and local cafes.",
        "adult": 1600,
        "child": 1200,
        "hours": 3,
        "city": "Phuket",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "culture",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "big-buddha",
        "name": "Big Buddha and Karon viewpoint",
        "label": "Big Buddha and Karon viewpoint — ₹1,500 adult / ₹1,200 child — about 3h",
        "description": "The hilltop statue and the best view on the island. Half day by car.",
        "adult": 1500,
        "child": 1200,
        "hours": 3,
        "city": "Phuket",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "sightseeing",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "phuket-spa",
        "name": "Beachfront spa session",
        "label": "Beachfront spa session — ₹3,200 per person — about 2h",
        "description": "Oil massage and scrub at a resort spa rather than a street shop.",
        "adult": 3200,
        "child": 3200,
        "hours": 2,
        "city": "Phuket",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "surf-lesson",
        "name": "Beginner surf lesson at Kata",
        "label": "Beginner surf lesson at Kata — ₹2,800 per person — about 2h",
        "description": "Two hours with a board and an instructor. Best May to October.",
        "adult": 2800,
        "child": 2800,
        "hours": 2,
        "city": "Phuket",
        "audience": "adult",
        "intensity": "high",
        "tags": [
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "patong-nightlife",
        "name": "Patong and Bangla Road evening",
        "label": "Patong and Bangla Road evening — no ticket cost — about 3h",
        "description": "The main nightlife strip in Phuket. Adults only.",
        "adult": 0,
        "child": 0,
        "hours": 3,
        "city": "Phuket",
        "audience": "adult",
        "intensity": "low",
        "tags": [
          "nightlife"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "four-islands",
        "name": "Four Islands tour by longtail",
        "label": "Four Islands tour by longtail — ₹2,900 adult / ₹2,300 child — about 8h",
        "description": "Tup, Chicken, Poda and Phra Nang beaches, with lunch.",
        "adult": 2900,
        "child": 2300,
        "hours": 8,
        "city": "Krabi",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "sightseeing",
          "adventure",
          "relaxed"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "railay-beach",
        "name": "Railay Beach day trip",
        "label": "Railay Beach day trip — ₹2,200 adult / ₹1,700 child — about 6h",
        "description": "Reachable only by boat. Cliffs, calm water and a short walk to the lagoon.",
        "adult": 2200,
        "child": 1700,
        "hours": 6,
        "city": "Krabi",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "relaxed",
          "sightseeing"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "emerald-pool",
        "name": "Emerald Pool and hot springs",
        "label": "Emerald Pool and hot springs — ₹2,600 adult / ₹2,000 child — about 7h",
        "description": "Inland day out to the spring fed pools and waterfalls.",
        "adult": 2600,
        "child": 2000,
        "hours": 7,
        "city": "Krabi",
        "audience": "both",
        "intensity": "moderate",
        "tags": [
          "relaxed",
          "adventure"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "tiger-cave",
        "name": "Tiger Cave Temple climb",
        "label": "Tiger Cave Temple climb — ₹1,400 per person — about 4h",
        "description": "1,260 steps to the summit. Start at dawn. Genuinely demanding.",
        "adult": 1400,
        "child": 1400,
        "hours": 4,
        "city": "Krabi",
        "audience": "adult",
        "intensity": "high",
        "tags": [
          "adventure",
          "culture"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      },
      {
        "id": "krabi-sunset-cruise",
        "name": "Sunset dinner cruise from Ao Nang",
        "label": "Sunset dinner cruise from Ao Nang — ₹3,100 adult / ₹2,400 child — about 4h",
        "description": "Four hours out among the karsts with dinner served on board.",
        "adult": 3100,
        "child": 2400,
        "hours": 4,
        "city": "Krabi",
        "audience": "both",
        "intensity": "low",
        "tags": [
          "relaxed",
          "food"
        ],
        "videoUrl": "",
        "infoUrl": "",
        "note": ""
      }
    ]
  }
];

/* ============================================================
 * 1. BUILD THE FORM. Run this once.
 * ============================================================ */

var MONTHS = ['January','February','March','April','May','June',
              'July','August','September','October','November','December'];

var STYLES = ['Sightseeing','Family','Relaxed','Nightlife','Adventure','Culture','Food','Shopping'];

var STAY_TYPES = [
  'Hotel, 3 star',
  'Hotel, 4 star',
  'Hotel, 5 star',
  'Apartment or Airbnb',
  'Whatever gives the best value',
];

var NIGHTLY_BUDGET = [
  'Under 5,000 per room per night',
  '5,000 to 8,000 per room per night',
  '8,000 to 12,000 per room per night',
  'Over 12,000 per room per night',
  'Not sure, advise me',
];

var TOTAL_BUDGET = [
  'Under 60,000 per person',
  '60,000 to 1,00,000 per person',
  '1,00,000 to 1,50,000 per person',
  'Over 1,50,000 per person',
  'Not sure yet',
];

function buildBindhastForm() {
  var form = FormApp.create(BUSINESS_NAME + ' trip planner');
  form.setDescription(
    'Tell us what you want and we will come back with an exact price. ' +
    'It takes about five minutes. Prices shown against each activity are ' +
    'indicative per person and are confirmed before anything is booked.'
  );
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    'Thank you. Your itinerary and an estimated price are on their way to you by email. ' +
    REPLY_PROMISE
  );

  // The destination question needs its branch targets to exist first, so the
  // pages are built before the choices are attached.
  var destItem = form.addMultipleChoiceItem()
    .setTitle('Which destination?')
    .setRequired(true);

  var choices = [];
  for (var i = 0; i < DATA.length; i++) {
    var firstPage = buildDestination(form, DATA[i]);
    choices.push(destItem.createChoice(DATA[i].name, firstPage));
  }
  destItem.setChoices(choices);

  Logger.log('Edit the form:   ' + form.getEditUrl());
  Logger.log('Send this link:  ' + form.getPublishedUrl());
  Logger.log('Form id:         ' + form.getId());
  return form.getEditUrl();
}

function buildDestination(form, d) {
  var firstPage = form.addPageBreakItem()
    .setTitle(d.name + ': your dates')
    .setHelpText(
      'Best months: ' + d.bestMonths + '\n' +
      'Flight time: ' + d.flightTime + '\n' +
      'Visa: ' + d.visaType + '. ' + d.visaTimeline
    );

  form.addListItem().setTitle('Month of travel')
    .setChoiceValues(MONTHS).setRequired(true);

  var thisYear = new Date().getFullYear();
  form.addListItem().setTitle('Year of travel')
    .setChoiceValues([String(thisYear), String(thisYear + 1)]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('Are your dates flexible?')
    .setChoiceValues([
      'Yes, tell me if moving them is cheaper',
      'No, these dates are fixed',
    ]).setRequired(true);

  var tierLabels = [];
  for (var t = 0; t < d.tiers.length; t++) {
    var tier = d.tiers[t];
    tierLabels.push(
      tier.name + ' — ' + tier.days + ' days, ' + tier.nights +
      ' nights — land from ₹' + formatIndian(tier.from) + ' per person'
    );
  }
  form.addMultipleChoiceItem().setTitle('Which package length suits you?')
    .setChoiceValues(tierLabels).setRequired(true)
    .setHelpText('You can change the plan afterwards. This just sets the length.');

  /* --- travellers --- */
  form.addPageBreakItem().setTitle(d.name + ': who is travelling');

  form.addListItem().setTitle('Adults (12 to 59)')
    .setChoiceValues(numbers(0, 12)).setRequired(true);
  form.addListItem().setTitle('Children (under 12)')
    .setChoiceValues(numbers(0, 8)).setRequired(true);
  form.addTextItem().setTitle('Ages of the children')
    .setHelpText('Optional. Ages change activity pricing and what we suggest.');
  form.addListItem().setTitle('Seniors (60 and over)')
    .setChoiceValues(numbers(0, 8)).setRequired(true)
    .setHelpText('Same price as adults. It helps us pitch the pace correctly.');

  /* --- cities --- */
  var cityHelp = 'Our suggestion: ' + recommendedCities(d) +
    '. Pick whichever you want. You will see activities for each on the pages that follow.';
  form.addPageBreakItem().setTitle(d.name + ': which cities');
  form.addCheckboxItem().setTitle('Which cities do you want to include?')
    .setChoiceValues(d.cities).setRequired(true).setHelpText(cityHelp);

  /* --- stay --- */
  form.addPageBreakItem().setTitle(d.name + ': where you stay');
  form.addMultipleChoiceItem().setTitle('What kind of stay do you want?')
    .setChoiceValues(STAY_TYPES).setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Roughly what are you happy to spend per room per night?')
    .setChoiceValues(NIGHTLY_BUDGET).setRequired(true)
    .setHelpText(d.costNote);

  /* --- style --- */
  form.addPageBreakItem().setTitle(d.name + ': what kind of trip is this');
  form.addCheckboxItem().setTitle('What kind of trip is this?')
    .setChoiceValues(STYLES).setRequired(true)
    .setHelpText('Pick as many as apply. It tells us which activities to push and which to leave out.');

  /* --- one activity page per city --- */
  for (var c = 0; c < d.cities.length; c++) {
    var city = d.cities[c];
    var acts = activitiesInCity(d, city);
    if (acts.length === 0) continue;

    form.addPageBreakItem()
      .setTitle(d.name + ': things to do in ' + city)
      .setHelpText('Skip this page if you are not visiting ' + city +
        '. Nothing here is compulsory and a free day is a perfectly good choice.');

    // Forms cannot put a description under each option, so the descriptions
    // are listed here and the prices ride along in the option labels.
    form.addSectionHeaderItem()
      .setTitle('What these are')
      .setHelpText(describeAll(acts));

    // A video item can only take a YouTube URL. Only real links are added.
    for (var v = 0; v < acts.length; v++) {
      if (acts[v].videoUrl && acts[v].videoUrl.indexOf('youtu') !== -1) {
        form.addVideoItem().setTitle(acts[v].name).setHelpText(acts[v].description)
          .setVideoUrl(acts[v].videoUrl);
      }
    }

    form.addCheckboxItem()
      .setTitle('Activities in ' + city)
      .setChoiceValues(labelsOf(acts))
      .setHelpText('Prices are per person and indicative.');
  }

  /* --- budget and notes --- */
  form.addPageBreakItem().setTitle(d.name + ': budget');
  form.addMultipleChoiceItem()
    .setTitle('What is your overall budget per person, including flights?')
    .setChoiceValues(TOTAL_BUDGET).setRequired(true)
    .setHelpText(
      'Indicative return flights are ₹' + formatIndian(d.pricing.flightLow) +
      ' to ₹' + formatIndian(d.pricing.flightHigh) + ' per person' +
      (d.visaFee > 0 ? ', and the visa is ₹' + formatIndian(d.visaFee) + ' per person' : '') +
      '. Both are included in the estimate we send you.'
    );

  /* --- contact --- */
  var last = form.addPageBreakItem().setTitle('Where should we send your itinerary?');
  form.addTextItem().setTitle('Your name').setRequired(true);

  var phone = form.addTextItem().setTitle('WhatsApp number').setRequired(true);
  var phoneRule = FormApp.createTextValidation()
    .setHelpText('Enter a 10 digit Indian mobile number, for example 9876543210.')
    .requireTextMatchesPattern('^(\\+?91[\\-\\s]?)?[6-9][0-9]{9}$')
    .build();
  phone.setValidation(phoneRule);

  var email = form.addTextItem().setTitle('Email').setRequired(true)
    .setHelpText('We send your itinerary and estimate here within a few minutes.');
  email.setValidation(
    FormApp.createTextValidation()
      .setHelpText('Enter a valid email address.')
      .requireTextIsEmail()
      .build()
  );

  form.addParagraphTextItem().setTitle('Anything else we should know')
    .setHelpText('Occasion, dietary needs, mobility, hotel preferences, anything at all.');

  last.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  return firstPage;
}

/* ============================================================
 * 2. ON SUBMIT. Computes the estimate, emails both sides.
 * ============================================================ */

function onFormSubmit(e) {
  try {
    var answers = readAnswers(e);
    var d = findDestination(answers['Which destination?']);
    if (!d) return;

    var tier = findTier(d, answers['Which package length suits you?']);
    var party = {
      adults: toInt(answers['Adults (12 to 59)']),
      children: toInt(answers['Children (under 12)']),
      seniors: toInt(answers['Seniors (60 and over)']),
    };

    var picked = pickedActivities(d, answers);
    var monthIndex = MONTHS.indexOf(answers['Month of travel']) + 1;
    var est = estimate(d, tier, party, picked, monthIndex);

    emailCustomer(answers, d, tier, party, picked, est);
    emailOwner(answers, d, tier, party, picked, est);
    writeLeadRow(answers, d, tier, party, picked, est);
  } catch (err) {
    console.error('onFormSubmit failed: ' + err + '\n' + (err && err.stack));
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'Form submission could not be processed',
        'A response came in but the script failed.\n\n' + err +
        '\n\nOpen the responses sheet, the raw answers are still there.');
    }
  }
}

function estimate(d, tier, party, picked, month) {
  var p = d.pricing;
  var nights = tier ? tier.nights : 4;
  var fullFare = party.adults + party.seniors;
  var travellers = Math.max(1, fullFare + party.children);

  var season = seasonFor(p, month);

  var land =
    p.perNight * nights * fullFare +
    p.perNight * nights * party.children * p.childFactor +
    p.fixed * travellers;

  var activityTotal = 0;
  for (var i = 0; i < picked.length; i++) {
    activityTotal += picked[i].adult * fullFare;
    activityTotal += picked[i].child * party.children;
  }

  var landMid = land * season.multiplier + activityTotal;

  var landLow = roundEstimate(landMid * (1 - ESTIMATE_SPREAD));
  var landHigh = roundEstimate(landMid * (1 + ESTIMATE_SPREAD));
  var flightLow = roundEstimate(p.flightLow * travellers);
  var flightHigh = roundEstimate(p.flightHigh * travellers);

  return {
    travellers: travellers,
    season: season,
    nights: nights,
    activityTotal: activityTotal,
    landLow: landLow,
    landHigh: landHigh,
    flightLow: flightLow,
    flightHigh: flightHigh,
    totalLow: roundEstimate(landLow + flightLow),
    totalHigh: roundEstimate(landHigh + flightHigh),
    perPersonLow: roundEstimate((landLow + flightLow) / travellers),
    perPersonHigh: roundEstimate((landHigh + flightHigh) / travellers),
  };
}

function emailCustomer(a, d, tier, party, picked, est) {
  var to = a['Email'];
  if (!to) return;

  var lines = [];
  lines.push('Hello ' + (a['Your name'] || '') + ',');
  lines.push('');
  lines.push('Thank you for your enquiry. Here is what you asked for and what it is');
  lines.push('likely to cost. ' + REPLY_PROMISE);
  lines.push('');
  lines.push('YOUR TRIP');
  lines.push('Destination: ' + d.name + (tier ? ', ' + tier.name : ''));
  lines.push('Travel: ' + a['Month of travel'] + ' ' + a['Year of travel'] +
    ', ' + est.nights + ' nights');
  lines.push('Travellers: ' + describeParty(party));
  lines.push('Cities: ' + (a['Which cities do you want to include?'] || 'not specified'));
  lines.push('Staying in: ' + (a['What kind of stay do you want?'] || 'not specified'));
  lines.push('');

  if (tier) {
    lines.push('SUGGESTED ITINERARY');
    for (var i = 0; i < tier.itinerary.length; i++) {
      var day = tier.itinerary[i];
      lines.push('Day ' + day.day + '. ' + day.title + (day.city ? ' (' + day.city + ')' : ''));
      lines.push('  ' + day.detail);
    }
    lines.push('');
    lines.push('This is a suggestion, not a fixed schedule. We will rearrange it around you.');
    lines.push('');
  }

  if (picked.length > 0) {
    lines.push('ACTIVITIES YOU CHOSE');
    for (var j = 0; j < picked.length; j++) {
      lines.push('- ' + picked[j].name + ' (' + picked[j].city + '), about ' +
        picked[j].hours + ' hours');
      lines.push('  ' + picked[j].description);
    }
    lines.push('');
  } else {
    lines.push('You did not pick any activities yet. That is completely fine, we will');
    lines.push('suggest some on the call.');
    lines.push('');
  }

  lines.push('ESTIMATED PRICE');
  lines.push('Total for ' + est.travellers + ' ' +
    (est.travellers === 1 ? 'traveller' : 'travellers') + ': ₹' +
    formatIndian(est.totalLow) + ' to ₹' + formatIndian(est.totalHigh));
  lines.push('About ₹' + formatIndian(est.perPersonLow) + ' to ₹' +
    formatIndian(est.perPersonHigh) + ' per person.');
  lines.push('');
  lines.push('  Land package, hotels, transfers, visa and activities:');
  lines.push('    ₹' + formatIndian(est.landLow) + ' to ₹' + formatIndian(est.landHigh));
  lines.push('  Flights, estimated:');
  lines.push('    ₹' + formatIndian(est.flightLow) + ' to ₹' + formatIndian(est.flightHigh));
  if (d.visaFee > 0) {
    lines.push('  Visa is ₹' + formatIndian(d.visaFee) +
      ' per person and is already inside the land figure.');
  }
  lines.push('');
  lines.push('This is an estimate, not a quote. ' + a['Month of travel'] + ' is ' +
    est.season.label + ' season. ' + est.season.note);
  lines.push('Flights in particular move with the date. We confirm real prices on your');
  lines.push('dates before anything is booked.');
  lines.push('');

  lines.push('WHAT IS INCLUDED');
  for (var k = 0; k < d.included.length; k++) lines.push('- ' + d.included[k]);
  lines.push('');
  lines.push('WHAT IS NOT INCLUDED');
  for (var m = 0; m < d.notIncluded.length; m++) lines.push('- ' + d.notIncluded[m]);
  lines.push('');
  lines.push(BUSINESS_NAME);

  MailApp.sendEmail({
    to: to,
    subject: 'Your ' + d.name + ' itinerary and estimate',
    body: lines.join('\n'),
    name: BUSINESS_NAME,
  });
}

function emailOwner(a, d, tier, party, picked, est) {
  if (!NOTIFY_EMAIL) return;
  var names = [];
  for (var i = 0; i < picked.length; i++) names.push(picked[i].name);

  var body = [
    a['Your name'] + ', ' + a['WhatsApp number'] + ', ' + a['Email'],
    '',
    d.name + (tier ? ', ' + tier.name : '') + ', ' + est.nights + ' nights',
    'Travel: ' + a['Month of travel'] + ' ' + a['Year of travel'] +
      ' (' + (a['Are your dates flexible?'] || '') + ')',
    'Party: ' + describeParty(party) +
      (a['Ages of the children'] ? '. Child ages: ' + a['Ages of the children'] : ''),
    'Cities: ' + (a['Which cities do you want to include?'] || ''),
    'Trip style: ' + (a['What kind of trip is this?'] || ''),
    'Stay: ' + (a['What kind of stay do you want?'] || '') + ', ' +
      (a['Roughly what are you happy to spend per room per night?'] || ''),
    'Stated budget: ' + (a['What is your overall budget per person, including flights?'] || ''),
    '',
    'Activities (' + picked.length + '), worth ₹' + formatIndian(est.activityTotal) + ':',
    names.length ? '  ' + names.join('\n  ') : '  none chosen',
    '',
    'Estimate sent to them: ₹' + formatIndian(est.totalLow) + ' to ₹' +
      formatIndian(est.totalHigh) + ' for ' + est.travellers,
    '',
    'Notes: ' + (a['Anything else we should know'] || 'none'),
  ].join('\n');

  MailApp.sendEmail(NOTIFY_EMAIL,
    'Lead: ' + a['Your name'] + ', ' + d.name + ', ' + describeParty(party), body);
}

/** A readable one row per lead summary, next to the raw Form responses. */
function writeLeadRow(a, d, tier, party, picked, est) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;
  var sheet = ss.getSheetByName('Leads');
  var headers = [
    'timestamp', 'name', 'phone', 'email', 'status', 'ownerNotes',
    'destination', 'package', 'month', 'year', 'flexible', 'nights',
    'adults', 'children', 'childAges', 'seniors', 'totalTravellers',
    'cities', 'tripStyle', 'stayType', 'nightlyBudget', 'statedBudget',
    'activityCount', 'activities', 'activityTotal',
    'estimateLow', 'estimateHigh', 'perPersonLow', 'perPersonHigh', 'season', 'notes',
  ];
  if (!sheet) {
    sheet = ss.insertSheet('Leads');
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  var names = [];
  for (var i = 0; i < picked.length; i++) names.push(picked[i].name);

  sheet.appendRow([
    new Date(),
    clean(a['Your name']), clean(a['WhatsApp number']), clean(a['Email']),
    'new', '',
    d.name, tier ? tier.name : '', clean(a['Month of travel']), clean(a['Year of travel']),
    clean(a['Are your dates flexible?']), est.nights,
    party.adults, party.children, clean(a['Ages of the children']), party.seniors,
    est.travellers,
    clean(a['Which cities do you want to include?']),
    clean(a['What kind of trip is this?']),
    clean(a['What kind of stay do you want?']),
    clean(a['Roughly what are you happy to spend per room per night?']),
    clean(a['What is your overall budget per person, including flights?']),
    picked.length, clean(names.join(', ')), est.activityTotal,
    est.totalLow, est.totalHigh, est.perPersonLow, est.perPersonHigh,
    est.season.label,
    clean(a['Anything else we should know']),
  ]);
}

/* ============================================================
 * helpers
 * ============================================================ */

function readAnswers(e) {
  var out = {};
  var responses = e.response.getItemResponses();
  for (var i = 0; i < responses.length; i++) {
    var title = responses[i].getItem().getTitle();
    var value = responses[i].getResponse();
    if (Object.prototype.toString.call(value) === '[object Array]') value = value.join(', ');
    // Only one destination branch is ever answered, so later blanks must not
    // overwrite a real answer from the branch the person actually filled in.
    if (value !== '' && value != null) out[title] = value;
  }
  return out;
}

function findDestination(name) {
  for (var i = 0; i < DATA.length; i++) if (DATA[i].name === name) return DATA[i];
  return null;
}

function findTier(d, label) {
  if (!label) return d.tiers[0];
  for (var i = 0; i < d.tiers.length; i++) {
    if (label.indexOf(d.tiers[i].name) === 0) return d.tiers[i];
  }
  return d.tiers[0];
}

function pickedActivities(d, answers) {
  var chosen = [];
  for (var c = 0; c < d.cities.length; c++) {
    var raw = answers['Activities in ' + d.cities[c]];
    if (!raw) continue;
    for (var i = 0; i < d.activities.length; i++) {
      var a = d.activities[i];
      if (a.city === d.cities[c] && raw.indexOf(a.label) !== -1) chosen.push(a);
    }
  }
  return chosen;
}

function activitiesInCity(d, city) {
  var out = [];
  for (var i = 0; i < d.activities.length; i++) {
    if (d.activities[i].city === city) out.push(d.activities[i]);
  }
  return out;
}

function labelsOf(acts) {
  var out = [];
  for (var i = 0; i < acts.length; i++) out.push(acts[i].label);
  return out;
}

function describeAll(acts) {
  var out = [];
  for (var i = 0; i < acts.length; i++) {
    var a = acts[i];
    var line = a.name + ': ' + a.description;
    if (a.audience === 'adult') line += ' Adults only.';
    if (a.intensity === 'high') line += ' Physically demanding.';
    if (a.note) line += ' ' + a.note + '.';
    if (a.infoUrl) line += ' More detail: ' + a.infoUrl;
    out.push(line);
  }
  return out.join('\n\n');
}

function recommendedCities(d) {
  var main = d.tiers[0] && d.tiers[0].itinerary ? d.tiers[0].itinerary : [];
  var seen = [];
  for (var i = 0; i < main.length; i++) {
    if (main[i].city && seen.indexOf(main[i].city) === -1) seen.push(main[i].city);
  }
  return seen.length ? seen.join(' and ') : d.cities.join(' and ');
}

function seasonFor(pricing, month) {
  for (var i = 0; i < pricing.seasons.length; i++) {
    if (pricing.seasons[i].months.indexOf(month) !== -1) return pricing.seasons[i];
  }
  return pricing.seasons[0];
}

function describeParty(p) {
  var bits = [];
  if (p.adults) bits.push(p.adults + ' ' + (p.adults === 1 ? 'adult' : 'adults'));
  if (p.children) bits.push(p.children + ' ' + (p.children === 1 ? 'child' : 'children'));
  if (p.seniors) bits.push(p.seniors + ' ' + (p.seniors === 1 ? 'senior' : 'seniors'));
  return bits.length ? bits.join(', ') : '1 adult';
}

function roundEstimate(n) {
  if (n >= 100000) return Math.round(n / 5000) * 5000;
  if (n >= 20000) return Math.round(n / 1000) * 1000;
  return Math.round(n / 500) * 500;
}

/** Indian digit grouping: 78,000 and 1,25,000. */
function formatIndian(n) {
  n = Math.round(Number(n) || 0);
  var s = String(Math.abs(n));
  if (s.length <= 3) return (n < 0 ? '-' : '') + s;
  var last3 = s.slice(-3);
  var rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return (n < 0 ? '-' : '') + rest + ',' + last3;
}

function numbers(from, to) {
  var out = [];
  for (var i = from; i <= to; i++) out.push(String(i));
  return out;
}

function toInt(v) {
  var n = parseInt(v, 10);
  return isNaN(n) ? 0 : n;
}

/** Caps length and defuses anything Sheets would run as a formula. */
function clean(v) {
  if (v === null || v === undefined) return '';
  var s = String(v).replace(/[\x00-\x1F\x7F]/g, ' ').trim();
  if (s.length > 1000) s = s.substring(0, 1000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
