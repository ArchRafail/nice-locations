import { LocationService } from './location.service';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock.helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
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
      }
    });

    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
        id: '2e975edb-8a36-41e0-8a45-77fd47339e83',
        name: 'Location 1',
      },
      {
        id: 'b05edbe4-2ffe-4ff7-91d8-bd80f07b968e',
        name: 'Location 2',
      },
    ]);
  });
});
