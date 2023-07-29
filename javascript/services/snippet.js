const mp = new MercadoPago('APP_USR-1ebc106f-f6ff-47f0-97d4-1896349ddfc7', {
    locale: 'es-AR'
});
const bricksBuilder = mp.bricks();

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const total = carrito.reduce((acc, product) => acc + (product.edad * product.cantidad), 10)

const renderCardPaymentBrick = async (bricksBuilder) => {
    const settings = {
        initialization: {
            amount: total, // monto a ser pago
            payer: {
                email: "",
            },
        },
        customization: {
            visual: {
                style: {
                    theme: 'bootstrap', // | 'dark' | 'bootstrap' | 'flat'
                }
            },
            paymentMethods: {
                maxInstallments: 1,
            }
        },
        callbacks: {
            onReady: () => {
                // callback llamado cuando Brick esté listo
            },
            onSubmit: (cardFormData) => {
                //  callback llamado cuando el usuario haga clic en el botón enviar los datos
                //  ejemplo de envío de los datos recolectados por el Brick a su servidor
                return new Promise((resolve, reject) => {
                    fetch("/process_payment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(cardFormData)
                    })
                        .then((response) => {
                            // recibir el resultado del pago
                            resolve();
                        })
                        .catch((error) => {
                            // tratar respuesta de error al intentar crear el pago
                            reject();
                        })
                });
            },
            onError: (error) => {
                // callback llamado para todos los casos de error de Brick
            },
        },
    };
    window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);
