document.getElementById('addTitle')
        .addEventListener('click', function () {
            let color = document.getElementById('color').value;
            let fontSize = document.getElementById('fontSize').value;
            let text = document.getElementById('text').value;

            let h1Element = `<h1 style="color:${color};font-size:${fontSize}px">${text}</h1>`;
            let generatedTitlesDiv = document.getElementById('generatedTitles');
            generatedTitlesDiv.innerHTML = h1Element + generatedTitlesDiv.innerHTML;
        });

    document.getElementById('addUl')
        .addEventListener('click', function () {
            let color = document.getElementById('ulColor').value;
            let fontSize = document.getElementById('ulFontSize').value;
            let items = document.getElementById('ulItems')
                                .value
                                .split(',');

            let ulElement = `<ul style="color:${color};font-size:${fontSize}px">${generateListItems(items)}</h1>`;
            let generatedUlsDiv = document.getElementById('generatedUls');
            generatedUlsDiv.innerHTML = ulElement + generatedUlsDiv.innerHTML;

            function generateListItems(items) {
                let result = "";

                for (const item of items) {
                    result += `<li>${item}</li>`;
                }

                return result;
            }
        });