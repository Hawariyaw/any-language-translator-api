import { AppService } from './app.service';
import { inputDTO } from './dto/input.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    translateText(input: inputDTO): Promise<string>;
}
