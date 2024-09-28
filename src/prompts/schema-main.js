
const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolhas apenas entre 1 e 2",
        require: true, 
    },
];

export default mainPrompt;