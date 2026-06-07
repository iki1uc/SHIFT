// X4 SHINE MOVE – EVO = neuer Standard, REV = alter Look
export const X4ShineMove = {
    EVO: {
        effect: "pulse-glow",
        brightness: 1.8
    },

    REV: {
        effect: "classic-soft",
        brightness: 1.0
    },

    get(active) {
        return this[active] || this.EVO;
    }
};

