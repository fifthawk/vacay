import "./Things.css";

const Things = () => {
  return (
    <div>
      <div className="thingsContainer">
        <h1 class="animate__animated animate__backInDown">Things to Do!</h1>

        <h3>Nature</h3>
        <a href="https://www.stthomasbotanicalgarden.com/">Botanical Garden </a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Phantasea+Tropical+Botanical+Garden,+ST+THOMAS,+VI,+USVI/@18.3577292,-64.9354461,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051ae83103f4d3:0xa57f616da5263072!2m2!1d-64.9389492!2d18.3542565!3e0">
          Directions for Botanical Garden
        </a>
        <br />
        <br />
        <hr />
        <br />

        <a href="https://coralworldvi.com/">Coral World Ocean Park</a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Coral+World+Ocean+Park,+St+Thomas,+Virgin+Islands,+USVI/@18.3539245,-64.909222,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c0510485760dddf:0xcf59fa815656357c!2m2!1d-64.8636!2d18.349389!3e0">
          Directions for Coral World
        </a>
        <br />
        <br />
        <hr />
        <br />

        <a href="https://www.tripadvisor.com/Attraction_Review-g147404-d147722-Reviews-Mountain_Top-St_Thomas_U_S_Virgin_Islands.html">
          Mountain Top (🍌 daiquiri)
        </a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Mountain+Top,+St.+Thomas,+USVI/@18.3560138,-64.9467418,18.66z/data=!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051ae74f4708c1:0xe09502af7f6b9738!2m2!1d-64.9470118!2d18.355969!3e0">
          Directions for Mountain Top
        </a>
        <br />
        <br />
        <hr />
        <br />

        <h3>Snorkeling</h3>

        <iframe
          className="map"
          src="https://www.google.com/maps/d/embed?mid=1jhf8YrizTeDi_VhWK8A1Pxe9cQkFmiJe"
          width="640"
          height="480"
          title="map"
        ></iframe>
        <br />
        <br />
        <a href="https://cokidive.com/coki-beach/">Coki Beach</a>
        <ul className="thingsList">
          <li>🚗 $5 Parking</li>

          <li>🤿 Snorkel Gear & Dive Rentals</li>

          <li>🛖 Beach Bar</li>

          <li>🚻 Restrooms</li>

          <li>🛍️ Beach Shop </li>

          <li>⛱️ Umbrella & Chair Rentals</li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              Considered one of the best snorkeling St Thomas spots, this beach
              can get quite busy, especially on days that cruise ships are in
              port. Head for the rocky areas on the left of the beach or to the
              right near Coral World Ocean Park and you are sure to find tons of
              brightly colored tropical fish, and maybe even some crabs or rays.{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Coki+Point+Beach,+Coki+Point+Rd,+St+Thomas,+00802,+U.S.+Virgin+Islands/@18.3512058,-64.910502,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051036e6c324c3:0xad7dfe934b301ca2!2m2!1d-64.8664808!2d18.3492968">
            Directions
          </a>
        </ul>

        <a href="https://snorkelandhike.com/sapphire-beach-st-thomas-snorkeling/#beach-snorkel">
          Sapphire Beach
        </a>
        <ul className="thingsList">
          <li>🚗 Free Parking</li>

          <li>🤿 Snorkel Gear</li>

          <li>🛖 Beach Bar</li>

          <li>🚻 Restrooms</li>

          <li>🛥️ Water Sports Rentals</li>

          <li>🪑 Chair Rentals</li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              Sapphire beach snorkeling is perfect for snorkelers of all levels.
              You’re sure to see some colorful fish, nice brain coral, and
              possibly a ray or even a turtle..Look out for The Snorkel Police-
              Even if you aren’t touching any coral (which you never should),
              there are security guards who will blow their whistle and tell you
              to stay away from the coral if you are snorkeling over it.
              Apparently you must have a 6 ft distance between your stomach and
              the coral if snorkeling above it.{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Sapphire+Beach+Resort+and+Marina,+St.+Thomas,+USVI/@18.3503207,-64.9027528,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051171a8bafa55:0x31aa93e70495d31e!2m2!1d-64.8506617!2d18.3339842">
            Directions
          </a>
        </ul>

        <a href="https://snorkelandhike.com/secret-harbor-st-thomas-snorkeling/">
          Secret Harbor
        </a>
        <ul className="thingsList">
          <li>🚗 Free Parking</li>

          <li>🤿 Snorkel Gear</li>

          <li>🛖 Beach Bar</li>

          <li>🚻 Restrooms</li>

          <li>🪑 Chair Rentals</li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              Secret Harbor is a protected bay with calm water, quite a bit of
              underwater life, and is one of St. Thomas’s best snorkeling
              beaches. Many people head for the rockier right side of the beach,
              but the double reef is actually a bit further out on the left of
              the beach. You’re likely to see plenty of colorful coral, lots of
              fish, maybe a turtle in the middle, and, if you’re lucky, possibly
              even an octopus. The resort has a restaurant on site, and there is
              a local dive shop on the beach where you can get a snorkel rental.
              St Thomas is a popular island with a cruise port, but Secret
              Harbor remains relatively calm and secluded. As always, I
              recommend you check in with the dive shop for recent tips on where
              to snorkel and what marine life has been seen lately. They’re
              always a treasure trove of information.{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Road,+St.+Thomas,+USVI/Secret+Harbor+Beach,+St+Thomas+00802,+U.S.+Virgin+Islands/@18.3425092,-64.9259351,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c0511012dd1b3bd:0xfb1d20a5238fe7ee!2m2!1d-64.8529185!2d18.3180101!3e0">
            Directions
          </a>
        </ul>

        <a href="https://snorkelandhike.com/secret-harbor-st-thomas-snorkeling/">
          Lindquist Beach at Smith Bay
        </a>
        <ul className="thingsList">
          <li>🚗 $2 Parking</li>

          <li>💰 $5 entry per person</li>

          <li>🧺 Picnic Area</li>

          <li>🚻 Restrooms & Showers 🚿</li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              The seagrass as you enter the beach is a great place to spot
              turtles and rays. As you swim out a bit further, you’ll find a
              beautiful and long reef. Make sure to heed any warnings about
              strong surf. On especially windy days, the area around the reef
              can have large breakers that really toss you around. Our favorite
              part about this beach is the lack of crowds. Its seems to be a
              local favorite, and is not frequented by cruisers. So, even
              mid-day, the beach is usually sparsely crowded.{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Road,+St.+Thomas,+USVI/Lindquist+Beach,+St.+Thomas,+USVI/@18.3512058,-64.9057259,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c0511b49dcd2df3:0x62227ce4233012f5!2m2!1d-64.8566079!2d18.3385273!3e0">
            Directions
          </a>
        </ul>

        <a href="https://snorkelandhike.com/secret-harbor-st-thomas-snorkeling/">
          Brewer's Bay
        </a>
        <ul className="thingsList">
          <li>🚗 Free Street Parking</li>

          <li>🥡 Food Trucks</li>

          <li>🚻 Restrooms & Showers 🚿</li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              Brewer’s Bay is the perfect beach to get away from all of the
              cruise ship crowd and tourists on busy days. It’s much more of a
              locals beach with several food trucks and vendors selling food
              along the street. Although there are really no coral reefs or many
              fish to be seen underwater, Brewer’s Bay is one of the best spots
              on the island to find sea turtles grazing on the seagrass. With
              limited crowds and plenty of grass to munch on, it’s a favorite
              spot for them and we’ve seen turtles every time we’ve been to
              Brewers Bay. In addition to checking out the turtles underwater,
              the beach lies adjacent to the landing strip for the airport on
              St. Thomas. So, it’s a fun spot, especially for kids, to grab a
              seat under a shade tree and watch the planes land..{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Road,+St.+Thomas,+USVI/Brewers+Bay+Beach,+Charlotte+Amalie+West,+St.+Thomas,+USVI/@18.3512058,-64.9057259,14z/data=!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051b0b47a3d2b9:0x8a8488729938bd99!2m2!1d-64.9769925!2d18.3435476!3e0">
            Directions
          </a>
        </ul>

        <a href="https://snorkelandhike.com/secret-harbor-st-thomas-snorkeling/">
          Hull Bay
        </a>
        <ul className="thingsList">
          <li>🚗 Free Parking</li>

          <li>🛖 Beach Bar</li>

          <li>🍜 Restaurant</li>

          <li>🚻 Restrooms </li>
          <details>
            <summary> More Info</summary>
            <p className="beachDesc">
              Hull Bay is definitely a locals beach, but it’s a good spot to get
              away from the crowds and enjoy some good snorkeling. The beach
              area is mostly sand, but once in the water it’s quite rocky. Often
              overlooked by people wanting to snorkel St. Thomas, Hull Bay is
              another great spot to get away from the crowds at a more local
              beach. You will find some small fish and sea creatures among the
              rocks near the shore, but if you head out deeper there’s some
              large beautiful coral and interesting marine life like lobster or
              squid. The reef at Hull Bay runs from the right to the middle of
              the bay and is about 40 yards from shore{" "}
            </p>
          </details>
          <br />
          <a href="https://www.google.com/maps/dir/1222+Oceanside+Road,+St.+Thomas,+USVI/Hull+Bay+Beach,+St.+Thomas,+USVI/@18.3603589,-64.9534773,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8c051aae1ebfbf2f:0xc1aef58f56b3696a!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051b2883c8ea03:0x76247953ddf9aeb8!2m2!1d-64.9568126!2d18.3691226!3e0">
            Directions
          </a>
        </ul>

        <a href="https://funboatday.com/snorkeling/">
          New Horizon's Snorkeling
        </a>
        <br />
        <br />
        <hr />
        <br />

        <a href="https://www.stthomasscubadiving.com/snorkeling/">
          JJ's Snorkeling
        </a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/JJ+Divers+St+Thomas,+Havensight,+St.+Thomas,+USVI/@18.3503024,-64.9329155,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x80c8d1d02d5a03fb:0xcdfae6d7dce3a422!2m2!1d-64.9202007!2d18.3331292">
          {" "}
          Directions for JJ's
        </a>
        <br />
        <h3>Scuba Diving</h3>
        <a href="https://cokidive.com/">Coki Dive</a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Coki+Dive+Center,+Coki+Point+Road,+Smith+Bay,+St.+Thomas,+USVI/@18.3512058,-64.9102997,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051036bee039f7:0xfa2d3917f0156c31!2m2!1d-64.8660354!2d18.3493766">
          Directions for Coki's Dive Center
        </a>
        <br />
        <br />
        <hr />
        <br />

        <a href="https://www.stthomasscubadiving.com/dive-st-thomas/">
          JJ's Diving
        </a>
        <br />
        <a href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/JJ+Divers+St+Thomas,+Havensight,+St.+Thomas,+USVI/@18.3503024,-64.9329155,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x80c8d1d02d5a03fb:0xcdfae6d7dce3a422!2m2!1d-64.9202007!2d18.3331292">
          Directions for JJ's
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Things;
