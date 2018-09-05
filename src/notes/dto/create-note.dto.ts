import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto{
    @ApiModelProperty()
    readonly text: string;

    @ApiModelProperty()
    readonly id_user: string;
}