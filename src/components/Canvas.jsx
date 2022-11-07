import React, { useEffect } from 'react'


const Canvas = ({ playerPosition, togglePause }) => {

    let background = new Image();
    background.src = 'https://raw.githubusercontent.com/mmoresun/soccergame/gh-pages/img/soccer.png';

    useEffect(() => { // standart canvas settings

        let cvs = document.getElementById("myCanvas");
        let ctx = cvs.getContext("2d");

        let player = new Image();
        player.src = 'https://raw.githubusercontent.com/mmoresun/soccergame/gh-pages/img/running.png';

        // add background
        const draw = () => {

            ctx.drawImage(background, 0, 0);
        }

        draw();

        // create and visualise the player numbers
        const textDraw = () => {

            ctx.font = "14px serif";
            playerPosition.map(item => { // .map() goes thru every frame and creates players with fillText(ID, X, Y) and some coefficients
                return ctx.fillText(item[0], Math.floor(item[1] * 900), Math.floor(item[2] * 450));
            })
        }

        textDraw();

        // create and visualise the players
        const playerDraw = () => {

            playerPosition.map((item) => {
                return ctx.drawImage(player, Math.floor(item[1] * 900), Math.floor(item[2] * 450 + 5));
                // '+5' meand 'move the player down on 5 px'
            })
        }

        playerDraw();

    });

    return (
        <div>

            <canvas
                id='myCanvas'
                width={1000}
                height={500}
                style={{ border: '1px solid #ccc' }}
                onClick={togglePause} // you can pause the game by clicking on the football field
            />
        </div>
    )
}

export default Canvas