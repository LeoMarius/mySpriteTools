var Banana = {

    name: "Banana",

    width_i: 852, ///Taille du personnage
    height_i: 942,

    scale: 1,

    scale: 0.5, ///Mise à l'échelle

    posX: 50,
    posY: 100,

    state: "iddle",
    previousState: "iddle",
    stateList: ["iddle","wave","wave2"],

    partToDisplay: ["armL", "body", "legs", "armR", "face"],

    parts: {

        armL: {
            name: "armL",
            src: "images/arm_L_sprite3.png",

            width: 1750, ///Taille de l'image
            height: 500,
            scale: 1.3,

            posX_i: 128,
            posY_i: 202,

            posX: 128,
            posY: 202,

            breath: true,

            sprite: {

                currentFrame: 1,
                nextFrame: undefined,

                fwidth: 250, ///Taille de la frame
                fheight: 250,


                numberOfFrames: 14,
                imagesPerLine: 7,

                tickCount: 0,
                ticksPerFrame: 2, ///Rafraichissement toutes les X frames

            },
        },
        arm_straight_L: {
            name: "armS",
            src: "images/banana_arm_straight.png",

            width: 250, ///Taille de l'image
            height: 250,
            scale: 1.3,

            posX_i: 128,
            posY_i: 202,

            posX: 128,
            posY: 202,

            breath: true,

        },
        arm_straight_R: {
            name: "armS",
            src: "images/banana_arm_straight.png",

            width: 250, ///Taille de l'image
            height: 250,
            scale: 1.3,

            posX_i: 460,
            posY_i: 205,

            posX: 460,
            posY: 205,

            breath: true,

        },
        body: {
            name: "body",
            src: "images/banana_body.png",
            width: 852,
            height: 942,
            scale: 1,

            posX_i: 0,
            posY_i: 0,

            posX: 0,
            posY: 0,

            breath: false,
        },
        legs: {
            name: "legs",
            src: "images/banana_legs.png",
            width: 852,
            height: 942,
            scale: 1,

            posX_i: 0,
            posY_i: 0,

            posX: 0,
            posY: 0,

            breath: false,
        },
        armR: {
            name: "armR",
            src: "images/arm_R_sprite3.png",

            width: 951, ///Taille de l'image
            height: 317,
            scale: 1.3,

            posX_i: 460,
            posY_i: 205,

            posX: 460,
            posY: 205,

            breath: true,
            sprite: {
                currentFrame: 1,
                nextFrame: undefined,

                fwidth: 250, ///Taille de la frame
                fheight: 250,


                numberOfFrames: 14,
                imagesPerLine: 7,

                tickCount: 0,
                ticksPerFrame: 2, ///Rafraichissement toutes les X frames

            },
        },
        face: {
            name: "face",
            src: "images/banana_face.png",
            width: 852,
            height: 942,
            scale: 1,

            posX_i: 0,
            posY_i: 0,

            posX: 0,
            posY: 0,

            breath: true,
        },

    },




    breath: {

        breathing: true,

        breathAmt: 0, ///Respiration en ce moment

        breathInc: 0.4,
        breathDir: 1,
        breathMax: 5,

        update: function (chara) {
            if (chara.breath.breathDir === 1) { // breath in
                chara.breath.breathAmt -= chara.breath.breathInc;
                if (chara.breath.breathAmt < -chara.breath.breathMax) {
                    chara.breath.breathDir = -1;
                }
            } else { // breath out
                chara.breath.breathAmt += chara.breath.breathInc;
                if (chara.breath.breathAmt > chara.breath.breathMax) {
                    chara.breath.breathDir = 1;
                }
            }
        }
    },



    iddle: {
        init: function (chara) {

            /*      for (var i = 0; i < chara.parts.length; i++) {
                      var part = chara.parts[i];
                      part.posX = part.posX_i;
                      part.posY = part.posY_i;

                      if (part.breath == true) {
                          part.posY = part.posY + chara.breath.breathAmt
                      }
                  }*/

        },
        partUsed: ["armL", "body", "legs", "armR", "face"],




    },

    anims: {
        current: "none",

        iddle: {
            

            init: function (target) {

             target.partToDisplay = ["arm_straight_L", "body", "legs", "arm_straight_R", "face"];
                target.previousState = "iddle";
           


            },
            
            run : function(target){
                if (target.previousState != "iddle") {
                    target.anims.iddle.init(target);
                    return;
                }
                
            },





        },


        none: function (target) {
            /*
                        //  console.log(target);
                        target.partToDisplay[0].sprite.currentFrame = 0;
                        target.partToDisplay[3].sprite.currentFrame = 0;*/
        },
        wave: {

            init: function (target, armLini, armRini) {

                target.partToDisplay = ["armL", "body", "legs", "armR", "face"];
                target.previousState = "wave";
                target.parts["armL"].sprite.currentFrame = armLini;
                target.parts["armR"].sprite.currentFrame = armRini;

                console.log("init Wave : " + target.parts["armL", "armR"].sprite.currentFrame)
            },

            run: function (target) {
                if (target.previousState != "wave") {
                    target.anims.wave.init(target, 0, 7);
                    return;
                }

                var part = target.parts["armL"];

                part.sprite.tickCount += 1;
                if (part.sprite.tickCount >= part.sprite.ticksPerFrame) {
                    part.sprite.tickCount = 0;
                    part.sprite.currentFrame += 1;
                    if (part.sprite.currentFrame >= part.sprite.numberOfFrames) {
                        part.sprite.currentFrame = 0;
                    }
                }

                part = target.parts["armR"];

                part.sprite.tickCount += 1;
                if (part.sprite.tickCount >= part.sprite.ticksPerFrame) {
                    part.sprite.tickCount = 0;
                    part.sprite.currentFrame += 1;
                    if (part.sprite.currentFrame >= part.sprite.numberOfFrames) {
                        part.sprite.currentFrame = 0;
                    }
                }
            }
        },
        wave2 : {
            
            init: function (target, armLini, armRini) {

                target.partToDisplay = ["armL", "body", "legs", "armR", "face"];
                target.previousState = "wave2";
                target.parts["armL"].sprite.currentFrame = armLini;
                target.parts["armR"].sprite.currentFrame = armRini;

            },
             run: function (target) {
                if (target.previousState != "wave2") {
                    target.anims.wave2.init(target, 0, 0);
                    return;
                }

                var part = target.parts["armL"];

                part.sprite.tickCount += 1;
                if (part.sprite.tickCount >= part.sprite.ticksPerFrame) {
                    part.sprite.tickCount = 0;
                    part.sprite.currentFrame += 1;
                    if (part.sprite.currentFrame >= part.sprite.numberOfFrames) {
                        part.sprite.currentFrame = 0;
                    }
                }

                part = target.parts["armR"];

                part.sprite.tickCount += 1;
                if (part.sprite.tickCount >= part.sprite.ticksPerFrame) {
                    part.sprite.tickCount = 0;
                    part.sprite.currentFrame += 1;
                    if (part.sprite.currentFrame >= part.sprite.numberOfFrames) {
                        part.sprite.currentFrame = 0;
                    }
                }
             }

            
        },

    },



    redraw: function () {


        if (this.breath.breathing) {
            this.breath.update(this);
        }


        this.iddle.init(this);

       // console.log(this.state)
        

        if (this.state == "iddle") {
            this.anims.iddle.run(this);
        } else if (this.state == "wave") {
            this.anims.wave.run(this);
        }else if (this.state == "wave2") {
            this.anims.wave2.run(this);
        }



        for (var i = 0; i < this.partToDisplay.length; i++) {

            var part = this.parts[this.partToDisplay[i]]; //Va chercher les pièces à afficher et pointe vers elles

            //Si les images existent pas, ont les importent
            if (images[part.name] == undefined) {
                images[part.name] = new Image();
                images[part.name].src = part.src;
            }


            //Si c'est un sprite, ont fait les maths
            if (part.sprite != undefined) {

                var targetSpriteY = 0,
                    targetSpriteX = 0;

                Math.floor(part.sprite.currentFrame)

                if (part.sprite.currentFrame >= part.sprite.imagesPerLine) {
                    targetSpriteY = Math.floor(part.sprite.currentFrame / part.sprite.imagesPerLine);
                    // targetSpriteY += 1;
                }

                targetSpriteX = part.sprite.currentFrame - (targetSpriteY * part.sprite.imagesPerLine);

                if (i == 0) {
                    //             console.log(targetSpriteY + " : " + targetSpriteX);
                }

                context.drawImage(
                    images[part.name],
                    targetSpriteX * part.sprite.fwidth,
                    targetSpriteY * part.sprite.fheight,
                    part.sprite.fwidth,
                    part.sprite.fheight,
                    this.posX + part.posX * this.scale,
                    this.posY + part.posY * this.scale,
                    part.sprite.fwidth * this.scale * part.scale,
                    part.sprite.fheight * this.scale * part.scale,
                );

                //Sinon on charge juste
            } else {

                context.drawImage(
                    images[part.name],
                    0,
                    0,
                    part.width,
                    part.height,
                    this.posX + part.posX * this.scale,
                    this.posY + part.posY * this.scale,
                    part.width * this.scale* part.scale,
                    part.height * this.scale* part.scale,
                )
            };

        }

    }
};