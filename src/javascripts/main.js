//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import {gallery} from './gallery'

for(let g of gallery) {
    let g_thumb = document.getElementById('g' + g.id);
    g_thumb.innerHTML = `
        <img src="${g.URL}" alt="${g.description}" class="img-thumbnail"/>
    `

    g_thumb.onclick = function() {
        displayGallery(g)
    }
}

let featured_gallery = document.querySelector(".featured");

function displayGallery(gallery) {
    featured_gallery.innerHTML = `
        <div class="card">
            <div class="card-header">${gallery.title}</div>
            <img src="${gallery.URL}" class="card-img-top" alt="${gallery.description}">
            <div class="card-body">
            <h5 class="card-title"><small>2024, Fish</small></h5>
            <p class="card-text">${gallery.description}</p>
            </div>
            <div class="card-footer text-muted">
            <div class="row row-cols-3">
                <div class="col"><strong>Rating: </strong>5</div>
                <div class="col"><strong>Rated: </strong>5</div>
                <div class="col"><strong>Votes: </strong>5</div>
            </div>
            </div>
        </div>
    `
}

function searchGallery(event) {
    event.preventDefault();

    let input = document.querySelector('[type="search"]').value || "";
    let count = 0;

    for(let g of gallery) {
        if(g.title.toUpperCase().indexOf(input.toUpperCase()) == -1) {
            document.querySelector(`#g${g.id}`).classList.add('d-none')
        } else {
            document.querySelector(`#g${g.id}`).classList.remove('d-none')
            count++
        }
    }

    featured_gallery.innerHTML = count == 0 ? 'Nothing was found' : ''
}

document.querySelector("button").onclick = searchGallery;
document.querySelector('[type="search"]').onsearch = searchGallery;
document.querySelector("form").onsubmit = searchGallery;
