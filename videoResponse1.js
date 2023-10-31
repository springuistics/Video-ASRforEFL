//global variables for click counts
var ans1_clicks = 0;
var ans2_clicks = 0;
var ans3_clicks = 0;
var ans4_clicks = 0;
var ans5_clicks = 0;
var ans6_clicks = 0;


//Toggles Conversations
function Prep(id) {
    HideAnswers();
    let a = document.getElementById('container1').style.display;
    let b = document.getElementById('container2').style.display;
    if (a == "none" && b == "none") {
        document.getElementById(id).style.display = "block";
    } else if (a == "block" && b == "none" && id == 'container1') {
        document.getElementById(id).style.display = "none";
    } else if (a == "none" && b == "block" && id == 'container1') {
        document.getElementById(id).style.display = "block";
        document.getElementById('container2').style.display = "none";
    } else if (b == "block" && a == "none" && id == 'container2') {
        document.getElementById(id).style.display = "none";
    } else if (b == "none" && a == "block" && id == 'container2') {
        document.getElementById(id).style.display = "block";
        document.getElementById('container1').style.display = "none";
    } 
}

//Handles Speaking Event
var fname = '';
var inter = '';
function cqqspk(id) {
    fname = id + '_speech';
    inter = id + '_inter';
    if (document.getElementById(id).innerHTML == "Stop Speaking") {
        recognition.stop();
        document.getElementById(inter).style.display = "none";
        document.getElementById(inter).innerHTML = "";
        document.getElementById(id).innerHTML = "Start Speaking";
        document.getElementById(id).style.background="rgb(34, 139, 34)";
    } else {
        document.getElementById(inter).style.display = "block";
        document.getElementById(fname).innerHTML = "";
        document.getElementById(id).innerHTML = "Stop Speaking";
        document.getElementById(id).style.background="rgb(241, 16, 16)";
        if (id == 'c1q1') {ans1_clicks +=1;}
        else if (id == 'c1q2') {ans2_clicks +=1;}
        else if (id == 'c1q3') {ans3_clicks +=1;}
        else if (id == 'c2q1') {ans4_clicks +=1;}
        else if (id == 'c2q2') {ans5_clicks +=1;}
        else if (id == 'c2q3') {ans6_clicks +=1;}
        init();
        recognition.start();
    }
}

//Initializes ASR for speaking question and handles results.
function init() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.onresult = disp;
}
function disp(event) {
    var interim_transcript = '';
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; ++i) {
        if (results[i].isFinal) {
            document.getElementById(fname).innerHTML += results[i][0].transcript;
        } else {
            interim_transcript +=event.results[i][0].transcript;
            document.getElementById(inter).innerHTML = interim_transcript;
        }
    }
}

function SeeAnswers(n) {
    if (n ==1) {
        if (document.getElementById('c1q1_answer').style.display == "none") {
            document.getElementById('c1q1_answer').style.display = "block";
            document.getElementById('c1q2_answer').style.display = "block";
            document.getElementById('c1q3_answer').style.display = "block";
        } else if (document.getElementById('c1q1_answer').style.display == "block") {
            HideAnswers();
        }
    } else if (n ==2) {
        if (document.getElementById('c2q1_answer').style.display == "none") {
            document.getElementById('c2q1_answer').style.display = "block";
            document.getElementById('c2q2_answer').style.display = "block";
            document.getElementById('c2q3_answer').style.display = "block";
        } else if (document.getElementById('c2q1_answer').style.display == "block") {
            HideAnswers();
        }
    }
}

function HideAnswers() {
    document.getElementById('c1q1_answer').style.display = "none";
    document.getElementById('c1q2_answer').style.display = "none";
    document.getElementById('c1q3_answer').style.display = "none";
    document.getElementById('c2q1_answer').style.display = "none";
    document.getElementById('c2q2_answer').style.display = "none";
    document.getElementById('c2q3_answer').style.display = "none";
}
