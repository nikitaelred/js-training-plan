<?php 
function multilevel_repeating_form_shortcode() {
    ob_start(); 
    ?>
    <style>
        .form-section {
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            background: #f9f9f9;
        }
        .nested-section {
    margin-left: 20px;
    padding: 10px;
    background: #e9ecef;
    border-radius: 6px;
    display: flex
;
    margin-top: 20px;
    column-gap: 20px;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
}
        .btn {
            display: inline-block;
            padding: 5px 10px;
            background: #0073aa;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 5px;
            border-radius: 4px;
        }
        .btn-remove {
            background: #d63638;
        }
        select, input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        .suggestions {
            border: 1px solid #ccc;
            border-radius: 4px;
            background: white;
            max-height: 150px;
            overflow-y: auto;
            position: absolute;
            width: 100%;
            display: none;
        }
        .suggestion-item {
            padding: 8px;
            cursor: pointer;
        }
        .suggestion-item:hover {
            background: #0073aa;
            color: white;
        }
        .input-container {
            position: relative;
        }
    </style>

  

    <!-- Auto-Suggestion Input -->
    <label for="autoSuggest">Select Client:</label>
    <div class="input-container">
        <input type="text" id="autoSuggest" name="client-name" placeholder="Start typing...">
        <div class="suggestions" id="suggestionsList"></div>
    </div>
    
    <form id="multilevelForm">
        <div id="formContainer">
            <div class="form-section">
                <label>Date: <input type="date" name="date[]"></label>
                <label>Chalan No.: <input type="number" name="cno[]"></label>
                <button type="button" class="btn addNested">Add Nested</button>
                <div class="nestedContainer"></div>
                <button type="button" class="btn btn-remove removeSection">Remove</button>
            </div>
        </div>
        <button type="button" class="btn" id="addSection">Add Section</button>
        <button type="submit" class="btn">Submit</button>
    </form>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let formContainer = document.getElementById("formContainer");
           // let dropdown = document.getElementById("searchableDropdown");
            let autoSuggestInput = document.getElementById("autoSuggest");
            let suggestionsList = document.getElementById("suggestionsList");

            // Sample data for dropdown and suggestions
            let options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
            let suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapes"];
            let usedOptions = new Set();
            let usedSuggestions = new Set();

            

            // Auto-Suggestion Functionality
            autoSuggestInput.addEventListener("input", function() {
                let value = this.value.toLowerCase();
                suggestionsList.innerHTML = "";
				suggestionsList.style.display = "block";
                if (value) {
                    let filteredSuggestions = suggestions.filter(item => 
                        item.toLowerCase().includes(value) && !usedSuggestions.has(item)
                    );

                    if (filteredSuggestions.length > 0) {
                        suggestionsList.style.display = "block";
                        filteredSuggestions.forEach(suggestion => {
                            let div = document.createElement("div");
                            div.classList.add("suggestion-item");
                            div.textContent = suggestion;
                            div.addEventListener("click", function() {
                                autoSuggestInput.value = suggestion;
								autoSuggestInput.setAttribute('value',suggestion);
                                usedSuggestions.add(suggestion);
                                suggestionsList.style.display = "none";
                            });
                            suggestionsList.appendChild(div);
                        });
                    } else {
                        suggestionsList.style.display = "none";
                    }
                } 
            });

            document.addEventListener("click", function(event) {
                if (!event.target.closest(".input-container")) {
                    suggestionsList.style.display = "none";
                }
            });

            // Add new section
            document.getElementById("addSection").addEventListener("click", function() {
                let newSection = document.querySelector(".form-section").cloneNode(true);
                newSection.querySelectorAll("input").forEach(input => input.value = "");
                newSection.querySelector(".nestedContainer").innerHTML = "";
                formContainer.appendChild(newSection);
            });

            // Event delegation for dynamically added elements
            formContainer.addEventListener("click", function(event) {
                if (event.target.classList.contains("removeSection")) {
                    event.target.closest(".form-section").remove();
                } else if (event.target.classList.contains("addNested")) {
                    let nestedContainer = event.target.nextElementSibling;
                    let newNested = document.createElement("div");
                    newNested.classList.add("nested-section");
                    newNested.innerHTML = `<div>
                       <label for="ctype">Cylinder Type: </label>
    <select id="ctype" name="ctype">
        <option value="">-- Select --</option>
<option value="Oxygen">Oxygen</option>
<option value="CO2">CO2</option>
<option value="Argon">Argon</option>
<option value="Nitrogen">Nitrogen</option>
<option value="Argoshield">Argoshield</option>
<option value="LPG">LPG</option>
<option value="Helium">Helium</option>
<option value="Hydrogen">Hydrogen</option>
    </select></div>
<div><label for="fcyl">Full Cylinders: </label>
<input type="number" name="fcyl" placeholder="Full Cylinders"></div>
<div><label for="ecyl">Empty Cylinders: </label>
<input type="number" name="ecyl" placeholder="Empty Cylinders"></div>
                        <button type="button" class="btn btn-remove removeNested">Remove</button>
                    `;
                    nestedContainer.appendChild(newNested);
                } else if (event.target.classList.contains("removeNested")) {
                    event.target.closest(".nested-section").remove();
                }
            });
        });
    </script>
    <?php
    return ob_get_clean();
}

add_shortcode('multilevel_form', 'multilevel_repeating_form_shortcode');

?>