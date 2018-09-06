import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { Controller } from '../../node_modules/@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { create } from 'domain';

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
  describe('create', () => {
    it('should return an create callback', async () => {
     
      const result={ status: 201, description: 'The record has been successfully created.'};

      jest.spyOn(usersService, 'create').mockImplementation(() => result);

      expect(await usersController.create(user)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = { status: 200, description: 'Successful response'};
      

      jest.spyOn(usersService, 'findAll').mockImplementation(() => [CreateUserDto] );

      expect(await usersController.findAll()).toEqual([CreateUserDto]);
    });
  });
  
  describe('find', () => {
    it('should return an specific user', async () => {
      const id="teste1";
      const result = { status: 200, description: 'Successful response'};
      
      jest.spyOn(usersService, 'find').mockImplementation(() =>user);

      expect(await usersController.find(id)).toBe(user);
    });
  });

  describe('delete', () => {
    it('should  return an deleted user', async () => {
      const id="teste1";
      const result={ status: 200, description: 'successfully deleted'};


      jest.spyOn(usersService, 'delete').mockImplementation(() =>result);

      expect(await usersController.delete(id)).toEqual(result);
    });
  });
  describe('update', () => {
    it('should  return an updated user', async () => {
      const id="teste1";
      const result={ status: 200, description: 'successfully updated'};


      jest.spyOn(usersService, 'update').mockImplementation(() =>result);

      expect(await usersController.update(id,user)).toEqual(result);
    });
  });

  
});
