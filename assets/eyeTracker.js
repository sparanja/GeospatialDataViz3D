webgazer.setRegression('ridge')
    .setTracker('clmtrackr')
    .setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y; 
    console.log(xprediction); 
    console.log(yprediction); 
    console.log(elapsedTime); 

}).begin()
.showPredictionPoints(true);
