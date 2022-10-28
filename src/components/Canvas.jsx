import React, { useEffect } from 'react'

const Canvas = ({ playerPosition, togglePause }) => {

    useEffect(() => { // standart canvas settings

        let cvs = document.getElementById("myCanvas");
        let ctx = cvs.getContext("2d");
        let background = new Image();
        background.src = '.././img/soccer.png';

        // adding background
        const draw = () => { 

            ctx.drawImage(background, 0, 0)
        }

        draw();

        // create 'players'
        function textDraw() {

            ctx.font = "16px serif";
            playerPosition.map(item => { // .map() goes thru every frame and creates players with fillText(ID, X, Y) and some coefficients
                return ctx.fillText(item[0], item[1] * 900, item[2] * 450)
            })
        }

        textDraw(); // visualise players

        // for (let i = 0; i < imgData.data.length; i += 4) {
        //     imgData.data[i + 0] = 255;
        //     imgData.data[i + 1] = 0;
        //     imgData.data[i + 2] = 0;
        //     imgData.data[i + 3] = 255;
        // }

        // ctx.putImageData(imgData, playerPosition[0][1] * 1000, playerPosition[0][2] * 500);

    }, [playerPosition]); // re-render when players positions changes

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