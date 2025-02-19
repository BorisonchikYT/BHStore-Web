exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    // Здесь вы можете сохранить данные в базе данных или обработать их другим образом

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Данные сохранены!" }),
    };
};
