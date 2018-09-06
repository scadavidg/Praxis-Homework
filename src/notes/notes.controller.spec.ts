import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import {NotesService} from './notes.service';
import { getModelToken } from '@nestjs/mongoose';
import {CreateNoteDto} from './dto/create-note.dto';

describe('Notes Controller', () => {
  let module: TestingModule;
  
  let notesController: NotesController;
  let  notesService: NotesService;
  let note:CreateNoteDto;
  
  beforeAll(async () => {
    note=new CreateNoteDto();
    notesService=new NotesService(note);
    notesController=new NotesController(notesService);
    module = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService, {provide: getModelToken('Note'), useValue: {} }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: NotesController = module.get<NotesController>(NotesController);
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return an create callback', async () => {
     
      const result={ status: 201, description: 'The record has been successfully created.'};

      jest.spyOn(notesService, 'create').mockImplementation(() =>result);

      expect(await notesController.create(note)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of notes', async () => {
     
      jest.spyOn(notesService, 'findAll').mockImplementation(() => [CreateNoteDto]);

      expect(await notesController.findAll()).toEqual ([CreateNoteDto]);
    });
  });
  describe('find', () => {
    it('should return an specific  note', async () => {
      const id='';
      jest.spyOn(notesService, 'find').mockImplementation(() => CreateNoteDto);

      expect(await notesController.find(id)).toEqual(CreateNoteDto);
    });
  });
  describe('delete', () => {
    it('should return an deleted note callback', async () => {
      const id='';
      const result={ status: 200, description: 'successfully deleted'};
      jest.spyOn(notesService, 'delete').mockImplementation(() => result);

      expect(await notesController.delete(id)).toEqual(result);
    });
  });
  describe('update', () => {
    it('should return an updated note callback', async () => {
      const id='';
      const result={ status: 200, description: 'successfully updated'};
      jest.spyOn(notesService, 'update').mockImplementation(() => result);

      expect(await notesController.update(id,note)).toEqual(result);
    });
  });
  


});
