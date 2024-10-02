import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';

interface iLocationListDto {
  locations: string[];
}

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): iLocationListDto {
    const locations = this.locationService.list();
    return { locations };
  }
}
