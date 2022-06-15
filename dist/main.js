"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const port = 9000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'https://gdn-hero.herokuapp.com',
            'http://localhost:3001',
            'http://localhost:2022',
        ],
    });
    const config = new swagger_1.DocumentBuilder()
        .setDescription('server for Gadlin project ')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT || port, () => console.log('server connected at port: ' + port));
}
bootstrap();
//# sourceMappingURL=main.js.map