import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';


describe('LocationController', () => {
  let locationController: LocationController;
  let locationService: LocationService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService],
    }).compile();

    locationService = app.get<LocationService>(LocationService);
    locationController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return list of locations', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: [
          'Location 1',
          'Location 2',
          'Location 3',
        ],
      });
    });
  });
});
