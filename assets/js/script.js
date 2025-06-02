//jquery




// Navbar text change


// header
const navbar = document.getElementById('navbar');
  
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



window.addEventListener('load', function() {
    // Add loaded class to body after window loads
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 1000); // 1 second delay before hiding loader
});

// Prevent scrolling while loader is active
document.body.style.overflow = 'hidden';
window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.style.overflow = 'visible';
    }, 1500);
});






// ********  index ticket ******** //

//  Fixed JavaScript for the ticket summary functionality 

document.addEventListener('DOMContentLoaded', () => {
        // Get the elements
        const viewSummaryLink = document.getElementById('view-ticket-summary');
        const summaryPopup = document.getElementById('ticket-summary-popup');
        const closeSummaryBtn = document.getElementById('close-summary');
        const summaryContent = document.getElementById('ticket-summary-content');
        
        // Make sure elements exist before adding event listeners
        if (!viewSummaryLink || !summaryPopup || !closeSummaryBtn || !summaryContent) {
            console.error('One or more ticket summary elements not found!');
            return;
        }
        
        // Show ticket summary popup when link is clicked
        viewSummaryLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View summary clicked');
            updateTicketSummary();
            summaryPopup.style.display = 'block';
            document.body.classList.add('popup-open'); // Add class to body when popup opens
        });
        
        // Close ticket summary popup
        closeSummaryBtn.addEventListener('click', function() {
            summaryPopup.style.display = 'none';
            document.body.classList.remove('popup-open'); // Remove class when popup closes
        });
        
        // Close popup when clicking outside, but not when clicking on the view summary link
        document.addEventListener('click', function(e) {
            // Check if popup is visible and click is outside popup and not on the summary link
            if (summaryPopup.style.display === 'block' && 
                !summaryPopup.contains(e.target) && 
                e.target !== viewSummaryLink) {
                summaryPopup.style.display = 'none';
            }
        });
  
        
        // Function to update ticket summary content
        function updateTicketSummary() {
            console.log('Updating ticket summary');
            summaryContent.innerHTML = '';
            
            const ticketCards = document.querySelectorAll('.pass-card');
            let hasTickets = false;
            let subtotal = 0;
            
            ticketCards.forEach((card, index) => {
                const quantity = parseInt(card.querySelector('.number-input').value) || 0;
                console.log(`Ticket ${index+1}: quantity = ${quantity}`);
                
                if (quantity > 0) {
                    hasTickets = true;
                    const typeElement = card.querySelector('.pass-type');
                    const type = typeElement ? typeElement.textContent.trim() : 'Unknown Ticket';
                    
                    const priceElement = card.querySelector('.pass-price');
                    const priceText = priceElement ? priceElement.textContent : 'EUR 0';
                    
                    // Extract price value for calculation
                    let priceValue = 0;
                    const priceMatch = priceText.match(/EUR\s+(\d+,?\d*)/);
                    if (priceMatch) {
                        priceValue = parseFloat(priceMatch[1].replace(',', ''));
                    } else if (priceText.includes('FREE')) {
                        priceValue = 0;
                    }
            
                    
                    // Calculate total for this ticket type
                    const totalPrice = priceValue * quantity;
                    subtotal += totalPrice;
                    
                    // Create ticket item element
                    const ticketItem = document.createElement('div');
                    ticketItem.className = 'ticket-item';
                    
                    ticketItem.innerHTML = `
                        <div class="ticket-name">${type}</div>
                        <div class="ticket-details">
                            <span>${quantity} x ${priceText}</span>
                            <span>${priceValue > 0 ? `EUR ${totalPrice.toLocaleString()}` : 'FREE'}</span>
                        </div>
                    `;
                    
                    summaryContent.appendChild(ticketItem);
                }
            });

            
            // If no tickets selected, show message
            if (!hasTickets) {
                summaryContent.innerHTML = '<p>No tickets selected yet.</p>';
            } else {
                // Add total section with promo code
                const totalSection = document.createElement('div');
                totalSection.className = 'ticket-total-section';
                
                // Get promo code and discount if available
                const promoCode = "ABC123" || '';
                const discount = 499;
                
                const finalTotal = subtotal - discount;
                
                totalSection.innerHTML = `
                    <div class="subtotal-row">
                        <span>Subtotal:</span>
                        <span>EUR ${subtotal.toLocaleString()}</span>
                    </div>
                    ${discount > 0 ? 
                        `<div class="promocode-row">
                            <span>Promo discount (${promoCode}):</span>
                            <span>-EUR ${discount.toLocaleString()}</span>
                        </div>` 
                        : ''}
                    <div class="promocode-input">
                        <input type="text" id="promo-code-input" placeholder="Enter promo code" value="${promoCode}">
                        <button id="apply-promo">Apply</button>
                    </div>
                `;
                
                summaryContent.appendChild(totalSection);
                
                // Add promo code functionality - done with a slight delay to ensure the elements exist
                setTimeout(() => {
                    const promoInput = document.getElementById('promo-code-input');
                    const applyButton = document.getElementById('apply-promo');
                    
                    if (promoInput && applyButton) {
                        applyButton.addEventListener('click', function() {
                            const code = promoInput.value.trim();
                            if (code) {
                                // In a real implementation, you would validate the promo code with the server
                                // For demo purposes, we'll just simulate a 10% discount
                                const discountAmount = subtotal * 0.1;
                                localStorage.setItem('promoCode', code);
                                localStorage.setItem('promoDiscount', discountAmount);
                                
                                // Update the summary
                                updateTicketSummary();
                                
                                // Also update the main total
                                updateMainTotal();
                            }
                        });
                    }
                }, 100);
            }
        }
        
        // Function to update the main total amount shown in the fixed bar
        function updateMainTotal() {
            let total = 0;
            
            // Calculate subtotal
            const ticketCards = document.querySelectorAll('.pass-card');
            ticketCards.forEach(card => {
                const quantity = parseInt(card.querySelector('.number-input').value) || 0;
                
                if (quantity > 0) {
                    const priceText = card.querySelector('.pass-price').textContent;
                    const priceMatch = priceText.match(/EUR\s+(\d+,?\d*)/);
                    
                    if (priceMatch) {
                        const price = parseFloat(priceMatch[1].replace(',', ''));
                        total += price * quantity;
                    }
                }
            });
            
            // Apply discount if promo code exists
            const discount = 0;
            
            total = total - discount;
            
            // Update the displayed total
            document.getElementById('total-amount').textContent = `EUR ${total.toLocaleString()}`;
        }
        
        // Call updateMainTotal initially
        updateMainTotal();
        
        // Update both the main total and ticket summary (if open) when quantities change
        const numberInputs = document.querySelectorAll('.number-input');
        numberInputs.forEach(input => {
            input.addEventListener('change', function() {
                updateMainTotal();
                if (summaryPopup.style.display === 'block') {
                    updateTicketSummary();
                }
            });
        });
        
        // Also update when plus/minus buttons are clicked
        const quantityButtons = document.querySelectorAll('.plus, .minus');
        quantityButtons.forEach(button => {
            button.addEventListener('click', function() {
                setTimeout(() => {
                    updateMainTotal();
                    if (summaryPopup.style.display === 'block') {
                        updateTicketSummary();
                    }
                }, 10); // Small delay to ensure input value is updated first
            });
        });
    });


