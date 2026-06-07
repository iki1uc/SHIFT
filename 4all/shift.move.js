
// SHIFT MOVE – Subsystem Aktivator
export const ShiftMove = {
    state: "EVO",   // neuer Standard
    alt: "REV",     // alter Zustand

    activate() {
        console.log("SHIFT aktiviert:", this.state);
        return this.state;
    },

    getAlt() {
        console.log("SHIFT ALT:", this.alt);
        return this.alt;
    }
};
