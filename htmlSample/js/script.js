// Copyright 2011 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var canvas;
var context;
var images = {};


var fps = 30;





var fpsInterval = setInterval(updateFPS, 1000);

var numFramesDrawn = 0;
var curFPS = 0;

var charaList = [];









function updateFPS() {

    curFPS = numFramesDrawn;
    numFramesDrawn = 0;
}



function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
    // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");


    loadCharacter(Banana);


}



function loadCharacter(character) {



    charaList.push(character);
    console.log(charaList);

    setInterval(redraw, 1000 / fps);

}




function redraw() {

    canvas.width = canvas.width; // clears the canvas 

    // on recharge tous les les personnages
    for (var i = 0; i < charaList.length; i++) {
        charaList[i].redraw();
    }


    // on affiche le débug fps
    context.font = "bold 12px sans-serif";
    context.fillText("fps: " + curFPS + "/" + fps + " (" + numFramesDrawn + ")", 30, 30);
    ++numFramesDrawn;
}


function toogleAnims() {

    for (var i = 0; i < Banana.stateList.length; i++) {
        
        if (Banana.stateList[i] == Banana.state) {
            Banana.previousState = Banana.state;

            if (i == ((Banana.stateList.length)-1)) {
                Banana.state = Banana.stateList[0];
            } else {
                Banana.state = Banana.stateList[i + 1];
            }
            console.log("New Banana state : "+Banana.state);
            break;
        }
    }
  }