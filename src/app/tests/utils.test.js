import { PLAYER_O, PLAYER_X } from "../constants";
import { switchPlayer } from '../utils';

describe('utils test', () => {
    it('switchPlayer test', () => {
        const player1 = PLAYER_X;
        const expected1 = PLAYER_O;
        expect(switchPlayer(player1)).toEqual(expected1);

        const player2 = PLAYER_O;
        const expected2 = PLAYER_X;
        expect(switchPlayer(player2)).toEqual(expected2);
    })
})