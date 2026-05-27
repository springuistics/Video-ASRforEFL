const suggestionsAll = ["Why not...?", "Have you...?", "Did you...?", "You should...", "You'd better...", "It'd be nice if...", "Why don't you...?", "You had better...", "It could be that...", "It might be that...", "It would be nice if...", "The best way to... is...", "If I were you, I would...", "You might want to...", "If you think about it...", "It would be better..."];
const requestsAll = ["Can you...?", "Could you...?", "Do you think you could...?", "Do you know...?", "I wonder if you...", "If it's not too much trouble...", "Do you mind...?", "Would you mind...?", "I was hoping that you could...", "It would be nice if...", "I would you like to...", "I hate to ask, but..."];
const refusalAll = ["If only I...", "I wish I could, but...", "I already...", "I'm not sure about that...", "I can't right now because...", "The thing is...", "I don't know...", "Don't worry about it, I..."];
const apologiesAll =  ["I'll admit, I should have...", "I apologize...", "That's my mistake...", "You see...", "I didn't realize that...", "I can... for you", "I will... for you", "You can see that...", "I didn't mean to...", "I know that...", "It won't happen again...", "If you want...", "I can't belive I was so inconsiderate", "... I was so stupid", "Sorry that I was so careless", "I didn't mean to", "If you want me to...", "I'll tell you what...(offer)"];
const nonapologiesAll =  ["What about you!?", "This is not on me", "This is not my fault", "I would never...", "You didn't take into consideration...", "Please consider the fact that...", "Woah! This was bound to happen because...", "You're one who/that..."];
const suggestionsLemmas = ["why not", "have you", "do you", "you shall", "you will good", "it will be", "why do not you", "you have better", "it can be", "it might be", "the good way to", "if i be you", "you might want to", "if you think about", "will be good"];
const requestsLemmas = ["can you", "do you think", "do you know", "i wonder if", "too much trouble", "do you mind", "will you mind", "i be hope", "will be nice if", "will you like to", "i hate to ask"];
const refusalsLemmas = ["if only", "i wish", "i already", "not sure", "i can not", "the thing is", "i do not know", "do not worry about it"];
const apologiesLemmas = ["i will admit", "i apologize", "my mistake", "you see", "not realize", "i can", "i will", "you can see", "i did not realize", "not mean to", "i know that", "will not happen again", "if you want", "i be so inconsiderate", "i be so stupid", "i be so careless", "i did not mean to", "you want me to", "i will tell you what"];
const nonapologiesLemmas = ["what about", "not on me", "not my fault", "i will never", "take into consideration", "the fact that", "bound to happen", "be the one who", "be the one that"];
const data = [
    {
      "type": "suggestion",
      "videolink": "Ut130QuC7h0",
      "stop0": 10.5,
      "start1": 28,
      "stop1": 32,
      "start2": 40,
      "stop2": 46,
      "fail": 52,
      "stopfail": 55
    },
    {
      "type": "suggestion",
      "videolink": "INcYauEg3PY",
      "stop0": 8.5,
      "start1": 28,
      "stop1": 33.5,
      "start2": 40,
      "stop2": 46.7,
      "fail": 52,
      "stopfail": 54.7
    },
    {
      "type": "request",
      "videolink": "A9_rlGf4v_E",
      "stop0": 5,
      "start1": 28,
      "stop1": 32.5,
      "start2": 40,
      "stop2": 42,
      "fail": 52,
      "stopfail": 55
    },
    {
      "type": "request",
      "videolink": "U3VcmcRkRBc",
      "stop0": 8,
      "start1": 28,
      "stop1": 30.6,
      "start2": null,
      "stop2": null,
      "fail": 40,
      "stopfail": 42
    },
    {
      "type": "refusal",
      "videolink": "qPg_YESQyhI",
      "stop0": 9.6,
      "start1": 28,
      "stop1": 33.2,
      "start2": 40,
      "stop2": 43.6,
      "fail": 52,
      "stopfail": 54
    },
    {
      "type": "refusal",
      "videolink": "POCQXl0ZREo",
      "stop0": 9.3,
      "start1": 28,
      "stop1": 32.6,
      "start2": 40,
      "stop2": 43.2,
      "fail": 52,
      "stopfail": 56
    },
    {
      "type": "apology",
      "videolink": "kGMewsxdoPU",
      "stop0": 5.1,
      "start1": 28,
      "stop1": 31.5,
      "start2": 40,
      "stop2": 42.6,
      "fail": 52,
      "stopfail": 53
    },
    {
      "type": "apology",
      "videolink": "Ut3dBkZ5aMM",
      "stop0": 3.8,
      "start1": 28,
      "stop1": 29.2,
      "start2": 40,
      "stop2": 43.4,
      "fail": 52,
      "stopfail": 56
    },
    {
      "type": "non-apology",
      "videolink": "u2-I2j-m5xI",
      "stop0": 8,
      "start1": 28,
      "stop1": 30.9,
      "start2": 40,
      "stop2": 42.3,
      "fail": 52,
      "stopfail": 54
    },
    {
      "type": "non-apology",
      "videolink": "07en3NI-Au0",
      "stop0": 8.2,
      "start1": 28,
      "stop1": 31.5,
      "start2": 40,
      "stop2": 42.7,
      "fail": 52,
      "stopfail": 54
    }
  ];

