import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { Controller } from '../../node_modules/@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

describe('Users Controller', () => {
  let module: TestingModule;
  let usersController: UsersController;
  let  usersService: UsersService;
  let user:CreateUserDto;
  

  beforeAll(async () => {
    user=new CreateUserDto();
    usersService= new UsersService(user);
    usersController=new UsersController(usersService); 
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, {provide: getModelToken('User'), useValue: {} }]
      
    }).compile();
  });
  it('should be defined', () => {
    const controller: UsersController = module.get<UsersController>(UsersController);
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];

      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });
  describe('create', () => {
    it('should return an create callback', async () => {
      const result = ['test'];

      jest.spyOn(usersService, 'create').mockImplementation(() => result);

      expect(await usersController.create(user)).toBe(result);
    });
  });
});
