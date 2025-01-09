const keymaps = [
  {
    model: "991ex",
    keymap: {
      "A": {
        description: "Memory A",
        keymap: ["Q", "z"]
      },
      "B": {
        description: "Memory B",
        keymap: ["Q", "x"]
      },
      "C": {
        description: "Memory C",
        keymap: ["Q", "u"]
      },
      "D": {
        description: "Memory D",
        keymap: ["Q", "j"]
      },
      "E": {
        description: "Memory E",
        keymap: ["Q", "k"]
      },
      "F": {
        description: "Memory F",
        keymap: ["Q", "l"]
      },
      "G": {
        description: "Gravitational constant",
        keymap: ["q", "7", "1", "7"]
      },
      "M": {
        description: "Memory M",
        keymap: ["Q", "m"]
      },
      "P": {
        description: "Pico engineering symbol",
        keymap: ["T", "3", "z"]
      },
      "R": {
        description: "Molar gas constant",
        keymap: ["q", "7", "4", "6"]
      },
      "T": {
        description: "Tera engineering symbol",
        keymap: ["T", "3", "9"]
      }
    }
  }
];
function load({ params }) {
  const keymap = keymaps.find((keymap2) => keymap2.model === params.slug);
  return {
    keymap
  };
}
export {
  load
};
