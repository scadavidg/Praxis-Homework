import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 

@Module({
  imports: [MongooseModule.forRoot('mongodb://praxis:praxis1@ds239682.mlab.com:39682/praxis-homework')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
