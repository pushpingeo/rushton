// Voyage data for W. J. Rushton — A Life at Sea
// Compiled from transcriptions/engagements.csv (the hand-checked CRS10 engagement
// register) joined against transcriptions/cards.csv + IMG_*.csv (the transcribed
// voyage-card port-call sequences) and data/ports.csv (port coordinates).
// Loaded as a classic script (not an ES module) so index.html
// still works when opened directly via file:// as well as when served.
const VOYAGES = [
  {
    "id": "ss-ortega-1918",
    "ship": "SS Ortega",
    "ship_no": "123976",
    "line": "Pacific Steam Navigation Co.",
    "built": "1906",
    "tons": "8,075 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "29 Oct 1918, Liverpool",
    "discharged": "11 Nov 1918, Ellis Island New York",
    "engagement_date": "1918-10-29",
    "discharge_date": "1918-11-11",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on SS Ortega from 29 Oct 1918, Liverpool to 11 Nov 1918, Ellis Island New York.",
    "voyage_note": "Verification: No transcribed CRS10 card exists for this vessel in the current collection (49 scanned cards are all later 'City of...' ships) — unverifiable against card data.",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "register: Liverpool"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "register: Ellis Island New York"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -6.274194,
            52.030384
          ],
          [
            -6.843006,
            51.911162
          ],
          [
            -8.045595,
            51.659101
          ],
          [
            -9.6,
            51.3333
          ],
          [
            -10.8,
            51.3
          ],
          [
            -12.36921,
            51.078264
          ],
          [
            -14.920876,
            50.717702
          ],
          [
            -15.688076,
            50.609294
          ],
          [
            -16.72313,
            50.463036
          ],
          [
            -19.2306,
            50.5539
          ],
          [
            -19.529903,
            50.548409
          ],
          [
            -20.000464,
            50.539776
          ],
          [
            -20.509014,
            50.530446
          ],
          [
            -25.6242,
            50.4366
          ],
          [
            -29.894016,
            50.123642
          ],
          [
            -30.0001,
            50.115866
          ],
          [
            -30.103901,
            50.108258
          ],
          [
            -30.170671,
            50.103364
          ],
          [
            -31.580914,
            50
          ],
          [
            -31.9411,
            49.9736
          ],
          [
            -38.0964,
            49.1767
          ],
          [
            -38.952623,
            49.016058
          ],
          [
            -40.000709,
            48.819419
          ],
          [
            -41.658626,
            48.508366
          ],
          [
            -44.0207,
            48.0652
          ],
          [
            -47.121001,
            47.29537
          ],
          [
            -49.6649,
            46.6637
          ],
          [
            -50.002066,
            46.558558
          ],
          [
            -55,
            45
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -70.0641,
            41.4823
          ],
          [
            -70.2305,
            41.4442
          ],
          [
            -70.2864,
            41.4528
          ],
          [
            -70.5527,
            41.4794
          ],
          [
            -70.6342,
            41.5038
          ],
          [
            -70.6704,
            41.4908
          ],
          [
            -70.8432,
            41.4056
          ],
          [
            -70.8921,
            41.3891
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/123976_ss_ortega.jpeg"
  },
  {
    "id": "ss-ortega-1919",
    "ship": "SS Ortega",
    "ship_no": "123976",
    "line": "Pacific Steam Navigation Co.",
    "built": "1906",
    "tons": "8,075 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "8 Feb 1919, Liverpool",
    "discharged": "19 Feb 1919, NYC",
    "engagement_date": "1919-02-08",
    "discharge_date": "1919-02-19",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on SS Ortega from 8 Feb 1919, Liverpool to 19 Feb 1919, NYC.",
    "voyage_note": "Verification: No transcribed CRS10 card exists for this vessel — unverifiable.",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "register: Liverpool"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "register: NYC"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -6.274194,
            52.030384
          ],
          [
            -6.843006,
            51.911162
          ],
          [
            -8.045595,
            51.659101
          ],
          [
            -9.6,
            51.3333
          ],
          [
            -10.8,
            51.3
          ],
          [
            -12.36921,
            51.078264
          ],
          [
            -14.920876,
            50.717702
          ],
          [
            -15.688076,
            50.609294
          ],
          [
            -16.72313,
            50.463036
          ],
          [
            -19.2306,
            50.5539
          ],
          [
            -19.529903,
            50.548409
          ],
          [
            -20.000464,
            50.539776
          ],
          [
            -20.509014,
            50.530446
          ],
          [
            -25.6242,
            50.4366
          ],
          [
            -29.894016,
            50.123642
          ],
          [
            -30.0001,
            50.115866
          ],
          [
            -30.103901,
            50.108258
          ],
          [
            -30.170671,
            50.103364
          ],
          [
            -31.580914,
            50
          ],
          [
            -31.9411,
            49.9736
          ],
          [
            -38.0964,
            49.1767
          ],
          [
            -38.952623,
            49.016058
          ],
          [
            -40.000709,
            48.819419
          ],
          [
            -41.658626,
            48.508366
          ],
          [
            -44.0207,
            48.0652
          ],
          [
            -47.121001,
            47.29537
          ],
          [
            -49.6649,
            46.6637
          ],
          [
            -50.002066,
            46.558558
          ],
          [
            -55,
            45
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -70.0641,
            41.4823
          ],
          [
            -70.2305,
            41.4442
          ],
          [
            -70.2864,
            41.4528
          ],
          [
            -70.5527,
            41.4794
          ],
          [
            -70.6342,
            41.5038
          ],
          [
            -70.6704,
            41.4908
          ],
          [
            -70.8432,
            41.4056
          ],
          [
            -70.8921,
            41.3891
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/123976_ss_ortega.jpeg"
  },
  {
    "id": "sycamore-1924",
    "ship": "Sycamore",
    "ship_no": "140520",
    "line": "Unknown",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "11 Apr 1924, ",
    "discharged": "13 Mar 1925, ",
    "engagement_date": "1924-04-11",
    "discharge_date": "1925-03-13",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Sycamore from 11 Apr 1924,  to 13 Mar 1925, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder matching the next engagement — cannot verify or refine without additional card material. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/140520_sycamore.jpeg"
  },
  {
    "id": "leicestershire-1925",
    "ship": "Leicestershire",
    "ship_no": "127995",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "13 Mar 1925, ",
    "discharged": "13 Jun 1925, ",
    "engagement_date": "1925-03-13",
    "discharge_date": "1925-06-13",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Leicestershire from 13 Mar 1925,  to 13 Jun 1925, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/127995_leicestershire.jpeg"
  },
  {
    "id": "carmania-1925",
    "ship": "Carmania",
    "ship_no": "120901",
    "line": "Cunard Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "13 Jun 1925, ",
    "discharged": "31 Jul 1925, ",
    "engagement_date": "1925-06-13",
    "discharge_date": "1925-07-31",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Carmania from 13 Jun 1925,  to 31 Jul 1925, .",
    "voyage_note": "USA immigration record: 25th June arrived NYC Verification: No transcribed card for this vessel — the 'arrived NYC 25th June' immigration note cannot be cross-checked. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/120901_carmania.jpeg"
  },
  {
    "id": "oxfordshire-1925",
    "ship": "Oxfordshire",
    "ship_no": "131454",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "31 Jul 1925, ",
    "discharged": "10 Aug 1925, ",
    "engagement_date": "1925-07-31",
    "discharge_date": "1925-08-10",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Oxfordshire from 31 Jul 1925,  to 10 Aug 1925, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/131454_oxfordshire.jpeg"
  },
  {
    "id": "warwickshire-1925",
    "ship": "Warwickshire",
    "ship_no": "115258",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "10 Aug 1925, ",
    "discharged": "2 Dec 1927, ",
    "engagement_date": "1925-08-10",
    "discharge_date": "1927-12-02",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Warwickshire from 10 Aug 1925,  to 2 Dec 1927, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/115258_warwickshire.jpeg"
  },
  {
    "id": "yorkshire-1927",
    "ship": "Yorkshire",
    "ship_no": "143663",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "2 Dec 1927, ",
    "discharged": "8 Nov 1935, ",
    "engagement_date": "1927-12-02",
    "discharge_date": "1935-11-08",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Yorkshire from 2 Dec 1927,  to 8 Nov 1935, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder despite an 8-year service gap — unverifiable without further source material. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/143663_yorkshire.jpg"
  },
  {
    "id": "derbyshire-1935",
    "ship": "Derbyshire",
    "ship_no": "164273",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "8 Nov 1935, ",
    "discharged": "3 Dec 1937, ",
    "engagement_date": "1935-11-08",
    "discharge_date": "1937-12-03",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Derbyshire from 8 Nov 1935,  to 3 Dec 1937, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/164273_derbyshire.jpeg"
  },
  {
    "id": "cheshire-1937",
    "ship": "Cheshire",
    "ship_no": "149625",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "3 Dec 1937, ",
    "discharged": "22 Apr 1938, ",
    "engagement_date": "1937-12-03",
    "discharge_date": "1938-04-22",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Cheshire from 3 Dec 1937,  to 22 Apr 1938, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/149625_cheshire.jpeg"
  },
  {
    "id": "shropshire-1938",
    "ship": "Shropshire",
    "ship_no": "149001",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "22 Apr 1938, ",
    "discharged": "8 Sep 1939, ",
    "engagement_date": "1938-04-22",
    "discharge_date": "1939-09-08",
    "rank": "Assistant Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Assistant Steward on Shropshire from 22 Apr 1938,  to 8 Sep 1939, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/149001_shropshire.jpeg"
  },
  {
    "id": "staffordshire-1939",
    "ship": "Staffordshire",
    "ship_no": "161082",
    "line": "Bibby Line",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "8 Sep 1939, ",
    "discharged": "16 Jun 1940, ",
    "engagement_date": "1939-09-08",
    "discharge_date": "1940-06-16",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Staffordshire from 8 Sep 1939,  to 16 Jun 1940, .",
    "voyage_note": "Verification: No transcribed card for this vessel. Discharge date is a same-day placeholder — unverifiable. No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/161082_staffordshire.jpeg"
  },
  {
    "id": "city-of-dunkirk-1940",
    "ship": "City of Dunkirk",
    "ship_no": "131464",
    "line": "Ellerman Lines (City Line)",
    "built": "1912",
    "tons": "4,872 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "16 Jun 1940, ",
    "discharged": "22 Oct 1941, Hull",
    "engagement_date": "1940-06-16",
    "discharge_date": "1941-10-22",
    "rank": "Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Chief Steward on City of Dunkirk from 16 Jun 1940,  to 22 Oct 1941, Hull.",
    "voyage_note": "Verification: No transcribed card for this vessel in the current collection — unverifiable.",
    "waypoints": [
      {
        "port": "Hull",
        "lon": -0.3301214,
        "lat": 53.7623863,
        "verified": true,
        "note": "register: Hull"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/131464_city_of_dunkirk.jpeg"
  },
  {
    "id": "city-of-rangoon-1941",
    "ship": "City of Rangoon",
    "ship_no": "135582",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,272 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "26 Nov 1941, Birkenhead",
    "discharged": "17 Aug 1942, Manchester",
    "engagement_date": "1941-11-26",
    "discharge_date": "1942-08-17",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Rangoon from 26 Nov 1941, Birkenhead to 17 Aug 1942, Manchester. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "sailing 29/11 1941"
      },
      {
        "port": "Freetown",
        "lon": -13.26795,
        "lat": 8.479004,
        "verified": true,
        "note": "arrival 21/12 1941; sailing 8/1 1942"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival 22/1 1942"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival 11/5 1942; sailing 18/5 1942"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival 19/5 1942; sailing 22/5 1942"
      },
      {
        "port": "Beira",
        "lon": 34.8389,
        "lat": -19.8436,
        "verified": true,
        "note": "arrival 24/5 1942; sailing 31/5 1942"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival 2/6 1942"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival 13/6 1942; sailing 17/6 1942"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival 21/6 1942; sailing 30/6 1942"
      },
      {
        "port": "Freetown",
        "lon": -13.26795,
        "lat": 8.479004,
        "verified": true,
        "note": "arrival 5/7 1942; sailing 25/7 1942"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival 15/8 1942"
      },
      {
        "port": "Manchester",
        "lon": -2.2324547,
        "lat": 53.4424618,
        "verified": true,
        "note": "arrival 16/8 1942"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5650.jpeg",
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5651.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -6.022929,
            51.019331
          ],
          [
            -6.132679,
            50.813392
          ],
          [
            -6.236156,
            50.619224
          ],
          [
            -6.674013,
            49.79761
          ],
          [
            -6.686732,
            49.773745
          ],
          [
            -6.692563,
            49.762802
          ],
          [
            -6.693996,
            49.760113
          ],
          [
            -6.69652,
            49.755378
          ],
          [
            -6.697411,
            49.753705
          ],
          [
            -6.709922,
            49.73023
          ],
          [
            -7.193705,
            48.822439
          ],
          [
            -7.371242,
            48.489301
          ],
          [
            -7.679507,
            47.910861
          ],
          [
            -7.907145,
            47.483711
          ],
          [
            -10.063992,
            43.402334
          ],
          [
            -10.167909,
            43.146826
          ],
          [
            -10.289669,
            42.796988
          ],
          [
            -11.070622,
            40.553191
          ],
          [
            -11.158374,
            40.301066
          ],
          [
            -11.664545,
            38.84676
          ],
          [
            -11.81009,
            38.428587
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -12.131862,
            37.504085
          ],
          [
            -12.262448,
            37.128892
          ],
          [
            -12.32612,
            36.945951
          ],
          [
            -12.493983,
            36.463656
          ],
          [
            -12.608538,
            36.134522
          ],
          [
            -12.761203,
            35.695892
          ],
          [
            -12.839781,
            35.470126
          ],
          [
            -13.114888,
            34.6797
          ],
          [
            -13.32875,
            34.065242
          ],
          [
            -13.9051,
            32.4093
          ],
          [
            -15.172119,
            29.337503
          ],
          [
            -15.145809,
            28.538331
          ],
          [
            -15.128174,
            27.999252
          ],
          [
            -18,
            21
          ],
          [
            -18,
            15
          ],
          [
            -17,
            11
          ],
          [
            -14.5,
            8.5
          ],
          [
            -13.282471,
            8.553862
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -13.282471,
            8.553862
          ],
          [
            -14.5,
            8.5
          ],
          [
            -11.5,
            5.5
          ],
          [
            -7.5,
            3.5
          ],
          [
            -3.7467,
            1.753
          ],
          [
            -2.368781,
            1.108294
          ],
          [
            -1.743578,
            -2e-05
          ],
          [
            -1.108984,
            -1.124983
          ],
          [
            0.000167,
            -3.091205
          ],
          [
            2.295228,
            -7.159723
          ],
          [
            3.739652,
            -9.720292
          ],
          [
            6.364889,
            -14.374122
          ],
          [
            11,
            -19
          ],
          [
            13.80944,
            -22.909209
          ],
          [
            14.534912,
            -26.863281
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            22,
            -35
          ],
          [
            26,
            -34.5
          ],
          [
            28.5,
            -33.5
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            36,
            -24
          ],
          [
            35.408936,
            -20.004322
          ],
          [
            34.788208,
            -19.87006
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            34.788208,
            -19.87006
          ],
          [
            35.408936,
            -20.004322
          ],
          [
            36,
            -24
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            32,
            -30
          ],
          [
            28.5,
            -33.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            26,
            -34.5
          ],
          [
            22,
            -35
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            14.534912,
            -26.863281
          ],
          [
            13.80944,
            -22.909209
          ],
          [
            11,
            -19
          ],
          [
            6.364889,
            -14.374122
          ],
          [
            3.739652,
            -9.720292
          ],
          [
            2.295228,
            -7.159723
          ],
          [
            0.000167,
            -3.091205
          ],
          [
            -1.108984,
            -1.124983
          ],
          [
            -1.743578,
            -2e-05
          ],
          [
            -2.368781,
            1.108294
          ],
          [
            -3.7467,
            1.753
          ],
          [
            -7.5,
            3.5
          ],
          [
            -11.5,
            5.5
          ],
          [
            -14.5,
            8.5
          ],
          [
            -13.282471,
            8.553862
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            -13.282471,
            8.553862
          ],
          [
            -14.5,
            8.5
          ],
          [
            -17,
            11
          ],
          [
            -18,
            15
          ],
          [
            -18,
            21
          ],
          [
            -15.128174,
            27.999252
          ],
          [
            -15.145809,
            28.538331
          ],
          [
            -15.172119,
            29.337503
          ],
          [
            -13.9051,
            32.4093
          ],
          [
            -13.32875,
            34.065242
          ],
          [
            -13.114888,
            34.6797
          ],
          [
            -12.839781,
            35.470126
          ],
          [
            -12.761203,
            35.695892
          ],
          [
            -12.608538,
            36.134522
          ],
          [
            -12.493983,
            36.463656
          ],
          [
            -12.32612,
            36.945951
          ],
          [
            -12.262448,
            37.128892
          ],
          [
            -12.131862,
            37.504085
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -11.81009,
            38.428587
          ],
          [
            -11.664545,
            38.84676
          ],
          [
            -11.158374,
            40.301066
          ],
          [
            -11.070622,
            40.553191
          ],
          [
            -10.289669,
            42.796988
          ],
          [
            -10.167909,
            43.146826
          ],
          [
            -10.063992,
            43.402334
          ],
          [
            -7.907145,
            47.483711
          ],
          [
            -7.679507,
            47.910861
          ],
          [
            -7.371242,
            48.489301
          ],
          [
            -7.193705,
            48.822439
          ],
          [
            -6.709922,
            49.73023
          ],
          [
            -6.697411,
            49.753705
          ],
          [
            -6.69652,
            49.755378
          ],
          [
            -6.693996,
            49.760113
          ],
          [
            -6.692563,
            49.762802
          ],
          [
            -6.686732,
            49.773745
          ],
          [
            -6.674013,
            49.79761
          ],
          [
            -6.236156,
            50.619224
          ],
          [
            -6.132679,
            50.813392
          ],
          [
            -6.022929,
            51.019331
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -2.887001,
            53.312827
          ],
          [
            -2.764778,
            53.319595
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135582_city_of_rangoon.jpeg"
  },
  {
    "id": "city-of-rangoon-1942",
    "ship": "City of Rangoon",
    "ship_no": "135582",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,272 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "18 Aug 1942, Manchester",
    "discharged": "20 Aug 1942, Manchester",
    "engagement_date": "1942-08-18",
    "discharge_date": "1942-08-20",
    "rank": "Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Chief Steward on City of Rangoon from 18 Aug 1942, Manchester to 20 Aug 1942, Manchester. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Manchester",
        "lon": -2.2324547,
        "lat": 53.4424618,
        "verified": true,
        "note": "register: Manchester"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135582_city_of_rangoon.jpeg"
  },
  {
    "id": "city-of-norwich-1942",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "12 Sep 1942, Glasgow",
    "discharged": "21 Dec 1942, Liverpool",
    "engagement_date": "1942-09-12",
    "discharge_date": "1942-12-21",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Norwich from 12 Sep 1942, Glasgow to 21 Dec 1942, Liverpool. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "sailing 16/9 1942"
      },
      {
        "port": "Tail of the Bank",
        "lon": -4.7597,
        "lat": 55.9581,
        "verified": true,
        "note": "arrival 16/9 1942"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 16/9 1942"
      },
      {
        "port": "Tail of the Bank",
        "lon": -4.7597,
        "lat": 55.9581,
        "verified": true,
        "note": "sailing 26/9 1942"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 26/9 1942"
      },
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "arrival 26/9 1942; sailing 5/10 1942"
      },
      {
        "port": "Tail of the Bank",
        "lon": -4.7597,
        "lat": 55.9581,
        "verified": true,
        "note": "arrival 5/10 1942"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 5/10 1942"
      },
      {
        "port": "Loch Ewe",
        "lon": -5.6344503,
        "lat": 57.8212502,
        "verified": true,
        "note": "arrival 8/10 1942; sailing 24-25/10 1942"
      },
      {
        "port": "Bougie",
        "lon": 5.0667,
        "lat": 36.75,
        "verified": true,
        "note": "arrival 15/11 1942; sailing 25/11 1942"
      },
      {
        "port": "Algiers",
        "lon": 3.0588445,
        "lat": 36.7729333,
        "verified": true,
        "note": "arrival 29/11 1942; sailing 1/12 1942"
      },
      {
        "port": "Gibraltar",
        "lon": -5.3474761,
        "lat": 36.1285933,
        "verified": true,
        "note": "arrival 4/12 1942; sailing 8/12 1942"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival 19/12 1942"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5647.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.54422,
            55.924586
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.854566,
            55.309107
          ],
          [
            -6.201782,
            55.422779
          ],
          [
            -6.654443,
            55.698575
          ],
          [
            -6.580727,
            56.173018
          ],
          [
            -6.567442,
            56.420585
          ],
          [
            -6.38018,
            56.622089
          ],
          [
            -6.316952,
            56.690147
          ],
          [
            -5.8274,
            57.0506
          ],
          [
            -5.658717,
            57.22077
          ],
          [
            -5.655077,
            57.267716
          ],
          [
            -5.778249,
            57.284772
          ],
          [
            -5.894746,
            57.347681
          ],
          [
            -5.9098,
            57.5462
          ],
          [
            -5.87533,
            57.823831
          ],
          [
            -5.784214,
            58.005856
          ],
          [
            -5.5308,
            57.9274
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            -5.5308,
            57.9274
          ],
          [
            -5.784214,
            58.005856
          ],
          [
            -5.857551,
            58.028561
          ],
          [
            -6.118044,
            57.852952
          ],
          [
            -6.287926,
            57.738428
          ],
          [
            -6.527774,
            57.688641
          ],
          [
            -6.7173,
            57.6493
          ],
          [
            -6.870262,
            57.404779
          ],
          [
            -7.0414,
            57.1312
          ],
          [
            -7.1,
            56.9
          ],
          [
            -7.661853,
            56.486873
          ],
          [
            -10.5,
            54.4
          ],
          [
            -10.2,
            53
          ],
          [
            -10.472335,
            52.228385
          ],
          [
            -10.646733,
            51.734257
          ],
          [
            -10.8,
            51.3
          ],
          [
            -10.754063,
            50.707477
          ],
          [
            -10.717387,
            50.234397
          ],
          [
            -10.709054,
            50.126917
          ],
          [
            -10.694975,
            49.945308
          ],
          [
            -10.690172,
            49.88336
          ],
          [
            -10.632436,
            49.138636
          ],
          [
            -10.630839,
            49.118042
          ],
          [
            -10.558668,
            48.187125
          ],
          [
            -10.462429,
            46.945761
          ],
          [
            -10.404053,
            46.192784
          ],
          [
            -10.194961,
            43.495763
          ],
          [
            -10.176425,
            43.256675
          ],
          [
            -10.167909,
            43.146826
          ],
          [
            -10.143696,
            42.834516
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.417056,
            36.339533
          ],
          [
            -4.070282,
            36.488703
          ],
          [
            -3.811553,
            36.6
          ],
          [
            -3.559793,
            36.6
          ],
          [
            -3.464998,
            36.6
          ],
          [
            -2.508613,
            36.6
          ],
          [
            -2.1,
            36.6
          ],
          [
            -0.182736,
            37.508837
          ],
          [
            0.075557,
            37.631275
          ],
          [
            0.128088,
            37.656176
          ],
          [
            1.542546,
            38.326669
          ],
          [
            2.426923,
            38.745888
          ],
          [
            3.031664,
            39.032552
          ],
          [
            3.429353,
            38.942011
          ],
          [
            4.200818,
            38.766372
          ],
          [
            5.0023,
            38.5839
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            5.0023,
            38.5839
          ],
          [
            4.200818,
            38.766372
          ],
          [
            3.294502,
            37.47676
          ],
          [
            3.1,
            37.2
          ],
          [
            3.11592,
            36.800164
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            3.11592,
            36.800164
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.343132,
            36.110975
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            -5.343132,
            36.110975
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1943",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "3 Jan 1943, Liverpool",
    "discharged": "15 Jan 1943, Liverpool",
    "engagement_date": "1943-01-03",
    "discharge_date": "1943-01-15",
    "rank": "Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Chief Steward on City of Norwich from 3 Jan 1943, Liverpool to 15 Jan 1943, Liverpool. Engagement type: foreign-going.",
    "voyage_note": "Verification: CHECKED (assumed discharge date): card (IMG_5647) confirms the ship was docked in Liverpool through ~19 Jan 1943 — consistent with an engage/discharge cycle inside that layup, though the card can't pin the exact administrative day any tighter.",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "register: Liverpool"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1943-2",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "15 Jan 1943, Birkenhead",
    "discharged": "3 Mar 1943, Liverpool",
    "engagement_date": "1943-01-15",
    "discharge_date": "1943-03-03",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Norwich from 15 Jan 1943, Birkenhead to 3 Mar 1943, Liverpool. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival 19/1 1943"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 20/1 1943; sailing 21/1 1943"
      },
      {
        "port": "Algiers",
        "lon": 3.0588445,
        "lat": 36.7729333,
        "verified": true,
        "note": "arrival 7/2 1943; sailing 19/2 1943"
      },
      {
        "port": "River Mersey",
        "lon": -2.8937832,
        "lat": 53.304895,
        "verified": true,
        "note": "arrival 1/3 1943"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival 1/3 1943"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5647.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            3.11592,
            36.800164
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            3.11592,
            36.800164
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ],
          [
            -2.887001,
            53.312827
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            -2.887001,
            53.312827
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1943-3",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "10 Mar 1943, Liverpool",
    "discharged": "23 Mar 1943, Birkenhead",
    "engagement_date": "1943-03-10",
    "discharge_date": "1943-03-23",
    "rank": "Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Chief Steward on City of Norwich from 10 Mar 1943, Liverpool to 23 Mar 1943, Birkenhead. Engagement type: home-trade.",
    "voyage_note": "Verification: CHECKED (assumed discharge date): card (IMG_5647) shows the ship still in Liverpool, sailing 25 Mar 1943 — a minor 2-day discrepancy with the stated 23 Mar discharge, but same port/window.",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "register: Liverpool"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1943-4",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "23 Mar 1943, Birkenhead",
    "discharged": "3 Jun 1943, Avonmouth",
    "engagement_date": "1943-03-23",
    "discharge_date": "1943-06-03",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Norwich from 23 Mar 1943, Birkenhead to 3 Jun 1943, Avonmouth. Engagement type: home-trade.",
    "voyage_note": "Verification: CHECKED: card (IMG_5647) confirms arrival Avonmouth 2 Jun 1943 - resolves the register's own flagged ambiguity ('Amouth: Weymouth",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "sailing 25/3 1943"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 26/3 1943"
      },
      {
        "port": "Greenock",
        "lon": -4.7564721,
        "lat": 55.9473423,
        "verified": true,
        "note": "arrival 28-29/3 1943"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "sailing 31/3 1943"
      },
      {
        "port": "Algiers",
        "lon": 3.0588445,
        "lat": 36.7729333,
        "verified": true,
        "note": "arrival 14/4 1943; sailing 29/4 1943"
      },
      {
        "port": "Gibraltar",
        "lon": -5.3474761,
        "lat": 36.1285933,
        "verified": true,
        "note": "arrival 2/5 1943; sailing 22/5 1943"
      },
      {
        "port": "Belfast Loch",
        "lon": -5.7330755,
        "lat": 54.6848407,
        "verified": true,
        "note": "arrival 1/6 1943; sailing 1/6 1943"
      },
      {
        "port": "Avonmouth",
        "lon": -2.705,
        "lat": 51.5075,
        "verified": true,
        "note": "arrival 2/6 1943"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5647.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            3.11592,
            36.800164
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            3.11592,
            36.800164
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.343132,
            36.110975
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            -5.343132,
            36.110975
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.487915,
            54.727708
          ],
          [
            -5.686931,
            54.713691
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            -5.686931,
            54.713691
          ],
          [
            -5.487915,
            54.727708
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.734909,
            51.501049
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1943-5",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "14 Jun 1943, Avonmouth",
    "discharged": "16 Jun 1944, ",
    "engagement_date": "1943-06-14",
    "discharge_date": "1944-06-16",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Norwich from 14 Jun 1943, Avonmouth to 16 Jun 1944, . Engagement type: foreign-going.",
    "voyage_note": "USA immigration record: R/Hall Line Lici Verification: CHECKED: card (IMG_5647) confirms Avonmouth sailing 22 Jun 1943 - same resolution as the preceding row's discharge place.",
    "waypoints": [
      {
        "port": "Avonmouth",
        "lon": -2.705,
        "lat": 51.5075,
        "verified": true,
        "note": "sailing 22/6 1943"
      },
      {
        "port": "Milford Haven",
        "lon": -5.0359395,
        "lat": 51.7130946,
        "verified": true,
        "note": "arrival 22/6 1943; sailing 23/6 1943"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival 9/7 1943; arrival 3/8 1943"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival 4/8 1943; sailing 7/8 1943"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival 3/9 1943; sailing 5/9 1943"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival 5/9 1943; sailing 5/9 1943"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 10/9 1943; sailing 13/9 1943"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival 17/9 1943; sailing 9/10 1943"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 14/10 1943; sailing 14/10 1943"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival 18/10 1943"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 11/2 1944"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival 11/2 1944; sailing 20/3 1944"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 22/3 1944"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 29/3 1944; sailing 9/4 1944"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 18/4 1944; sailing 20/4 1944"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival 25/4 1944; sailing 25/4 1944"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival 26/4 1944; sailing 9/5 1944"
      },
      {
        "port": "Loch Ewe",
        "lon": -5.6344503,
        "lat": 57.8212502,
        "verified": true,
        "note": "arrival 4/6 1944; sailing 12-13/6 1944"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival 14/6 1944"
      },
      {
        "port": "Eastham",
        "lon": -2.9521413,
        "lat": 53.3041812,
        "verified": true,
        "note": "arrival 14/6 1944"
      },
      {
        "port": "Manchester",
        "lon": -2.2324547,
        "lat": 53.4424618,
        "verified": true,
        "note": "arrival 15/6 1944"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5648.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.734909,
            51.501049
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -5.056458,
            51.546335
          ],
          [
            -5.129927,
            51.690603
          ],
          [
            -5.009025,
            51.702862
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -5.009025,
            51.702862
          ],
          [
            -5.129927,
            51.690603
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -6.197468,
            50.59699
          ],
          [
            -6.236156,
            50.619224
          ],
          [
            -8.045595,
            51.659101
          ],
          [
            -9.6,
            51.3333
          ],
          [
            -10.8,
            51.3
          ],
          [
            -12.36921,
            51.078264
          ],
          [
            -14.920876,
            50.717702
          ],
          [
            -15.688076,
            50.609294
          ],
          [
            -16.72313,
            50.463036
          ],
          [
            -19.2306,
            50.5539
          ],
          [
            -19.529903,
            50.548409
          ],
          [
            -20.000464,
            50.539776
          ],
          [
            -20.509014,
            50.530446
          ],
          [
            -25.6242,
            50.4366
          ],
          [
            -29.894016,
            50.123642
          ],
          [
            -30.0001,
            50.115866
          ],
          [
            -30.103901,
            50.108258
          ],
          [
            -30.170671,
            50.103364
          ],
          [
            -31.580914,
            50
          ],
          [
            -31.9411,
            49.9736
          ],
          [
            -38.0964,
            49.1767
          ],
          [
            -38.952623,
            49.016058
          ],
          [
            -40.000709,
            48.819419
          ],
          [
            -41.658626,
            48.508366
          ],
          [
            -44.0207,
            48.0652
          ],
          [
            -47.121001,
            47.29537
          ],
          [
            -49.6649,
            46.6637
          ],
          [
            -50.002066,
            46.558558
          ],
          [
            -55,
            45
          ],
          [
            -59.7029,
            43.7421
          ],
          [
            -64.2,
            42.3
          ],
          [
            -68.640214,
            40.624447
          ],
          [
            -68.826743,
            40.554059
          ],
          [
            -68.860571,
            40.541294
          ],
          [
            -68.910147,
            40.522586
          ],
          [
            -68.968854,
            40.500432
          ],
          [
            -69.5,
            40.3
          ],
          [
            -71.118305,
            39.812955
          ],
          [
            -71.661125,
            39.651813
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -72.475572,
            39.410034
          ],
          [
            -72.78466,
            39.318277
          ],
          [
            -72.904115,
            39.282816
          ],
          [
            -73.040934,
            39.242199
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -74.073738,
            38.935598
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -74.712593,
            37.475411
          ],
          [
            -74.505617,
            37.587567
          ],
          [
            -74.499347,
            37.590965
          ],
          [
            -74.241818,
            37.730514
          ],
          [
            -73.795419,
            37.972408
          ],
          [
            -72.501739,
            38.673424
          ],
          [
            -72.311211,
            38.776667
          ],
          [
            -72.231565,
            38.819826
          ],
          [
            -72.150135,
            38.863951
          ],
          [
            -71.735368,
            39.088703
          ],
          [
            -71.022869,
            39.474791
          ],
          [
            -69.5,
            40.3
          ],
          [
            -68.907278,
            40.412386
          ],
          [
            -68.813685,
            40.430133
          ],
          [
            -68.782982,
            40.435954
          ],
          [
            -64.632986,
            41.222837
          ],
          [
            -63.5093,
            41.4359
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -20,
            40
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            50.856149,
            12.884027
          ],
          [
            53.61885,
            13.300009
          ],
          [
            56.810303,
            14.567634
          ],
          [
            59.44496,
            15.644932
          ],
          [
            61.54,
            16.2661
          ],
          [
            62.6071,
            16.551398
          ],
          [
            64.766386,
            17.128701
          ],
          [
            66.257926,
            17.527476
          ],
          [
            67.795105,
            17.911613
          ],
          [
            69.999749,
            18.43269
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            77,
            8
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82,
            16
          ],
          [
            82.828231,
            16.708301
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -10.143696,
            42.834516
          ],
          [
            -10.167909,
            43.146826
          ],
          [
            -10.176425,
            43.256675
          ],
          [
            -10.194961,
            43.495763
          ],
          [
            -10.404053,
            46.192784
          ],
          [
            -10.462429,
            46.945761
          ],
          [
            -10.558668,
            48.187125
          ],
          [
            -10.630839,
            49.118042
          ],
          [
            -10.632436,
            49.138636
          ],
          [
            -10.690172,
            49.88336
          ],
          [
            -10.694975,
            49.945308
          ],
          [
            -10.709054,
            50.126917
          ],
          [
            -10.717387,
            50.234397
          ],
          [
            -10.754063,
            50.707477
          ],
          [
            -10.8,
            51.3
          ],
          [
            -10.646733,
            51.734257
          ],
          [
            -10.472335,
            52.228385
          ],
          [
            -10.2,
            53
          ],
          [
            -10.5,
            54.4
          ],
          [
            -7.661853,
            56.486873
          ],
          [
            -7.1,
            56.9
          ],
          [
            -7.0414,
            57.1312
          ],
          [
            -6.870262,
            57.404779
          ],
          [
            -6.7173,
            57.6493
          ],
          [
            -6.527774,
            57.688641
          ],
          [
            -6.287926,
            57.738428
          ],
          [
            -6.118044,
            57.852952
          ],
          [
            -5.857551,
            58.028561
          ],
          [
            -5.784214,
            58.005856
          ],
          [
            -5.5308,
            57.9274
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            -5.5308,
            57.9274
          ],
          [
            -5.784214,
            58.005856
          ],
          [
            -5.87533,
            57.823831
          ],
          [
            -5.9098,
            57.5462
          ],
          [
            -5.894746,
            57.347681
          ],
          [
            -5.778249,
            57.284772
          ],
          [
            -5.655077,
            57.267716
          ],
          [
            -5.658717,
            57.22077
          ],
          [
            -5.8274,
            57.0506
          ],
          [
            -6.316952,
            56.690147
          ],
          [
            -6.38018,
            56.622089
          ],
          [
            -6.567442,
            56.420585
          ],
          [
            -6.580727,
            56.173018
          ],
          [
            -6.654443,
            55.698575
          ],
          [
            -6.201782,
            55.422779
          ],
          [
            -5.854566,
            55.309107
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -2.887001,
            53.312827
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            -2.887001,
            53.312827
          ],
          [
            -2.764778,
            53.319595
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1944",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "19 Jul 1944, Glasgow",
    "discharged": "24 Jul 1944, Glasgow",
    "engagement_date": "1944-07-19",
    "discharge_date": "1944-07-24",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Norwich from 19 Jul 1944, Glasgow to 24 Jul 1944, Glasgow. Engagement type: home-trade.",
    "voyage_note": "Verification: CHECKED (assumed discharge date): card (IMG_5649) confirms the ship was docked in Glasgow continuously from 27 Jun to 30 Jul 1944 — consistent with the engage/discharge window.",
    "waypoints": [
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "register: Glasgow"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1944-2",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "24 Jul 1944, Glasgow",
    "discharged": "19 Apr 1946, Liverpool",
    "engagement_date": "1944-07-24",
    "discharge_date": "1946-04-19",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Norwich from 24 Jul 1944, Glasgow to 19 Apr 1946, Liverpool. Engagement type: home-trade.",
    "voyage_note": "USA immigration record: R/Hall Line as arranged. Dept Liverpool 28th July 1944; 19th Feb 1945 Port Said, Eygpt; Calcutta 23rd July 1945; Melbourne 1st Nov 1945; 21st Jan 1946 Colombo; 18th March NYC Verification: PARTIAL MATCH + GENUINE CONFLICT. The '18th March NYC' immigration note matches a New York arrival on 19 Mar 1946 in the card (IMG_5660) — 1 day off. But the stated 19/04/1946 Liverpool discharge conflicts with the card, which shows the ship still in New York (sailing 21 Apr) and Hampton Roads through 24 Apr — nowhere near Liverpool. Flagged per discussion 2026-09-13: possible he returned Liverpool separately, on another vessel, after leaving City of Norwich in the US. Discharge date/place left as recorded pending further research.",
    "waypoints": [
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "sailing 30/7 1944"
      },
      {
        "port": "Clyde Anchorage",
        "lon": -4.85,
        "lat": 55.75,
        "verified": true,
        "note": "arrival 31/7 1944; sailing 1/8 1944"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival 23/8 1944; sailing 8/9 1944"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival 8/9 1944; sailing 10/9 1944"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 15/9 1944; sailing 17/9 1944"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 24/9 1944; sailing 24/9 1944"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 4/10 1944"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival 6/10 1944; sailing 21/10 1944"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 21/10 1944"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 26/10 1944; sailing 26/10 1944"
      },
      {
        "port": "Freetown",
        "lon": -13.26795,
        "lat": 8.479004,
        "verified": true,
        "note": "arrival 10/11 1944; sailing 14/11 1944"
      },
      {
        "port": "Sydney NSW",
        "lon": 151.2082848,
        "lat": -33.8698439,
        "verified": true,
        "note": "arrival 22/11 1944; sailing 30/11 1944"
      },
      {
        "port": "Port Kembla",
        "lon": 150.9028,
        "lat": -34.4731,
        "verified": true,
        "note": "arrival 1/12 1944; sailing 6/12 1944"
      },
      {
        "port": "Sydney NSW",
        "lon": 151.2082848,
        "lat": -33.8698439,
        "verified": true,
        "note": "arrival 7/12 1944; sailing 14/12 1944"
      },
      {
        "port": "Fremantle",
        "lon": 115.7586172,
        "lat": -32.0534086,
        "verified": true,
        "note": "arrival 29/12 1944; sailing 5/1 1945"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 28/1 1945; sailing 29/1 1945"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 3/2 1945"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival 6/2 1945; sailing 19/2 1945"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 19/2 1945"
      },
      {
        "port": "Trincomalee",
        "lon": 81.2344952,
        "lat": 8.576425,
        "verified": true,
        "note": "arrival 23/2 1945; sailing 4/3 1945"
      },
      {
        "port": "Fremantle",
        "lon": 115.7586172,
        "lat": -32.0534086,
        "verified": true,
        "note": "arrival 16/3 1945; sailing 17/3 1945"
      },
      {
        "port": "Albany",
        "lon": -73.754968,
        "lat": 42.6511674,
        "verified": true,
        "note": "arrival 19/3 1945; sailing 22/3 1945"
      },
      {
        "port": "Sydney NSW",
        "lon": 151.2082848,
        "lat": -33.8698439,
        "verified": true,
        "note": "arrival 29/3 1945; sailing 3/5 1945"
      },
      {
        "port": "Port Kembla",
        "lon": 150.9028,
        "lat": -34.4731,
        "verified": true,
        "note": "arrival 3/5 1945; sailing 6/5 1945"
      },
      {
        "port": "Melbourne",
        "lon": 144.9631732,
        "lat": -37.8142454,
        "verified": true,
        "note": "arrival 9/5 1945; sailing 15/5 1945"
      },
      {
        "port": "Adelaide",
        "lon": 138.5999312,
        "lat": -34.9281805,
        "verified": true,
        "note": "sailing 22/5 1945"
      },
      {
        "port": "Fremantle",
        "lon": 115.7586172,
        "lat": -32.0534086,
        "verified": true,
        "note": "arrival 28/5 1945; sailing 31/5 1945"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 13/6 1945; sailing 25/6 1945"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival 29/6 1945; sailing 7/7 1945"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 9/7 1945"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival 17/7 1945; sailing 7/8 1945"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "arrival 8/8 1945"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 14/8 1945; sailing 24/8 1945"
      },
      {
        "port": "Fremantle",
        "lon": 115.7586172,
        "lat": -32.0534086,
        "verified": true,
        "note": "arrival 8/9 1945; sailing 12/9 1945"
      },
      {
        "port": "Adelaide",
        "lon": 138.5999312,
        "lat": -34.9281805,
        "verified": true,
        "note": "sailing 20/9 1945"
      },
      {
        "port": "Melbourne",
        "lon": 144.9631732,
        "lat": -37.8142454,
        "verified": true,
        "note": "arrival 23/9 1945; sailing 12/10 1945; arrival 22/10 1945"
      },
      {
        "port": "Hobart",
        "lon": 147.3272,
        "lat": -42.8821,
        "verified": true,
        "note": "sailing 26/10 1945"
      },
      {
        "port": "Melbourne",
        "lon": 144.9631732,
        "lat": -37.8142454,
        "verified": true,
        "note": "sailing 11/11 1945"
      },
      {
        "port": "Fremantle",
        "lon": 115.7586172,
        "lat": -32.0534086,
        "verified": true,
        "note": "arrival 18/11 1945; sailing 19/11 1945"
      },
      {
        "port": "Cochin",
        "lon": 76.2673,
        "lat": 9.9312,
        "verified": true,
        "note": "arrival 3/12 1945; sailing 10/12 1945"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival 14/12 1945; sailing 3/1 1946"
      },
      {
        "port": "Ceylon",
        "lon": 80.6625544,
        "lat": 7.8771833,
        "verified": true,
        "note": "arrival 9/1 1946; sailing 29/1 1946"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 6/2 1946; sailing 8/2 1946"
      },
      {
        "port": "Port Sudan",
        "lon": 37.2164,
        "lat": 19.6158,
        "verified": true,
        "note": "arrival 11/2 1946; sailing 14/2 1946"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival 15/2 1946"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival 18/2 1946; sailing 19/2 1946"
      },
      {
        "port": "Gibraltar",
        "lon": -5.3474761,
        "lat": 36.1285933,
        "verified": true,
        "note": "arrival 28/2 1946; sailing 1/3 1946"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival 19/3 1946; sailing 24/3 1946"
      },
      {
        "port": "Newport News",
        "lon": -76.4257,
        "lat": 36.974,
        "verified": true,
        "note": "arrival 25/3 1946"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "sailing 30/3 1946"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival 1/4 1946; sailing 3/4 1946"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival 4/4 1946"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5649.jpeg",
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5660.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            50.856149,
            12.884027
          ],
          [
            53.61885,
            13.300009
          ],
          [
            55.041504,
            12.747516
          ],
          [
            59.894005,
            11.083455
          ],
          [
            60.825733,
            10.866984
          ],
          [
            62.0601,
            10.5802
          ],
          [
            64.303249,
            10.031585
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.992809,
            9.862937
          ],
          [
            65.7044,
            9.6889
          ],
          [
            68.858995,
            8.881605
          ],
          [
            69.3291,
            8.7613
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.999915,
            8.582747
          ],
          [
            70.817426,
            8.365148
          ],
          [
            75.966807,
            6.966807
          ],
          [
            78.019032,
            6.387793
          ],
          [
            78.868856,
            6.674926
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            83.6282,
            10.7006
          ],
          [
            83.978619,
            11.556515
          ],
          [
            85.038,
            14.1441
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.735114,
            15.791697
          ],
          [
            86.491,
            17.5782
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.1,
            34.4
          ],
          [
            -7.7875,
            34.076471
          ],
          [
            -8.751058,
            33.623031
          ],
          [
            -10.1,
            31.8
          ],
          [
            -12.194387,
            29.156452
          ],
          [
            -13.963623,
            27.410786
          ],
          [
            -18,
            21
          ],
          [
            -18,
            15
          ],
          [
            -17,
            11
          ],
          [
            -14.5,
            8.5
          ],
          [
            -13.282471,
            8.553862
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            -13.282471,
            8.553862
          ],
          [
            -14.5,
            8.5
          ],
          [
            -11.5,
            5.5
          ],
          [
            -10,
            -2e-05
          ],
          [
            -5.531121,
            -5.586708
          ],
          [
            -1.989182,
            -10.0146
          ],
          [
            -1.100476,
            -11.1256
          ],
          [
            0.000405,
            -12.501846
          ],
          [
            1.7833,
            -14.7307
          ],
          [
            3.542734,
            -16.929822
          ],
          [
            5.653262,
            -19.567777
          ],
          [
            7.89386,
            -22.368307
          ],
          [
            10.425227,
            -25.53227
          ],
          [
            12.499733,
            -28.1252
          ],
          [
            18,
            -35
          ],
          [
            20,
            -40
          ],
          [
            25,
            -45.219281
          ],
          [
            30,
            -50
          ],
          [
            40,
            -50
          ],
          [
            50,
            -50
          ],
          [
            60,
            -50
          ],
          [
            70,
            -50
          ],
          [
            80,
            -50
          ],
          [
            90,
            -50
          ],
          [
            100,
            -50
          ],
          [
            110,
            -50
          ],
          [
            120,
            -50
          ],
          [
            130,
            -50
          ],
          [
            133.1726,
            -47.2819
          ],
          [
            135.102249,
            -45.393286
          ],
          [
            138.6269,
            -41.6192
          ],
          [
            141,
            -38.7
          ],
          [
            142.3,
            -38.9
          ],
          [
            143.536491,
            -38.961841
          ],
          [
            145.012756,
            -39.074055
          ],
          [
            146.436768,
            -39.27479
          ],
          [
            147.854004,
            -38.160476
          ],
          [
            150.1,
            -37.7
          ],
          [
            151.5,
            -34.0001
          ],
          [
            151.312981,
            -33.835631
          ],
          [
            151.278305,
            -33.828787
          ],
          [
            151.251183,
            -33.856945
          ],
          [
            151.211615,
            -33.854094
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            151.211615,
            -33.854094
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            151.211615,
            -33.854094
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            151.211615,
            -33.854094
          ],
          [
            151.251183,
            -33.856945
          ],
          [
            151.278305,
            -33.828787
          ],
          [
            151.312981,
            -33.835631
          ],
          [
            151.5,
            -34.0001
          ],
          [
            150.1,
            -37.7
          ],
          [
            147.854004,
            -38.160476
          ],
          [
            146.436768,
            -39.27479
          ],
          [
            145.012756,
            -39.074055
          ],
          [
            143.536491,
            -38.961841
          ],
          [
            142.3,
            -38.9
          ],
          [
            141,
            -38.7
          ],
          [
            135.0835,
            -38.3203
          ],
          [
            129.2527,
            -37.651
          ],
          [
            123.5477,
            -36.7051
          ],
          [
            118,
            -35.5
          ],
          [
            114.797777,
            -34.672181
          ],
          [
            114.678526,
            -33.460369
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.750837,
            -32.041841
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            115.750837,
            -32.041841
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            114,
            -29
          ],
          [
            112.7,
            -26
          ],
          [
            111.507366,
            -25.394497
          ],
          [
            111.183872,
            -24.477358
          ],
          [
            110.674365,
            -23.032849
          ],
          [
            110.632363,
            -22.913768
          ],
          [
            109.737283,
            -20.376116
          ],
          [
            104.62424,
            -15.090918
          ],
          [
            100,
            -10
          ],
          [
            98.869746,
            -8.892185
          ],
          [
            97.4664,
            -7.5167
          ],
          [
            95.347681,
            -5.403987
          ],
          [
            92.506946,
            -2.543113
          ],
          [
            90,
            -1e-05
          ],
          [
            88.040723,
            1.4295
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            83.6282,
            10.7006
          ],
          [
            83.978619,
            11.556515
          ],
          [
            85.038,
            14.1441
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.735114,
            15.791697
          ],
          [
            86.491,
            17.5782
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            88.040723,
            1.4295
          ],
          [
            90,
            -1e-05
          ],
          [
            92.506946,
            -2.543113
          ],
          [
            95.347681,
            -5.403987
          ],
          [
            97.4664,
            -7.5167
          ],
          [
            98.869746,
            -8.892185
          ],
          [
            100,
            -10
          ],
          [
            104.62424,
            -15.090918
          ],
          [
            109.737283,
            -20.376116
          ],
          [
            110.632363,
            -22.913768
          ],
          [
            110.674365,
            -23.032849
          ],
          [
            111.183872,
            -24.477358
          ],
          [
            111.507366,
            -25.394497
          ],
          [
            112.7,
            -26
          ],
          [
            114,
            -29
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.750837,
            -32.041841
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            115.750837,
            -32.041841
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            114.678526,
            -33.460369
          ],
          [
            114.797777,
            -34.672181
          ],
          [
            107.437825,
            -37.635476
          ],
          [
            100,
            -40
          ],
          [
            95.0848,
            -41.2273
          ],
          [
            91.769284,
            -41.887052
          ],
          [
            90.001387,
            -42.238844
          ],
          [
            87.72852,
            -42.543978
          ],
          [
            82.981172,
            -43.181585
          ],
          [
            81.6766,
            -43.3568
          ],
          [
            80.002072,
            -43.454672
          ],
          [
            76.745487,
            -43.645012
          ],
          [
            73.588875,
            -43.829508
          ],
          [
            70.002282,
            -43.805502
          ],
          [
            66.650664,
            -43.751213
          ],
          [
            64.5385,
            -43.717
          ],
          [
            63.382107,
            -43.6118
          ],
          [
            60.001982,
            -43.304302
          ],
          [
            57.271435,
            -43.055897
          ],
          [
            56.0755,
            -42.9471
          ],
          [
            52.143376,
            -42.287232
          ],
          [
            50.001156,
            -41.927736
          ],
          [
            48.503205,
            -41.676358
          ],
          [
            47.9022,
            -41.5755
          ],
          [
            41.643662,
            -40.035111
          ],
          [
            40.316034,
            -39.708348
          ],
          [
            40.00016,
            -39.61996
          ],
          [
            32.917525,
            -37.307564
          ],
          [
            26,
            -34.5
          ],
          [
            22,
            -35
          ],
          [
            18,
            -35
          ],
          [
            13.9085,
            -32.5342
          ],
          [
            10,
            -30
          ],
          [
            4.581235,
            -25.7304
          ],
          [
            0.000594,
            -22.121182
          ],
          [
            -1.147621,
            -21.216471
          ],
          [
            -2.645049,
            -20.036605
          ],
          [
            -6.625182,
            -16.728359
          ],
          [
            -9.999538,
            -12.890797
          ],
          [
            -11.321431,
            -11.387445
          ],
          [
            -12.52511,
            -10.018534
          ],
          [
            -14.3,
            -8
          ],
          [
            -17.819,
            -5.0879
          ],
          [
            -19.999803,
            -3.28153
          ],
          [
            -21.780662,
            -1.806339
          ],
          [
            -23.960846,
            -2e-05
          ],
          [
            -27.041927,
            2.552564
          ],
          [
            -27.159236,
            2.649749
          ],
          [
            -29.222944,
            4.359034
          ],
          [
            -29.829347,
            4.861138
          ],
          [
            -30.0003,
            5.002688
          ],
          [
            -31.8433,
            6.5287
          ],
          [
            -32.762118,
            7.288622
          ],
          [
            -34.4259,
            8.664676
          ],
          [
            -36.07644,
            10.028798
          ],
          [
            -38.257452,
            11.8296
          ],
          [
            -40.000523,
            13.2666
          ],
          [
            -43.776444,
            16.37688
          ],
          [
            -46.036889,
            18.239233
          ],
          [
            -48.21318,
            20.024728
          ],
          [
            -49.207335,
            20.840203
          ],
          [
            -50.000417,
            21.489805
          ],
          [
            -51.302049,
            22.551019
          ],
          [
            -54.686707,
            25.302569
          ],
          [
            -54.840663,
            25.427012
          ],
          [
            -57.046567,
            27.210057
          ],
          [
            -57.951012,
            27.936496
          ],
          [
            -58.995496,
            28.772554
          ],
          [
            -60.000119,
            29.576705
          ],
          [
            -60.223798,
            29.75575
          ],
          [
            -60.541592,
            30.010129
          ],
          [
            -61.320443,
            30.632712
          ],
          [
            -62.024698,
            31.186227
          ],
          [
            -63.143196,
            32.06532
          ],
          [
            -63.465852,
            32.318914
          ],
          [
            -64.370232,
            33.029719
          ],
          [
            -65.2756,
            33.7413
          ],
          [
            -65.80232,
            34.143809
          ],
          [
            -67.057094,
            35.102685
          ],
          [
            -68.147963,
            35.936306
          ],
          [
            -69.436,
            36.9206
          ],
          [
            -69.656388,
            37.0784
          ],
          [
            -69.73835,
            37.137086
          ],
          [
            -69.848971,
            37.216292
          ],
          [
            -69.975985,
            37.307235
          ],
          [
            -70.521347,
            37.697721
          ],
          [
            -70.98362,
            38.028713
          ],
          [
            -71.271542,
            38.234868
          ],
          [
            -71.472185,
            38.378531
          ],
          [
            -71.643369,
            38.501101
          ],
          [
            -71.798223,
            38.611978
          ],
          [
            -72.150135,
            38.863951
          ],
          [
            -72.280515,
            38.957304
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -72.4725,
            39.4965
          ],
          [
            -73.537794,
            40.250805
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ],
          [
            -74.015579,
            40.75922
          ],
          [
            -73.919449,
            40.905729
          ],
          [
            -73.885117,
            41.05502
          ],
          [
            -73.900909,
            41.157978
          ]
        ]
      },
      {
        "from_idx": 21,
        "to_idx": 22,
        "verified": true,
        "coords": [
          [
            -73.900909,
            41.157978
          ],
          [
            -73.885117,
            41.05502
          ],
          [
            -73.919449,
            40.905729
          ],
          [
            -74.015579,
            40.75922
          ],
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -73.795419,
            37.972408
          ],
          [
            -73.810546,
            36.870169
          ],
          [
            -73.813155,
            36.68003
          ],
          [
            -73.817452,
            36.36695
          ],
          [
            -73.817593,
            36.356635
          ],
          [
            -73.822134,
            36.025763
          ],
          [
            -73.822953,
            35.966106
          ],
          [
            -73.833105,
            35.226359
          ],
          [
            -73.8351,
            35.081
          ],
          [
            -73.835242,
            35.054558
          ],
          [
            -73.839731,
            34.219318
          ],
          [
            -73.840136,
            34.144019
          ],
          [
            -73.851055,
            32.112533
          ],
          [
            -73.856125,
            31.169391
          ],
          [
            -73.860704,
            30.317457
          ],
          [
            -73.86123,
            30.219522
          ],
          [
            -73.867836,
            28.697605
          ],
          [
            -73.868832,
            28.461423
          ],
          [
            -73.874355,
            27.151575
          ],
          [
            -73.87461,
            27.091075
          ],
          [
            -73.877374,
            26.435706
          ],
          [
            -73.990483,
            25.263602
          ],
          [
            -74.109958,
            23.954362
          ],
          [
            -74.11547,
            23.158922
          ],
          [
            -73.876074,
            22.919183
          ],
          [
            -73.745728,
            22.507482
          ],
          [
            -73.775799,
            21.799217
          ],
          [
            -73.811646,
            20.915266
          ],
          [
            -73.898851,
            20.346136
          ],
          [
            -73.9,
            20
          ],
          [
            -74.696227,
            18.9156
          ],
          [
            -75,
            18.5
          ],
          [
            -75.408284,
            17.801104
          ],
          [
            -75.900579,
            16.958398
          ],
          [
            -76.604059,
            15.754186
          ],
          [
            -77.16329,
            14.773087
          ],
          [
            -77.638723,
            13.975975
          ],
          [
            -80,
            9.75
          ],
          [
            -79.900612,
            9.208176
          ],
          [
            -79.821304,
            9.173012
          ],
          [
            -79.803246,
            9.118307
          ],
          [
            -79.741379,
            9.118236
          ],
          [
            -79.689331,
            9.10639
          ],
          [
            -79.641747,
            9.035982
          ],
          [
            -79.585922,
            8.992656
          ],
          [
            -79.494118,
            8.796576
          ],
          [
            -79.5,
            8.6
          ],
          [
            -79.672852,
            7.422389
          ],
          [
            -80.227822,
            6.983728
          ],
          [
            -81.4,
            6.9
          ],
          [
            -82.675316,
            6.409235
          ],
          [
            -85.742297,
            5.227789
          ],
          [
            -89.238446,
            3.852041
          ],
          [
            -90.595838,
            3.313011
          ],
          [
            -92.511534,
            2.547643
          ],
          [
            -93.9491,
            1.9733
          ],
          [
            -100,
            -2e-05
          ],
          [
            -103.444083,
            -1.851137
          ],
          [
            -105.370314,
            -2.623527
          ],
          [
            -106.833632,
            -3.20824
          ],
          [
            -108.677777,
            -3.938441
          ],
          [
            -109.999732,
            -4.461878
          ],
          [
            -114.02527,
            -6.029318
          ],
          [
            -117.177048,
            -7.228058
          ],
          [
            -119.999897,
            -8.281897
          ],
          [
            -121.277234,
            -8.748123
          ],
          [
            -124.871763,
            -10.035757
          ],
          [
            -128.707198,
            -11.357568
          ],
          [
            -129.999714,
            -11.787362
          ],
          [
            -130.876464,
            -12.078904
          ],
          [
            -132.478029,
            -12.600069
          ],
          [
            -136.338883,
            -13.807999
          ],
          [
            -139.99922,
            -14.877634
          ],
          [
            -144.147271,
            -16.011589
          ],
          [
            -145.1692,
            -16.2871
          ],
          [
            -149.7,
            -17.4
          ],
          [
            -150.515973,
            -17.273762
          ],
          [
            -154.68599,
            -20.039466
          ],
          [
            -158.208114,
            -21.776325
          ],
          [
            -159.99894,
            -22.626783
          ],
          [
            -164.255332,
            -24.510534
          ],
          [
            -165.332968,
            -24.947414
          ],
          [
            -167.9328,
            -26.0014
          ],
          [
            -169.999094,
            -26.764069
          ],
          [
            -170.524859,
            -26.958128
          ],
          [
            -171.8564,
            -27.4496
          ],
          [
            -175.879,
            -28.7856
          ],
          [
            -180,
            -30
          ],
          [
            -180,
            -30
          ],
          [
            -185.28721,
            -31.231075
          ],
          [
            -188.183845,
            -31.816155
          ],
          [
            -188.979277,
            -31.952688
          ],
          [
            -192.324204,
            -32.526832
          ],
          [
            -193.9378,
            -32.8038
          ],
          [
            -196.496223,
            -33.090282
          ],
          [
            -199.99819,
            -33.482419
          ],
          [
            -201.1697,
            -33.6136
          ],
          [
            -208.5,
            -34.0001
          ],
          [
            -208.687019,
            -33.835631
          ],
          [
            -208.721695,
            -33.828787
          ],
          [
            -208.748817,
            -33.856945
          ],
          [
            -208.788385,
            -33.854094
          ]
        ]
      },
      {
        "from_idx": 22,
        "to_idx": 23,
        "verified": true,
        "coords": [
          [
            151.211615,
            -33.854094
          ]
        ]
      },
      {
        "from_idx": 23,
        "to_idx": 24,
        "verified": true,
        "coords": [
          [
            151.211615,
            -33.854094
          ],
          [
            151.251183,
            -33.856945
          ],
          [
            151.278305,
            -33.828787
          ],
          [
            151.312981,
            -33.835631
          ],
          [
            151.5,
            -34.0001
          ],
          [
            150.1,
            -37.7
          ],
          [
            147.854004,
            -38.160476
          ],
          [
            146.436768,
            -39.27479
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.930954,
            -37.860218
          ]
        ]
      },
      {
        "from_idx": 24,
        "to_idx": 25,
        "verified": true,
        "coords": [
          [
            144.930954,
            -37.860218
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            143.536491,
            -38.961841
          ],
          [
            142.3,
            -38.9
          ],
          [
            141,
            -38.7
          ],
          [
            137.798767,
            -35.384572
          ],
          [
            138.433228,
            -34.91071
          ]
        ]
      },
      {
        "from_idx": 25,
        "to_idx": 26,
        "verified": true,
        "coords": [
          [
            138.433228,
            -34.91071
          ],
          [
            137.798767,
            -35.384572
          ],
          [
            135.670166,
            -35.5
          ],
          [
            118,
            -35.5
          ],
          [
            114.797777,
            -34.672181
          ],
          [
            114.678526,
            -33.460369
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.750837,
            -32.041841
          ]
        ]
      },
      {
        "from_idx": 26,
        "to_idx": 27,
        "verified": true,
        "coords": [
          [
            115.750837,
            -32.041841
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            114,
            -29
          ],
          [
            112.7,
            -26
          ],
          [
            111.507366,
            -25.394497
          ],
          [
            111.183872,
            -24.477358
          ],
          [
            110.674365,
            -23.032849
          ],
          [
            110.632363,
            -22.913768
          ],
          [
            109.737283,
            -20.376116
          ],
          [
            104.62424,
            -15.090918
          ],
          [
            100,
            -10
          ],
          [
            98.869746,
            -8.892185
          ],
          [
            97.4664,
            -7.5167
          ],
          [
            95.347681,
            -5.403987
          ],
          [
            92.506946,
            -2.543113
          ],
          [
            90,
            -1e-05
          ],
          [
            88.040723,
            1.4295
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 27,
        "to_idx": 28,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            82.998315,
            12.032454
          ],
          [
            83.45929,
            15.271825
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 28,
        "to_idx": 29,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 29,
        "to_idx": 30,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 30,
        "to_idx": 31,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 31,
        "to_idx": 32,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 32,
        "to_idx": 33,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            88.040723,
            1.4295
          ],
          [
            90,
            -1e-05
          ],
          [
            92.506946,
            -2.543113
          ],
          [
            95.347681,
            -5.403987
          ],
          [
            97.4664,
            -7.5167
          ],
          [
            98.869746,
            -8.892185
          ],
          [
            100,
            -10
          ],
          [
            104.62424,
            -15.090918
          ],
          [
            109.737283,
            -20.376116
          ],
          [
            110.632363,
            -22.913768
          ],
          [
            110.674365,
            -23.032849
          ],
          [
            111.183872,
            -24.477358
          ],
          [
            111.507366,
            -25.394497
          ],
          [
            112.7,
            -26
          ],
          [
            114,
            -29
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.750837,
            -32.041841
          ]
        ]
      },
      {
        "from_idx": 33,
        "to_idx": 34,
        "verified": true,
        "coords": [
          [
            115.750837,
            -32.041841
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            114.678526,
            -33.460369
          ],
          [
            114.797777,
            -34.672181
          ],
          [
            118,
            -35.5
          ],
          [
            135.670166,
            -35.5
          ],
          [
            137.798767,
            -35.384572
          ],
          [
            138.433228,
            -34.91071
          ]
        ]
      },
      {
        "from_idx": 34,
        "to_idx": 35,
        "verified": true,
        "coords": [
          [
            138.433228,
            -34.91071
          ],
          [
            137.798767,
            -35.384572
          ],
          [
            141,
            -38.7
          ],
          [
            142.3,
            -38.9
          ],
          [
            143.536491,
            -38.961841
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.930954,
            -37.860218
          ]
        ]
      },
      {
        "from_idx": 35,
        "to_idx": 36,
        "verified": true,
        "coords": [
          [
            144.930954,
            -37.860218
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            145.012756,
            -39.074055
          ],
          [
            145.364959,
            -39.616489
          ],
          [
            147.741867,
            -40.470118
          ],
          [
            149.382808,
            -41.15994
          ],
          [
            149,
            -43
          ],
          [
            147.7,
            -43.6
          ],
          [
            147.357559,
            -42.995106
          ]
        ]
      },
      {
        "from_idx": 36,
        "to_idx": 37,
        "verified": true,
        "coords": [
          [
            147.357559,
            -42.995106
          ],
          [
            147.7,
            -43.6
          ],
          [
            149,
            -43
          ],
          [
            149.382808,
            -41.15994
          ],
          [
            147.741867,
            -40.470118
          ],
          [
            145.364959,
            -39.616489
          ],
          [
            145.012756,
            -39.074055
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.930954,
            -37.860218
          ]
        ]
      },
      {
        "from_idx": 37,
        "to_idx": 38,
        "verified": true,
        "coords": [
          [
            144.930954,
            -37.860218
          ],
          [
            144.738693,
            -38.264602
          ],
          [
            144.643936,
            -38.283469
          ],
          [
            144.577332,
            -38.397644
          ],
          [
            143.536491,
            -38.961841
          ],
          [
            142.3,
            -38.9
          ],
          [
            141,
            -38.7
          ],
          [
            135.0835,
            -38.3203
          ],
          [
            129.2527,
            -37.651
          ],
          [
            123.5477,
            -36.7051
          ],
          [
            118,
            -35.5
          ],
          [
            114.797777,
            -34.672181
          ],
          [
            114.678526,
            -33.460369
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.750837,
            -32.041841
          ]
        ]
      },
      {
        "from_idx": 38,
        "to_idx": 39,
        "verified": true,
        "coords": [
          [
            115.750837,
            -32.041841
          ],
          [
            115.737534,
            -32.053699
          ],
          [
            115.71599,
            -32.056463
          ],
          [
            115.626984,
            -31.963814
          ],
          [
            115.411377,
            -31.969639
          ],
          [
            114,
            -29
          ],
          [
            112.7,
            -26
          ],
          [
            111.507366,
            -25.394497
          ],
          [
            111.183872,
            -24.477358
          ],
          [
            110.674365,
            -23.032849
          ],
          [
            110.632363,
            -22.913768
          ],
          [
            109.737283,
            -20.376116
          ],
          [
            104.62424,
            -15.090918
          ],
          [
            100,
            -10
          ],
          [
            98.869746,
            -8.892185
          ],
          [
            97.4664,
            -7.5167
          ],
          [
            95.347681,
            -5.403987
          ],
          [
            92.506946,
            -2.543113
          ],
          [
            90,
            -1e-05
          ],
          [
            88.040723,
            1.4295
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            78.868856,
            6.674926
          ],
          [
            77,
            8
          ],
          [
            75.3,
            9.7
          ],
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 39,
        "to_idx": 40,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ],
          [
            75.3,
            9.7
          ],
          [
            77,
            8
          ],
          [
            78.868856,
            6.674926
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            83.6282,
            10.7006
          ],
          [
            83.978619,
            11.556515
          ],
          [
            85.038,
            14.1441
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.735114,
            15.791697
          ],
          [
            86.491,
            17.5782
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 40,
        "to_idx": 41,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 41,
        "to_idx": 42,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 42,
        "to_idx": 43,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            41.638757,
            14.831289
          ],
          [
            39.618179,
            17.395313
          ],
          [
            38.006929,
            19.986548
          ],
          [
            37.496338,
            19.590844
          ]
        ]
      },
      {
        "from_idx": 43,
        "to_idx": 44,
        "verified": true,
        "coords": [
          [
            37.496338,
            19.590844
          ],
          [
            38.006929,
            19.986548
          ],
          [
            36.108,
            24.0443
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 44,
        "to_idx": 45,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 45,
        "to_idx": 46,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.343132,
            36.110975
          ]
        ]
      },
      {
        "from_idx": 46,
        "to_idx": 47,
        "verified": true,
        "coords": [
          [
            -5.343132,
            36.110975
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -20,
            40
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -63.5093,
            41.4359
          ],
          [
            -64.632986,
            41.222837
          ],
          [
            -68.782982,
            40.435954
          ],
          [
            -68.813685,
            40.430133
          ],
          [
            -68.907278,
            40.412386
          ],
          [
            -69.5,
            40.3
          ],
          [
            -71.289425,
            40.419295
          ],
          [
            -71.557579,
            40.437172
          ],
          [
            -71.798554,
            40.453237
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 47,
        "to_idx": 48,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 48,
        "to_idx": 49,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 49,
        "to_idx": 50,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 50,
        "to_idx": 51,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-newcastle-1946",
    "ship": "City of Newcastle",
    "ship_no": "187125",
    "line": "Ellerman Lines (City Line)",
    "built": "Unknown",
    "tons": "4,462 grt",
    "flag": "📍 Last Known Position",
    "engaged": "13 Jun 1946, Unknown",
    "discharged": "19 Jun 1946, Unknown",
    "engagement_date": "1946-06-13",
    "discharge_date": "1946-06-19",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Newcastle from 13 Jun 1946, Unknown to 19 Jun 1946, Unknown. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Manchester",
        "lon": -2.2324547,
        "lat": 53.4424618,
        "verified": true,
        "note": "no new port call logged in this window; ship's last known position was Manchester (arrival 17/5 1946)"
      }
    ],
    "card_images": [],
    "waypoints_source": "card_carried_forward",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/187125_city_of_newcastle.jpeg"
  },
  {
    "id": "city-of-newcastle-1946-2",
    "ship": "City of Newcastle",
    "ship_no": "187125",
    "line": "Ellerman Lines (City Line)",
    "built": "Unknown",
    "tons": "4,462 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "10 Jun 1946, Unknown",
    "discharged": "16 Dec 1946, Hull",
    "engagement_date": "1946-06-10",
    "discharge_date": "1946-12-16",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Newcastle from 10 Jun 1946, Unknown to 16 Dec 1946, Hull. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Manchester",
        "lon": -2.2324547,
        "lat": 53.4424618,
        "verified": true,
        "note": "sailing 20/6 1946; sailing 24/6 1946"
      },
      {
        "port": "Ellesmere Port",
        "lon": -2.9022507,
        "lat": 53.2789347,
        "verified": true,
        "note": "arrival 27/6 1946; sailing 28/6 1946"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival 9/7 1946; sailing 10/7 1946"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing 11/7 1946"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 16/7 1946; sailing 17/7 1946"
      },
      {
        "port": "Bahrain",
        "lon": 50.5344606,
        "lat": 26.1551249,
        "verified": true,
        "note": "arrival 24/7 1946; sailing 26/7 1946"
      },
      {
        "port": "Kuwait",
        "lon": 47.9774,
        "lat": 29.3759,
        "verified": true,
        "note": "sailing 28/7 1946"
      },
      {
        "port": "Bandar Shahpur",
        "lon": 49.1161,
        "lat": 30.4408,
        "verified": true,
        "note": "arrival 30/7 1946"
      },
      {
        "port": "Kuwait",
        "lon": 47.9774,
        "lat": 29.3759,
        "verified": true,
        "note": "arrival 31/7 1946"
      },
      {
        "port": "Bandar Shahpur",
        "lon": 49.1161,
        "lat": 30.4408,
        "verified": true,
        "note": "sailing 3/8 1946"
      },
      {
        "port": "Basra",
        "lon": 47.816,
        "lat": 30.5085,
        "verified": true,
        "note": "arrival 5/8 1946; sailing 21/8 1946"
      },
      {
        "port": "Abadan",
        "lon": 48.2591475,
        "lat": 30.3636097,
        "verified": true,
        "note": "arrival 7/9 1946; sailing 13/9 1946"
      },
      {
        "port": "Mormugao",
        "lon": 73.8018,
        "lat": 15.4218,
        "verified": true,
        "note": "arrival 20/9 1946; sailing 25/9 1946"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival 26/9 1946; sailing 28/9 1946"
      },
      {
        "port": "Navalakhi",
        "lon": 70.4595,
        "lat": 22.9601,
        "verified": true,
        "note": "arrival 30/9 1946"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival 6/10 1946; sailing 7/11 1946"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival 13/11 1946; sailing 14/11 1946"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival 20/11 1946"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing 21/11 1946"
      },
      {
        "port": "Gibraltar",
        "lon": -5.3474761,
        "lat": 36.1285933,
        "verified": true,
        "note": "arrival 29/11 1946; sailing 30/11 1946"
      },
      {
        "port": "Le Havre",
        "lon": 0.1079732,
        "lat": 49.4938975,
        "verified": true,
        "note": "arrival 7/12 1946; sailing 11/12 1946"
      },
      {
        "port": "Hull",
        "lon": -0.3301214,
        "lat": 53.7623863,
        "verified": true,
        "note": "arrival 13/12 1946"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5656.jpeg",
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5657.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.764778,
            53.319595
          ],
          [
            -2.887001,
            53.312827
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -2.887001,
            53.312827
          ],
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            60.4,
            22.7
          ],
          [
            59,
            24
          ],
          [
            57.1,
            25.5
          ],
          [
            56.931531,
            25.961959
          ],
          [
            56.763061,
            26.422112
          ],
          [
            56.547226,
            26.511054
          ],
          [
            56.343384,
            26.441066
          ],
          [
            55.345025,
            26.132657
          ],
          [
            55.064332,
            26.151124
          ],
          [
            54.399148,
            26.194877
          ],
          [
            53.148966,
            26.25488
          ],
          [
            51.6,
            26.3
          ],
          [
            50.621796,
            26.141191
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            50.621796,
            26.141191
          ],
          [
            51.6,
            26.3
          ],
          [
            50.243413,
            26.805152
          ],
          [
            49.886169,
            27.125147
          ],
          [
            49.055127,
            28.214613
          ],
          [
            48.3,
            29.1
          ],
          [
            48.144836,
            29.427637
          ],
          [
            47.828979,
            29.42046
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            47.828979,
            29.42046
          ],
          [
            48.144836,
            29.427637
          ],
          [
            48.3,
            29.1
          ],
          [
            48.833915,
            29.050188
          ],
          [
            50.1,
            28.6
          ],
          [
            50.201307,
            28.847987
          ],
          [
            49.029236,
            30.085731
          ],
          [
            48.88916,
            30.347102
          ],
          [
            48.930702,
            30.405452
          ],
          [
            49.01001,
            30.38798
          ],
          [
            49.051208,
            30.410782
          ],
          [
            49.123306,
            30.416999
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            49.123306,
            30.416999
          ],
          [
            49.051208,
            30.410782
          ],
          [
            49.01001,
            30.38798
          ],
          [
            48.930702,
            30.405452
          ],
          [
            48.88916,
            30.347102
          ],
          [
            49.029236,
            30.085731
          ],
          [
            50.201307,
            28.847987
          ],
          [
            50.1,
            28.6
          ],
          [
            48.833915,
            29.050188
          ],
          [
            48.3,
            29.1
          ],
          [
            48.144836,
            29.427637
          ],
          [
            47.828979,
            29.42046
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            47.828979,
            29.42046
          ],
          [
            48.144836,
            29.427637
          ],
          [
            48.3,
            29.1
          ],
          [
            48.833915,
            29.050188
          ],
          [
            50.1,
            28.6
          ],
          [
            50.201307,
            28.847987
          ],
          [
            49.029236,
            30.085731
          ],
          [
            48.88916,
            30.347102
          ],
          [
            48.930702,
            30.405452
          ],
          [
            49.01001,
            30.38798
          ],
          [
            49.051208,
            30.410782
          ],
          [
            49.123306,
            30.416999
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            49.123306,
            30.416999
          ],
          [
            49.051208,
            30.410782
          ],
          [
            49.01001,
            30.38798
          ],
          [
            48.930702,
            30.405452
          ],
          [
            48.88916,
            30.347102
          ],
          [
            49.029236,
            30.085731
          ],
          [
            50.201307,
            28.847987
          ],
          [
            50.1,
            28.6
          ],
          [
            48.660224,
            29.701563
          ],
          [
            48.194275,
            30.015598
          ],
          [
            48.071022,
            30.028975
          ],
          [
            48.014717,
            29.994489
          ],
          [
            47.958412,
            30.007274
          ],
          [
            47.958069,
            30.069391
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            47.958069,
            30.069391
          ],
          [
            47.958412,
            30.007274
          ],
          [
            48.014717,
            29.994489
          ],
          [
            48.071022,
            30.028975
          ],
          [
            48.194275,
            30.015598
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            48.194275,
            30.015598
          ],
          [
            48.660224,
            29.701563
          ],
          [
            50.1,
            28.6
          ],
          [
            51.221979,
            27.181631
          ],
          [
            53.3693,
            26.5789
          ],
          [
            54.399148,
            26.194877
          ],
          [
            55.064332,
            26.151124
          ],
          [
            55.345025,
            26.132657
          ],
          [
            56.343384,
            26.441066
          ],
          [
            56.547226,
            26.511054
          ],
          [
            56.763061,
            26.422112
          ],
          [
            56.931531,
            25.961959
          ],
          [
            57.1,
            25.5
          ],
          [
            59,
            24
          ],
          [
            61.55539,
            23.45698
          ],
          [
            64.447045,
            22.842503
          ],
          [
            65.725774,
            22.570773
          ],
          [
            67,
            22.3
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            73,
            15.3
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            70,
            20
          ],
          [
            69.592463,
            20.809334
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.44458,
            22.573438
          ],
          [
            70.246582,
            22.857195
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            70.246582,
            22.857195
          ],
          [
            69.44458,
            22.573438
          ],
          [
            68.719482,
            22.543001
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            64.447045,
            22.842503
          ],
          [
            62.375976,
            21.440441
          ],
          [
            59,
            20
          ],
          [
            58.191833,
            18.742507
          ],
          [
            56.876033,
            17.38386
          ],
          [
            54.2,
            16.2
          ],
          [
            49.5581,
            14.1436
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.343132,
            36.110975
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            -5.343132,
            36.110975
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.954994,
            45.668797
          ],
          [
            -6.698867,
            47.340067
          ],
          [
            -5.5,
            48.6667
          ],
          [
            -5.06401,
            48.799916
          ],
          [
            -4.270518,
            49.042365
          ],
          [
            -4.030414,
            49.115729
          ],
          [
            -3.986163,
            49.129249
          ],
          [
            -3.197043,
            49.370363
          ],
          [
            -2.39189,
            49.616376
          ],
          [
            -1.992006,
            49.738559
          ],
          [
            -1.93365,
            49.75639
          ],
          [
            -1.665743,
            49.838248
          ],
          [
            -1.47977,
            49.895072
          ],
          [
            -1.3,
            49.95
          ],
          [
            -0.754538,
            49.742898
          ],
          [
            -0.390945,
            49.604849
          ],
          [
            -0.109,
            49.4978
          ],
          [
            0.082233,
            49.485898
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            0.082233,
            49.485898
          ],
          [
            0.039095,
            49.532857
          ],
          [
            -0.057054,
            49.637359
          ],
          [
            0.1,
            49.9
          ],
          [
            0.372734,
            50.105616
          ],
          [
            0.63949,
            50.306725
          ],
          [
            0.640538,
            50.307515
          ],
          [
            1.117257,
            50.563512
          ],
          [
            1.271747,
            50.763438
          ],
          [
            1.3,
            50.8
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.474566,
            51.467902
          ],
          [
            1.4922,
            51.5679
          ],
          [
            1.539869,
            51.652703
          ],
          [
            1.613617,
            51.783903
          ],
          [
            1.5065,
            51.878829
          ],
          [
            1.761684,
            52.03871
          ],
          [
            2.1349,
            52.7457
          ],
          [
            0.4,
            53.5
          ],
          [
            -0.039825,
            53.583538
          ],
          [
            -0.299377,
            53.730842
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/187125_city_of_newcastle.jpeg"
  },
  {
    "id": "city-of-newcastle-1946-3",
    "ship": "City of Newcastle",
    "ship_no": "187125",
    "line": "Ellerman Lines (City Line)",
    "built": "Unknown",
    "tons": "4,462 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "17 Dec 1946, Hull",
    "discharged": "19 Dec 1946, Hull",
    "engagement_date": "1946-12-17",
    "discharge_date": "1946-12-19",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Newcastle from 17 Dec 1946, Hull to 19 Dec 1946, Hull. Engagement type: foreign-going.",
    "voyage_note": "USA immigration record: R/Hall Line as arranged",
    "waypoints": [
      {
        "port": "Hull",
        "lon": -0.3301214,
        "lat": 53.7623863,
        "verified": true,
        "note": "register: Hull"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/187125_city_of_newcastle.jpeg"
  },
  {
    "id": "city-of-leicester-1947",
    "ship": "City of Leicester",
    "ship_no": "147349",
    "line": "Ellerman Lines (City Line)",
    "built": "1926",
    "tons": "1,975 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "6 Jan 1947, Unknown (Tilby)",
    "discharged": "6 Feb 1947, Unknown (Papla)",
    "engagement_date": "1947-01-06",
    "discharge_date": "1947-02-06",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Leicester from 6 Jan 1947, Unknown (Tilby) to 6 Feb 1947, Unknown (Papla).",
    "voyage_note": "Verification: CHECKED (assumed discharge date): card (IMG_5658) confirms the ship was in the London/Tilbury area from 30 Dec 1946 (arrival) until sailing 19 Feb 1947 — consistent with 'Tilby' as engagement place and both engage/discharge dates falling inside this layup. Card also notes a captain change (T.D. Handley to W.F. Wilson) dated 14 Feb 1947, close to the discharge date.",
    "waypoints": [
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "register: Unknown (Tilby)"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/147349_city_of_leicester.jpeg"
  },
  {
    "id": "city-of-norwich-1947",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "📋 Register Confirmed",
    "engaged": "6 Feb 1947, Birkenhead",
    "discharged": "7 Mar 1947, Birkenhead",
    "engagement_date": "1947-02-06",
    "discharge_date": "1947-03-07",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Norwich from 6 Feb 1947, Birkenhead to 7 Mar 1947, Birkenhead.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "register: Birkenhead"
      }
    ],
    "card_images": [],
    "waypoints_source": "register_only_partial",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-norwich-1947-2",
    "ship": "City of Norwich",
    "ship_no": "135479",
    "line": "Ellerman Lines (City Line)",
    "built": "1914",
    "tons": "4,346 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "20 Mar 1947, Birkenhead",
    "discharged": "31 Mar 1947, Birkenhead",
    "engagement_date": "1947-03-20",
    "discharge_date": "1947-03-31",
    "rank": "Purser and Chiefmate",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chiefmate on City of Norwich from 20 Mar 1947, Birkenhead to 31 Mar 1947, Birkenhead.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival Mar 27 1947"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing Mar 28 1947"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5661.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/135479_city_of_norwich.jpeg"
  },
  {
    "id": "city-of-chester-1947",
    "ship": "City of Chester",
    "ship_no": "168876",
    "line": "Ellerman Lines (City Line)",
    "built": "1944, Harland & Wolff",
    "tons": "4,954 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "15 Apr 1947, Unknown",
    "discharged": "7 Oct 1947, 151",
    "engagement_date": "1947-04-15",
    "discharge_date": "1947-10-07",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Chester from 15 Apr 1947, Unknown to 7 Oct 1947, 151. Engagement type: foreign-going.",
    "voyage_note": "USA immigration record: Arrived in New york 15th May 1947, sailing from Montreal Verification: CHECKED: 'Arrived New York 15th May 1947, sailing from Montreal' matches the card (IMG_5662) exactly — Quebec/Montreal early May, New York arrival 15 May 1947.",
    "waypoints": [
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "sailing Apr 17 1947"
      },
      {
        "port": "Antwerp",
        "lon": 4.3997081,
        "lat": 51.2211097,
        "verified": true,
        "note": "arrival Apr 18 1947; sailing Apr 25 1947"
      },
      {
        "port": "Plymouth",
        "lon": -4.1424451,
        "lat": 50.3714122,
        "verified": true,
        "note": "arrival Apr 26 1947; sailing Apr 26 1947"
      },
      {
        "port": "Quebec",
        "lon": -71.8258668,
        "lat": 52.4760892,
        "verified": true,
        "note": "arrival May 4 1947"
      },
      {
        "port": "Montreal",
        "lon": -73.5698065,
        "lat": 45.5031824,
        "verified": true,
        "note": "arrival May 5 1947; sailing May 11 1947"
      },
      {
        "port": "Quebec",
        "lon": -71.8258668,
        "lat": 52.4760892,
        "verified": true,
        "note": "sailing May 11 1947"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival May 15 1947; arrival May 22 1947; sailing May 22 1947"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival May 23 1947; sailing May 24 1947"
      },
      {
        "port": "Curacao",
        "lon": -68.9309263,
        "lat": 12.1176488,
        "verified": true,
        "note": "arrival May 28 1947; sailing May 29 1947"
      },
      {
        "port": "Los Angeles",
        "lon": -118.242766,
        "lat": 34.0536909,
        "verified": true,
        "note": "arrival June 8 1947; sailing June 11 1947"
      },
      {
        "port": "Manila",
        "lon": 120.9803621,
        "lat": 14.5904492,
        "verified": true,
        "note": "arrival June 30 1947; sailing July 5 1947"
      },
      {
        "port": "Hong Kong",
        "lon": 114.1694,
        "lat": 22.3193,
        "verified": true,
        "note": "arrival July 7 1947; sailing July 9 1947"
      },
      {
        "port": "Shanghai",
        "lon": 121.4700152,
        "lat": 31.2312707,
        "verified": true,
        "note": "arrival July 11 1947; sailing July 16 1947"
      },
      {
        "port": "Hong Kong",
        "lon": 114.1694,
        "lat": 22.3193,
        "verified": true,
        "note": "arrival July 18 1947; sailing July 20 1947"
      },
      {
        "port": "Manila",
        "lon": 120.9803621,
        "lat": 14.5904492,
        "verified": true,
        "note": "arrival July 23 1947; sailing July 24 1947"
      },
      {
        "port": "Tabako",
        "lon": 123.7333,
        "lat": 13.35,
        "verified": true,
        "note": "arrival July 25 1947; sailing July 29 1947"
      },
      {
        "port": "Cebu",
        "lon": 123.8854,
        "lat": 10.3157,
        "verified": true,
        "note": "arrival July 30 1947; sailing July 30 1947"
      },
      {
        "port": "Davao",
        "lon": 125.6128,
        "lat": 7.0731,
        "verified": true,
        "note": "arrival Aug 1 1947; sailing Aug 1 1947"
      },
      {
        "port": "Singapore",
        "lon": 103.8194992,
        "lat": 1.357107,
        "verified": true,
        "note": "arrival Aug 5 1947; sailing Aug 13 1947"
      },
      {
        "port": "Port Swettenham",
        "lon": 101.39,
        "lat": 3.0044,
        "verified": true,
        "note": "arrival Aug 14 1947; sailing Aug 15 1947"
      },
      {
        "port": "Penang",
        "lon": 100.3327,
        "lat": 5.4141,
        "verified": true,
        "note": "arrival Aug 15 1947; sailing Aug 18 1947"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Aug 22 1947; sailing Aug 24 1947"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Aug 31 1947; sailing Sept 1 1947"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Sept 4 1947"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Sept 5 1947"
      },
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "arrival Sept 14 1947; sailing Sept 29 1947"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival Oct 1 1947; sailing Oct 4 1947"
      },
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "arrival Oct 5 1947"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5662.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            0.2137,
            51.4867
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.8262,
            51.5038
          ],
          [
            1.474566,
            51.467902
          ],
          [
            1.868984,
            51.235892
          ],
          [
            2.330031,
            51.330031
          ],
          [
            3.4,
            51.5
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.9641,
            51.426
          ],
          [
            4.0905,
            51.3831
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.261322,
            51.340907
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            4.261322,
            51.340907
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.0905,
            51.3831
          ],
          [
            3.9641,
            51.426
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.4,
            51.5
          ],
          [
            2.330031,
            51.330031
          ],
          [
            1.868984,
            51.235892
          ],
          [
            1.560854,
            51.117159
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.1434,
            50.9561
          ],
          [
            0.985201,
            50.902413
          ],
          [
            0.344247,
            50.785762
          ],
          [
            0.267059,
            50.730434
          ],
          [
            0.09669,
            50.739707
          ],
          [
            0.064272,
            50.767826
          ],
          [
            -0.165167,
            50.720898
          ],
          [
            -0.472231,
            50.709646
          ],
          [
            -0.805974,
            50.697416
          ],
          [
            -0.898719,
            50.717134
          ],
          [
            -0.964727,
            50.731167
          ],
          [
            -1.025331,
            50.740592
          ],
          [
            -1.101463,
            50.752433
          ],
          [
            -1.28571,
            50.782482
          ],
          [
            -1.384206,
            50.757565
          ],
          [
            -1.544118,
            50.704021
          ],
          [
            -1.62871,
            50.657029
          ],
          [
            -1.85393,
            50.578724
          ],
          [
            -2.414364,
            50.484075
          ],
          [
            -2.588182,
            50.444243
          ],
          [
            -3.467698,
            50.403639
          ],
          [
            -3.514049,
            50.327504
          ],
          [
            -3.611387,
            50.204544
          ],
          [
            -3.717394,
            50.162517
          ],
          [
            -4.145765,
            50.307669
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            -4.145765,
            50.307669
          ],
          [
            -5.02742,
            49.99787
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.672084,
            49.873457
          ],
          [
            -5.754764,
            49.862255
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -6.5833,
            49.75
          ],
          [
            -6.686732,
            49.773745
          ],
          [
            -10.754063,
            50.707477
          ],
          [
            -11.238784,
            50.818753
          ],
          [
            -12.36921,
            51.078264
          ],
          [
            -13.2789,
            51.2871
          ],
          [
            -16.177338,
            51.67483
          ],
          [
            -18.318775,
            51.961295
          ],
          [
            -20.00188,
            52.186447
          ],
          [
            -22.406822,
            52.508162
          ],
          [
            -26.5724,
            53.0654
          ],
          [
            -27.341253,
            53.101719
          ],
          [
            -30.002774,
            53.227444
          ],
          [
            -30.964823,
            53.272889
          ],
          [
            -31.0328,
            53.2761
          ],
          [
            -33.174257,
            53.307363
          ],
          [
            -35.517479,
            53.341572
          ],
          [
            -37.1156,
            53.364903
          ],
          [
            -38.1634,
            53.3802
          ],
          [
            -40.002797,
            53.253745
          ],
          [
            -42.927683,
            53.052664
          ],
          [
            -46.591543,
            52.800781
          ],
          [
            -47.662265,
            52.727171
          ],
          [
            -48.9186,
            52.6408
          ],
          [
            -50.002244,
            52.610773
          ],
          [
            -54,
            52.5
          ],
          [
            -60,
            50
          ],
          [
            -66.192627,
            50.106488
          ],
          [
            -66.890259,
            49.292889
          ],
          [
            -68.7297,
            48.7027
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            -68.7297,
            48.7027
          ],
          [
            -69.625854,
            47.820539
          ],
          [
            -70.922241,
            46.893985
          ],
          [
            -71.040413,
            46.841121
          ],
          [
            -71.183098,
            46.837089
          ],
          [
            -71.234802,
            46.766198
          ],
          [
            -71.356447,
            46.738916
          ],
          [
            -71.683869,
            46.652012
          ],
          [
            -71.890961,
            46.672032
          ],
          [
            -72.194183,
            46.547282
          ],
          [
            -72.281799,
            46.432117
          ],
          [
            -72.806396,
            46.217852
          ],
          [
            -73.040098,
            46.061274
          ],
          [
            -73.164276,
            46.038911
          ],
          [
            -73.211243,
            45.906207
          ],
          [
            -73.373291,
            45.793129
          ],
          [
            -73.488373,
            45.617586
          ],
          [
            -73.535614,
            45.509613
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            -73.535614,
            45.509613
          ],
          [
            -73.488373,
            45.617586
          ],
          [
            -73.373291,
            45.793129
          ],
          [
            -73.211243,
            45.906207
          ],
          [
            -73.164276,
            46.038911
          ],
          [
            -73.040098,
            46.061274
          ],
          [
            -72.806396,
            46.217852
          ],
          [
            -72.281799,
            46.432117
          ],
          [
            -72.194183,
            46.547282
          ],
          [
            -71.890961,
            46.672032
          ],
          [
            -71.683869,
            46.652012
          ],
          [
            -71.356447,
            46.738916
          ],
          [
            -71.234802,
            46.766198
          ],
          [
            -71.183098,
            46.837089
          ],
          [
            -71.040413,
            46.841121
          ],
          [
            -70.922241,
            46.893985
          ],
          [
            -69.625854,
            47.820539
          ],
          [
            -68.7297,
            48.7027
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            -68.7297,
            48.7027
          ],
          [
            -66.890259,
            49.292889
          ],
          [
            -65.638916,
            49.511125
          ],
          [
            -63.3547,
            48.9284
          ],
          [
            -60.2,
            47.75
          ],
          [
            -59.3,
            46.1
          ],
          [
            -60.2173,
            45.2835
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -70.0641,
            41.4823
          ],
          [
            -70.2305,
            41.4442
          ],
          [
            -70.2864,
            41.4528
          ],
          [
            -70.5527,
            41.4794
          ],
          [
            -70.6342,
            41.5038
          ],
          [
            -70.6704,
            41.4908
          ],
          [
            -70.8432,
            41.4056
          ],
          [
            -70.8921,
            41.3891
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.7447,
            36.809
          ],
          [
            -75.3372,
            36.6311
          ],
          [
            -75.013176,
            36.092797
          ],
          [
            -74.994466,
            36.061714
          ],
          [
            -74.845245,
            35.813812
          ],
          [
            -74.817038,
            35.766951
          ],
          [
            -74.780601,
            35.706418
          ],
          [
            -74.772976,
            35.693752
          ],
          [
            -74.707169,
            35.584426
          ],
          [
            -74.633776,
            35.462498
          ],
          [
            -74.38547,
            35.049985
          ],
          [
            -74.145485,
            34.651297
          ],
          [
            -73.974015,
            34.366432
          ],
          [
            -73.840136,
            34.144019
          ],
          [
            -72.897588,
            32.578157
          ],
          [
            -72.597462,
            32.059213
          ],
          [
            -72.306161,
            31.505173
          ],
          [
            -72.129364,
            31.168912
          ],
          [
            -72.129345,
            31.168876
          ],
          [
            -71.802116,
            30.546502
          ],
          [
            -71.619263,
            30.198724
          ],
          [
            -71.561454,
            30.088773
          ],
          [
            -71.252822,
            29.501771
          ],
          [
            -70.685156,
            28.422096
          ],
          [
            -70.327,
            27.7409
          ],
          [
            -70.032341,
            27.122649
          ],
          [
            -69.571367,
            26.155434
          ],
          [
            -69.4289,
            24.8776
          ],
          [
            -69.297107,
            23.599887
          ],
          [
            -69.133036,
            22.009247
          ],
          [
            -69.008576,
            20.802629
          ],
          [
            -68.9,
            19.75
          ],
          [
            -67.95,
            18.5
          ],
          [
            -67.255752,
            17.883904
          ],
          [
            -66.6,
            17.3
          ],
          [
            -67.078784,
            16.694479
          ],
          [
            -68.314399,
            15.13179
          ],
          [
            -68.537011,
            14.85025
          ],
          [
            -68.84569,
            14.459862
          ],
          [
            -69.104748,
            14.13223
          ],
          [
            -69.297338,
            13.888661
          ],
          [
            -70,
            13
          ],
          [
            -69.450073,
            12.366832
          ],
          [
            -68.856812,
            12.005741
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            -68.856812,
            12.005741
          ],
          [
            -70.204577,
            12.484666
          ],
          [
            -71.04216,
            12.74246
          ],
          [
            -72.236279,
            12.447046
          ],
          [
            -74.685831,
            11.598822
          ],
          [
            -80,
            9.75
          ],
          [
            -79.900612,
            9.208176
          ],
          [
            -79.821304,
            9.173012
          ],
          [
            -79.803246,
            9.118307
          ],
          [
            -79.741379,
            9.118236
          ],
          [
            -79.689331,
            9.10639
          ],
          [
            -79.641747,
            9.035982
          ],
          [
            -79.585922,
            8.992656
          ],
          [
            -79.494118,
            8.796576
          ],
          [
            -79.5,
            8.6
          ],
          [
            -79.672852,
            7.422389
          ],
          [
            -80.227822,
            6.983728
          ],
          [
            -81.4,
            6.9
          ],
          [
            -82.8,
            7.4167
          ],
          [
            -87.997356,
            10.035818
          ],
          [
            -89.110835,
            10.580401
          ],
          [
            -90.991341,
            11.48884
          ],
          [
            -99.913376,
            15.63055
          ],
          [
            -99.9,
            16.5
          ],
          [
            -103.40332,
            17.983958
          ],
          [
            -106.489938,
            20.102998
          ],
          [
            -109.7,
            22.5
          ],
          [
            -112.510986,
            24.716895
          ],
          [
            -115.2,
            27.5
          ],
          [
            -117.3,
            32.7
          ],
          [
            -117.435608,
            33.167445
          ],
          [
            -118.1215,
            33.6276
          ],
          [
            -118.1788,
            33.6279
          ],
          [
            -118.295,
            33.6384
          ],
          [
            -118.4648,
            33.6364
          ],
          [
            -118.4867,
            33.7056
          ],
          [
            -118.511718,
            33.950617
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            -118.511718,
            33.950617
          ],
          [
            -118.85257,
            33.983209
          ],
          [
            -119.2671,
            34.0786
          ],
          [
            -119.5099,
            34.1273
          ],
          [
            -119.8734,
            34.2122
          ],
          [
            -120.5005,
            34.3545
          ],
          [
            -120.8841,
            34.4361
          ],
          [
            -121.532,
            34.5768
          ],
          [
            -124.335754,
            35.602083
          ],
          [
            -124.7876,
            35.767315
          ],
          [
            -125.4023,
            35.9921
          ],
          [
            -125.79613,
            36.120424
          ],
          [
            -126.521154,
            36.356665
          ],
          [
            -126.936629,
            36.492042
          ],
          [
            -130.001054,
            37.490546
          ],
          [
            -130.0893,
            37.5193
          ],
          [
            -132.090419,
            38.070858
          ],
          [
            -134.818074,
            38.822668
          ],
          [
            -134.9586,
            38.8614
          ],
          [
            -137.425836,
            39.418625
          ],
          [
            -140,
            40
          ],
          [
            -144.8826,
            40.7555
          ],
          [
            -148.927788,
            41.20084
          ],
          [
            -150.000787,
            41.312849
          ],
          [
            -151.3126,
            41.399388
          ],
          [
            -154.850126,
            41.632757
          ],
          [
            -158.468421,
            41.715315
          ],
          [
            -159.9932,
            41.749
          ],
          [
            -160.001049,
            41.748829
          ],
          [
            -160.413881,
            41.739849
          ],
          [
            -165.0775,
            41.6384
          ],
          [
            -168.752681,
            41.396954
          ],
          [
            -169.524375,
            41.346256
          ],
          [
            -171.111891,
            41.198456
          ],
          [
            -175.1119,
            40.758
          ],
          [
            -180,
            40
          ],
          [
            -180,
            40
          ],
          [
            -188.186,
            38.2345
          ],
          [
            -190.000968,
            37.695003
          ],
          [
            -193.683995,
            36.600227
          ],
          [
            -195.674807,
            36.008461
          ],
          [
            -195.9317,
            35.9321
          ],
          [
            -200.00184,
            34.381947
          ],
          [
            -202.985255,
            33.245683
          ],
          [
            -203.2013,
            33.1634
          ],
          [
            -210,
            30
          ],
          [
            -213.3801,
            28.149
          ],
          [
            -216.245664,
            26.453489
          ],
          [
            -216.435228,
            26.341327
          ],
          [
            -218.760619,
            24.878635
          ],
          [
            -220.001142,
            24.079767
          ],
          [
            -222.180507,
            22.607616
          ],
          [
            -222.8587,
            22.1495
          ],
          [
            -224.356087,
            21.079859
          ],
          [
            -225.786142,
            20.058315
          ],
          [
            -225.8283,
            20.0282
          ],
          [
            -228.17195,
            18.268861
          ],
          [
            -228.7186,
            17.8585
          ],
          [
            -230.000504,
            16.853491
          ],
          [
            -231.5394,
            15.647
          ],
          [
            -234.3,
            13.4
          ],
          [
            -235.673218,
            12.940322
          ],
          [
            -235.836639,
            12.491554
          ],
          [
            -236.093445,
            12.478146
          ],
          [
            -236.347504,
            12.775643
          ],
          [
            -236.631775,
            12.633638
          ],
          [
            -237.989014,
            13.056805
          ],
          [
            -238.477457,
            13.368274
          ],
          [
            -239.27536,
            13.63531
          ],
          [
            -239.497833,
            13.911407
          ],
          [
            -239.464874,
            14.262387
          ],
          [
            -239.069366,
            14.630095
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            120.930634,
            14.630095
          ],
          [
            120.535126,
            14.262387
          ],
          [
            119.9,
            14.4
          ],
          [
            118.161859,
            16.908251
          ],
          [
            117.028182,
            18.264486
          ],
          [
            115.841059,
            19.666279
          ],
          [
            114.1,
            21.7
          ],
          [
            114.216614,
            21.932855
          ],
          [
            114.426727,
            22.070369
          ],
          [
            114.421234,
            22.253513
          ],
          [
            114.428101,
            22.338644
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            114.428101,
            22.338644
          ],
          [
            114.451447,
            22.426263
          ],
          [
            115.443883,
            22.303937
          ],
          [
            117,
            23
          ],
          [
            117.398162,
            23.301773
          ],
          [
            118.34681,
            24.018001
          ],
          [
            118.755294,
            24.354126
          ],
          [
            119.095133,
            24.645959
          ],
          [
            119.428548,
            24.865974
          ],
          [
            119.761963,
            25.085599
          ],
          [
            119.820497,
            25.236972
          ],
          [
            120,
            25.7
          ],
          [
            120.232569,
            26.078521
          ],
          [
            120.787503,
            26.976762
          ],
          [
            121.3,
            27.8
          ],
          [
            122.23938,
            28.579698
          ],
          [
            122.557297,
            29.38397
          ],
          [
            122.652515,
            29.623632
          ],
          [
            122.875214,
            30.181935
          ],
          [
            122.878907,
            30.349364
          ],
          [
            122.891141,
            30.901897
          ],
          [
            122.66922,
            30.932268
          ],
          [
            121.944122,
            31.062345
          ],
          [
            121.839752,
            31.258596
          ],
          [
            121.418678,
            31.509996
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            121.418678,
            31.509996
          ],
          [
            121.839752,
            31.258596
          ],
          [
            121.944122,
            31.062345
          ],
          [
            122.66922,
            30.932268
          ],
          [
            122.891141,
            30.901897
          ],
          [
            122.878907,
            30.349364
          ],
          [
            122.875214,
            30.181935
          ],
          [
            122.652515,
            29.623632
          ],
          [
            122.557297,
            29.38397
          ],
          [
            122.23938,
            28.579698
          ],
          [
            121.3,
            27.8
          ],
          [
            120.787503,
            26.976762
          ],
          [
            120.232569,
            26.078521
          ],
          [
            120,
            25.7
          ],
          [
            119.820497,
            25.236972
          ],
          [
            119.761963,
            25.085599
          ],
          [
            119.428548,
            24.865974
          ],
          [
            119.095133,
            24.645959
          ],
          [
            118.755294,
            24.354126
          ],
          [
            118.34681,
            24.018001
          ],
          [
            117.398162,
            23.301773
          ],
          [
            117,
            23
          ],
          [
            115.443883,
            22.303937
          ],
          [
            114.451447,
            22.426263
          ],
          [
            114.428101,
            22.338644
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            114.428101,
            22.338644
          ],
          [
            114.421234,
            22.253513
          ],
          [
            114.426727,
            22.070369
          ],
          [
            114.216614,
            21.932855
          ],
          [
            114.1,
            21.7
          ],
          [
            115.841059,
            19.666279
          ],
          [
            117.028182,
            18.264486
          ],
          [
            118.161859,
            16.908251
          ],
          [
            119.9,
            14.4
          ],
          [
            120.535126,
            14.262387
          ],
          [
            120.930634,
            14.630095
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            120.930634,
            14.630095
          ],
          [
            120.535126,
            14.262387
          ],
          [
            120.502167,
            13.911407
          ],
          [
            120.72464,
            13.63531
          ],
          [
            121.522543,
            13.368274
          ],
          [
            122.010986,
            13.056805
          ],
          [
            123.368225,
            12.633638
          ],
          [
            123.652496,
            12.775643
          ],
          [
            123.906555,
            12.478146
          ],
          [
            124.163361,
            12.491554
          ],
          [
            124.326782,
            12.940322
          ],
          [
            124.252625,
            13.120942
          ],
          [
            123.836517,
            13.17176
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            123.836517,
            13.17176
          ],
          [
            124.252625,
            13.120942
          ],
          [
            124.326782,
            12.940322
          ],
          [
            124.163361,
            12.491554
          ],
          [
            124.262238,
            12.325244
          ],
          [
            124.29245,
            12.115865
          ],
          [
            124.107056,
            11.290201
          ],
          [
            124.181213,
            10.947933
          ],
          [
            124.174627,
            10.807914
          ],
          [
            124.157867,
            10.45135
          ],
          [
            123.983459,
            10.229789
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            123.983459,
            10.229789
          ],
          [
            123.840637,
            10.159505
          ],
          [
            123.601685,
            9.552
          ],
          [
            123.362732,
            9.351513
          ],
          [
            123.328324,
            9.012027
          ],
          [
            121.925,
            8.750165
          ],
          [
            121.863098,
            6.905977
          ],
          [
            122.320404,
            6.725984
          ],
          [
            123.875186,
            6.172271
          ],
          [
            125.040894,
            5.756739
          ],
          [
            125.391083,
            5.4793
          ],
          [
            125.8,
            5.7
          ],
          [
            125.844919,
            6.668039
          ],
          [
            125.551758,
            7.000038
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            125.551758,
            7.000038
          ],
          [
            125.844919,
            6.668039
          ],
          [
            125.8,
            5.7
          ],
          [
            125.391083,
            5.4793
          ],
          [
            125.040894,
            5.756739
          ],
          [
            123.875186,
            6.172271
          ],
          [
            122.320404,
            6.725984
          ],
          [
            121.863098,
            6.905977
          ],
          [
            120.05,
            8.4
          ],
          [
            117.362542,
            7.143619
          ],
          [
            117.046811,
            7.03918
          ],
          [
            116.844743,
            7.122733
          ],
          [
            115.714472,
            6.691357
          ],
          [
            114.5842,
            6.2596
          ],
          [
            114,
            6
          ],
          [
            111.235622,
            4.487034
          ],
          [
            109.8,
            3.7
          ],
          [
            104.482294,
            1.341312
          ],
          [
            104.145848,
            1.249295
          ],
          [
            104.026451,
            1.375562
          ],
          [
            103.999157,
            1.418465
          ],
          [
            103.926287,
            1.429362
          ],
          [
            103.895988,
            1.427732
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            103.895988,
            1.427732
          ],
          [
            103.853073,
            1.463083
          ],
          [
            103.797112,
            1.476125
          ],
          [
            103.763123,
            1.448668
          ],
          [
            103.721924,
            1.458278
          ],
          [
            103.675232,
            1.429448
          ],
          [
            103.627853,
            1.349134
          ],
          [
            103.563995,
            1.295246
          ],
          [
            103.6,
            1.1
          ],
          [
            102,
            2
          ],
          [
            101.316415,
            2.586072
          ],
          [
            100.6,
            3.2
          ],
          [
            101.273346,
            3.12269
          ],
          [
            101.34613,
            3.074695
          ],
          [
            101.351624,
            2.99927
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            101.351624,
            2.99927
          ],
          [
            101.34613,
            3.074695
          ],
          [
            101.273346,
            3.12269
          ],
          [
            100.6,
            3.2
          ],
          [
            99.763807,
            4.084523
          ],
          [
            100.118408,
            4.839207
          ],
          [
            100.079956,
            5.41368
          ],
          [
            100.189819,
            5.57635
          ],
          [
            100.349121,
            5.458794
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            100.349121,
            5.458794
          ],
          [
            100.189819,
            5.57635
          ],
          [
            98.128129,
            5.811729
          ],
          [
            94.326449,
            6.157121
          ],
          [
            90,
            6.4664
          ],
          [
            85.9479,
            6.1983
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 21,
        "to_idx": 22,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 22,
        "to_idx": 23,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 23,
        "to_idx": 24,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 24,
        "to_idx": 25,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.954994,
            45.668797
          ],
          [
            -6.698867,
            47.340067
          ],
          [
            -5.5,
            48.6667
          ],
          [
            -5.06401,
            48.799916
          ],
          [
            -4.270518,
            49.042365
          ],
          [
            -4.030414,
            49.115729
          ],
          [
            -3.986163,
            49.129249
          ],
          [
            -3.197043,
            49.370363
          ],
          [
            -2.39189,
            49.616376
          ],
          [
            -1.992006,
            49.738559
          ],
          [
            -1.93365,
            49.75639
          ],
          [
            -1.665743,
            49.838248
          ],
          [
            -1.47977,
            49.895072
          ],
          [
            -1.3,
            49.95
          ],
          [
            -0.671539,
            50.155459
          ],
          [
            -0.545959,
            50.196513
          ],
          [
            -0.343359,
            50.262748
          ],
          [
            0.39288,
            50.503441
          ],
          [
            1.193894,
            50.765311
          ],
          [
            1.3,
            50.8
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.474566,
            51.467902
          ],
          [
            0.8262,
            51.5038
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.2137,
            51.4867
          ]
        ]
      },
      {
        "from_idx": 25,
        "to_idx": 26,
        "verified": true,
        "coords": [
          [
            0.2137,
            51.4867
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.8262,
            51.5038
          ],
          [
            1.474566,
            51.467902
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.3,
            50.8
          ],
          [
            1.149895,
            50.76637
          ],
          [
            0.301537,
            50.576304
          ],
          [
            -0.505582,
            50.395477
          ],
          [
            -0.672505,
            50.358079
          ],
          [
            -0.764313,
            50.33751
          ],
          [
            -0.76446,
            50.337798
          ],
          [
            -1.251907,
            50.264973
          ],
          [
            -1.577583,
            50.216317
          ],
          [
            -1.755087,
            50.189798
          ],
          [
            -2.100162,
            50.138244
          ],
          [
            -2.270882,
            50.112738
          ],
          [
            -2.624015,
            50.023556
          ],
          [
            -4,
            50.1
          ],
          [
            -4.115519,
            50.084349
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      },
      {
        "from_idx": 26,
        "to_idx": 27,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.54422,
            55.924586
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/168876_city_of_chester.jpeg"
  },
  {
    "id": "city-of-chester-1947-2",
    "ship": "City of Chester",
    "ship_no": "168876",
    "line": "Ellerman Lines (City Line)",
    "built": "1944, Harland & Wolff",
    "tons": "4,954 grt",
    "flag": "📍 Last Known Position",
    "engaged": "23 Oct 1947, 150",
    "discharged": "30 Oct 1947, 151",
    "engagement_date": "1947-10-23",
    "discharge_date": "1947-10-30",
    "rank": "Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Chief Steward on City of Chester from 23 Oct 1947, 150 to 30 Oct 1947, 151. Engagement type: foreign-going.",
    "voyage_note": "Verification: CHECKED (assumed discharge date): card (IMG_5662) confirms the ship was in Liverpool continuously from 19 Oct to 7 Nov 1947 — consistent with the engage/discharge window.",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "no new port call logged in this window; ship's last known position was Liverpool (arrival Oct 19 1947)"
      }
    ],
    "card_images": [],
    "waypoints_source": "card_carried_forward",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/168876_city_of_chester.jpeg"
  },
  {
    "id": "city-of-chester-1947-3",
    "ship": "City of Chester",
    "ship_no": "168876",
    "line": "Ellerman Lines (City Line)",
    "built": "1944, Harland & Wolff",
    "tons": "4,954 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "30 Oct 1947, 150",
    "discharged": "21 Feb 1949, 151",
    "engagement_date": "1947-10-30",
    "discharge_date": "1949-02-21",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Chester from 30 Oct 1947, 150 to 21 Feb 1949, 151. Engagement type: foreign-going.",
    "voyage_note": "USA immigration record: Hall Line Ltd, Arrived in New York 26th Jan 1948 having sailed from Capetown. Arrived in New York 22 May 1948 from port elizabeth, sa. Arrived in New York 17th sept, departed from Mombassa 14th Aug. Verification: CHECKED: all 3 immigration notes corroborated by cards (IMG_5662/5663) — 26 Jan 1948 ex-Cape Town (card: NY arrival 25 Jan, 1 day off); 22 May 1948 ex-Port Elizabeth (card: exact match); 17 Sept ex-Mombasa 14 Aug (card: exact match on both dates).",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "sailing Nov 7 1947"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival Nov 23 1947; sailing Nov 26 1947"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival Nov 27 1947; sailing — 1947"
      },
      {
        "port": "East London",
        "lon": 27.9116,
        "lat": -33.0153,
        "verified": true,
        "note": "arrival Dec 1 1947; sailing Dec 2 1947"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Dec 3 1947; sailing Dec 11 1947"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Dec 12 1947; sailing Dec 12 1947"
      },
      {
        "port": "Mombasa",
        "lon": 39.667169,
        "lat": -4.05052,
        "verified": true,
        "note": "arrival Dec 16 1947; sailing Dec 22 1947"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Dec 27 1947; sailing Jan 1 1948"
      },
      {
        "port": "East London",
        "lon": 27.9116,
        "lat": -33.0153,
        "verified": true,
        "note": "arrival Jan 2 1948; sailing Jan 2 1948"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival Jan 3 1948; sailing Jan 3 1948"
      },
      {
        "port": "Mossel Bay",
        "lon": 22.1536248,
        "lat": -34.1832022,
        "verified": true,
        "note": "arrival Jan 4 1948; sailing Jan 5 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival Jan 6 1948; sailing Jan 6 1948"
      },
      {
        "port": "Trinidad",
        "lon": -61.5,
        "lat": 10.6667,
        "verified": true,
        "note": "arrival Jan 19 1948; sailing Jan 20 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Jan 25 1948; sailing Feb 10 1948"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Feb 11 1948; sailing Feb 14 1948"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Feb 15 1948; sailing Feb 16 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Feb 17 1948; sailing Feb 26 1948"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival Feb 27 1948; sailing Feb 27 1948"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Feb 28 1948; sailing Feb 29 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival Mar 18 1948; sailing Mar 19 1948"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival Mar 21 1948; sailing Mar 22 1948"
      },
      {
        "port": "East London",
        "lon": 27.9116,
        "lat": -33.0153,
        "verified": true,
        "note": "arrival Mar 23 1948; sailing Mar 23 1948"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Mar 24 1948; sailing Mar 27 1948"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Mar 28 1948; sailing Mar 30 1948"
      },
      {
        "port": "Mozambique",
        "lon": 40.735,
        "lat": -15.0342,
        "verified": true,
        "note": "arrival Apr 1 1948; sailing Apr 4 1948"
      },
      {
        "port": "Dar es Salaam",
        "lon": 39.2803583,
        "lat": -6.8160837,
        "verified": true,
        "note": "arrival Apr 6 1948; sailing Apr 10 1948"
      },
      {
        "port": "Tanga",
        "lon": 39.0983,
        "lat": -5.0689,
        "verified": true,
        "note": "arrival Apr 11 1948; sailing Apr 13 1948"
      },
      {
        "port": "Mombasa",
        "lon": 39.667169,
        "lat": -4.05052,
        "verified": true,
        "note": "arrival Apr 13 1948; sailing Apr 16 1948"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Apr 20 1948; sailing Apr 23 1948"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Apr 24 1948; sailing Apr 27 1948"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival Apr 28 1948; sailing Apr 30 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival May 1 1948; sailing May 2 1948"
      },
      {
        "port": "Trinidad",
        "lon": -61.5,
        "lat": 10.6667,
        "verified": true,
        "note": "arrival May 16 1948; sailing May 16 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival May 22 1948; sailing May 25 1948; sailing May 26 1948"
      },
      {
        "port": "Montreal",
        "lon": -73.5698065,
        "lat": 45.5031824,
        "verified": true,
        "note": "arrival June 1 1948; sailing June 5 1948"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival June 9 1948; sailing June 11 1948"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival June 13 1948; sailing June 14 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival June 15 1948; sailing June 23 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival July 12 1948; sailing July 13 1948"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival July 14 1948; sailing July 30 1948"
      },
      {
        "port": "East London",
        "lon": 27.9116,
        "lat": -33.0153,
        "verified": true,
        "note": "arrival July 31 1948; sailing July 31 1948"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Aug 1 1948; sailing Aug 5 1948"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Aug 6 1948; sailing Aug 7 1948"
      },
      {
        "port": "Mombasa",
        "lon": 39.667169,
        "lat": -4.05052,
        "verified": true,
        "note": "arrival Aug 11 1948; sailing Aug 14 1948"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Aug 18 1948; sailing Aug 20 1948"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Aug 22 1948; sailing Aug 24 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival Aug 27 1948; sailing Aug 28 1948"
      },
      {
        "port": "Trinidad",
        "lon": -61.5,
        "lat": 10.6667,
        "verified": true,
        "note": "arrival Sept 11 1948; sailing Sept 11 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Sept 17 1948; sailing Sept 22 1948"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival Sept 23 1948; sailing Sept 24 1948"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Sept 25 1948; sailing Oct 6 1948"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Oct 7 1948; sailing Oct 10 1948"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Oct 10 1948; sailing Oct 19 1948"
      },
      {
        "port": "Table Bay",
        "lon": 18.4241,
        "lat": -33.9249,
        "verified": true,
        "note": "arrival Nov 6 1948; sailing Nov 7 1948"
      },
      {
        "port": "Port Elizabeth",
        "lon": 25.6022,
        "lat": -33.9608,
        "verified": true,
        "note": "arrival Nov 8 1948; sailing Nov 17 1948"
      },
      {
        "port": "East London",
        "lon": 27.9116,
        "lat": -33.0153,
        "verified": true,
        "note": "arrival Nov 18 1948; sailing Nov 18 1948"
      },
      {
        "port": "Durban",
        "lon": 31.009909,
        "lat": -29.8618145,
        "verified": true,
        "note": "arrival Nov 19 1948; sailing Dec 2 1948"
      },
      {
        "port": "Lourenco Marques",
        "lon": 32.5732,
        "lat": -25.9692,
        "verified": true,
        "note": "arrival Dec 3 1948; sailing Dec 6 1948"
      },
      {
        "port": "Mombasa",
        "lon": 39.667169,
        "lat": -4.05052,
        "verified": true,
        "note": "arrival Dec 8 1948; sailing Dec 13 1948"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival Dec 22 1948; sailing Dec 25 1948"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival Dec 27 1948; sailing Jan 15 1949"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "sailing Jan 16 1949"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival Jan 18 1949; sailing Jan 19 1949"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Jan 20 1949; sailing Jan 22 1949"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Jan 27 1949; sailing Jan 27 1949"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Jan 31 1949"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Feb 1 1949"
      },
      {
        "port": "Gibraltar",
        "lon": -5.3474761,
        "lat": 36.1285933,
        "verified": true,
        "note": "arrival Feb 7 1949; sailing Feb 7 1949"
      },
      {
        "port": "Boston",
        "lon": -71.0578303,
        "lat": 42.3588336,
        "verified": true,
        "note": "arrival Feb 16 1949; sailing Feb 16 1949"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Feb 17 1949"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5662.jpeg",
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5663.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -6.022929,
            51.019331
          ],
          [
            -6.132679,
            50.813392
          ],
          [
            -6.236156,
            50.619224
          ],
          [
            -6.674013,
            49.79761
          ],
          [
            -6.686732,
            49.773745
          ],
          [
            -6.692563,
            49.762802
          ],
          [
            -6.693996,
            49.760113
          ],
          [
            -6.69652,
            49.755378
          ],
          [
            -6.697411,
            49.753705
          ],
          [
            -6.709922,
            49.73023
          ],
          [
            -7.193705,
            48.822439
          ],
          [
            -7.371242,
            48.489301
          ],
          [
            -7.679507,
            47.910861
          ],
          [
            -7.907145,
            47.483711
          ],
          [
            -10.063992,
            43.402334
          ],
          [
            -10.167909,
            43.146826
          ],
          [
            -10.289669,
            42.796988
          ],
          [
            -11.070622,
            40.553191
          ],
          [
            -11.158374,
            40.301066
          ],
          [
            -11.664545,
            38.84676
          ],
          [
            -11.81009,
            38.428587
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -12.131862,
            37.504085
          ],
          [
            -12.262448,
            37.128892
          ],
          [
            -12.32612,
            36.945951
          ],
          [
            -12.493983,
            36.463656
          ],
          [
            -12.608538,
            36.134522
          ],
          [
            -12.761203,
            35.695892
          ],
          [
            -12.839781,
            35.470126
          ],
          [
            -13.114888,
            34.6797
          ],
          [
            -13.32875,
            34.065242
          ],
          [
            -13.9051,
            32.4093
          ],
          [
            -15.172119,
            29.337503
          ],
          [
            -15.145809,
            28.538331
          ],
          [
            -15.128174,
            27.999252
          ],
          [
            -18,
            21
          ],
          [
            -18,
            15
          ],
          [
            -17,
            11
          ],
          [
            -13.4277,
            5.5302
          ],
          [
            -10,
            -2e-05
          ],
          [
            -5.531121,
            -5.586708
          ],
          [
            -1.989182,
            -10.0146
          ],
          [
            -1.100476,
            -11.1256
          ],
          [
            0.000405,
            -12.501846
          ],
          [
            1.7833,
            -14.7307
          ],
          [
            3.542734,
            -16.929822
          ],
          [
            5.653262,
            -19.567777
          ],
          [
            7.89386,
            -22.368307
          ],
          [
            10.425227,
            -25.53227
          ],
          [
            12.499733,
            -28.1252
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            22,
            -35
          ],
          [
            26,
            -34.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            28.5,
            -33.5
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            28.5,
            -33.5
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            36,
            -24
          ],
          [
            38.929,
            -19.5234
          ],
          [
            41.7,
            -15
          ],
          [
            41,
            -10
          ],
          [
            40,
            -6.5
          ],
          [
            40.3,
            -4.2
          ],
          [
            39.830933,
            -4.061536
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            39.830933,
            -4.061536
          ],
          [
            40.3,
            -4.2
          ],
          [
            40,
            -6.5
          ],
          [
            41,
            -10
          ],
          [
            41.7,
            -15
          ],
          [
            38.929,
            -19.5234
          ],
          [
            36,
            -24
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            34.437034,
            -25.749552
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            28.5,
            -33.5
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            28.5,
            -33.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            26,
            -34.5
          ],
          [
            22,
            -35
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            22,
            -35
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            14.0806,
            -33.5827
          ],
          [
            10.000809,
            -31.926949
          ],
          [
            8.741211,
            -31.368532
          ],
          [
            5.891411,
            -30.076823
          ],
          [
            2.015382,
            -28.169477
          ],
          [
            0.00081,
            -27.123985
          ],
          [
            -4.412459,
            -24.677177
          ],
          [
            -7.024709,
            -23.154038
          ],
          [
            -9.999624,
            -21.343395
          ],
          [
            -10.796127,
            -20.843889
          ],
          [
            -12.088665,
            -20.028905
          ],
          [
            -16.822275,
            -16.967419
          ],
          [
            -19.999225,
            -14.844666
          ],
          [
            -22.806528,
            -12.935362
          ],
          [
            -27.018677,
            -10.021884
          ],
          [
            -28.772132,
            -8.796464
          ],
          [
            -29.999876,
            -7.933805
          ],
          [
            -31.063081,
            -7.186164
          ],
          [
            -33.8,
            -5.25
          ],
          [
            -34.860393,
            -4.720374
          ],
          [
            -38.1,
            -3.1
          ],
          [
            -41.5476,
            -0.9739
          ],
          [
            -42.781385,
            -0.211655
          ],
          [
            -42.984139,
            -0.086392
          ],
          [
            -43.123942,
            -2e-05
          ],
          [
            -44.9917,
            1.1539
          ],
          [
            -46.399027,
            2.021526
          ],
          [
            -48.44,
            3.2798
          ],
          [
            -51.9,
            5.4
          ],
          [
            -56.4243,
            8.2122
          ],
          [
            -61,
            11
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.803589,
            10.631253
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            -61.803589,
            10.631253
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.9,
            12
          ],
          [
            -64.89149,
            15.306171
          ],
          [
            -66.372586,
            17.013056
          ],
          [
            -66.6,
            17.3
          ],
          [
            -67.255752,
            17.883904
          ],
          [
            -67.95,
            18.5
          ],
          [
            -68.9,
            19.75
          ],
          [
            -69.008576,
            20.802629
          ],
          [
            -69.133036,
            22.009247
          ],
          [
            -69.297107,
            23.599887
          ],
          [
            -69.4289,
            24.8776
          ],
          [
            -69.571367,
            26.155434
          ],
          [
            -69.686099,
            27.184507
          ],
          [
            -69.798842,
            28.195741
          ],
          [
            -69.9433,
            28.5593
          ],
          [
            -70.007418,
            28.704929
          ],
          [
            -70.491548,
            29.804519
          ],
          [
            -70.592445,
            30.033682
          ],
          [
            -70.666621,
            30.202157
          ],
          [
            -70.761711,
            30.418131
          ],
          [
            -70.761716,
            30.418143
          ],
          [
            -71.120755,
            31.233616
          ],
          [
            -71.29405,
            31.627217
          ],
          [
            -71.494758,
            32.083079
          ],
          [
            -72.1002,
            33.4582
          ],
          [
            -72.374413,
            34.005228
          ],
          [
            -72.718517,
            34.691681
          ],
          [
            -72.83967,
            34.933368
          ],
          [
            -73.269223,
            35.790283
          ],
          [
            -73.415861,
            36.082812
          ],
          [
            -73.4495,
            36.149919
          ],
          [
            -73.613489,
            36.477059
          ],
          [
            -73.637591,
            36.525141
          ],
          [
            -73.744231,
            36.737877
          ],
          [
            -73.810546,
            36.870169
          ],
          [
            -73.795419,
            37.972408
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.7447,
            36.809
          ],
          [
            -75.3372,
            36.6311
          ],
          [
            -75.013176,
            36.092797
          ],
          [
            -74.994466,
            36.061714
          ],
          [
            -74.845245,
            35.813812
          ],
          [
            -74.817038,
            35.766951
          ],
          [
            -74.780601,
            35.706418
          ],
          [
            -74.772976,
            35.693752
          ],
          [
            -74.707169,
            35.584426
          ],
          [
            -74.633776,
            35.462498
          ],
          [
            -74.400879,
            35.393811
          ],
          [
            -73.833105,
            35.226359
          ],
          [
            -73.727118,
            35.1951
          ],
          [
            -72.83967,
            34.933368
          ],
          [
            -72.701493,
            34.892616
          ],
          [
            -72.286723,
            34.770289
          ],
          [
            -70.617007,
            34.277845
          ],
          [
            -70.556671,
            34.260051
          ],
          [
            -69.8509,
            34.0519
          ],
          [
            -69.804094,
            34.035665
          ],
          [
            -69.517415,
            33.936231
          ],
          [
            -69.087845,
            33.787235
          ],
          [
            -67.811038,
            33.344376
          ],
          [
            -67.531454,
            33.247402
          ],
          [
            -64.8,
            32.3
          ],
          [
            -64.254997,
            32.038853
          ],
          [
            -64.165786,
            31.996106
          ],
          [
            -62.303605,
            31.103811
          ],
          [
            -61.320443,
            30.632712
          ],
          [
            -60.541592,
            30.010129
          ],
          [
            -60.223798,
            29.75575
          ],
          [
            -60.000119,
            29.576705
          ],
          [
            -58.995496,
            28.772554
          ],
          [
            -57.951012,
            27.936496
          ],
          [
            -57.046567,
            27.210057
          ],
          [
            -54.840663,
            25.427012
          ],
          [
            -54.686707,
            25.302569
          ],
          [
            -51.302049,
            22.551019
          ],
          [
            -50.000417,
            21.489805
          ],
          [
            -49.207335,
            20.840203
          ],
          [
            -48.21318,
            20.024728
          ],
          [
            -46.036889,
            18.239233
          ],
          [
            -43.776444,
            16.37688
          ],
          [
            -40.000523,
            13.2666
          ],
          [
            -38.257452,
            11.8296
          ],
          [
            -36.07644,
            10.028798
          ],
          [
            -34.4259,
            8.664676
          ],
          [
            -32.762118,
            7.288622
          ],
          [
            -31.8433,
            6.5287
          ],
          [
            -30.0003,
            5.002688
          ],
          [
            -29.829347,
            4.861138
          ],
          [
            -29.222944,
            4.359034
          ],
          [
            -27.159236,
            2.649749
          ],
          [
            -27.041927,
            2.552564
          ],
          [
            -23.960846,
            -2e-05
          ],
          [
            -21.780662,
            -1.806339
          ],
          [
            -19.999803,
            -3.28153
          ],
          [
            -17.819,
            -5.0879
          ],
          [
            -14.3,
            -8
          ],
          [
            -12.52511,
            -10.018534
          ],
          [
            -11.321431,
            -11.387445
          ],
          [
            -9.999538,
            -12.890797
          ],
          [
            -6.625182,
            -16.728359
          ],
          [
            -2.645049,
            -20.036605
          ],
          [
            -1.147621,
            -21.216471
          ],
          [
            0.000594,
            -22.121182
          ],
          [
            4.581235,
            -25.7304
          ],
          [
            10,
            -30
          ],
          [
            13.9085,
            -32.5342
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            22,
            -35
          ],
          [
            26,
            -34.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            28.5,
            -33.5
          ]
        ]
      },
      {
        "from_idx": 21,
        "to_idx": 22,
        "verified": true,
        "coords": [
          [
            28.5,
            -33.5
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 22,
        "to_idx": 23,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 23,
        "to_idx": 24,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            36,
            -24
          ],
          [
            38.929,
            -19.5234
          ],
          [
            41.7,
            -15
          ]
        ]
      },
      {
        "from_idx": 24,
        "to_idx": 25,
        "verified": true,
        "coords": [
          [
            41.7,
            -15
          ],
          [
            41,
            -10
          ],
          [
            40,
            -6.5
          ],
          [
            39.325562,
            -6.653695
          ]
        ]
      },
      {
        "from_idx": 25,
        "to_idx": 26,
        "verified": true,
        "coords": [
          [
            39.325562,
            -6.653695
          ],
          [
            38.968506,
            -6.075011
          ],
          [
            39.424438,
            -4.861101
          ]
        ]
      },
      {
        "from_idx": 26,
        "to_idx": 27,
        "verified": true,
        "coords": [
          [
            39.424438,
            -4.861101
          ],
          [
            39.830933,
            -4.061536
          ]
        ]
      },
      {
        "from_idx": 27,
        "to_idx": 28,
        "verified": true,
        "coords": [
          [
            39.830933,
            -4.061536
          ],
          [
            40.3,
            -4.2
          ],
          [
            40,
            -6.5
          ],
          [
            41,
            -10
          ],
          [
            41.7,
            -15
          ],
          [
            38.929,
            -19.5234
          ],
          [
            36,
            -24
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 28,
        "to_idx": 29,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 29,
        "to_idx": 30,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            28.5,
            -33.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 30,
        "to_idx": 31,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            26,
            -34.5
          ],
          [
            22,
            -35
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 31,
        "to_idx": 32,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            14.0806,
            -33.5827
          ],
          [
            10.000809,
            -31.926949
          ],
          [
            8.741211,
            -31.368532
          ],
          [
            5.891411,
            -30.076823
          ],
          [
            2.015382,
            -28.169477
          ],
          [
            0.00081,
            -27.123985
          ],
          [
            -4.412459,
            -24.677177
          ],
          [
            -7.024709,
            -23.154038
          ],
          [
            -9.999624,
            -21.343395
          ],
          [
            -10.796127,
            -20.843889
          ],
          [
            -12.088665,
            -20.028905
          ],
          [
            -16.822275,
            -16.967419
          ],
          [
            -19.999225,
            -14.844666
          ],
          [
            -22.806528,
            -12.935362
          ],
          [
            -27.018677,
            -10.021884
          ],
          [
            -28.772132,
            -8.796464
          ],
          [
            -29.999876,
            -7.933805
          ],
          [
            -31.063081,
            -7.186164
          ],
          [
            -33.8,
            -5.25
          ],
          [
            -34.860393,
            -4.720374
          ],
          [
            -38.1,
            -3.1
          ],
          [
            -41.5476,
            -0.9739
          ],
          [
            -42.781385,
            -0.211655
          ],
          [
            -42.984139,
            -0.086392
          ],
          [
            -43.123942,
            -2e-05
          ],
          [
            -44.9917,
            1.1539
          ],
          [
            -46.399027,
            2.021526
          ],
          [
            -48.44,
            3.2798
          ],
          [
            -51.9,
            5.4
          ],
          [
            -56.4243,
            8.2122
          ],
          [
            -61,
            11
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.803589,
            10.631253
          ]
        ]
      },
      {
        "from_idx": 32,
        "to_idx": 33,
        "verified": true,
        "coords": [
          [
            -61.803589,
            10.631253
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.9,
            12
          ],
          [
            -64.89149,
            15.306171
          ],
          [
            -66.372586,
            17.013056
          ],
          [
            -66.6,
            17.3
          ],
          [
            -67.255752,
            17.883904
          ],
          [
            -67.95,
            18.5
          ],
          [
            -68.9,
            19.75
          ],
          [
            -69.008576,
            20.802629
          ],
          [
            -69.133036,
            22.009247
          ],
          [
            -69.297107,
            23.599887
          ],
          [
            -69.4289,
            24.8776
          ],
          [
            -69.571367,
            26.155434
          ],
          [
            -69.686099,
            27.184507
          ],
          [
            -69.798842,
            28.195741
          ],
          [
            -69.9433,
            28.5593
          ],
          [
            -70.007418,
            28.704929
          ],
          [
            -70.491548,
            29.804519
          ],
          [
            -70.592445,
            30.033682
          ],
          [
            -70.666621,
            30.202157
          ],
          [
            -70.761711,
            30.418131
          ],
          [
            -70.761716,
            30.418143
          ],
          [
            -71.120755,
            31.233616
          ],
          [
            -71.29405,
            31.627217
          ],
          [
            -71.494758,
            32.083079
          ],
          [
            -72.1002,
            33.4582
          ],
          [
            -72.374413,
            34.005228
          ],
          [
            -72.718517,
            34.691681
          ],
          [
            -72.83967,
            34.933368
          ],
          [
            -73.269223,
            35.790283
          ],
          [
            -73.415861,
            36.082812
          ],
          [
            -73.4495,
            36.149919
          ],
          [
            -73.613489,
            36.477059
          ],
          [
            -73.637591,
            36.525141
          ],
          [
            -73.744231,
            36.737877
          ],
          [
            -73.810546,
            36.870169
          ],
          [
            -73.795419,
            37.972408
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 33,
        "to_idx": 34,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -70.8921,
            41.3891
          ],
          [
            -70.8432,
            41.4056
          ],
          [
            -70.6704,
            41.4908
          ],
          [
            -70.6342,
            41.5038
          ],
          [
            -70.5527,
            41.4794
          ],
          [
            -70.2864,
            41.4528
          ],
          [
            -70.2305,
            41.4442
          ],
          [
            -70.0641,
            41.4823
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -69.25,
            41.8
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -65.4,
            43.2
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -60.2173,
            45.2835
          ],
          [
            -59.3,
            46.1
          ],
          [
            -60.2,
            47.75
          ],
          [
            -63.3547,
            48.9284
          ],
          [
            -65.638916,
            49.511125
          ],
          [
            -66.890259,
            49.292889
          ],
          [
            -68.7297,
            48.7027
          ],
          [
            -69.625854,
            47.820539
          ],
          [
            -70.922241,
            46.893985
          ],
          [
            -71.040413,
            46.841121
          ],
          [
            -71.183098,
            46.837089
          ],
          [
            -71.234802,
            46.766198
          ],
          [
            -71.356447,
            46.738916
          ],
          [
            -71.683869,
            46.652012
          ],
          [
            -71.890961,
            46.672032
          ],
          [
            -72.194183,
            46.547282
          ],
          [
            -72.281799,
            46.432117
          ],
          [
            -72.806396,
            46.217852
          ],
          [
            -73.040098,
            46.061274
          ],
          [
            -73.164276,
            46.038911
          ],
          [
            -73.211243,
            45.906207
          ],
          [
            -73.373291,
            45.793129
          ],
          [
            -73.488373,
            45.617586
          ],
          [
            -73.535614,
            45.509613
          ]
        ]
      },
      {
        "from_idx": 34,
        "to_idx": 35,
        "verified": true,
        "coords": [
          [
            -73.535614,
            45.509613
          ],
          [
            -73.488373,
            45.617586
          ],
          [
            -73.373291,
            45.793129
          ],
          [
            -73.211243,
            45.906207
          ],
          [
            -73.164276,
            46.038911
          ],
          [
            -73.040098,
            46.061274
          ],
          [
            -72.806396,
            46.217852
          ],
          [
            -72.281799,
            46.432117
          ],
          [
            -72.194183,
            46.547282
          ],
          [
            -71.890961,
            46.672032
          ],
          [
            -71.683869,
            46.652012
          ],
          [
            -71.356447,
            46.738916
          ],
          [
            -71.234802,
            46.766198
          ],
          [
            -71.183098,
            46.837089
          ],
          [
            -71.040413,
            46.841121
          ],
          [
            -70.922241,
            46.893985
          ],
          [
            -69.625854,
            47.820539
          ],
          [
            -68.7297,
            48.7027
          ],
          [
            -66.890259,
            49.292889
          ],
          [
            -65.638916,
            49.511125
          ],
          [
            -63.3547,
            48.9284
          ],
          [
            -60.2,
            47.75
          ],
          [
            -59.3,
            46.1
          ],
          [
            -60.2173,
            45.2835
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -65.4,
            43.2
          ],
          [
            -66.864102,
            42.036227
          ],
          [
            -68.640214,
            40.624447
          ],
          [
            -68.826743,
            40.554059
          ],
          [
            -68.860571,
            40.541294
          ],
          [
            -68.910147,
            40.522586
          ],
          [
            -68.968854,
            40.500432
          ],
          [
            -69.5,
            40.3
          ],
          [
            -71.118305,
            39.812955
          ],
          [
            -71.661125,
            39.651813
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -72.475572,
            39.410034
          ],
          [
            -72.78466,
            39.318277
          ],
          [
            -72.904115,
            39.282816
          ],
          [
            -73.040934,
            39.242199
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -74.073738,
            38.935598
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 35,
        "to_idx": 36,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 36,
        "to_idx": 37,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 37,
        "to_idx": 38,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.537794,
            40.250805
          ],
          [
            -72.4725,
            39.4965
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -72.280515,
            38.957304
          ],
          [
            -72.150135,
            38.863951
          ],
          [
            -71.798223,
            38.611978
          ],
          [
            -71.643369,
            38.501101
          ],
          [
            -71.472185,
            38.378531
          ],
          [
            -71.271542,
            38.234868
          ],
          [
            -70.98362,
            38.028713
          ],
          [
            -70.521347,
            37.697721
          ],
          [
            -69.975985,
            37.307235
          ],
          [
            -69.848971,
            37.216292
          ],
          [
            -69.73835,
            37.137086
          ],
          [
            -69.656388,
            37.0784
          ],
          [
            -69.436,
            36.9206
          ],
          [
            -68.147963,
            35.936306
          ],
          [
            -67.057094,
            35.102685
          ],
          [
            -65.80232,
            34.143809
          ],
          [
            -65.2756,
            33.7413
          ],
          [
            -64.370232,
            33.029719
          ],
          [
            -63.465852,
            32.318914
          ],
          [
            -63.143196,
            32.06532
          ],
          [
            -62.024698,
            31.186227
          ],
          [
            -61.320443,
            30.632712
          ],
          [
            -60.541592,
            30.010129
          ],
          [
            -60.223798,
            29.75575
          ],
          [
            -60.000119,
            29.576705
          ],
          [
            -58.995496,
            28.772554
          ],
          [
            -57.951012,
            27.936496
          ],
          [
            -57.046567,
            27.210057
          ],
          [
            -54.840663,
            25.427012
          ],
          [
            -54.686707,
            25.302569
          ],
          [
            -51.302049,
            22.551019
          ],
          [
            -50.000417,
            21.489805
          ],
          [
            -49.207335,
            20.840203
          ],
          [
            -48.21318,
            20.024728
          ],
          [
            -46.036889,
            18.239233
          ],
          [
            -43.776444,
            16.37688
          ],
          [
            -40.000523,
            13.2666
          ],
          [
            -38.257452,
            11.8296
          ],
          [
            -36.07644,
            10.028798
          ],
          [
            -34.4259,
            8.664676
          ],
          [
            -32.762118,
            7.288622
          ],
          [
            -31.8433,
            6.5287
          ],
          [
            -30.0003,
            5.002688
          ],
          [
            -29.829347,
            4.861138
          ],
          [
            -29.222944,
            4.359034
          ],
          [
            -27.159236,
            2.649749
          ],
          [
            -27.041927,
            2.552564
          ],
          [
            -23.960846,
            -2e-05
          ],
          [
            -21.780662,
            -1.806339
          ],
          [
            -19.999803,
            -3.28153
          ],
          [
            -17.819,
            -5.0879
          ],
          [
            -14.3,
            -8
          ],
          [
            -12.52511,
            -10.018534
          ],
          [
            -11.321431,
            -11.387445
          ],
          [
            -9.999538,
            -12.890797
          ],
          [
            -6.625182,
            -16.728359
          ],
          [
            -2.645049,
            -20.036605
          ],
          [
            -1.147621,
            -21.216471
          ],
          [
            0.000594,
            -22.121182
          ],
          [
            4.581235,
            -25.7304
          ],
          [
            10,
            -30
          ],
          [
            13.9085,
            -32.5342
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 38,
        "to_idx": 39,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            22,
            -35
          ],
          [
            26,
            -34.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 39,
        "to_idx": 40,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            28.5,
            -33.5
          ]
        ]
      },
      {
        "from_idx": 40,
        "to_idx": 41,
        "verified": true,
        "coords": [
          [
            28.5,
            -33.5
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 41,
        "to_idx": 42,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 42,
        "to_idx": 43,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            36,
            -24
          ],
          [
            38.929,
            -19.5234
          ],
          [
            41.7,
            -15
          ],
          [
            41,
            -10
          ],
          [
            40,
            -6.5
          ],
          [
            40.3,
            -4.2
          ],
          [
            39.830933,
            -4.061536
          ]
        ]
      },
      {
        "from_idx": 43,
        "to_idx": 44,
        "verified": true,
        "coords": [
          [
            39.830933,
            -4.061536
          ],
          [
            40.3,
            -4.2
          ],
          [
            40,
            -6.5
          ],
          [
            41,
            -10
          ],
          [
            41.7,
            -15
          ],
          [
            38.929,
            -19.5234
          ],
          [
            36,
            -24
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 44,
        "to_idx": 45,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 45,
        "to_idx": 46,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            28.5,
            -33.5
          ],
          [
            26,
            -34.5
          ],
          [
            22,
            -35
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 46,
        "to_idx": 47,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            14.0806,
            -33.5827
          ],
          [
            10.000809,
            -31.926949
          ],
          [
            8.741211,
            -31.368532
          ],
          [
            5.891411,
            -30.076823
          ],
          [
            2.015382,
            -28.169477
          ],
          [
            0.00081,
            -27.123985
          ],
          [
            -4.412459,
            -24.677177
          ],
          [
            -7.024709,
            -23.154038
          ],
          [
            -9.999624,
            -21.343395
          ],
          [
            -10.796127,
            -20.843889
          ],
          [
            -12.088665,
            -20.028905
          ],
          [
            -16.822275,
            -16.967419
          ],
          [
            -19.999225,
            -14.844666
          ],
          [
            -22.806528,
            -12.935362
          ],
          [
            -27.018677,
            -10.021884
          ],
          [
            -28.772132,
            -8.796464
          ],
          [
            -29.999876,
            -7.933805
          ],
          [
            -31.063081,
            -7.186164
          ],
          [
            -33.8,
            -5.25
          ],
          [
            -34.860393,
            -4.720374
          ],
          [
            -38.1,
            -3.1
          ],
          [
            -41.5476,
            -0.9739
          ],
          [
            -42.781385,
            -0.211655
          ],
          [
            -42.984139,
            -0.086392
          ],
          [
            -43.123942,
            -2e-05
          ],
          [
            -44.9917,
            1.1539
          ],
          [
            -46.399027,
            2.021526
          ],
          [
            -48.44,
            3.2798
          ],
          [
            -51.9,
            5.4
          ],
          [
            -56.4243,
            8.2122
          ],
          [
            -61,
            11
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.803589,
            10.631253
          ]
        ]
      },
      {
        "from_idx": 47,
        "to_idx": 48,
        "verified": true,
        "coords": [
          [
            -61.803589,
            10.631253
          ],
          [
            -61.817065,
            10.845292
          ],
          [
            -61.9,
            12
          ],
          [
            -64.89149,
            15.306171
          ],
          [
            -66.372586,
            17.013056
          ],
          [
            -66.6,
            17.3
          ],
          [
            -67.255752,
            17.883904
          ],
          [
            -67.95,
            18.5
          ],
          [
            -68.9,
            19.75
          ],
          [
            -69.008576,
            20.802629
          ],
          [
            -69.133036,
            22.009247
          ],
          [
            -69.297107,
            23.599887
          ],
          [
            -69.4289,
            24.8776
          ],
          [
            -69.571367,
            26.155434
          ],
          [
            -69.686099,
            27.184507
          ],
          [
            -69.798842,
            28.195741
          ],
          [
            -69.9433,
            28.5593
          ],
          [
            -70.007418,
            28.704929
          ],
          [
            -70.491548,
            29.804519
          ],
          [
            -70.592445,
            30.033682
          ],
          [
            -70.666621,
            30.202157
          ],
          [
            -70.761711,
            30.418131
          ],
          [
            -70.761716,
            30.418143
          ],
          [
            -71.120755,
            31.233616
          ],
          [
            -71.29405,
            31.627217
          ],
          [
            -71.494758,
            32.083079
          ],
          [
            -72.1002,
            33.4582
          ],
          [
            -72.374413,
            34.005228
          ],
          [
            -72.718517,
            34.691681
          ],
          [
            -72.83967,
            34.933368
          ],
          [
            -73.269223,
            35.790283
          ],
          [
            -73.415861,
            36.082812
          ],
          [
            -73.4495,
            36.149919
          ],
          [
            -73.613489,
            36.477059
          ],
          [
            -73.637591,
            36.525141
          ],
          [
            -73.744231,
            36.737877
          ],
          [
            -73.810546,
            36.870169
          ],
          [
            -73.795419,
            37.972408
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 48,
        "to_idx": 49,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 49,
        "to_idx": 50,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 50,
        "to_idx": 51,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 51,
        "to_idx": 52,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 52,
        "to_idx": 53,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.537794,
            40.250805
          ],
          [
            -72.4725,
            39.4965
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -72.280515,
            38.957304
          ],
          [
            -72.150135,
            38.863951
          ],
          [
            -71.798223,
            38.611978
          ],
          [
            -71.643369,
            38.501101
          ],
          [
            -71.472185,
            38.378531
          ],
          [
            -71.271542,
            38.234868
          ],
          [
            -70.98362,
            38.028713
          ],
          [
            -70.521347,
            37.697721
          ],
          [
            -69.975985,
            37.307235
          ],
          [
            -69.848971,
            37.216292
          ],
          [
            -69.73835,
            37.137086
          ],
          [
            -69.656388,
            37.0784
          ],
          [
            -69.436,
            36.9206
          ],
          [
            -68.147963,
            35.936306
          ],
          [
            -67.057094,
            35.102685
          ],
          [
            -65.80232,
            34.143809
          ],
          [
            -65.2756,
            33.7413
          ],
          [
            -64.370232,
            33.029719
          ],
          [
            -63.465852,
            32.318914
          ],
          [
            -63.143196,
            32.06532
          ],
          [
            -62.024698,
            31.186227
          ],
          [
            -61.320443,
            30.632712
          ],
          [
            -60.541592,
            30.010129
          ],
          [
            -60.223798,
            29.75575
          ],
          [
            -60.000119,
            29.576705
          ],
          [
            -58.995496,
            28.772554
          ],
          [
            -57.951012,
            27.936496
          ],
          [
            -57.046567,
            27.210057
          ],
          [
            -54.840663,
            25.427012
          ],
          [
            -54.686707,
            25.302569
          ],
          [
            -51.302049,
            22.551019
          ],
          [
            -50.000417,
            21.489805
          ],
          [
            -49.207335,
            20.840203
          ],
          [
            -48.21318,
            20.024728
          ],
          [
            -46.036889,
            18.239233
          ],
          [
            -43.776444,
            16.37688
          ],
          [
            -40.000523,
            13.2666
          ],
          [
            -38.257452,
            11.8296
          ],
          [
            -36.07644,
            10.028798
          ],
          [
            -34.4259,
            8.664676
          ],
          [
            -32.762118,
            7.288622
          ],
          [
            -31.8433,
            6.5287
          ],
          [
            -30.0003,
            5.002688
          ],
          [
            -29.829347,
            4.861138
          ],
          [
            -29.222944,
            4.359034
          ],
          [
            -27.159236,
            2.649749
          ],
          [
            -27.041927,
            2.552564
          ],
          [
            -23.960846,
            -2e-05
          ],
          [
            -21.780662,
            -1.806339
          ],
          [
            -19.999803,
            -3.28153
          ],
          [
            -17.819,
            -5.0879
          ],
          [
            -14.3,
            -8
          ],
          [
            -12.52511,
            -10.018534
          ],
          [
            -11.321431,
            -11.387445
          ],
          [
            -9.999538,
            -12.890797
          ],
          [
            -6.625182,
            -16.728359
          ],
          [
            -2.645049,
            -20.036605
          ],
          [
            -1.147621,
            -21.216471
          ],
          [
            0.000594,
            -22.121182
          ],
          [
            4.581235,
            -25.7304
          ],
          [
            10,
            -30
          ],
          [
            13.9085,
            -32.5342
          ],
          [
            18,
            -35
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18.428192,
            -33.862433
          ]
        ]
      },
      {
        "from_idx": 53,
        "to_idx": 54,
        "verified": true,
        "coords": [
          [
            18.428192,
            -33.862433
          ],
          [
            18.237305,
            -33.840764
          ],
          [
            18,
            -35
          ],
          [
            22,
            -35
          ],
          [
            26,
            -34.5
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            25.640717,
            -33.918292
          ]
        ]
      },
      {
        "from_idx": 54,
        "to_idx": 55,
        "verified": true,
        "coords": [
          [
            25.640717,
            -33.918292
          ],
          [
            25.934206,
            -33.932046
          ],
          [
            28.5,
            -33.5
          ]
        ]
      },
      {
        "from_idx": 55,
        "to_idx": 56,
        "verified": true,
        "coords": [
          [
            28.5,
            -33.5
          ],
          [
            31.173706,
            -29.816817
          ]
        ]
      },
      {
        "from_idx": 56,
        "to_idx": 57,
        "verified": true,
        "coords": [
          [
            31.173706,
            -29.816817
          ],
          [
            32.920532,
            -28.449374
          ],
          [
            33.156738,
            -25.888879
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.606049,
            -25.995081
          ]
        ]
      },
      {
        "from_idx": 57,
        "to_idx": 58,
        "verified": true,
        "coords": [
          [
            32.606049,
            -25.995081
          ],
          [
            32.827148,
            -25.995081
          ],
          [
            32.861481,
            -25.703413
          ],
          [
            35.142957,
            -24.861024
          ],
          [
            36,
            -24
          ],
          [
            38.929,
            -19.5234
          ],
          [
            41.7,
            -15
          ],
          [
            41,
            -10
          ],
          [
            40,
            -6.5
          ],
          [
            40.3,
            -4.2
          ],
          [
            39.830933,
            -4.061536
          ]
        ]
      },
      {
        "from_idx": 58,
        "to_idx": 59,
        "verified": true,
        "coords": [
          [
            39.830933,
            -4.061536
          ],
          [
            40.3,
            -4.2
          ],
          [
            47.058219,
            -1.280003
          ],
          [
            50,
            -1e-05
          ],
          [
            53.365033,
            -1.7e-05
          ],
          [
            55,
            -2e-05
          ],
          [
            57.544015,
            -2e-05
          ],
          [
            60,
            -2e-05
          ],
          [
            64.732936,
            -1.1e-05
          ],
          [
            64.898351,
            -1e-05
          ],
          [
            65,
            -1e-05
          ],
          [
            67.531634,
            -2e-05
          ],
          [
            70,
            -3e-05
          ],
          [
            73.560879,
            4.143884
          ],
          [
            74.822653,
            4.467475
          ],
          [
            76.5453,
            4.9093
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            82.998315,
            12.032454
          ],
          [
            83.45929,
            15.271825
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 59,
        "to_idx": 60,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 60,
        "to_idx": 61,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 61,
        "to_idx": 62,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            84.9566,
            18.5238
          ],
          [
            83.656463,
            17.413983
          ],
          [
            82.828231,
            16.708301
          ],
          [
            82,
            16
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 62,
        "to_idx": 63,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 63,
        "to_idx": 64,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 64,
        "to_idx": 65,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 65,
        "to_idx": 66,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 66,
        "to_idx": 67,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.343132,
            36.110975
          ]
        ]
      },
      {
        "from_idx": 67,
        "to_idx": 68,
        "verified": true,
        "coords": [
          [
            -5.343132,
            36.110975
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -20,
            40
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -63.295397,
            41.804622
          ],
          [
            -64.2,
            42.3
          ],
          [
            -66.864102,
            42.036227
          ],
          [
            -68.445048,
            41.879698
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -69.7009,
            41.848
          ],
          [
            -69.8936,
            42.1322
          ],
          [
            -70.1183,
            42.1947
          ],
          [
            -70.2609,
            42.2369
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -71.040001,
            42.355753
          ]
        ]
      },
      {
        "from_idx": 68,
        "to_idx": 69,
        "verified": true,
        "coords": [
          [
            -71.040001,
            42.355753
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.7125,
            42.2816
          ],
          [
            -70.6161,
            42.1958
          ],
          [
            -70.5195,
            41.988
          ],
          [
            -70.4594,
            41.8478
          ],
          [
            -70.481,
            41.7813
          ],
          [
            -70.5481,
            41.776
          ],
          [
            -70.6306,
            41.7323
          ],
          [
            -70.6781,
            41.6824
          ],
          [
            -70.6974,
            41.6309
          ],
          [
            -70.7415,
            41.5963
          ],
          [
            -70.8421,
            41.5197
          ],
          [
            -71.0037,
            41.4535
          ],
          [
            -71.117,
            41.374
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/168876_city_of_chester.jpeg"
  },
  {
    "id": "city-of-florence-1949",
    "ship": "City of Florence",
    "ship_no": "140559",
    "line": "Ellerman Lines (City Line)",
    "built": "Unknown",
    "tons": "4,382 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "4 Apr 1949, Glasgow",
    "discharged": "14 Apr 1949, Birkenhead",
    "engagement_date": "1949-04-04",
    "discharge_date": "1949-04-14",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Florence from 4 Apr 1949, Glasgow to 14 Apr 1949, Birkenhead. Engagement type: home-trade.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "sailing Apr 11 1949"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival Apr 12 1949"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5665.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/140559_city_of_florence.jpeg"
  },
  {
    "id": "city-of-brooklyn-1949",
    "ship": "City of Brooklyn",
    "ship_no": "182488",
    "line": "Ellerman Lines (City Line)",
    "built": "1949, launched Wallsend 8 Dec 1948",
    "tons": "4,411 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "25 May 1949, 150",
    "discharged": "9 Jun 1950, Liverpool",
    "engagement_date": "1949-05-25",
    "discharge_date": "1950-06-09",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Brooklyn from 25 May 1949, 150 to 9 Jun 1950, Liverpool. Engagement type: home-trade.",
    "voyage_note": "USA immigration record: Arrived in New York 12th June 1949, sailing from Newcastle Verification: CHECKED: 'Arrived New York 12th June 1949, sailing from Newcastle' matches the card (IMG_5666) exactly — this was the ship's maiden voyage (launched 8 Dec 1948), Tyne sailing 1 June, New York arrival 12 June 1949.",
    "waypoints": [
      {
        "port": "River Tyne",
        "lon": -1.45,
        "lat": 55.0,
        "verified": true,
        "note": "arrival May 25 1949; sailing June 1 1949"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival June 12 1949; sailing June 23 1949"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival July 7 1949"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing July 9 1949"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival July 13 1949; sailing July 13 1949"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival July 17 1949; sailing July 20 1949"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival July 23 1949; sailing Aug 8 1949"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Aug 10 1949; sailing Aug 12 1949"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival Aug 14 1949; sailing Aug 17 1949"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival Aug 20 1949; sailing Sept 4 1949"
      },
      {
        "port": "Sandheads",
        "lon": 88.15,
        "lat": 21.65,
        "verified": true,
        "note": "sailing Sept 5 1949"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Sept 9 1949; sailing Sept 9 1949"
      },
      {
        "port": "Cochin",
        "lon": 76.2673,
        "lat": 9.9312,
        "verified": true,
        "note": "arrival Sept 10 1949; sailing Sept 11 1949"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Sept 16 1949; sailing Sept 17 1949"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Sept 20 1949"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Sept 22 1949"
      },
      {
        "port": "Halifax NS",
        "lon": -63.5859487,
        "lat": 44.648618,
        "verified": true,
        "note": "arrival Oct 4 1949; sailing Oct 5 1949"
      },
      {
        "port": "Boston",
        "lon": -71.0578303,
        "lat": 42.3588336,
        "verified": true,
        "note": "arrival Oct 6 1949; sailing Oct 7 1949"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Oct 8 1949; sailing Oct 13 1949"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Oct 14 1949; sailing Oct 14 1949"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Oct 15 1949; sailing Oct 18 1949"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival Oct 19 1949; sailing Oct 20 1949"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Oct 20 1949; sailing Oct 21 1949"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Oct 22 1949; sailing Oct 23 1949"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Oct 24 1949; sailing Oct 29 1949"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival Nov 11 1949"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing Nov 12 1949"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Nov 15 1949; sailing Nov 16 1949"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival Nov 20 1949; sailing Nov 21 1949"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival Nov 22 1949; sailing Nov 25 1949"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Nov 27 1949; sailing Nov 30 1949"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival Dec 2 1949; sailing Dec 3 1949"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival Dec 4 1949; sailing Dec 5 1949"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival Dec 6 1949; sailing Dec 24 1949"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Dec 27 1949"
      },
      {
        "port": "Cochin",
        "lon": 76.2673,
        "lat": 9.9312,
        "verified": true,
        "note": "arrival Jan 4 1950; sailing Jan 5 1950"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Jan 10 1950; sailing Jan 11 1950"
      },
      {
        "port": "Port Sudan",
        "lon": 37.2164,
        "lat": 19.6158,
        "verified": true,
        "note": "arrival Jan 13 1950; sailing Jan 13 1950"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Jan 15 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Jan 17 1950"
      },
      {
        "port": "Halifax NS",
        "lon": -63.5859487,
        "lat": 44.648618,
        "verified": true,
        "note": "arrival Jan 30 1950; sailing Feb 1 1950"
      },
      {
        "port": "Boston",
        "lon": -71.0578303,
        "lat": 42.3588336,
        "verified": true,
        "note": "arrival Feb 2 1950; sailing Feb 3 1950"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Feb 4 1950; sailing Feb 8 1950"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Feb 9 1950; sailing Feb 11 1950"
      },
      {
        "port": "Baltimore",
        "lon": -76.6122,
        "lat": 39.2904,
        "verified": true,
        "note": "arrival Feb 11 1950; sailing Feb 15 1950"
      },
      {
        "port": "Hampton Rds",
        "lon": -76.4114187,
        "lat": 36.9507552,
        "verified": true,
        "note": "arrival Feb 16 1950; sailing Feb 20 1950"
      },
      {
        "port": "New York",
        "lon": -74.0060152,
        "lat": 40.7127281,
        "verified": true,
        "note": "arrival Feb 21 1950; sailing Mar 1 1950"
      },
      {
        "port": "Philadelphia",
        "lon": -75.1652,
        "lat": 39.9526,
        "verified": true,
        "note": "arrival Mar 2 1950; sailing Mar 3 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival Mar 17 1950"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing Mar 18 1950"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Mar 21 1950; sailing Mar 21 1950"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival Mar 25 1950; sailing Mar 26 1950"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival Mar 28 1950; sailing Mar 29 1950"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Apr 1 1950; sailing Apr 1 1950"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival Apr 3 1950; sailing Apr 4 1950"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival Apr 5 1950; sailing Apr 6 1950"
      },
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "arrival Apr 8 1950; sailing May 5 1950"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival May 8 1950; sailing May 10 1950"
      },
      {
        "port": "Madras",
        "lon": 80.2707,
        "lat": 13.0827,
        "verified": true,
        "note": "arrival May 11 1950; sailing May 14 1950"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival May 16 1950; sailing May 18 1950"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival May 23 1950; sailing May 24 1950"
      },
      {
        "port": "Port Sudan",
        "lon": 37.2164,
        "lat": 19.6158,
        "verified": true,
        "note": "arrival May 26 1950; sailing May 28 1950"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival May 29 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing May 30 1950"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival June 8 1950"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5666.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -1.435432,
            55.006961
          ],
          [
            -1,
            55.1
          ],
          [
            -1.690521,
            55.77889
          ],
          [
            -2.3,
            56.3
          ],
          [
            -1.4,
            57.3
          ],
          [
            -1.746,
            57.664
          ],
          [
            -2.874305,
            58.649909
          ],
          [
            -3.397818,
            58.762202
          ],
          [
            -4.799483,
            58.7
          ],
          [
            -5.2,
            58.7
          ],
          [
            -5.720463,
            58.67623
          ],
          [
            -5.722863,
            58.67612
          ],
          [
            -5.723212,
            58.676105
          ],
          [
            -6.489458,
            58.64111
          ],
          [
            -10.1362,
            58.47456
          ],
          [
            -11.841927,
            58.396659
          ],
          [
            -16.516959,
            57.946839
          ],
          [
            -17.704327,
            57.823884
          ],
          [
            -18.941948,
            57.695725
          ],
          [
            -19.4569,
            57.6424
          ],
          [
            -20.002106,
            57.552768
          ],
          [
            -23.465597,
            56.983365
          ],
          [
            -26.35425,
            56.494332
          ],
          [
            -30.003737,
            55.657007
          ],
          [
            -32.387,
            55.1102
          ],
          [
            -34.342459,
            54.524551
          ],
          [
            -36.435655,
            53.89765
          ],
          [
            -36.736047,
            53.807684
          ],
          [
            -38.1634,
            53.3802
          ],
          [
            -40.002313,
            52.690451
          ],
          [
            -41.89827,
            51.979306
          ],
          [
            -43.459,
            51.3939
          ],
          [
            -46.515249,
            50
          ],
          [
            -48.293,
            49.1892
          ],
          [
            -48.828117,
            48.899093
          ],
          [
            -50.001043,
            48.263206
          ],
          [
            -52.7,
            46.8
          ],
          [
            -54,
            46.1
          ],
          [
            -55,
            45
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -70.0641,
            41.4823
          ],
          [
            -70.2305,
            41.4442
          ],
          [
            -70.2864,
            41.4528
          ],
          [
            -70.5527,
            41.4794
          ],
          [
            -70.6342,
            41.5038
          ],
          [
            -70.6704,
            41.4908
          ],
          [
            -70.8432,
            41.4056
          ],
          [
            -70.8921,
            41.3891
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -71.798554,
            40.453237
          ],
          [
            -71.557579,
            40.437172
          ],
          [
            -71.289425,
            40.419295
          ],
          [
            -69.5,
            40.3
          ],
          [
            -68.907278,
            40.412386
          ],
          [
            -68.813685,
            40.430133
          ],
          [
            -68.782982,
            40.435954
          ],
          [
            -64.632986,
            41.222837
          ],
          [
            -63.5093,
            41.4359
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -20,
            40
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            62.375976,
            21.440441
          ],
          [
            64.447045,
            22.842503
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            77,
            8
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82,
            16
          ],
          [
            82.828231,
            16.708301
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            77,
            8
          ],
          [
            75.3,
            9.7
          ],
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ],
          [
            75.3,
            9.7
          ],
          [
            70,
            10
          ],
          [
            65.126773,
            10.035771
          ],
          [
            65.0002,
            10.0367
          ],
          [
            64.696861,
            10.034474
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -20,
            40
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -55,
            45
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -63.48793,
            44.535185
          ],
          [
            -63.562088,
            44.655955
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            -63.562088,
            44.655955
          ],
          [
            -63.48793,
            44.535185
          ],
          [
            -63.533936,
            44.288469
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -69.7009,
            41.848
          ],
          [
            -69.8936,
            42.1322
          ],
          [
            -70.1183,
            42.1947
          ],
          [
            -70.2609,
            42.2369
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -71.040001,
            42.355753
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            -71.040001,
            42.355753
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.7125,
            42.2816
          ],
          [
            -70.6161,
            42.1958
          ],
          [
            -70.5195,
            41.988
          ],
          [
            -70.4594,
            41.8478
          ],
          [
            -70.481,
            41.7813
          ],
          [
            -70.5481,
            41.776
          ],
          [
            -70.6306,
            41.7323
          ],
          [
            -70.6781,
            41.6824
          ],
          [
            -70.6974,
            41.6309
          ],
          [
            -70.7415,
            41.5963
          ],
          [
            -70.8421,
            41.5197
          ],
          [
            -71.0037,
            41.4535
          ],
          [
            -71.117,
            41.374
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 21,
        "to_idx": 22,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 22,
        "to_idx": 23,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 23,
        "to_idx": 24,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 24,
        "to_idx": 25,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -71.798554,
            40.453237
          ],
          [
            -71.557579,
            40.437172
          ],
          [
            -71.289425,
            40.419295
          ],
          [
            -69.5,
            40.3
          ],
          [
            -68.907278,
            40.412386
          ],
          [
            -68.813685,
            40.430133
          ],
          [
            -68.782982,
            40.435954
          ],
          [
            -64.632986,
            41.222837
          ],
          [
            -63.5093,
            41.4359
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -20,
            40
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 25,
        "to_idx": 26,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 26,
        "to_idx": 27,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 27,
        "to_idx": 28,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            62.375976,
            21.440441
          ],
          [
            64.447045,
            22.842503
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 28,
        "to_idx": 29,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 29,
        "to_idx": 30,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            77,
            8
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 30,
        "to_idx": 31,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 31,
        "to_idx": 32,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82,
            16
          ],
          [
            82.828231,
            16.708301
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 32,
        "to_idx": 33,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 33,
        "to_idx": 34,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            86.491,
            17.5782
          ],
          [
            85.735114,
            15.791697
          ],
          [
            85.155655,
            14.422172
          ],
          [
            85.038,
            14.1441
          ],
          [
            83.978619,
            11.556515
          ],
          [
            83.6282,
            10.7006
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 34,
        "to_idx": 35,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            77,
            8
          ],
          [
            75.3,
            9.7
          ],
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 35,
        "to_idx": 36,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ],
          [
            75.3,
            9.7
          ],
          [
            70,
            10
          ],
          [
            65.126773,
            10.035771
          ],
          [
            65.0002,
            10.0367
          ],
          [
            64.696861,
            10.034474
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 36,
        "to_idx": 37,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            41.638757,
            14.831289
          ],
          [
            39.618179,
            17.395313
          ],
          [
            38.006929,
            19.986548
          ],
          [
            37.496338,
            19.590844
          ]
        ]
      },
      {
        "from_idx": 37,
        "to_idx": 38,
        "verified": true,
        "coords": [
          [
            37.496338,
            19.590844
          ],
          [
            38.006929,
            19.986548
          ],
          [
            36.108,
            24.0443
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 38,
        "to_idx": 39,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 39,
        "to_idx": 40,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -20,
            40
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -55,
            45
          ],
          [
            -62.183924,
            44.501586
          ],
          [
            -63.48793,
            44.535185
          ],
          [
            -63.562088,
            44.655955
          ]
        ]
      },
      {
        "from_idx": 40,
        "to_idx": 41,
        "verified": true,
        "coords": [
          [
            -63.562088,
            44.655955
          ],
          [
            -63.48793,
            44.535185
          ],
          [
            -63.533936,
            44.288469
          ],
          [
            -65.4,
            43.2
          ],
          [
            -68.3705,
            42.119818
          ],
          [
            -69.25,
            41.8
          ],
          [
            -69.5275,
            41.5917
          ],
          [
            -69.7009,
            41.848
          ],
          [
            -69.8936,
            42.1322
          ],
          [
            -70.1183,
            42.1947
          ],
          [
            -70.2609,
            42.2369
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -71.040001,
            42.355753
          ]
        ]
      },
      {
        "from_idx": 41,
        "to_idx": 42,
        "verified": true,
        "coords": [
          [
            -71.040001,
            42.355753
          ],
          [
            -70.993309,
            42.338753
          ],
          [
            -70.6925,
            42.3542
          ],
          [
            -70.7125,
            42.2816
          ],
          [
            -70.6161,
            42.1958
          ],
          [
            -70.5195,
            41.988
          ],
          [
            -70.4594,
            41.8478
          ],
          [
            -70.481,
            41.7813
          ],
          [
            -70.5481,
            41.776
          ],
          [
            -70.6306,
            41.7323
          ],
          [
            -70.6781,
            41.6824
          ],
          [
            -70.6974,
            41.6309
          ],
          [
            -70.7415,
            41.5963
          ],
          [
            -70.8421,
            41.5197
          ],
          [
            -71.0037,
            41.4535
          ],
          [
            -71.117,
            41.374
          ],
          [
            -71.1677,
            41.325
          ],
          [
            -71.3569,
            41.1171
          ],
          [
            -71.4738,
            41.0726
          ],
          [
            -72.4247,
            40.7393
          ],
          [
            -73.027658,
            40.535177
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 42,
        "to_idx": 43,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 43,
        "to_idx": 44,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.8373,
            38.6023
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.577797,
            39.255917
          ]
        ]
      },
      {
        "from_idx": 44,
        "to_idx": 45,
        "verified": true,
        "coords": [
          [
            -76.577797,
            39.255917
          ],
          [
            -76.519775,
            39.202728
          ],
          [
            -76.364594,
            39.154557
          ],
          [
            -76.4292,
            38.5384
          ],
          [
            -76.3394,
            38.3792
          ],
          [
            -76.3318,
            38.3391
          ],
          [
            -76.2597,
            38.0958
          ],
          [
            -76.1514,
            37.8805
          ],
          [
            -76.1836,
            37.7817
          ],
          [
            -76.1525,
            37.4661
          ],
          [
            -76.1374,
            37.3617
          ],
          [
            -76.1124,
            37.294
          ],
          [
            -76.1542,
            37.1867
          ],
          [
            -76.1496,
            37.1472
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.442871,
            36.935623
          ]
        ]
      },
      {
        "from_idx": 45,
        "to_idx": 46,
        "verified": true,
        "coords": [
          [
            -76.442871,
            36.935623
          ],
          [
            -76.269836,
            36.999262
          ],
          [
            -76.0085,
            36.9585
          ],
          [
            -75.9599,
            36.9485
          ],
          [
            -75.8067,
            36.8468
          ],
          [
            -75.4399,
            37.0813
          ],
          [
            -75.287,
            37.2901
          ],
          [
            -75.1485,
            37.4694
          ],
          [
            -75.0202,
            37.6502
          ],
          [
            -74.5315,
            38.3084
          ],
          [
            -74.5502,
            38.5317
          ],
          [
            -74.5647,
            38.6565
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.023819,
            40.708751
          ]
        ]
      },
      {
        "from_idx": 46,
        "to_idx": 47,
        "verified": true,
        "coords": [
          [
            -74.023819,
            40.708751
          ],
          [
            -74.0488,
            40.6676
          ],
          [
            -74.0561,
            40.6285
          ],
          [
            -74.0106,
            40.5253
          ],
          [
            -73.8129,
            40.4456
          ],
          [
            -73.7932,
            40.3456
          ],
          [
            -73.783,
            40.0331
          ],
          [
            -73.7709,
            39.759
          ],
          [
            -73.921285,
            39.411453
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.314713,
            39.850721
          ]
        ]
      },
      {
        "from_idx": 47,
        "to_idx": 48,
        "verified": true,
        "coords": [
          [
            -75.314713,
            39.850721
          ],
          [
            -75.458908,
            39.78163
          ],
          [
            -75.521908,
            39.686186
          ],
          [
            -75.591431,
            39.623673
          ],
          [
            -75.546627,
            39.580555
          ],
          [
            -75.563965,
            39.468005
          ],
          [
            -75.2711,
            39.18
          ],
          [
            -75.1861,
            39.0837
          ],
          [
            -75.059,
            38.8498
          ],
          [
            -75.0095,
            38.79
          ],
          [
            -74.5743,
            38.787
          ],
          [
            -74.073738,
            38.935598
          ],
          [
            -73.781008,
            39.022499
          ],
          [
            -73.040934,
            39.242199
          ],
          [
            -72.904115,
            39.282816
          ],
          [
            -72.78466,
            39.318277
          ],
          [
            -72.475572,
            39.410034
          ],
          [
            -72.44495,
            39.419124
          ],
          [
            -71.661125,
            39.651813
          ],
          [
            -71.118305,
            39.812955
          ],
          [
            -69.5,
            40.3
          ],
          [
            -68.907278,
            40.412386
          ],
          [
            -68.813685,
            40.430133
          ],
          [
            -68.782982,
            40.435954
          ],
          [
            -64.632986,
            41.222837
          ],
          [
            -63.5093,
            41.4359
          ],
          [
            -62.794754,
            41.53046
          ],
          [
            -57.3379,
            42.2526
          ],
          [
            -52.613022,
            42.613022
          ],
          [
            -52.53975,
            42.618612
          ],
          [
            -51.0402,
            42.733
          ],
          [
            -50.001652,
            42.754804
          ],
          [
            -47.493255,
            42.807466
          ],
          [
            -44.6814,
            42.8665
          ],
          [
            -42.618304,
            42.796183
          ],
          [
            -40.001623,
            42.706999
          ],
          [
            -38.3322,
            42.6501
          ],
          [
            -37.685353,
            42.592324
          ],
          [
            -34.863425,
            42.340269
          ],
          [
            -32.0626,
            42.0901
          ],
          [
            -31.940532,
            42.072366
          ],
          [
            -30.001074,
            41.790603
          ],
          [
            -28.584901,
            41.584862
          ],
          [
            -25.9351,
            41.1999
          ],
          [
            -25.565029,
            41.125083
          ],
          [
            -20,
            40
          ],
          [
            -14.5065,
            38.5182
          ],
          [
            -13.755544,
            38.272734
          ],
          [
            -12.057515,
            37.717697
          ],
          [
            -11.138637,
            37.417342
          ],
          [
            -10.855872,
            37.324914
          ],
          [
            -9.36445,
            36.83741
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 48,
        "to_idx": 49,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 49,
        "to_idx": 50,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 50,
        "to_idx": 51,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            62.375976,
            21.440441
          ],
          [
            64.447045,
            22.842503
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 51,
        "to_idx": 52,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 52,
        "to_idx": 53,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            77,
            8
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 53,
        "to_idx": 54,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            79.82666,
            6.424484
          ],
          [
            80.1,
            5.8
          ],
          [
            81.9,
            5.9
          ],
          [
            82.25,
            7.25
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 54,
        "to_idx": 55,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82,
            16
          ],
          [
            82.828231,
            16.708301
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 55,
        "to_idx": 56,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            84.9566,
            18.5238
          ],
          [
            88,
            21
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88.206482,
            22.065278
          ],
          [
            88.173523,
            22.165786
          ]
        ]
      },
      {
        "from_idx": 56,
        "to_idx": 57,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            84.9566,
            18.5238
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 57,
        "to_idx": 58,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            82.828231,
            16.708301
          ],
          [
            82,
            16
          ],
          [
            81,
            13
          ],
          [
            80.414429,
            12.977795
          ]
        ]
      },
      {
        "from_idx": 58,
        "to_idx": 59,
        "verified": true,
        "coords": [
          [
            80.414429,
            12.977795
          ],
          [
            81,
            13
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 59,
        "to_idx": 60,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 60,
        "to_idx": 61,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            41.638757,
            14.831289
          ],
          [
            39.618179,
            17.395313
          ],
          [
            38.006929,
            19.986548
          ],
          [
            37.496338,
            19.590844
          ]
        ]
      },
      {
        "from_idx": 61,
        "to_idx": 62,
        "verified": true,
        "coords": [
          [
            37.496338,
            19.590844
          ],
          [
            38.006929,
            19.986548
          ],
          [
            36.108,
            24.0443
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 62,
        "to_idx": 63,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 63,
        "to_idx": 64,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/182488_city_of_brooklyn.jpeg"
  },
  {
    "id": "city-of-tokio-1950",
    "ship": "City of Tokio",
    "ship_no": "145885",
    "line": "Ellerman Lines (City Line)",
    "built": "Unknown",
    "tons": "4,426 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "19 Jun 1950, ",
    "discharged": "29 Jun 1950, Birkenhead",
    "engagement_date": "1950-06-19",
    "discharge_date": "1950-06-29",
    "rank": "Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Chief Steward on City of Tokio from 19 Jun 1950,  to 29 Jun 1950, Birkenhead.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Swansea",
        "lon": -3.9459248,
        "lat": 51.6195955,
        "verified": true,
        "note": "arrival June 19 1950; sailing June 20 1950"
      },
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "arrival June 22 1950; sailing June 27 1950"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival June 28 1950"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5668.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -4.126358,
            51.432338
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.54422,
            55.924586
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/145885_city_of_tokio.jpeg"
  },
  {
    "id": "city-of-leicester-1950",
    "ship": "City of Leicester",
    "ship_no": "147349",
    "line": "Ellerman Lines (City Line)",
    "built": "1926",
    "tons": "1,975 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "23 Sep 1950, Unknown",
    "discharged": "3 Oct 1950, Unknown (P.Lan)",
    "engagement_date": "1950-09-23",
    "discharge_date": "1950-10-03",
    "rank": "Purser",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser on City of Leicester from 23 Sep 1950, Unknown to 3 Oct 1950, Unknown (P.Lan). Engagement type: home-trade.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Antwerp",
        "lon": 4.3997081,
        "lat": 51.2211097,
        "verified": true,
        "note": "sailing Sept 30 1950"
      },
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "arrival Oct 1 1950"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5671.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            4.261322,
            51.340907
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.0905,
            51.3831
          ],
          [
            3.9641,
            51.426
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.4,
            51.5
          ],
          [
            2.330031,
            51.330031
          ],
          [
            1.868984,
            51.235892
          ],
          [
            1.474566,
            51.467902
          ],
          [
            0.8262,
            51.5038
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.2137,
            51.4867
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/147349_city_of_leicester.jpeg"
  },
  {
    "id": "city-of-lille-1950",
    "ship": "City of Lille",
    "ship_no": "149679",
    "line": "Ellerman Lines (City Line)",
    "built": "1928",
    "tons": "4,052 grt",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "2 Nov 1950, P.Lan",
    "discharged": "8 Dec 1950, ",
    "engagement_date": "1950-11-02",
    "discharge_date": "1950-12-08",
    "rank": "Unknown rank",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William's service on City of Lille from 2 Nov 1950, P.Lan to 8 Dec 1950, .",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "sailing Nov 5 1950"
      },
      {
        "port": "Avonmouth",
        "lon": -2.705,
        "lat": 51.5075,
        "verified": true,
        "note": "arrival Nov 8 1950; sailing Nov 9 1950"
      },
      {
        "port": "Rotterdam",
        "lon": 4.47775,
        "lat": 51.9244424,
        "verified": true,
        "note": "arrival Nov 12 1950; sailing Nov 13 1950"
      },
      {
        "port": "Hamburg",
        "lon": 10.0013165,
        "lat": 53.5501721,
        "verified": true,
        "note": "arrival Nov 15 1950; sailing Nov 16 1950"
      },
      {
        "port": "Hull",
        "lon": -0.3301214,
        "lat": 53.7623863,
        "verified": true,
        "note": "arrival Nov 17 1950; sailing Nov 19 1950"
      },
      {
        "port": "Middlesbrough",
        "lon": -1.2344047,
        "lat": 54.5760419,
        "verified": true,
        "note": "arrival Nov 20 1950; sailing Nov 26 1950"
      },
      {
        "port": "Antwerp",
        "lon": 4.3997081,
        "lat": 51.2211097,
        "verified": true,
        "note": "arrival Nov 28 1950; sailing Dec 2 1950"
      },
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "arrival Dec 3 1950"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5672.jpeg",
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5673.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            0.2137,
            51.4867
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.8262,
            51.5038
          ],
          [
            1.474566,
            51.467902
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.3,
            50.8
          ],
          [
            1.149895,
            50.76637
          ],
          [
            0.301537,
            50.576304
          ],
          [
            -0.505582,
            50.395477
          ],
          [
            -0.672505,
            50.358079
          ],
          [
            -0.764313,
            50.33751
          ],
          [
            -0.76446,
            50.337798
          ],
          [
            -1.251907,
            50.264973
          ],
          [
            -1.577583,
            50.216317
          ],
          [
            -1.755087,
            50.189798
          ],
          [
            -2.100162,
            50.138244
          ],
          [
            -2.270882,
            50.112738
          ],
          [
            -2.624015,
            50.023556
          ],
          [
            -4,
            50.1
          ],
          [
            -4.115519,
            50.084349
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.734909,
            51.501049
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            -2.734909,
            51.501049
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -4.115519,
            50.084349
          ],
          [
            -4,
            50.1
          ],
          [
            -2.624015,
            50.023556
          ],
          [
            -2.270882,
            50.112738
          ],
          [
            -2.100162,
            50.138244
          ],
          [
            -1.755087,
            50.189798
          ],
          [
            -1.577583,
            50.216317
          ],
          [
            -1.251907,
            50.264973
          ],
          [
            -0.76446,
            50.337798
          ],
          [
            -0.764313,
            50.33751
          ],
          [
            -0.672505,
            50.358079
          ],
          [
            -0.505582,
            50.395477
          ],
          [
            0.301537,
            50.576304
          ],
          [
            1.149895,
            50.76637
          ],
          [
            1.3,
            50.8
          ],
          [
            1.441366,
            50.849032
          ],
          [
            1.567687,
            50.892845
          ],
          [
            1.813195,
            50.988387
          ],
          [
            2.1,
            51.1
          ],
          [
            2.356699,
            51.178984
          ],
          [
            3.4,
            51.5
          ],
          [
            3.559619,
            51.659619
          ],
          [
            3.9,
            52
          ],
          [
            4.069748,
            51.987629
          ],
          [
            4.151802,
            51.961827
          ],
          [
            4.230423,
            51.922673
          ],
          [
            4.289818,
            51.89641
          ],
          [
            4.32827,
            51.89302
          ],
          [
            4.369469,
            51.900223
          ],
          [
            4.457359,
            51.900012
          ],
          [
            4.503708,
            51.916321
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            4.503708,
            51.916321
          ],
          [
            4.457359,
            51.900012
          ],
          [
            4.369469,
            51.900223
          ],
          [
            4.32827,
            51.89302
          ],
          [
            4.289818,
            51.89641
          ],
          [
            4.230423,
            51.922673
          ],
          [
            4.151802,
            51.961827
          ],
          [
            4.069748,
            51.987629
          ],
          [
            3.9,
            52
          ],
          [
            4.308389,
            52.513982
          ],
          [
            4.9,
            53.5
          ],
          [
            6.384053,
            53.685507
          ],
          [
            8.25,
            53.9
          ],
          [
            8.745294,
            53.909831
          ],
          [
            9.041942,
            53.874321
          ],
          [
            9.227347,
            53.877053
          ],
          [
            9.336273,
            53.840148
          ],
          [
            9.39653,
            53.775829
          ],
          [
            9.496185,
            53.710038
          ],
          [
            9.535584,
            53.633153
          ],
          [
            9.632921,
            53.583652
          ],
          [
            9.751117,
            53.55475
          ],
          [
            9.927252,
            53.545112
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            9.927252,
            53.545112
          ],
          [
            9.751117,
            53.55475
          ],
          [
            9.632921,
            53.583652
          ],
          [
            9.535584,
            53.633153
          ],
          [
            9.496185,
            53.710038
          ],
          [
            9.39653,
            53.775829
          ],
          [
            9.336273,
            53.840148
          ],
          [
            9.227347,
            53.877053
          ],
          [
            9.041942,
            53.874321
          ],
          [
            8.745294,
            53.909831
          ],
          [
            8.25,
            53.9
          ],
          [
            6.384053,
            53.685507
          ],
          [
            4.9,
            53.5
          ],
          [
            3.720947,
            53.5
          ],
          [
            3.34058,
            53.5
          ],
          [
            2.146404,
            53.5
          ],
          [
            1.075698,
            53.5
          ],
          [
            0.4,
            53.5
          ],
          [
            -0.039825,
            53.583538
          ],
          [
            -0.299377,
            53.730842
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            -0.299377,
            53.730842
          ],
          [
            -0.039825,
            53.583538
          ],
          [
            0.4,
            53.5
          ],
          [
            0.038452,
            54.123822
          ],
          [
            -0.754169,
            54.819051
          ],
          [
            -1.142578,
            54.66986
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            -1.142578,
            54.66986
          ],
          [
            -0.754169,
            54.819051
          ],
          [
            0.3771,
            53.9975
          ],
          [
            0.71596,
            53.756184
          ],
          [
            0.946317,
            53.592137
          ],
          [
            1.075698,
            53.5
          ],
          [
            2.1349,
            52.7457
          ],
          [
            2.791374,
            52.020069
          ],
          [
            2.9,
            51.9
          ],
          [
            3.4,
            51.5
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.9641,
            51.426
          ],
          [
            4.0905,
            51.3831
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.261322,
            51.340907
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            4.261322,
            51.340907
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.0905,
            51.3831
          ],
          [
            3.9641,
            51.426
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.4,
            51.5
          ],
          [
            2.330031,
            51.330031
          ],
          [
            1.868984,
            51.235892
          ],
          [
            1.474566,
            51.467902
          ],
          [
            0.8262,
            51.5038
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.2137,
            51.4867
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/149679_city_of_lille.jpeg"
  },
  {
    "id": "city-of-durban-1950",
    "ship": "City of Durban",
    "ship_no": "145892",
    "line": "Ellerman Lines (City Line)",
    "built": "1921",
    "tons": "7,522 net tons (card)",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "28 Dec 1950, Birkenhead",
    "discharged": "27 Mar 1951, Liverpool",
    "engagement_date": "1950-12-28",
    "discharge_date": "1951-03-27",
    "rank": "Purser and Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chief Steward on City of Durban from 28 Dec 1950, Birkenhead to 27 Mar 1951, Liverpool. Engagement type: foreign-going.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "sailing Dec 30 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival Jan 11 1951"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing Jan 12 1951"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Jan 17 1951; sailing Jan 18 1951"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival Jan 23 1951; sailing Jan 31 1951"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival Feb 2 1951; sailing Feb 8 1951"
      },
      {
        "port": "Koilchottam",
        "lon": 75.696891,
        "lat": 11.4383564,
        "verified": true,
        "note": "arrival Feb 10 1951; sailing Feb 14 1951"
      },
      {
        "port": "Cochin",
        "lon": 76.2673,
        "lat": 9.9312,
        "verified": true,
        "note": "arrival Feb 15 1951; sailing Feb 19 1951"
      },
      {
        "port": "Kozhikode",
        "lon": 75.7754716,
        "lat": 11.2450558,
        "verified": true,
        "note": "arrival Feb 20 1951; sailing Feb 21 1951"
      },
      {
        "port": "Alleppey",
        "lon": 76.3388,
        "lat": 9.4981,
        "verified": true,
        "note": "arrival Feb 22 1951; sailing Feb 25 1951"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Mar 4 1951; sailing Mar 4 1951"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Mar 9 1951"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Mar 10 1951"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival Mar 23 1951"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5674.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            62.375976,
            21.440441
          ],
          [
            64.447045,
            22.842503
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ],
          [
            75.3,
            9.7
          ],
          [
            70,
            10
          ],
          [
            65.126773,
            10.035771
          ],
          [
            65.0002,
            10.0367
          ],
          [
            64.696861,
            10.034474
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/145892_city_of_durban.jpeg"
  },
  {
    "id": "city-of-durban-1950-2",
    "ship": "City of Durban",
    "ship_no": "145892",
    "line": "Ellerman Lines (City Line)",
    "built": "1921",
    "tons": "7,522 net tons (card)",
    "flag": "🎖 CRS10 Card Confirmed",
    "engaged": "28 Mar 1950, Liverpool",
    "discharged": "11 Apr 1951, Unknown",
    "engagement_date": "1950-03-28",
    "discharge_date": "1951-04-11",
    "rank": "Purser and Chief Steward",
    "authoritative_discharge": true,
    "card_image": null,
    "note": "William served as Purser and Chief Steward on City of Durban from 28 Mar 1950, Liverpool to 11 Apr 1951, Unknown. Engagement type: home-trade.",
    "voyage_note": "Verification: LIKELY TYPO: engagement date 28/03/1950 sits between a discharge on 27/03/1951 and the next engagement on 23/04/1951 — almost certainly should read 28/03/1951, not 1950. Left as originally recorded pending your confirmation.",
    "waypoints": [
      {
        "port": "Calcutta",
        "lon": 88.3638953,
        "lat": 22.5726459,
        "verified": true,
        "note": "sailing Sept 12 1950"
      },
      {
        "port": "Vizagapatam",
        "lon": 83.2185,
        "lat": 17.6868,
        "verified": true,
        "note": "arrival Sept 16 1950; sailing Sept 28 1950"
      },
      {
        "port": "Colombo",
        "lon": 79.8542005,
        "lat": 6.9388614,
        "verified": true,
        "note": "arrival Oct 2 1950; sailing Oct 7 1950"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Oct 15 1950; sailing Oct 15 1950"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Oct 20 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Oct 22 1950"
      },
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "arrival Nov 5 1950; sailing Nov 8 1950"
      },
      {
        "port": "Hull",
        "lon": -0.3301214,
        "lat": 53.7623863,
        "verified": true,
        "note": "arrival Nov 9 1950; sailing Nov 14 1950"
      },
      {
        "port": "Middlesbrough",
        "lon": -1.2344047,
        "lat": 54.5760419,
        "verified": true,
        "note": "arrival Nov 14 1950; sailing Nov 17 1950"
      },
      {
        "port": "Antwerp",
        "lon": 4.3997081,
        "lat": 51.2211097,
        "verified": true,
        "note": "arrival Nov 19 1950; sailing Nov 23 1950"
      },
      {
        "port": "Avonmouth",
        "lon": -2.705,
        "lat": 51.5075,
        "verified": true,
        "note": "arrival Nov 26 1950; sailing Nov 29 1950"
      },
      {
        "port": "Glasgow",
        "lon": -4.2501687,
        "lat": 55.861155,
        "verified": true,
        "note": "arrival Dec 1 1950; sailing Dec 5 1950"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival Dec 6 1950; sailing Dec 30 1950"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "arrival Jan 11 1951"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "sailing Jan 12 1951"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Jan 17 1951; sailing Jan 18 1951"
      },
      {
        "port": "Karachi",
        "lon": 67.0207055,
        "lat": 24.8546842,
        "verified": true,
        "note": "arrival Jan 23 1951; sailing Jan 31 1951"
      },
      {
        "port": "Bombay",
        "lon": 72.8258,
        "lat": 18.975,
        "verified": true,
        "note": "arrival Feb 2 1951; sailing Feb 8 1951"
      },
      {
        "port": "Koilchottam",
        "lon": 75.696891,
        "lat": 11.4383564,
        "verified": true,
        "note": "arrival Feb 10 1951; sailing Feb 14 1951"
      },
      {
        "port": "Cochin",
        "lon": 76.2673,
        "lat": 9.9312,
        "verified": true,
        "note": "arrival Feb 15 1951; sailing Feb 19 1951"
      },
      {
        "port": "Kozhikode",
        "lon": 75.7754716,
        "lat": 11.2450558,
        "verified": true,
        "note": "arrival Feb 20 1951; sailing Feb 21 1951"
      },
      {
        "port": "Alleppey",
        "lon": 76.3388,
        "lat": 9.4981,
        "verified": true,
        "note": "arrival Feb 22 1951; sailing Feb 25 1951"
      },
      {
        "port": "Aden",
        "lon": 45.028504,
        "lat": 12.789585,
        "verified": true,
        "note": "arrival Mar 4 1951; sailing Mar 4 1951"
      },
      {
        "port": "Suez",
        "lon": 32.537086,
        "lat": 29.974498,
        "verified": true,
        "note": "arrival Mar 9 1951"
      },
      {
        "port": "Port Said",
        "lon": 32.305505,
        "lat": 31.263235,
        "verified": true,
        "note": "sailing Mar 10 1951"
      },
      {
        "port": "Liverpool",
        "lon": -2.9166389,
        "lat": 53.3933411,
        "verified": true,
        "note": "arrival Mar 23 1951; sailing Mar 29 1951"
      },
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "arrival Apr 2 1951; sailing Apr 4 1951"
      },
      {
        "port": "Middlesbrough",
        "lon": -1.2344047,
        "lat": 54.5760419,
        "verified": true,
        "note": "arrival Apr 5 1951"
      }
    ],
    "card_images": [
      "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/voyagecards/IMG_5674.jpeg"
    ],
    "waypoints_source": "crs10_card",
    "route_legs": [
      {
        "from_idx": 0,
        "to_idx": 1,
        "verified": true,
        "coords": [
          [
            88.173523,
            22.165786
          ],
          [
            88.206482,
            22.065278
          ],
          [
            87.93869,
            21.684229
          ],
          [
            88,
            21
          ],
          [
            84.9566,
            18.5238
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.3898,
            17.6221
          ]
        ]
      },
      {
        "from_idx": 1,
        "to_idx": 2,
        "verified": true,
        "coords": [
          [
            83.3898,
            17.6221
          ],
          [
            83.656463,
            17.413983
          ],
          [
            83.45929,
            15.271825
          ],
          [
            82.998315,
            12.032454
          ],
          [
            82.25,
            7.25
          ],
          [
            81.9,
            5.9
          ],
          [
            80.1,
            5.8
          ],
          [
            79.82666,
            6.424484
          ],
          [
            79.789581,
            6.994585
          ]
        ]
      },
      {
        "from_idx": 2,
        "to_idx": 3,
        "verified": true,
        "coords": [
          [
            79.789581,
            6.994585
          ],
          [
            78.868856,
            6.674926
          ],
          [
            78.019032,
            6.387793
          ],
          [
            75.966807,
            6.966807
          ],
          [
            70.817426,
            8.365148
          ],
          [
            69.999915,
            8.582747
          ],
          [
            69.671733,
            8.6701
          ],
          [
            69.3291,
            8.7613
          ],
          [
            68.858995,
            8.881605
          ],
          [
            65.7044,
            9.6889
          ],
          [
            64.992809,
            9.862937
          ],
          [
            64.698862,
            9.934828
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 3,
        "to_idx": 4,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 4,
        "to_idx": 5,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 5,
        "to_idx": 6,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.954994,
            45.668797
          ],
          [
            -6.698867,
            47.340067
          ],
          [
            -5.5,
            48.6667
          ],
          [
            -5.06401,
            48.799916
          ],
          [
            -4.270518,
            49.042365
          ],
          [
            -4.030414,
            49.115729
          ],
          [
            -3.986163,
            49.129249
          ],
          [
            -3.197043,
            49.370363
          ],
          [
            -2.39189,
            49.616376
          ],
          [
            -1.992006,
            49.738559
          ],
          [
            -1.93365,
            49.75639
          ],
          [
            -1.665743,
            49.838248
          ],
          [
            -1.47977,
            49.895072
          ],
          [
            -1.3,
            49.95
          ],
          [
            -0.671539,
            50.155459
          ],
          [
            -0.545959,
            50.196513
          ],
          [
            -0.343359,
            50.262748
          ],
          [
            0.39288,
            50.503441
          ],
          [
            1.193894,
            50.765311
          ],
          [
            1.3,
            50.8
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.474566,
            51.467902
          ],
          [
            0.8262,
            51.5038
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.2137,
            51.4867
          ]
        ]
      },
      {
        "from_idx": 6,
        "to_idx": 7,
        "verified": true,
        "coords": [
          [
            0.2137,
            51.4867
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.8262,
            51.5038
          ],
          [
            1.25,
            51.6
          ],
          [
            1.5065,
            51.878829
          ],
          [
            1.761684,
            52.03871
          ],
          [
            2.1349,
            52.7457
          ],
          [
            0.4,
            53.5
          ],
          [
            -0.039825,
            53.583538
          ],
          [
            -0.299377,
            53.730842
          ]
        ]
      },
      {
        "from_idx": 7,
        "to_idx": 8,
        "verified": true,
        "coords": [
          [
            -0.299377,
            53.730842
          ],
          [
            -0.039825,
            53.583538
          ],
          [
            0.4,
            53.5
          ],
          [
            0.038452,
            54.123822
          ],
          [
            -0.754169,
            54.819051
          ],
          [
            -1.142578,
            54.66986
          ]
        ]
      },
      {
        "from_idx": 8,
        "to_idx": 9,
        "verified": true,
        "coords": [
          [
            -1.142578,
            54.66986
          ],
          [
            -0.754169,
            54.819051
          ],
          [
            0.3771,
            53.9975
          ],
          [
            0.71596,
            53.756184
          ],
          [
            0.946317,
            53.592137
          ],
          [
            1.075698,
            53.5
          ],
          [
            2.1349,
            52.7457
          ],
          [
            2.791374,
            52.020069
          ],
          [
            2.9,
            51.9
          ],
          [
            3.4,
            51.5
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.9641,
            51.426
          ],
          [
            4.0905,
            51.3831
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.261322,
            51.340907
          ]
        ]
      },
      {
        "from_idx": 9,
        "to_idx": 10,
        "verified": true,
        "coords": [
          [
            4.261322,
            51.340907
          ],
          [
            4.1894,
            51.3917
          ],
          [
            4.0905,
            51.3831
          ],
          [
            3.9641,
            51.426
          ],
          [
            3.844528,
            51.354631
          ],
          [
            3.677482,
            51.412653
          ],
          [
            3.510818,
            51.436889
          ],
          [
            3.4,
            51.5
          ],
          [
            2.356699,
            51.178984
          ],
          [
            2.1,
            51.1
          ],
          [
            1.813195,
            50.988387
          ],
          [
            1.567687,
            50.892845
          ],
          [
            1.441366,
            50.849032
          ],
          [
            1.3,
            50.8
          ],
          [
            1.149895,
            50.76637
          ],
          [
            0.301537,
            50.576304
          ],
          [
            -0.505582,
            50.395477
          ],
          [
            -0.672505,
            50.358079
          ],
          [
            -0.764313,
            50.33751
          ],
          [
            -0.76446,
            50.337798
          ],
          [
            -1.251907,
            50.264973
          ],
          [
            -1.577583,
            50.216317
          ],
          [
            -1.755087,
            50.189798
          ],
          [
            -2.100162,
            50.138244
          ],
          [
            -2.270882,
            50.112738
          ],
          [
            -2.624015,
            50.023556
          ],
          [
            -4,
            50.1
          ],
          [
            -4.115519,
            50.084349
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.734909,
            51.501049
          ]
        ]
      },
      {
        "from_idx": 10,
        "to_idx": 11,
        "verified": true,
        "coords": [
          [
            -2.734909,
            51.501049
          ],
          [
            -2.782288,
            51.519853
          ],
          [
            -2.921677,
            51.498912
          ],
          [
            -3.123721,
            51.397362
          ],
          [
            -3.260193,
            51.32203
          ],
          [
            -4.126358,
            51.432338
          ],
          [
            -4.501826,
            51.156194
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.781725,
            52.16867
          ],
          [
            -5.742388,
            52.779797
          ],
          [
            -5.733548,
            52.917129
          ],
          [
            -5.7075,
            53.3218
          ],
          [
            -5.7,
            53.4
          ],
          [
            -5.489975,
            53.98807
          ],
          [
            -5.247687,
            54.666478
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.54422,
            55.924586
          ]
        ]
      },
      {
        "from_idx": 11,
        "to_idx": 12,
        "verified": true,
        "coords": [
          [
            -4.54422,
            55.924586
          ],
          [
            -4.768562,
            55.987575
          ],
          [
            -4.893723,
            55.949777
          ],
          [
            -5.012512,
            55.653573
          ],
          [
            -5.009766,
            55.415764
          ],
          [
            -5.445564,
            54.990994
          ],
          [
            -5.2,
            54.8
          ],
          [
            -5.137288,
            54.638339
          ],
          [
            -5.002755,
            54.604048
          ],
          [
            -4.162754,
            54.389945
          ],
          [
            -3.831515,
            53.940031
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      },
      {
        "from_idx": 12,
        "to_idx": 13,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.5,
            43
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.25,
            36.8
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -5.75,
            35.95
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -4.7,
            36
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            3.1,
            37.2
          ],
          [
            7.5,
            37.4
          ],
          [
            10.373031,
            37.482087
          ],
          [
            11,
            37.5
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11.827836,
            37.283186
          ],
          [
            12.086301,
            37.215493
          ],
          [
            12.110644,
            37.209117
          ],
          [
            13.263819,
            36.907095
          ],
          [
            15.2,
            36.4
          ],
          [
            16.726588,
            36.086854
          ],
          [
            17.902084,
            35.845726
          ],
          [
            21.407365,
            35.126694
          ],
          [
            23,
            34.8
          ],
          [
            24.926664,
            34.187436
          ],
          [
            25.478721,
            34.011915
          ],
          [
            26.306431,
            33.748752
          ],
          [
            27.927542,
            33.219565
          ],
          [
            28.212434,
            33.115811
          ],
          [
            28.905525,
            32.863395
          ],
          [
            30.408377,
            32.316071
          ],
          [
            32.1,
            31.7
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 13,
        "to_idx": 14,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 14,
        "to_idx": 15,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.6,
            29.7
          ],
          [
            33.233643,
            28.444544
          ],
          [
            34.5,
            27
          ],
          [
            37,
            23.6
          ],
          [
            37.786499,
            22.210682
          ],
          [
            38.572998,
            20.807472
          ],
          [
            41.000977,
            17.098792
          ],
          [
            42.341309,
            14.509144
          ],
          [
            42.541058,
            13.676089
          ],
          [
            43.3,
            12.7
          ],
          [
            43.746586,
            12.40439
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 15,
        "to_idx": 16,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            45,
            12
          ],
          [
            49.5581,
            14.1436
          ],
          [
            54.2,
            16.2
          ],
          [
            56.876033,
            17.38386
          ],
          [
            58.191833,
            18.742507
          ],
          [
            59,
            20
          ],
          [
            62.375976,
            21.440441
          ],
          [
            64.447045,
            22.842503
          ],
          [
            66.6,
            24.3
          ],
          [
            66.975702,
            24.817412
          ]
        ]
      },
      {
        "from_idx": 16,
        "to_idx": 17,
        "verified": true,
        "coords": [
          [
            66.975702,
            24.817412
          ],
          [
            66.6,
            24.3
          ],
          [
            68.719482,
            22.543001
          ],
          [
            69.592463,
            20.809334
          ],
          [
            70,
            20
          ],
          [
            72.4,
            19
          ],
          [
            72.80777,
            18.941361
          ]
        ]
      },
      {
        "from_idx": 17,
        "to_idx": 18,
        "verified": true,
        "coords": [
          [
            72.80777,
            18.941361
          ],
          [
            72.4,
            19
          ],
          [
            73,
            15.3
          ],
          [
            74.133516,
            12.773359
          ],
          [
            75.3,
            9.7
          ],
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 18,
        "to_idx": 19,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 19,
        "to_idx": 20,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 20,
        "to_idx": 21,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ]
        ]
      },
      {
        "from_idx": 21,
        "to_idx": 22,
        "verified": true,
        "coords": [
          [
            76.195679,
            9.876864
          ],
          [
            75.3,
            9.7
          ],
          [
            70,
            10
          ],
          [
            65.126773,
            10.035771
          ],
          [
            65.0002,
            10.0367
          ],
          [
            64.696861,
            10.034474
          ],
          [
            64.303249,
            10.031585
          ],
          [
            62.0601,
            10.5802
          ],
          [
            60.825733,
            10.866984
          ],
          [
            59.894005,
            11.083455
          ],
          [
            55.041504,
            12.747516
          ],
          [
            53.61885,
            13.300009
          ],
          [
            50.856149,
            12.884027
          ],
          [
            45,
            12
          ],
          [
            44.972534,
            12.710009
          ]
        ]
      },
      {
        "from_idx": 22,
        "to_idx": 23,
        "verified": true,
        "coords": [
          [
            44.972534,
            12.710009
          ],
          [
            43.746586,
            12.40439
          ],
          [
            43.3,
            12.7
          ],
          [
            42.541058,
            13.676089
          ],
          [
            42.341309,
            14.509144
          ],
          [
            41.000977,
            17.098792
          ],
          [
            38.572998,
            20.807472
          ],
          [
            37.786499,
            22.210682
          ],
          [
            37,
            23.6
          ],
          [
            34.5,
            27
          ],
          [
            33.233643,
            28.444544
          ],
          [
            32.6,
            29.7
          ],
          [
            32.557983,
            30.213982
          ]
        ]
      },
      {
        "from_idx": 23,
        "to_idx": 24,
        "verified": true,
        "coords": [
          [
            32.557983,
            30.213982
          ],
          [
            32.382202,
            30.318359
          ],
          [
            32.310104,
            31.102922
          ],
          [
            32.359877,
            31.336373
          ]
        ]
      },
      {
        "from_idx": 24,
        "to_idx": 25,
        "verified": true,
        "coords": [
          [
            32.359877,
            31.336373
          ],
          [
            32.1,
            31.7
          ],
          [
            30.408377,
            32.316071
          ],
          [
            28.905525,
            32.863395
          ],
          [
            28.212434,
            33.115811
          ],
          [
            27.927542,
            33.219565
          ],
          [
            26.306431,
            33.748752
          ],
          [
            25.478721,
            34.011915
          ],
          [
            24.926664,
            34.187436
          ],
          [
            23,
            34.8
          ],
          [
            21.407365,
            35.126694
          ],
          [
            17.902084,
            35.845726
          ],
          [
            16.726588,
            36.086854
          ],
          [
            15.2,
            36.4
          ],
          [
            13.263819,
            36.907095
          ],
          [
            12.110644,
            37.209117
          ],
          [
            12.086301,
            37.215493
          ],
          [
            11.827836,
            37.283186
          ],
          [
            11.172235,
            37.454891
          ],
          [
            11,
            37.5
          ],
          [
            10.373031,
            37.482087
          ],
          [
            7.5,
            37.4
          ],
          [
            3.1,
            37.2
          ],
          [
            -0.366667,
            36.666667
          ],
          [
            -1.62439,
            36.473171
          ],
          [
            -2.244793,
            36.377724
          ],
          [
            -2.590675,
            36.324512
          ],
          [
            -3.264225,
            36.220888
          ],
          [
            -3.683043,
            36.156455
          ],
          [
            -4.7,
            36
          ],
          [
            -5.269383,
            35.97289
          ],
          [
            -5.354867,
            35.968819
          ],
          [
            -5.75,
            35.95
          ],
          [
            -7.26966,
            36.31906
          ],
          [
            -8.219465,
            36.549727
          ],
          [
            -9.25,
            36.8
          ],
          [
            -9.452092,
            37.781589
          ],
          [
            -9.6,
            38.5
          ],
          [
            -9.9844,
            40.7798
          ],
          [
            -9.5,
            43
          ],
          [
            -9.14264,
            43.688493
          ],
          [
            -9.019938,
            43.924891
          ],
          [
            -8.49576,
            44.934776
          ],
          [
            -7.987368,
            45.91425
          ],
          [
            -7.66278,
            46.539604
          ],
          [
            -6.921259,
            47.968223
          ],
          [
            -6.791122,
            48.218947
          ],
          [
            -6.61351,
            48.561136
          ],
          [
            -6.510489,
            48.759616
          ],
          [
            -6.196961,
            49.363661
          ],
          [
            -5.979701,
            49.782237
          ],
          [
            -5.952064,
            49.835483
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -2.980042,
            53.370425
          ]
        ]
      },
      {
        "from_idx": 25,
        "to_idx": 26,
        "verified": true,
        "coords": [
          [
            -2.980042,
            53.370425
          ],
          [
            -3.042183,
            53.459438
          ],
          [
            -3.397522,
            53.572938
          ],
          [
            -3.964322,
            53.295363
          ],
          [
            -4.119099,
            53.234173
          ],
          [
            -4.329113,
            53.12664
          ],
          [
            -4.806092,
            52.785658
          ],
          [
            -5.081903,
            52.783932
          ],
          [
            -5.440366,
            52.111814
          ],
          [
            -5.9,
            51.25
          ],
          [
            -5.8714,
            50.4096
          ],
          [
            -5.783648,
            49.997799
          ],
          [
            -5.611439,
            49.881674
          ],
          [
            -5.196944,
            49.937831
          ],
          [
            -4.115519,
            50.084349
          ],
          [
            -4,
            50.1
          ],
          [
            -2.624015,
            50.023556
          ],
          [
            -2.270882,
            50.112738
          ],
          [
            -2.100162,
            50.138244
          ],
          [
            -1.755087,
            50.189798
          ],
          [
            -1.577583,
            50.216317
          ],
          [
            -1.251907,
            50.264973
          ],
          [
            -0.76446,
            50.337798
          ],
          [
            -0.764313,
            50.33751
          ],
          [
            -0.672505,
            50.358079
          ],
          [
            -0.505582,
            50.395477
          ],
          [
            0.301537,
            50.576304
          ],
          [
            1.149895,
            50.76637
          ],
          [
            1.3,
            50.8
          ],
          [
            1.384634,
            51.049171
          ],
          [
            1.4181,
            51.1477
          ],
          [
            1.474566,
            51.467902
          ],
          [
            0.8262,
            51.5038
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.2137,
            51.4867
          ]
        ]
      },
      {
        "from_idx": 26,
        "to_idx": 27,
        "verified": true,
        "coords": [
          [
            0.2137,
            51.4867
          ],
          [
            0.2782,
            51.4594
          ],
          [
            0.3126,
            51.4722
          ],
          [
            0.3441,
            51.45
          ],
          [
            0.4265,
            51.4482
          ],
          [
            0.4499,
            51.479
          ],
          [
            0.5034,
            51.4996
          ],
          [
            0.8262,
            51.5038
          ],
          [
            1.25,
            51.6
          ],
          [
            1.5065,
            51.878829
          ],
          [
            1.761684,
            52.03871
          ],
          [
            2.1349,
            52.7457
          ],
          [
            1.075698,
            53.5
          ],
          [
            0.946317,
            53.592137
          ],
          [
            0.71596,
            53.756184
          ],
          [
            0.3771,
            53.9975
          ],
          [
            -0.754169,
            54.819051
          ],
          [
            -1.142578,
            54.66986
          ]
        ]
      }
    ],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/145892_city_of_durban.jpeg"
  },
  {
    "id": "city-of-durban-1951",
    "ship": "City of Durban",
    "ship_no": "145892",
    "line": "Ellerman Lines (City Line)",
    "built": "1921",
    "tons": "7,522 net tons (card)",
    "flag": "📍 Last Known Position",
    "engaged": "23 Apr 1951, P.Lan",
    "discharged": "25 Apr 1951, P.Lan",
    "engagement_date": "1951-04-23",
    "discharge_date": "1951-04-25",
    "rank": "Purser and Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chief Steward on City of Durban from 23 Apr 1951, P.Lan to 25 Apr 1951, P.Lan. Engagement type: home-trade.",
    "voyage_note": "",
    "waypoints": [
      {
        "port": "London",
        "lon": -0.1277653,
        "lat": 51.5074456,
        "verified": true,
        "note": "no new port call logged in this window; ship's last known position was London (arrival Apr 14 1951)"
      }
    ],
    "card_images": [],
    "waypoints_source": "card_carried_forward",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/145892_city_of_durban.jpeg"
  },
  {
    "id": "city-of-durban-1951-2",
    "ship": "City of Durban",
    "ship_no": "145892",
    "line": "Ellerman Lines (City Line)",
    "built": "1921",
    "tons": "7,522 net tons (card)",
    "flag": "❓ No Card Data",
    "engaged": "7 Sep 1951, Unknown",
    "discharged": "8 Sep 1951, Unknown",
    "engagement_date": "1951-09-07",
    "discharge_date": "1951-09-08",
    "rank": "Purser and Chief Steward",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William served as Purser and Chief Steward on City of Durban from 7 Sep 1951, Unknown to 8 Sep 1951, Unknown. Engagement type: home-trade.",
    "voyage_note": "No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/145892_city_of_durban.jpeg"
  },
  {
    "id": "rodsley-1963",
    "ship": "Rodsley",
    "ship_no": "186857",
    "line": "Unknown",
    "built": "Unknown",
    "tons": "Unknown",
    "flag": "❓ No Card Data",
    "engaged": "Unknown",
    "discharged": "21 Dec 1963, ",
    "engagement_date": null,
    "discharge_date": "1963-12-21",
    "rank": "Unknown rank",
    "authoritative_discharge": false,
    "card_image": null,
    "note": "William's service on Rodsley from Unknown to 21 Dec 1963, .",
    "voyage_note": "No transcribed CRS10 card or resolvable place data available for this engagement — route not plotted.",
    "waypoints": [],
    "card_images": [],
    "waypoints_source": "no_data",
    "route_legs": [],
    "vessel_img": "https://raw.githubusercontent.com/pushpingeo/rushton/refs/heads/main/vessels/186857_rodsley.jpeg"
  }
];