//  Fixed JavaScript for the ticket summary functionality 


// rate tracking 

    // Function to handle confirmation
    function tiketConfirmation() {
        const checkboxes = document.querySelectorAll('#ticket-options input[type="checkbox"]');
        const errorMessage = document.getElementById('ticket-error');

        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

        if (checkedCount > 0 && checkedCount <= 6) {
            errorMessage.style.display = 'none';
            location.href = 'registrationmultistepform.html';
        } else if (checkedCount === 0) {
            errorMessage.textContent = 'Please select at least one ticket option.';
            errorMessage.style.display = 'inline';
        } else if (checkedCount > 6) {
            errorMessage.textContent = 'You can select a maximum of 6 options.';
            errorMessage.style.display = 'inline';
        }
    }

            // Limit selection to max 6
            document.addEventListener('DOMContentLoaded', function () {
                const checkboxes = document.querySelectorAll('#ticket-options input[type="checkbox"]');

                checkboxes.forEach(function (checkbox) {
                    checkbox.addEventListener('change', function () {
                        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

                        if (checkedCount >= 6) {
                            checkboxes.forEach(cb => {
                                if (!cb.checked) {
                                    cb.disabled = true;
                                }
                            });
                        } else {
                            checkboxes.forEach(cb => cb.disabled = false);
                        }

                        // Hide error when adjusting selections
                        document.getElementById('ticket-error').style.display = 'none';
                    });
                });
            });



        // Add this function to your existing JavaScript to handle the "BUY NOW" button click
        function proceedToCheckout() {
            // Get all ticket selections
            const ticketSelections = [];
            const ticketCards = document.querySelectorAll('.pass-card');
            
            // Loop through each ticket card
            ticketCards.forEach(card => {
                const quantity = parseInt(card.querySelector('.number-input').value) || 0;
                
                // Only add tickets with quantity > 0
                if (quantity > 0) {
                    const typeElement = card.querySelector('.pass-type');
                    const type = typeElement ? typeElement.textContent.trim().split('\n')[0] : 'Unknown Ticket';
                    
                    const priceElement = card.querySelector('.pass-price');
                    const priceText = priceElement ? priceElement.textContent.trim() : 'EUR 0';
                    
                    // Add to selections array
                    ticketSelections.push({
                        type: type,
                        price: priceText,
                        quantity: quantity
                    });
                }
            });
            
            // Check if any tickets were selected
            if (ticketSelections.length === 0) {
                alert('Please select at least one ticket before proceeding.');
                return;
            }
            
            // Store selections in localStorage for the registration page to access
            localStorage.setItem('ticketSelections', JSON.stringify(ticketSelections));
            
            // Calculate and store the total
            const totalElement = document.getElementById('total-amount');
            const totalText = totalElement ? totalElement.textContent : 'EUR 0';
            localStorage.setItem('ticketTotal', totalText);
            
            // Redirect to registration page
            window.location.href = 'registrationmultistepform.html';
        }


        // ticket count

        function changeNumber(action, button) {
            const container = button.parentElement;
            const input = container.querySelector('.number-input');
            const currentValue = parseInt(input.value);
            const minValue = parseInt(input.getAttribute('min')) || 0;
            const maxValue = parseInt(input.getAttribute('max')) || 99;

            if (action === 'minus' && currentValue > minValue) {
                input.value = currentValue - 1;
            } else if (action === 'plus' && currentValue < maxValue) {
                input.value = currentValue + 1;
            }

            validateInput(input);
        }

        function validateInput(input) {
            let value = parseInt(input.value);
            const minValue = parseInt(input.getAttribute('min')) || 0;
            const maxValue = parseInt(input.getAttribute('max')) || 99;

            if (isNaN(value) || value < minValue) {
                value = minValue;
            } else if (value > maxValue) {
                value = maxValue;
            }

            input.value = value;

            // Update button states
            const container = input.parentElement;
            container.querySelector('.minus').disabled = value <= minValue;
            container.querySelector('.plus').disabled = value >= maxValue;
        }

         // ticket count

         // 1. Modify the saveTicketCount function to store the count
        function saveTicketCount(link) {
            const container = link.closest('.pass-card');
            const input = container.querySelector('.number-input');
            const count = parseInt(input.value);
            
            // Save ticket count to localStorage
            localStorage.setItem('ticketCount', count);
            
            // Also save ticket type and price for display in registration page
            const ticketType = container.querySelector('.pass-type').textContent.trim();
            const ticketPrice = container.querySelector('.pass-price').textContent.trim();
            
            localStorage.setItem('ticketType', ticketType);
            localStorage.setItem('ticketPrice', ticketPrice);
        }

         // 1. Modify the saveTicketCount function to store the count


        // ********  index ticket ******** //



        // collaps ticket

        