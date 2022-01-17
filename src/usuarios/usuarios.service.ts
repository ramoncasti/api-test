import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { UsuariosDto } from './usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuarios)
        private readonly repository: Repository<Usuarios>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El usuario no existe');
        return post;
      }
    
      async createOne(dto: UsuariosDto) {
        const usuarios = this.repository.create(dto);
        return await this.repository.save(usuarios);
      }
    
      async editOne(id: number, dto: UsuariosDto) {
        const usuarios = await this.repository.findOne(id);
    
        if (!usuarios) throw new NotFoundException('El usuario no existe');
    
        const editedUsuarios = Object.assign(usuarios, dto);
        return await this.repository.save(editedUsuarios);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

      //Autenticación del Login
      async getUsuarioByLogin(login:string){
        return await this.repository.findOne({login});

      }

}


