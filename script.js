


$('document').ready(function () {
    // $('#search').on('click', function (event) {
    //     event.preventDefault();

    function topFIve() {

        // First we call the api that will show the 50 states with the data
        // We need to make a for loop to go through all the "total cases" in each state and then pick the top 5
        //create a new array called covidData
        //inside this array, we create an object for each state
        // we loop through the response and grab only the data elements that we want and push into a new object and then push that into the covidDATA array

        $.ajax({
            url: 'https://covidtracking.com/api/v1/states/current.json',
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            //console.log(response[1].state);
            // console.log(response[1].positive);
            // console.log(response[1].total);
            // console.log(response[1].death);
            // console.log(response[1].date);
            var covidDATA = [];
            //Here we create our own covidDATA array from
            for (var i = 0; i < response.length; i++) {


                // make a new Object, store ONLY THE VALUES YOU WANT {state: response[i].state, positive: response[i].positive}
                // Then you PUSH this new object into an array.
                var sanitizedData = new Object();
                sanitizedData["state"] = response[i].state;
                sanitizedData["positive"] = response[i].positive;
                sanitizedData["total"] = response[i].total;
                sanitizedData["death"] = response[i].death;
                sanitizedData["date"] = response[i].date;
                covidDATA.push(sanitizedData);
                //console.log(sanitizedData);
                //console.log(covidDATA);

            }


            console.log(covidDATA[1].total);

            // writing a sort logic compare function to pick the topmost(highest) 5 states with most cases --SORT ON TOTAL NUMBER OF CASES
            function compare(a, b) {
                var comparison = 0;
                //here we can change the parameter that we want to sort by.. note..this is number sort
                var casesA = a.total;
                var casesB = b.total;

                if (casesA > casesB) {
                    comparison = -1;
                } else if (casesA < casesB) {
                    comparison = 1;
                }
                return comparison;
            }

            //Here is where we call the sort function to sort our covidDATA array based on the total number of cases
            covidDATA.sort(compare);
            console.log(covidDATA);

            // creating a for loop to pick the top 5 states with the maximum count and displaying it in the front page
            for (var i = 0; i < 5; i++) {

                //var totalCase = response.positive;
                var totalCase = covidDATA[i].total;
                console.log(totalCase);
                var hOne = $('<h6>').text(totalCase);
                $('.totalCasesIndex0').append(hOne);

                //var newCase = response.positiveIncrease;
                var newCase = covidDATA[i].positive;
                var hTwo = $('<h6>').text(newCase);
                $('.newCaseIndex0').append(hTwo);

                // var totalDeath = response.death;
                var totalDeath = covidDATA[i].death;
                var hThree = $('<h6>').text(totalDeath);
                $('.totalDeathIndex0').append(hThree);

            }
        });
    }

    topFIve();
    // });
});

