
const promptQRCode = [
    {
        name: "link",
        descriptions: ("Digite o link para gerar o QR CODE"),
    }, 
    {
        name: "type",
        descriptions: ("Escolha entre o tipo de QRcode (1 - Normal ou (2 - TERMINAL"),
        pattern: /^[1-2]+$/,
        message: ("Escolha apenas entre 1 e 2"),
        require: true
    },
];

export default promptQRCode;