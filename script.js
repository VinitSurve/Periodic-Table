function filterElements() {
        const input = document.getElementById('searchInput').value.toUpperCase();
        const container = document.getElementById('elementContainer');
        const cards = container.getElementsByClassName('card');

        for (let i = 0; i < cards.length; i++) {
            const elementName = cards[i].getElementsByClassName('element-name')[0];
            const elementSymbol = cards[i].getElementsByClassName('element-symbol')[0];
            const elementNumber = cards[i].getElementsByClassName('element-number')[0];

            if (elementName.innerHTML.toUpperCase().indexOf(input) > -1 ||
                elementSymbol.innerHTML.toUpperCase().indexOf(input) > -1 ||
                elementNumber.innerHTML.indexOf(input) > -1) {
                cards[i].parentElement.style.display = "";
            } else {
                cards[i].parentElement.style.display = "none";
            }
        }
    }