//User data
var suggestionCorrect = 0;
var refusalCorrect = 0;
var requestCorrect = 0;
var apologyCorrect = 0;
var nonapologyCorrect = 0;
var fkUps = 0;
var sequence = [];
var N = 0;
var TN = sequence[N];
var player;
var clicks = 0;
var sumCorrects = 0;
var timeKeep = 0;
var Interval;
function StartTimer(){
  clearInterval(Interval);
  Interval = setInterval(keepTimeforActivity, 1000);
  function keepTimeforActivity(){
    timeKeep += 1;
  }
}
function StopTimer(){
  clearInterval(Interval);
}

StartTimer();

function safeCalculation(a, b) {
  if (b == 0) {
    return a;
  } else {
    return a/b;
  }
}

function getSequence(){
    sequence = [];
    var remaining = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 11; i++) {
      let number = (Math.floor(Math.random() * remaining.length ));
      let the_index;
      for (let j = 0; j < remaining.length; j++) {
            if (number == remaining[j]) {
              the_index = j;
            }
        }
      if (the_index){
        sequence.push(remaining[the_index]);
        remaining.splice(the_index, 1); 
      }
    }
    //pushes rest of numbers in
    for (let i = (remaining.length-1); i > -1; i--) {
      sequence.push(remaining[i]);
      remaining.splice(i, 1);
    }
    N = 0;
    TN = sequence[N];
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var holder = document.getElementById('holder');
    holder.appendChild(tag);
}

function getnextvideo(start, stop, pass, advice) {
  let the_seconds = (stop-start) * 1000;
  document.getElementById('results').innerHTML = "";
  if (pass === false && fkUps >= 3){
    document.getElementById('feedbackBun').innerHTML = advice + ". Let's move on to the next video.";
    fkUps = 0;
    setTimeout(stopYouWin, the_seconds);
  } else if (pass === false && fkUps < 3){
    document.getElementById('feedbackBun').innerHTML = advice;
    fkUps += 1;
    setTimeout(stopYouRetry, the_seconds);
  }
    else {
    document.getElementById('feedbackBun').innerHTML = advice;
    fkUps = 0;
    setTimeout(stopYouWin, the_seconds);
  }
  player.seekTo(start, true);
  player.playVideo();
}

function stopYouRetry(){
  player.pauseVideo();
  document.getElementById('retryBTN').style.display = "inline";
  document.getElementById('nextBTN').style.display = "none";
}

