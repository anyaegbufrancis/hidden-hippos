


$('document').ready(function () {

    var covidDATA = [];

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
            //console.log(response);
            console.log(response[10]);
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
                sanitizedData["date"] = response[i].date;
                sanitizedData["state"] = response[i].state;
                //sanitizedData["total"] = response[i].total;
                //response-positive gives the total number of positive cases in the state
                sanitizedData["positive"] = response[i].positive;
                sanitizedData["newcases"] = response[i].positiveIncrease;
                //total number of deaths in the state
                sanitizedData["death"] = response[i].death;
                sanitizedData["newdeaths"] = response[i].deathIncrease;
                sanitizedData["hospital"] = response[i].hospitalizedCurrently;
                sanitizedData["time"] = response[i].checkTimeEt;

                covidDATA.push(sanitizedData);
                //console.log(sanitizedData);
                //console.log(covidDATA);
            }

            console.log(covidDATA[1]["positive"]);

            // writing a sort logic compare function to pick the topmost(highest) 5 states with most cases --SORT ON TOTAL NUMBER OF CASES
            function compare(a, b) {
                var comparison = 0;
                //here we can change the parameter that we want to sort by.. note..this is number sort
                var casesA = a.positive;
                var casesB = b.positive;

                //descending order sort so that if the first number is greater than the second, then want to keep highest first
                if (casesA > casesB) {
                    comparison = -1;
                } else if (casesA < casesB) {
                    comparison = 1;
                }
                return comparison;
            }

            //Here is where we call the sort function to sort our covidDATA array based on the total number of cases
            //higher number will be first - descending order sorting
            sortedCovidDATA = covidDATA.sort(compare);
            console.log(sortedCovidDATA);

            // creating a for loop to pick the top 5 states with the maximum count and displaying it in the front page



            //top state 1
            // $('.headerIndex0').append(sortedCovidDATA[0].state);

            for(var i = 0; i < 5; i++){

                $('.headerIndex' + i).append($('<h2>').text(sortedCovidDATA[i].state));
                $('.imgIndex'+ i).attr("src", statePicList[sortedCovidDATA[i].state]);
                $('.totalCasesIndex' + i).append($('<h4>').text(sortedCovidDATA[i].positive));
                $('.newCaseIndex'+ i).append($('<h4>').text(sortedCovidDATA[i].newcases));
                $('.totalDeathIndex' + i).append($('<h4>').text(sortedCovidDATA[i].death));
                $('.buttonindex'+ i).attr("state", (sortedCovidDATA[i].state));

            }

            // $('.imgIndex0').attr("src", statePicList[sortedCovidDATA[0].state]);
            // $('.headerIndex0').append($('<h2>').text(sortedCovidDATA[0].state));
            // // $('.totalCasesIndex0').append(sortedCovidDATA[0].positive);
            // $('.totalCasesIndex0').append($('<h4>').text(sortedCovidDATA[0].positive));
            // // $('.newCaseIndex0').append(sortedCovidDATA[0].newcases);
            // $('.newCaseIndex0').append($('<h4>').text(sortedCovidDATA[0].newcases));
            // $('.totalDeathIndex0').append($('<h4>').text(sortedCovidDATA[0].death));
            // $('.buttonindex0').attr("state", (sortedCovidDATA[0].state));

            // //top state 2
            // $('.imgIndex1').attr("src", statePicList[sortedCovidDATA[1].state]);
            // $('.headerIndex1').append($('<h2>').text(sortedCovidDATA[1].state));
            // $('.totalCasesIndex1').append($('<h4>').text(sortedCovidDATA[1].positive));
            // $('.newCaseIndex1').append($('<h4>').text(sortedCovidDATA[1].newcases));
            // $('.totalDeathIndex1').append($('<h4>').text(sortedCovidDATA[1].death));
            // $('.buttonindex1').attr("state", (sortedCovidDATA[1].state));


            // //top state 3
            // $('.imgIndex2').attr("src", statePicList[sortedCovidDATA[2].state]);
            // $('.headerIndex2').append($('<h2>').text(sortedCovidDATA[2].state));
            // $('.totalCasesIndex2').append($('<h4>').text(sortedCovidDATA[2].positive));
            // $('.newCaseIndex2').append($('<h4>').text(sortedCovidDATA[2].newcases));
            // $('.totalDeathIndex2').append($('<h4>').text(sortedCovidDATA[2].death));
            // $('.buttonindex2').attr("state", (sortedCovidDATA[2].state));


            // //top state 4
            // $('.imgIndex3').attr("src", statePicList[sortedCovidDATA[3].state]);
            // $('.headerIndex3').append($('<h2>').text(sortedCovidDATA[3].state));
            // $('.totalCasesIndex3').append($('<h4>').text(sortedCovidDATA[3].positive));
            // $('.newCaseIndex3').append($('<h4>').text(sortedCovidDATA[3].newcases));
            // $('.totalDeathIndex3').append($('<h4>').text(sortedCovidDATA[3].death));
            // $('.buttonindex3').attr("state", (sortedCovidDATA[3].state));


            // //top state 5
            // $('.imgIndex4').attr("src", statePicList[sortedCovidDATA[4].state]);
            // $('.headerIndex4').append($('<h2>').text(sortedCovidDATA[4].state));
            // $('.totalCasesIndex4').append($('<h4>').text(sortedCovidDATA[4].positive));
            // $('.newCaseIndex4').append($('<h4>').text(sortedCovidDATA[4].newcases));
            // $('.totalDeathIndex4').append($('<h4>').text(sortedCovidDATA[4].death));
            // $('.buttonindex4').attr("state", (sortedCovidDATA[4].state));

            //displaying the date for the data shown
            $('.date').append($('<h4>').text(sortedCovidDATA[0].date));
        })
    }

    topFIve();


    //Images from this site into the images folder- https://www.pngegg.com/en/search?q=us+state+icons&page=2

    console.log(covidDATA[6]);
    //Images from this site into the images folder- https://www.pngegg.com/en/search?q=us+state+icons&page=2

   // An object that stores the images for the 50 states and the State Acronym
    var statePicList = {
        "CA": "./images/CA.png",
        "FL": "./images/FL.png",
        "NY": "./images/NY.png",
        "NJ": "./images/NJ.png",
        "TX": "./images/TX.png",
        "AK": "./images/AK.png",
        "AL": "./images/AL.png",
        "AR": "./images/AR.png",
        "AZ": "./images/AZ.png",
        "CO": "./images/CO.png",
        "CT": "./images/CT.png",
        "DC": "./images/DC.png",
        "DE": "./images/DE.png",
        "GA": "./images/GA.png",
        "HI": "./images/HI.png",
        "IA": "./images/IA.png",
        "ID": "./images/ID.png",
        "IL": "./images/IL.png",
        "IN": "./images/IN.png",
        "KS": "./images/KS.png",
        "KY": "./images/KY.png",
        "LA": "./images/LA.png",
        "MA": "./images/MA.png",
        "MD": "./images/MD.png",
        "MN": "./images/MN.png",
        "MI": "./images/MI.png",
        "ME": "./images/ME.png",
        "MO": "./images/MO.png",
        "MS": "./images/MS.png",
        "MT": "./images/MT.png",
        "NC": "./images/NC.png",
        "ND": "./images/ND.png",
        "NE": "./images/NE.png",
        "NH": "./images/NH.png",
        "NM": "./images/NM.png",
        "NV": "./images/NV.png",
        "OH": "./images/OH.png",
        "OK": "./images/OK.png",
        "OR": "./images/OR.png",
        "PA": "./images/PA.png",
        "RI": "./images/RI.png",
        "SC": "./images/SC.png",
        "SD": "./images/SD.png",
        "TN": "./images/TN.png",
        "UT": "./images/UT.png",
        "VA": "./images/VA.png",
        "VT": "./images/VT.png",
        "WA": "./images/WA.png",
        "WI": "./images/WI.png",
        "WV": "./images/WV.png",
        "WY": "./images/WY.png",
    };
    console.log(statePicList.WY);

    // var count=0;
    // for (var property in statePicList){
    //     count++;
    // }
    // console.log(count);


    function selectedStateData(input){
        for(var i = 0; i < sortedCovidDATA.length; i++){
            if(sortedCovidDATA[i].state === input){
                console.log('reachedhere');
                // $('.searchedStats1').append($('<h4>').text(sortedCovidDATA[i].positive));
                // $('.searchedStats2').append($('<h4>').text(sortedCovidDATA[i].newcases));
                // $('.searchedStats3').append($('<h4>').text(sortedCovidDATA[i].death));
                // $('.searchedStats4').append($('<h4>').text(sortedCovidDATA[i].newdeaths));
                // $('.searchedStats5').append($('<h4>').text(sortedCovidDATA[i].hospital));
                // $('.searchedStats6').append($('<h4>').text(sortedCovidDATA[i].time));
                $('.searchedStats1').append($('<h4>').text('Total Cases: ' + (sortedCovidDATA[i].positive)));
                $('.searchedStats2').append($('<h4>').text('New Cases : ' + (sortedCovidDATA[i].newcases)));
                $('.searchedStats3').append($('<h4>').text('Total Death: ' + (sortedCovidDATA[i].death)));
                $('.searchedStats4').append($('<h4>').text('Increased Death: ' + (sortedCovidDATA[i].newdeaths)));
                $('.searchedStats5').append($('<h4>').text('Hospitalized Currently: ' + (sortedCovidDATA[i].hospital)));
                $('.searchedStats5').append($('<h4>').text('Last Update: ' + (sortedCovidDATA[i].time)));
            }
    }
}

