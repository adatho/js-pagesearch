# JS Pagesearch
> Version 1.0.0

Simple search for your static page content, written in vanilla javascript.

## Usage

Create an input box within your `html` file

```html
<div>
    <label for="pagesearch_input">Search</label>
    <input class="" type="search" id="pagesearch_input" placeholder="Search...">
</div>
```

Create the content you want to search and give it a class (in this example `card`). Every `.card` will be queried by the search value and shown or hidden.

```html
<div class="data-list">
    <div class="card">
        <p class="card-title">Lorem, ipsum...</p>
        <p class="card-text">
            consectetur adipiscing elit, ...
        </p>
    </div>
    ...
```

Download the `pagesearch.js` file and change the config section to your needs.

```javascript
/**
 * searchIdentifier => the contents that should be searched
 * searchInput => the input field to enter the query
 * searchPauseTimerInterval => Timeinterval for key inputs
 * searchPauseTimer => Timeout for the key inputs
 */
let searchIdentifier = document.querySelectorAll(".card")
let searchInput = document.getElementById("pagesearch_input")
let searchPauseTimerInterval = 500
let searchPauseTimer = undefined
```

Include the `pagesearch.js` at your `html` file to use it.

```html
<script src="pagesearch.js"></script>
```

Create a `.hide` css class within your css stylesheets (or copy it from the `style.css` file).

```css
.hide {
    display: none;
}
```


Please take a look at the example `index.html` and `pagesearch.js` for more information.

## License
Free to use for everyone