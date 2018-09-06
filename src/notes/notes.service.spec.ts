import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';
import { getModelToken } from '@nestjs/mongoose';
import {CreateNoteDto} from './dto/create-note.dto';

describe('NotesService', () => {
  let service: NotesService;
  let note:CreateNoteDto;
  beforeAll(async () => {
    note=new CreateNoteDto();
    service=new NotesService(note);
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService, {provide: getModelToken('Note'), useValue: {} }],
    }).compile();
    service = module.get<NotesService>(NotesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return an create callback', async () => {
     
      const result={ status: 201, description: 'The record has been successfully created.'};

      jest.spyOn(service, 'create').mockImplementation(() =>(result));

      expect(await service.create(note)).toEqual(result);
    });
  });
});
