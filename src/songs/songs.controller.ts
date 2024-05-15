import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('songs')
export class SongsController {
    @Post()
    create(){
        return 'create a new songs ';
    }
    @Get()
    findAll(){
        return 'find all songs';
    }
    @Get(":id")
    findOne() {
        return 'fetch song on the based on id';
    }
    @Put(":id")
    update(){
        return 'update song on the base of id ';
    }
    @Delete(":id")
    delete(){
        return 'delete song on the base of id '
    }
  
}
