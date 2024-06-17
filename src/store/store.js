import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        game: { id: 1, title: 'Valorant' },
        infoCollection: {}
    }),
    actions: {
        updateGame(newGame) {
            this.game = newGame;
        },
        addInfo(id, info) {
            this.infoCollection[id] = info;
        },
        updateInfo(id, newInfo) {
            if (this.infoCollection[id]) {
                this.infoCollection[id] = { ...this.infoCollection[id], ...newInfo };
            }
        }
    },
    getters: {
        infoCollection: (state) => state.game
    }
});
