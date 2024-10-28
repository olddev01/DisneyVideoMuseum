       // JavaScript Function for Search
       function searchTable() {
        // Get the search query
        var input = document.getElementById('searchInput');
        var filter = input.value.toLowerCase();
        var table = document.getElementById('vhsTable');
        var tr = table.getElementsByTagName('tr');

        // Loop through all table rows, hide those that don't match the query
        for (var i = 1; i < tr.length; i++) {
            var tdArray = tr[i].getElementsByTagName('td');
            var isVisible = false;

            // Loop through each cell in the row
            for (var j = 0; j < tdArray.length; j++) {
                var td = tdArray[j];
                if (td) {
                    if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                        isVisible = true;
                        break;
                    }
                }
            }

            // Toggle row visibility based on search match
            tr[i].style.display = isVisible ? "" : "none";
        }
    }
    function toggleChat() {
        const chatDropdown = document.getElementById('chatDropdown');
        chatDropdown.style.display = chatDropdown.style.display === 'none' || chatDropdown.style.display === '' ? 'block' : 'none';
    }
    
    function sendMessage(event) {
        if (event.key === 'Enter') {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const newMessage = document.createElement('div');
                newMessage.className = 'message';
                newMessage.textContent = message;
                chatMessages.appendChild(newMessage);
                input.value = ''; // Clear input
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
            }
        }
    }
    function toggleMode() {
        const body = document.body;
        body.classList.toggle('light-mode');
    }
    
    window.onload = function() {
    document.getElementById('loadingSpinner').style.display = 'none';
}