function stopYouWin(){
  player.pauseVideo();
  document.getElementById('nextBTN').style.display = "inline";
  document.getElementById('retryBTN').style.display = "none";
}
      
function stopYou3(){
  document.getElementById('nextBTN').style.display = "none";
  document.getElementById('retryBTN').style.display = "none";
  document.getElementById('various_fb').style.display = "block";
  document.getElementById('shijiBun').innerHTML = "Make an <span class='w3-text-deep-orange' style='font-size: larger; font-weight: bold'>indirect " + data[TN].type + "</span> using the set phrases from <i> Pathways to Academic English, 4th Edition.</i>";
  document.getElementById('speakerBTN').style.display = "inline";
  player.pauseVideo();
}

function newvideo(){
  if (N < 9){
    N += 1;
    TN = sequence[N];
    fkUps = 0;
    player.loadVideoById({'videoId':data[TN].videolink, 'startSeconds': 0, 'endSeconds': data[TN].stop0});
    setTimeout(stopYou3,data[TN].stop0);
    player.seekTo(0, true);
    player.playVideo();
    document.getElementById('feedbackBun').innerHTML = "";
    document.getElementById('shijiBun').innerHTML = "";
    document.getElementById('various_fb').style.display = "none";
    document.getElementById('nextBTN').style.display = "none";
    document.getElementById('progress_bar').innerHTML = "Practice Video: " + (N+1) + " / 10";
  } else {
    FinishAll();  
  }
}

//Creates an <iframe> (and YouTube player) after the API code downloads.
var first_video = true;
function onYouTubeIframeAPIReady() {
    //the first variable in the function (i.e., 'players') is the id of the element that will be replaced by the player
    player = new YT.Player('players', {
    height: '360',
    width: '640',
    videoId: data[TN].videolink,
    //Autoplay : 1 is yes, autoplay, controls:0 is to disallow controls
    playerVars: {'autoplay':1, 'controls':1},
    //This sets up callable events for later, notice how they are called below.
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
    });
}

// Calls this function that sets up the video player when ready.
function onPlayerReady(event) {
  event.target.playVideo();
  //This seekTo function sets the start time, the boolean allows it.
  player.seekTo(0, true);
}
    
// Test code that currently calls the function 'stopVideo' after 3.2 seconds. This can be anything later.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    if (first_video == true){
      let stopHelper = data[TN].stop0 * 1000;
      setTimeout(stopVideo, stopHelper);
      first_video = false;
    }
  }
}
function stopVideo() {
    document.getElementById('various_fb').style.display = "block";
    document.getElementById('shijiBun').innerHTML = "Make an <span class='w3-text-deep-orange' style='font-size: larger; font-weight: bold'>indirect " + data[TN].type + "</span> using the set phrases from <i> Pathways to Academic English, 4th Edition</i>";
    document.getElementById('speakerBTN').style.display = "inline";
    player.pauseVideo();
}

      

function speakNow(){
    clicks += 1;
    document.getElementById('speakerBTN').style.display = "none";
    document.getElementById('retryBTN').style.display = "none";
    StartASR();
    recognition.start();
    document.getElementById('results').innerHTML = "<span>wait...</span> <img style='max-height:200px' src='../../pictures/Spinning.gif'></img>"; 
    setTimeout(toppeiChange, 700);
    function toppeiChange(){
      document.getElementById('results').innerHTML = "<span>listening...</span>"; 
    }
}

function StartASR(){
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      if (!recognition){
        recognition = new webkitSpeechRecognition();
      } 
      recognition.continuous = true;
      recognition.lang = 'en-US';
      recognition.interimResults = true;
      recognition.onresult = disp;
  }
      
      function disp(event) {
          var results = event.results;
            for (var i = event.resultIndex; i < results.length; ++i) {
                if (results[i].isFinal) {
                    let temp_results = results[i][0].transcript;
                    document.getElementById('results').innerHTML = "processing... <img style='max-height:200px' src='../../pictures/Spinning.gif'></img>";
                    stopASR(temp_results);
                } 
            }
      }      

