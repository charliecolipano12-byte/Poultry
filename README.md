# Meadow & Feather Farm

A responsive, local-first poultry catalog focused on six features: the farm homepage, age categories, chicken listings, individual chicken details, listing administration, and mobile-friendly layouts.

## Run locally

Open `index.html` in a modern browser. No build step or dependencies are required. Listings are saved in that browser's `localStorage`; use the same browser profile to see admin changes on the storefront.

## Project files

- `index.html` — farm introduction and featured chickens.
- `shop.html` — all listings and the 4-month, 5-month, and 6-month-and-older categories.
- `product.html` — breed, exact age, price, availability, and chicken characteristics.
- `admin.html` — add, edit, categorize, feature, and remove listings; manage prices, stock, and images.
- `style.css` — shared farm theme, layouts, and responsive breakpoints.
- `script.js` — sample listings, category and detail rendering, admin actions, and local storage.
- `images/` — six distinct, local chicken photos used by the sample listings.

The demo stores exact ages in `ageMonths`. The admin can paste an image URL or upload an image; uploads are resized and compressed to JPEG data URLs in local storage. Storage helpers are the intended connection point for a future backend API. This demo dashboard has no authentication; add server-side authentication and authorization before deployment.

## Image credits

- `images/chicken-01.jpg` — “Chicken in the grass after rain,” I13Robin, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2013-09-04-bushes-chicken-in-grass.jpg).
- `images/chicken-02.jpg` — “A close-up view of a hen inside a barn coop,” Shixart1985, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_close-up_view_of_a_hen_inside_a_barn_coop,_showcasing_its_vibrant_comb_and_eye.jpg).
- `images/chicken-03.jpg` — “Black chicken on green grass,” Godwin Borg, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Black_chicken_on_green_grass.jpg).
- `images/chicken-04.jpg` — “Chicken (hen),” Kalaiyarasiselvam, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_(hen).jpg).
- `images/chicken-05.jpg` — “Chicken searching,” Nkpelawuni, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_searching.jpg).
- `images/chicken-06.jpg` — “Chicken and two black chicks,” Godwin Borg, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_and_two_black_chicks.jpg).
