let button = document.querySelector("button");
button.onclick = function() {

    let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();


    request.onload = function() {


        const catsText = request.response;
        const cats = JSON.parse(catsText);
        showInfo(cats);


        function showInfo(jsonObj) {
            const cattts = jsonObj['cats'];

            for (let i = 0; i < cattts.length; i++) {

                const myArticle = document.createElement('article');
                const myH2 = document.createElement('h2');
                const myPara1 = document.createElement('p');
                const myPara2 = document.createElement('p');
                const myList = document.createElement('ul');

                myH2.textContent = cattts[i].name;
                myPara1.textContent = 'Species: ' + cattts[i].species;
                myPara2.textContent = 'Age: ' + cattts[i].age;
                const food = cattts[i].favFoods;

                for (let j = 0; j < food.length; j++) {
                    const listItem = document.createElement('li');
                    listItem.textContent = food[j];
                    myList.appendChild(listItem);
                }


                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myList);

                document.body.appendChild(myArticle);

            }
        }
    }
} 
