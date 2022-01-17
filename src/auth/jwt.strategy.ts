import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { JWTPayload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(private usuariosService:UsuariosService){
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey: process.env.SECRET_KEY,
    });
  }
    async validate(payload: JWTPayload){
      const usuario = this.usuariosService.getUsuarioByLogin(payload.login);
      if(!usuario){
          throw new UnauthorizedException();
      }
  return usuario;

      
}
}