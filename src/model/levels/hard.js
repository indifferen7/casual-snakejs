import grid from '../grid';
import directions from '../directions';
import {hLine, vLine} from '../common';

const hard = () => {
    const fps = 11,
        size = 50,
        theGrid = grid(size, size),
        pool = vLine(23)(22, 6)
            .concat(vLine(24)(22, 6))
            .concat(vLine(25)(22, 6))
            .concat(vLine(26)(22, 6))
            .concat(vLine(27)(22, 6))
            .concat(vLine(28)(22, 6)),
        walls = hLine(0)(0, 20)
            .concat(hLine(0)(30, 20))
            .concat(hLine(49)(0, 20))
            .concat(hLine(49)(30, 20))
            .concat(vLine(0)(1, 19))
            .concat(vLine(0)(30, 19))
            .concat(vLine(49)(1, 19))
            .concat(vLine(49)(30, 19));

    return {
        name: 'hard',
        fps: fps,
        size: size,
        grid: theGrid,
        snakeArgs: {
            start: [20,20],
            next: theGrid.next,
            opts: {
                direction: directions.any(),
                size: 2
            }
        },
        walls: walls,
        pool: pool,
        increaseSpeedBy: 2
    };
};

export default hard;