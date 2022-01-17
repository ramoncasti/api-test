
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { classToPlain, Exclude } from "class-transformer";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Exclude({ toPlainOnly: true})
    @Column()
    Contrasenia:string;

     toJSON() {
        return classToPlain(this);
      }

      //Función Bcrypt
      @BeforeInsert()
      @BeforeUpdate()
      async hashPassword(){
          if(!this.Contrasenia){
             this.Contrasenia = this.login;
          }
          const salt = await bcrypt.genSalt();
          this.Contrasenia = await bcrypt.hash(this.Contrasenia,salt);
      }

      async validarPassword(Contrasenia:string){
        return await bcrypt.compareSync(Contrasenia,this.Contrasenia);
     }
}