function stopASR(results){
        recognition.stop();
        let wordSalad = Lemmatize(results);
        let type = data[TN].type;
        if (wordSalad.length == 0){
          document.getElementById('feedbackBun').innerHTML = "It seems that the computer cannot hear your voice. Please check that your ASR is working. You can try visiting the troubleshooting page by <a target='_blank' href='https://pathwaystoacademicenglish.com/help.php'>clicking here</a>.";
        } else if (type === "suggestion"){
            let success = false;
            let okayish = CheckForKeywordsAndPhrasesPreprocessed(wordSalad, suggestionsLemmas);
            if (okayish.count > 0){
              success = true;
            }
            if (success == true && TN == 0){
              if (wordSalad.includes("green")){
                getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
                suggestionCorrect += safeCalculation(1, fkUps);
                sumCorrects +=1;
              } else if (wordSalad.includes("orange")){
                getnextvideo(data[TN].start2, data[TN].stop2, true, "Good job");
                suggestionCorrect += safeCalculation(1, fkUps);
                sumCorrects +=1;
              } else {
                getnextvideo(data[TN].fail, data[TN].stopfail, false, "Good job of using an indirect suggestion, but please indicate whether he should use the GREEN or ORANGE book");
              }
            } else if (success == true && TN == 1){
              if (wordSalad.includes("biology")){
                getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
                suggestionCorrect += safeCalculation(1, fkUps);
                sumCorrects +=1;
              } else if (wordSalad.includes("chemistry")){
                getnextvideo(data[TN].start2, data[TN].stop2, true, "Good job");
                suggestionCorrect += safeCalculation(1, fkUps);
                sumCorrects +=1;
              } else {
                getnextvideo(data[TN].fail, data[TN].stopfail, false, "Good job of using an indirect suggestion, but please indicate whether he should take the BIOLOGY or CHEMISTRY class");
              }
            } else {
              let thisRN = Math.floor(Math.random() * suggestionsAll.length);
              let tempAdvice = "Please use one of the indirect suggestion patterns from Table 3, such as: <b>"+suggestionsAll[thisRN]+"</b>";
              getnextvideo(data[TN].fail, data[TN].stopfail, false, tempAdvice);
            }
        } else if (type === "request"){
            let success = false;
            let okayish = CheckForKeywordsAndPhrasesPreprocessed(wordSalad, requestsLemmas);
            if (okayish.count > 0){
              success = true;
            }
            if (success == true) {
              getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
              requestCorrect += safeCalculation(1, fkUps);
              sumCorrects +=1;
            } else if (success == false) {
              let thisRN = Math.floor(Math.random() * requestsAll.length);
              let tempAdvice = "Please use one of the indirect request patterns from Table 4, such as: <b>"+requestsAll[thisRN]+"</b>";
              getnextvideo(data[TN].fail, data[TN].stopfail, false, tempAdvice);
            }
        } else if (type === "refusal"){
            let success = false;
            let okayish = CheckForKeywordsAndPhrasesPreprocessed(wordSalad, refusalsLemmas);
            if (okayish.count > 0){
              success = true;
            }
            if (success == true) {
              getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
              refusalCorrect += safeCalculation(1, fkUps);
              sumCorrects +=1;
            } else if (success == false && wordSalad.includes("okay")) {
              getnextvideo(data[TN].start2, data[TN].stop2, false , "Did you refuse? It sounded more like an acceptance. Don't accept or say 'okay'.");
            } else {
              let thisRN = Math.floor(Math.random() * refusalAll.length);
              let tempAdvice = "Please use one of the indirect refusal patterns from Table 5, such as: <b>"+refusalAll[thisRN]+"</b>";
              getnextvideo(data[TN].fail, data[TN].stopfail, false, tempAdvice);
            }
        } else if (type === "apology") {
            let success = false;
            let okayish = CheckForKeywordsAndPhrasesPreprocessed(wordSalad, apologiesLemmas);
            if (okayish.count > 0){
              success = true;
            }
            if (wordSalad.includes("sorry") && success == true){
              getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
              apologyCorrect += safeCalculation(1, fkUps);
              sumCorrects +=1;
            } else if (!wordSalad.includes("sorry") && success == true){
              getnextvideo(data[TN].start2, data[TN].stop2, false, "Be sure to use the word 'sorry' as well as one of the indirect apology patterns from Table 6");
            } else {
              let thisRN = Math.floor(Math.random() * apologiesAll.length);
              let tempAdvice = "Please use the word 'sorry' and one of the indirect apology patterns from Table 6, such as: <b>"+apologiesAll[thisRN]+"</b>";
              getnextvideo(data[TN].fail, data[TN].stopfail, false, tempAdvice);
            }
        } else if (type === "non-apology") {
          let success = false;
          let okayish = CheckForKeywordsAndPhrasesPreprocessed(wordSalad, nonapologiesLemmas);
          if (okayish.count > 0){
            success = true;
          }
          if (wordSalad.includes("sorry") && success == true){
            getnextvideo(data[TN].start1, data[TN].stop1, true, "Good job");
            nonapologyCorrect += safeCalculation(1, fkUps);
            sumCorrects +=1;
          } else if (!wordSalad.includes("sorry") && success == true){
            getnextvideo(data[TN].start2, data[TN].stop2, false, "Be sure to use the word 'sorry' as well as one of the indirect non-apology patterns from Table 7");
          } else {
            let thisRN = Math.floor(Math.random() * nonapologiesAll.length);
            let tempAdvice = "Please use the word 'sorry' and one of the indirect non-apology patterns from Table 7, such as: <b>"+nonapologiesAll[thisRN]+"</b>";
            getnextvideo(data[TN].fail, data[TN].stopfail, false, tempAdvice);
          }
      }
        
}

