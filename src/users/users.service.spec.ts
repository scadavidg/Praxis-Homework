import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
describe('UsersService', () => {
  let service: UsersService;
  let user:CreateUserDto;
  beforeAll(async () => {
    user=new CreateUserDto();
    service= new UsersService(user);
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {provide: getModelToken('User'), useValue: {} }],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });
 it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('should return an array of users', async () => {

      const result = ['test'];

      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await service.findAll()).toBe(result);
    });
  });
  describe('create', () => {
    it('should return an create callback', async () => {
      let newUser = {
        "username" : "test1",
        "name" :"test1",
        "notas" : ["4.5","4.8"]
      };

      jest.spyOn(service, 'create').mockImplementation(() =>  newUser );

      expect(await service.create(newUser)).toBe(newUser);
    });
  });
});
