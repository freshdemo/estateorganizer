var counter = 1;
var limit = 30;

function addInput(formId) {
    if (counter >= limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
        return;
    }

    var container = document.getElementById(formId);

    if (!container) {
        console.error("Container with ID '" + formId + "' not found.");
        return;
    }

    // Create a wrapper div for the new section
    var newSection = document.createElement("div");
    newSection.classList.add("cloned-section");
    newSection.setAttribute("id", "section_" + formId + "_" + counter);

    // Clone the container content
    var clone = container.cloneNode(true);
    clone.removeAttribute("id"); // Prevent duplicate IDs

    // Clear input values in the clone
    clone.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });

    // Remove original buttons from the cloned section
    var buttonsToRemove = clone.querySelectorAll(".hide-for-print, .remove-btn");
    buttonsToRemove.forEach(btn => btn.remove());

    // Create New Remove Button
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.className = "remove-btn small radius button alert";
    removeBtn.onclick = function() {
        removeSection(this);
    };

    // Append the cleaned-up clone and new Remove button
    newSection.appendChild(clone);
    newSection.appendChild(removeBtn);

    // Insert new section AFTER the original container
    container.parentNode.insertBefore(newSection, container.nextSibling);

    counter++;
}

function removeSection(button) {
    // Get the original form ID from the section ID or closest form
    var section = button.closest('.cloned-section') || button.closest('form');
    var originalFormId = section.id.split('_')[1] || section.id;
    
    // Check if this is an original form
    var originalForm = document.getElementById(originalFormId);
    if (button.closest('form')) {
        if (confirm("Are you sure you want to remove the original form?")) {
            originalForm.remove();
            counter = 0; // Reset counter as original form is gone
        }
        return;
    }

    // For cloned sections
    if (section) {
        section.remove();
        counter--;
    }
}