function FinishAll() {
  document.getElementById('mainStuff').style.display = "none";
  document.getElementById('fullResults').style.display = "block";
  //the secret sauce
  StopTimer();
}
  function drawChart() {
  var userName;
  var temp_userName = document.getElementById('nameInput').value;
  if (temp_userName == "") {
    userName = 'Your Data';
  } else {
    userName = temp_userName + "'s Data"
  }
  document.getElementById('nameStuff').style.display = "none";
  document.getElementById('nextResults').style.display = "block";
  //creates radar chart
  var labels = ["Suggestions", "Refusals", "Requests", "Non-apologies", "Apologies"];
  var data = {
    labels: labels,
    datasets: [
        {
            label: userName,
            data: [suggestionCorrect, refusalCorrect, requestCorrect, nonapologyCorrect, apologyCorrect],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
      ]
  }
  var options = { scale: {
    ticks: {
    beginAtZero: true,
    max: 2,
    min: 0,
    stepSize: 0.5, 
    font: {size: 16}
  }
  }, scales: {
    r: {
        pointLabels: {
            font: {size: 20}
        }
    }
  } 
  }

  new Chart("myRadar", {type:'radar', data: data, options: options})
  }

//alows download of radar chart
function downloadImage() {
  let destinationCanvas  = document.createElement("canvas");
  let canvas = document.getElementById('myRadar');
  destinationCanvas.width = canvas.width;
  destinationCanvas.height = canvas.height;
  let destCtx = destinationCanvas .getContext('2d');
  destCtx.fillStyle="#FFFFFF";
  destCtx.fillRect(0,0,canvas.width,canvas.height);
  destCtx.drawImage(canvas,0,0);
  var a = document.createElement('a');
  a.href= destinationCanvas.toDataURL("image/png");
  a.download = 'myRadarChart.jpeg';
  a.click();
}

//listener event for download button
let download = document.getElementById('downloadBtn');
download.addEventListener('click', downloadImage);

