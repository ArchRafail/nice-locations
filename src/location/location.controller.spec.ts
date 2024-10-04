import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { MockHelper } from '../common/mock.helper';
import { GenericFactory } from '../common/generic.factory';
import { Location } from './location.entity';
import { LocationMappingService } from './location-mapping.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
      list: {
        resolves: [
          GenericFactory.create<Location>(Location, {
            id: '2e975edb-8a36-41e0-8a45-77fd47339e83',
            name: 'Location 1',
          }),
          GenericFactory.create<Location>(Location, {
            id: 'b05edbe4-2ffe-4ff7-91d8-bd80f07b968e',
            name: 'Location 2',
          }),
        ],
      },
    });
    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return array of Locations', () => {
      expect(locationController.listLocations()).resolves.toMatchObject({
        locations: [
          {
            id: '2e975edb-8a36-41e0-8a45-77fd47339e83',
            name: 'Location 1',
          },
          {
            id: 'b05edbe4-2ffe-4ff7-91d8-bd80f07b968e',
            name: 'Location 2',
          },
        ],
      });
    });
  });
});
