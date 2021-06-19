"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const { Translate } = require('@google-cloud/translate').v2;
console.log(process.env.CREDENTIAL);
const credentials_ = {
    type: 'service_account',
    project_id: 'analog-sum-449',
    private_key_id: 'bffcc928a717022b31dd5925af1c7d2ad4413c43',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDuIlSYynvPMIbD\nR7uTalLUkAVir4ClOfQWCA9jA2wb7mXdIxP+duEcZ1P7LOBycI55ZNSI87ZoLpjF\nAU91z6VfE5ev2cfWIE3oNIUawWCXh/FD6j9G50Rax9Nyns3qJd5VQeHa74Z3ubrA\nTXYRQHPRIzR3XOzqCS52c9y6D3T9amTndL4YHf+kCI3YARO3JHIDGE1n+b/8QO+6\nYrqqOSIj3VNzIlwjDqa90GygKruR2fkwhxUIwMQ30U83E2E/vgQZp7w0lZX8E2J2\nDUwT3SU3uMZ0x7GVCaqP+NXke+dTz//o2y/ukbaz0NL2HONWbZTK/cosjdR7zmnx\nbh88EF9HAgMBAAECggEAK6Oq8R0aN0vjRmIc49T2PPHvqrgS0TSfoHH1r+VuqGe1\nzyKghV9vvW7KGxuMPiyWT3TE5hwTb2Aqqt+kmihlW9kRUS6NypW88TK+ubp6YwqM\nki+ZTPsQsbow665ieehaqDEcnKyMbeBhcuA/JMY08zyKXt1upSztkNOGvaobfFzq\nhecP53+/sa7vK6Z5Wv4eGI2T5J5LQuuEPvTGbyDEkhmzhu0PJSxsl1ZTPHgLUXR9\n9O7nWdn608/3y6J5UElZ96c7y/YXh1DWvSKxoouPJtM3+myTFbXZwxhWdnFaCmnq\nRbrYxCCfwJuiPsSG0AaFsdvxpZKbTqHyw0U6/CVksQKBgQD4NlhfA9YJa3JIpLYr\nVjGOC4Chr9uT5PBIAT5oBCzuLkwh2I4+0aRjRSIi1ZMdf9ZfPI0GXLS2fVS4+OJg\nT5Cf8x9SO3B0rT9YOywKEPBA35Azoe6ZI/W39kAaPM1jNG/5pMyU0zN8LpZMhe1x\n4e8qiGwvWsNLRoP4s2yjkywacwKBgQD1mwlnl+73FfUFaWYrk6YA21XA5xfoc8Py\nkstzLaG3gBzRlcqYeXR1GWF0Z9TMNTs/X8XJFPoBlUCy0HP/5hoovnHUyAlNh29C\nP3QbEBKrbHFpvB0lLq5pWcXUiPLX8LzRXkBYifdcuhq0QhWpCMdyvEnTD24tnCz0\nWYDGMTfO3QKBgQDOrCmPC9mnREEHfaZ1lTJz7N3xQ0WY8pKj0e1NnNRwijo4IGHo\nqpSvV7whtyXk9THhYMCoIH8USG1IC2wq93Ubycs1pGpxrGPHKpXz18DEs6IVa+sI\ntml+ANvFPQVjaiEmg/MYpHcFGqFpHEbmgVKsXqV+FJvyTMfMSFHYLc4WQwKBgQCO\nYNoK2+EEDA6GnJtGF8ncJUqJEW6iqrmlHcQjeQiOwA300ckoqwAAAj6kpKyP1SwL\niRG3iBmGYWeoQX99kX8Ir559o5kBAMpWtUIxjhfEmJEGoq6ip3UkTY6JrvpYhI5x\nMRpMOW7Uqm5goQ69dwFoWg7R89gDSM4muNwWCOI5YQKBgAKhkeY8NBzeoQcmGmew\nWKjTeiS83zM3SqbUrqkdLeL+/3F8ecciFTFY9fZcwyY4ybEllPjt3E8LKYsCBZBU\nd6u0WzLDSjs+MrsKNyHZqhGe2as3iTbDysb0+xGOCN7odIwstS3AqfPKUMrr3UTD\nlVnmCc97KJs415tGCIMIaUdM\n-----END PRIVATE KEY-----\n',
    client_email: 'google-translate@analog-sum-449.iam.gserviceaccount.com',
    client_id: '105180273897555476016',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/google-translate%40analog-sum-449.iam.gserviceaccount.com',
};
const translate = new Translate({
    credentials: credentials_,
    projectId: credentials_.project_id,
});
let AppService = class AppService {
    async translateText(target, text) {
        try {
            return (await translate.translate(text !== null && text !== void 0 ? text : 'en', target !== null && target !== void 0 ? target : ''))[0];
        }
        catch (ex) {
            throw new common_1.BadRequestException(ex.message);
        }
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map