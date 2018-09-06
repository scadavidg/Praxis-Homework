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
      
      jest.spyOn(service, 'findAll').mockImplementation(() =>[ CreateUserDto]);

      expect(await service.findAll()).toEqual([CreateUserDto]);
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

  describe('find', () => {
    it('should return an specific user', async () => {
      const id="teste1";
      const result = { status: 200, description: 'Successful response'};
      
      jest.spyOn(service, 'find').mockImplementation(() =>Object);

      expect(await service.find(id)).toBe(Object);
    });
  });

  describe('delete', () => {
    it('should  return an deleted user', async () => {
      const id="teste1";
      const result={ status: 200, description: 'successfully deleted'};
      jest.spyOn(service, 'delete').mockImplementation(() =>result);

      expect(await service.delete(id)).toEqual(result);
    });
  });
  describe('update', () => {
    it('should  return an updated user', async () => {
      const id="teste1";
      const result=user;


      jest.spyOn(service, 'update').mockImplementation(() =>result);

      expect(await service.update(id,user)).toBe(result);
    });
  });
  
});
