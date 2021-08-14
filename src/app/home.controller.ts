import { Controller, Get } from '@jimizai/decorators';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  home() {
    return this.homeService.getData();
  }
}
