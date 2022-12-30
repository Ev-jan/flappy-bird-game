class Config {
    gravity = 26*2.5*3
    GAME_SPEED = 20
    DEGREE = Math.PI / 180

    canvas = {
        canvasId: 'game',
        width: 480,
        height: 320
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: 'assets/spriteSheet.png',
    }

    background = {
        x: 0,
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,

        frames: [
            {
                x: 0,
                y: 0,
                w: 275,
                h: 228,
            }
        ]
    }

    foreground = {
        x: 0,
        y: 290,
        width: this.canvas.width,
        height: 110,
        frames: [
            {
                x: 276,
                y: 3,
                w: 222,
                h: 110,
            }
        ]
    }

    pipes = {
        x: this.canvas.width,
        y: 0,
        widthFactor: 2,
        height: 400,
        gapFactor: 5,
        frames: [
            {
                x: 502,
                y: 1,
                w: 52,
                h: 400,
            },
            {
                x: 553,
                y: 1,
                w: 52,
                h: 400,
            }
        ]
    }

    bird = {
        x: 55,
        y: 150,
        width: 34,
        height: 26,
        flapSpeed: 26*2.5,
        frames: [
            {
                x: 276,
                y: 114,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 140,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 166,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 140,
                w: 34,
                h: 26,
            }
        ]
    }

    startMessage = {
        x: this.canvas.width / 2 - 174 / 2,
        y: this.canvas.height / 2 - 45 / 0.5,
        width: 174,
        height: 153,
        frames: [
            {
                x: 0,
                y: 228,
                w: 174,
                h: 153,
            }
        ],
    }

    gameOverMessage = {
        x: this.canvas.width / 2 - 189 / 2,
        y: this.canvas.height / 2 - 39 / 0.5,
        width: 189,
        height: 39,
        frames: [
            {
                x: 193,
                y: 228,
                w: 189,
                h: 39,
            }
        ],
    }
}