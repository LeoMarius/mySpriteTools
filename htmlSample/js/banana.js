var Banana = {

    name: "Banana",

    width_i: 852, ///Taille du personnage
    height_i: 942,

    scale: 0.5, ///Mise à l'échelle

    posX: 50, ///position in the caneva
    posY: 100,

    state: ["iddle"], ///Curent animation state
    previousState: ["iddle"], ///previous animation state

    stateList: ["iddle", "wave", "wave2"], ///all the animation state listed

    partToDisplay: ["armL", "body", "legs", "armR", "face"], ///Part to display on the run loop


    /// All the parts of the character
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

    /// All the animations cycles
    anims: {

        iddle: {


            init: function (target) {

                target.partToDisplay = ["arm_straight_L", "body", "legs", "arm_straight_R", "face"];
                target.previousState = "iddle";



            },

            run: function (target) {
                if (target.previousState != "iddle") {
                    target.anims.iddle.init(target);
                    return;
                }

            },





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

        wave2: {

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

        breath: {

            breathing: true,

            breathAmt: 0, ///Respiration en ce moment

            breathInc: 0.4,
            breathDir: 1,
            breathMax: 5,

            update: function (chara) {
                var brth = chara.anims.breath;
                if (brth.breathDir === 1) { // breath in
                    brth.breathAmt -= brth.breathInc;
                    if (brth.breathAmt < -brth.breathMax) {
                        brth.breathDir = -1;
                    }
                } else { // breath out
                    brth.breathAmt += brth.breathInc;
                    if (brth.breathAmt > brth.breathMax) {
                        brth.breathDir = 1;
                    }
                }
            }
        },

    },



    redraw: function () {


        //To be improved
        /*
        if (this.anims.breath.breathing) {
            this.anims.breath.update(this);
        }
        */


        /// Scan all the animation running and run updates
        for (var i = 0; i < this.state.length; i++) {
            var state = this.state[i],
                animTarget = this.anims[state];
            animTarget.run(this);
        }


        for (var i = 0; i < this.partToDisplay.length; i++) {

            var part = this.parts[this.partToDisplay[i]]; //Va chercher les pièces à afficher et pointe vers elles

            //If images are not loaded yet
            if (images[part.name] == undefined) {
                images[part.name] = new Image();
                images[part.name].src = part.src;
            }


            //If image is a sprite, we do the maths
            if (part.sprite != undefined) {

                var targetSpriteY = 0,
                    targetSpriteX = 0;

                Math.floor(part.sprite.currentFrame)

                if (part.sprite.currentFrame >= part.sprite.imagesPerLine) {
                    targetSpriteY = Math.floor(part.sprite.currentFrame / part.sprite.imagesPerLine);

                }

                targetSpriteX = part.sprite.currentFrame - (targetSpriteY * part.sprite.imagesPerLine);


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
                    part.width * this.scale * part.scale,
                    part.height * this.scale * part.scale,
                )
            };

        }

    }
};