//  This will clear the data of the previous state everytime a new state is clicked 
    function clearData(){
        $('.searchedStats1').empty();
        $('.searchedStats2').empty();
        $('.searchedStats3').empty();
        $('.searchedStats4').empty();
        $('.searchedStats5').empty();
        $('.searchedStats6').empty();

    }


    
    $("#worst-five-states").on("click", function (event) {
        var elementclicked = event.target;
        console.log(elementclicked);
        var stateClicked = $(elementclicked).attr("state");
        console.log(stateClicked);

        if (elementclicked.matches("button")) {
            $(".searched-state").show();
            $(".worst-five-states").hide();
            $('.state-searched').text(stateClicked);
            $('.imgIndex').attr("src", statePicList[stateClicked]);

            selectedStateData(stateClicked);

           
            
            // var stateE = $('#cityData').val();
           
        }
    })
            // $.ajax({
            //     url: 'https://covidtracking.com/api/v1/states/' + state + '/current.json',
            //     method: 'GET'
            // }).then(function (response) {


            //     console.log(response);

            //     // $('.imgIndex0').attr("src", statePicList[response.state]);
            //     // $('.headerIndex0').append($('<h2>').text(response.state));
            //     // $('.totalCasesIndex0').append(sortedCovidDATA[0].positive);
            //     $('#totalC').append($('<h4>').text(response.positive));
            //     // $('.newCaseIndex0').append(sortedCovidDATA[0].newcases);
            //     // $('.newCaseIndex0').append($('<h4>').text(response.newcases));
            //     // $('.totalDeathIndex0').append($('<h4>').text(response.death));
            //     // $('.buttonindex0').attr("state", (response.state));
            // });


        

    //code when we hit the see more button
    //see more button not working properly for second stage onwards
    //Here we he to pass in the state field and then display more stats
    // document.getElementById("uibutton").addEventListener("click",function(){
    //  $(".searched-state").show();
    //  $(".worst-five-states").hide();
    // });



    


   //code when we select a state from the dropdown
   //id - multi-state
   //todo- fill logic to either reuse the data stats from covidDATA or call the api again
  $("#multi-state").change(function(){
      event.preventDefault();
      var selectedState = $(this).find(':selected').val().toUpperCase();
       console.log(selectedState);
       $(".searched-state").show();
       $(".worst-five-states").hide();
       $('.imgIndex').attr("src", statePicList[selectedState]);

       clearData();
       selectedStateData(selectedState);
       

  });

});

